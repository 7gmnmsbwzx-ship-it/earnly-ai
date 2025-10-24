import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { AdvancedHomepage } from './advanced-homepage'
import { ForAdvertisersPage } from './for-advertisers-page'
import { ForAdvertisersSimple } from './for-advertisers-simple'
import { ForAdvertisersFixed } from './for-advertisers-fixed'
import { ForAIPlatformsPage } from './for-ai-platforms-page'
import { GeoReportPage } from './geo-report-page'
import { SimpleWorkingPage } from './simple-working'
import { aiPlatformsDirectoryPage } from './ai-platforms-directory'
import { getStartedPage } from './get-started-page'

// Temporarily inline matching logic to avoid import issues

type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())
app.use('/static/*', serveStatic({ root: './public' }))
app.use(renderer)

// Utility function to hash passwords
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(password + 'earnly_salt_2024')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Generate short codes for links
const generateShortCode = (): string => {
  return Math.random().toString(36).substring(2, 8)
}

// ============================================================================
// AUTHENTICATION ENDPOINTS
// ============================================================================

app.post('/api/auth/signup', async (c) => {
  const { env } = c
  try {
    const { email, password, name, username } = await c.req.json()
    
    // Check if user exists
    const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first()
    if (existing) {
      return c.json({ error: 'User already exists' }, 400)
    }
    
    const hashedPassword = await hashPassword(password)
    const result = await env.DB.prepare(`
      INSERT INTO users (email, password_hash, name, username) 
      VALUES (?, ?, ?, ?)
    `).bind(email, hashedPassword, name, username).run()
    
    return c.json({ success: true, userId: result.meta.last_row_id })
  } catch (error) {
    return c.json({ error: 'Signup failed' }, 500)
  }
})

app.post('/api/auth/signin', async (c) => {
  const { env } = c
  try {
    const { email, password } = await c.req.json()
    const hashedPassword = await hashPassword(password)
    
    const user = await env.DB.prepare(`
      SELECT id, email, name, username, bio, instagram_handle, follower_count, is_verified 
      FROM users WHERE email = ? AND password_hash = ?
    `).bind(email, hashedPassword).first()
    
    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }
    
    return c.json({ success: true, user })
  } catch (error) {
    return c.json({ error: 'Signin failed' }, 500)
  }
})

// ============================================================================
// CREATOR LINK MANAGEMENT
// ============================================================================

app.post('/api/links', async (c) => {
  const { env } = c
  try {
    const { user_id, title, url } = await c.req.json()
    const short_code = generateShortCode()
    
    const result = await env.DB.prepare(`
      INSERT INTO links (user_id, title, url, short_code) 
      VALUES (?, ?, ?, ?)
    `).bind(user_id, title, url, short_code).run()
    
    return c.json({ 
      success: true, 
      link: { 
        id: result.meta.last_row_id, 
        short_code, 
        title, 
        url 
      } 
    })
  } catch (error) {
    return c.json({ error: 'Failed to create link' }, 500)
  }
})

app.get('/api/links/:userId', async (c) => {
  const { env } = c
  try {
    const userId = c.req.param('userId')
    const links = await env.DB.prepare(`
      SELECT id, title, url, short_code, click_count, is_active, created_at 
      FROM links WHERE user_id = ? ORDER BY created_at DESC
    `).bind(userId).all()
    
    return c.json(links.results)
  } catch (error) {
    return c.json({ error: 'Failed to fetch links' }, 500)
  }
})

// Link redirect with click tracking
app.get('/l/:shortCode', async (c) => {
  const { env } = c
  try {
    const shortCode = c.req.param('shortCode')
    
    // Get link info
    const link = await env.DB.prepare(`
      SELECT id, url FROM links WHERE short_code = ? AND is_active = TRUE
    `).bind(shortCode).first()
    
    if (!link) {
      return c.redirect('/')
    }
    
    // Track click
    const userAgent = c.req.header('User-Agent') || ''
    const referrer = c.req.header('Referer') || ''
    const ip = c.req.header('CF-Connecting-IP') || ''
    
    await env.DB.prepare(`
      INSERT INTO link_clicks (link_id, ip_address, user_agent, referrer) 
      VALUES (?, ?, ?, ?)
    `).bind(link.id, ip, userAgent, referrer).run()
    
    // Update click count
    await env.DB.prepare(`
      UPDATE links SET click_count = click_count + 1 WHERE id = ?
    `).bind(link.id).run()
    
    return c.redirect(link.url)
  } catch (error) {
    return c.redirect('/')
  }
})

// ============================================================================
// AI PLATFORM INTEGRATION ENDPOINTS
// ============================================================================

// Register AI platform
app.post('/api/ai/platforms/register', async (c) => {
  const { env } = c
  try {
    const { name, platform_type, webhook_url, monthly_queries, expected_conversion_rate } = await c.req.json()
    
    // Generate API key for the platform
    const api_key = `ern_${Math.random().toString(36).substring(2, 15)}_${Date.now()}`
    
    const result = await env.DB.prepare(`
      INSERT INTO ai_platforms (name, platform_type, api_key, webhook_url, monthly_queries, conversion_rate) 
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(name, platform_type, api_key, webhook_url, monthly_queries, expected_conversion_rate || 2.5).run()
    
    return c.json({ 
      success: true, 
      platform_id: result.meta.last_row_id,
      api_key: api_key 
    })
  } catch (error) {
    return c.json({ error: 'Failed to register platform' }, 500)
  }
})

// AI Platform Product Query - Core monetization endpoint
app.post('/api/ai/query', async (c) => {
  const { env } = c
  try {
    const apiKey = c.req.header('Authorization')?.replace('Bearer ', '')
    if (!apiKey) {
      return c.json({ error: 'API key required' }, 401)
    }
    
    // Verify AI platform
    const platform = await env.DB.prepare(`
      SELECT id, name, revenue_share FROM ai_platforms WHERE api_key = ?
    `).bind(apiKey).first()
    
    if (!platform) {
      return c.json({ error: 'Invalid API key' }, 401)
    }
    
    const { 
      user_query, 
      conversation_context, 
      user_intent, 
      user_demographics,
      conversation_id 
    } = await c.req.json()
    
    // Log the conversation for analytics
    try {
      await env.DB.prepare(`
        INSERT INTO ai_conversations (platform_id, conversation_id, user_query, conversation_context, detected_intent) 
        VALUES (?, ?, ?, ?, ?)
      `).bind(platform.id, conversation_id || 'default', user_query || '', conversation_context || '', user_intent || 'general').run()
    } catch (dbError) {
      console.log('DB insert error:', dbError)
    }
    
    // Simple demo response with hardcoded product
    const demoRecommendations = [
      {
        recommendation_id: 1,
        product: {
          id: 1,
          title: "ASUS ROG Strix G15 Gaming Laptop",
          description: "High-performance gaming laptop with RTX 4070, AMD Ryzen 9, perfect for competitive esports and streaming",
          price: 1499.99,
          brand: "ASUS ROG", 
          image_url: "https://dlcdnwebimgs.asus.com/gain/laptop.jpg",
          product_url: "https://www.asus.com/laptops/rog-strix-g15/",
          category: "electronics",
          subcategory: "laptops"
        },
        advertiser: {
          name: "ASUS Gaming",
          handle: "asus_gaming"
        },
        matching_score: 92.5,
        relevance_breakdown: {
          relevance_score: 95,
          intent_match: 88,
          context_match: 90,
          audience_match: 94,
          budget_efficiency: 85
        },
        recommendation_reason: "Perfect match for competitive gaming with high-end specs and excellent performance",
        earnly_link: `https://earnly.app/l/demo123`
      }
    ]
    
    return c.json({
      success: true,
      recommendations: demoRecommendations,
      context: {
        platform: platform.name,
        query_processed: true,
        revenue_share: platform.revenue_share || 25.0,
        query_analyzed: user_query,
        intent_detected: user_intent
      }
    })
  } catch (error) {
    console.error('AI Query error:', error)
    return c.json({ error: 'Query processing failed', details: error.message }, 500)
  }
})

// Track recommendation interactions (clicks, views, conversions)
app.post('/api/ai/interaction', async (c) => {
  const { env } = c
  try {
    const { 
      recommendation_id, 
      interaction_type, 
      conversation_id,
      revenue_amount 
    } = await c.req.json()
    
    await env.DB.prepare(`
      INSERT INTO recommendation_interactions (recommendation_id, interaction_type, conversation_id) 
      VALUES (?, ?, ?)
    `).bind(recommendation_id, interaction_type, conversation_id).run()
    
    // If this is a conversion, record revenue
    if (interaction_type === 'conversion' && revenue_amount) {
      const recommendation = await env.DB.prepare(`
        SELECT pr.platform_id, pr.product_id, p.commission_rate 
        FROM product_recommendations pr
        JOIN products p ON pr.product_id = p.id
        WHERE pr.id = ?
      `).bind(recommendation_id).first()
      
      if (recommendation) {
        const commission = revenue_amount * (recommendation.commission_rate / 100)
        
        await env.DB.prepare(`
          INSERT INTO revenue_events (platform_id, product_id, recommendation_id, event_type, revenue_amount, commission_amount) 
          VALUES (?, ?, ?, 'conversion', ?, ?)
        `).bind(recommendation.platform_id, recommendation.product_id, recommendation_id, revenue_amount, commission).run()
      }
    }
    
    return c.json({ success: true })
  } catch (error) {
    return c.json({ error: 'Interaction tracking failed' }, 500)
  }
})

// ============================================================================
// ADVERTISER DASHBOARD ENDPOINTS
// ============================================================================

// Get advertiser products and campaigns
app.get('/api/advertiser/:userId/products', async (c) => {
  const { env } = c
  try {
    const userId = c.req.param('userId')
    
    const products = await env.DB.prepare(`
      SELECT p.*, 
        COALESCE(SUM(re.revenue_amount), 0) as total_revenue,
        COALESCE(SUM(re.commission_amount), 0) as total_commission,
        COUNT(DISTINCT pr.id) as recommendation_count
      FROM products p
      LEFT JOIN product_recommendations pr ON p.id = pr.product_id
      LEFT JOIN revenue_events re ON p.id = re.product_id
      WHERE p.advertiser_id = ?
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `).bind(userId).all()
    
    return c.json(products.results)
  } catch (error) {
    return c.json({ error: 'Failed to fetch products' }, 500)
  }
})

// Create new product for advertising
app.post('/api/advertiser/products', async (c) => {
  const { env } = c
  try {
    const { 
      advertiser_id, 
      title, 
      description, 
      category, 
      subcategory, 
      price, 
      product_url, 
      image_url, 
      brand, 
      keywords, 
      target_audience,
      commission_rate,
      cpc_rate,
      budget_daily,
      budget_total
    } = await c.req.json()
    
    const result = await env.DB.prepare(`
      INSERT INTO products (
        advertiser_id, title, description, category, subcategory, price, 
        product_url, image_url, brand, keywords, target_audience, 
        commission_rate, cpc_rate, budget_daily, budget_total
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      advertiser_id, title, description, category, subcategory, price,
      product_url, image_url, brand, keywords, target_audience,
      commission_rate, cpc_rate, budget_daily, budget_total
    ).run()
    
    return c.json({ 
      success: true, 
      product_id: result.meta.last_row_id 
    })
  } catch (error) {
    return c.json({ error: 'Failed to create product' }, 500)
  }
})

// ============================================================================
// ANALYTICS AND DASHBOARD
// ============================================================================

// Platform analytics
app.get('/api/analytics/platform/:platformId', async (c) => {
  const { env } = c
  try {
    const platformId = c.req.param('platformId')
    
    // Get platform stats
    const stats = await env.DB.prepare(`
      SELECT 
        COUNT(DISTINCT ac.id) as total_conversations,
        COUNT(DISTINCT pr.id) as total_recommendations,
        COUNT(DISTINCT ri.id) as total_interactions,
        COALESCE(SUM(re.revenue_amount), 0) as total_revenue,
        COALESCE(SUM(re.commission_amount), 0) as total_commission
      FROM ai_platforms ap
      LEFT JOIN ai_conversations ac ON ap.id = ac.platform_id
      LEFT JOIN product_recommendations pr ON ap.id = pr.platform_id
      LEFT JOIN recommendation_interactions ri ON pr.id = ri.recommendation_id
      LEFT JOIN revenue_events re ON ap.id = re.platform_id
      WHERE ap.id = ?
    `).bind(platformId).first()
    
    return c.json(stats)
  } catch (error) {
    return c.json({ error: 'Failed to fetch analytics' }, 500)
  }
})

// Revenue dashboard for advertisers
app.get('/api/analytics/advertiser/:userId/revenue', async (c) => {
  const { env } = c
  try {
    const userId = c.req.param('userId')
    
    const revenue = await env.DB.prepare(`
      SELECT 
        DATE(re.created_at) as date,
        SUM(re.revenue_amount) as daily_revenue,
        SUM(re.commission_amount) as daily_commission,
        COUNT(re.id) as conversions
      FROM revenue_events re
      JOIN products p ON re.product_id = p.id
      WHERE p.advertiser_id = ?
        AND re.created_at >= date('now', '-30 days')
      GROUP BY DATE(re.created_at)
      ORDER BY date DESC
    `).bind(userId).all()
    
    return c.json(revenue.results)
  } catch (error) {
    return c.json({ error: 'Failed to fetch revenue analytics' }, 500)
  }
})

// Get all AI platforms (for integration directory)
app.get('/api/ai/platforms', async (c) => {
  const { env } = c
  try {
    const platforms = await env.DB.prepare(`
      SELECT id, name, platform_type, monthly_queries, conversion_rate, revenue_share, is_active, created_at
      FROM ai_platforms 
      WHERE is_active = TRUE
      ORDER BY monthly_queries DESC
    `).all()
    
    return c.json(platforms.results)
  } catch (error) {
    return c.json({ error: 'Failed to fetch platforms' }, 500)
  }
})

// ============================================================================
// ADVANCED ANALYTICS & INSIGHTS APIs
// ============================================================================

// Predictive Analytics Endpoint
app.get('/api/analytics/predictions/:userId', async (c) => {
  const { env } = c
  try {
    const userId = c.req.param('userId')
    
    // Advanced predictive analytics (simplified version)
    const predictions = {
      next_7_days: {
        estimated_revenue: 15420.50,
        estimated_conversions: 128,
        top_performing_categories: ['electronics', 'gaming', 'home'],
        confidence_score: 87.3
      },
      campaign_optimization: {
        recommended_budget_increase: 0.25,
        underperforming_products: 2,
        optimization_opportunities: 5,
        expected_roi_improvement: 23.4
      },
      market_insights: {
        trending_keywords: ['gaming laptop', 'work from home', 'AI tools'],
        seasonal_factors: 'Q4 holiday shopping surge expected',
        competitor_activity: 'moderate',
        user_behavior_shifts: ['mobile-first', 'voice-search', 'ai-assisted']
      }
    }
    
    return c.json(predictions)
  } catch (error) {
    return c.json({ error: 'Failed to generate predictions' }, 500)
  }
})

// Real-time Performance Metrics
app.get('/api/analytics/realtime', async (c) => {
  const { env } = c
  try {
    // Real-time metrics (simulated for demo)
    const metrics = {
      active_conversations: Math.floor(Math.random() * 1000) + 2000,
      conversions_last_hour: Math.floor(Math.random() * 50) + 20,
      revenue_last_hour: (Math.random() * 5000 + 1000).toFixed(2),
      top_products_now: [
        { id: 1, name: 'Gaming Laptop Pro', conversions: 12, revenue: 15588 },
        { id: 2, name: 'Wireless Headphones', conversions: 8, revenue: 2392 },
        { id: 3, name: 'Smart Watch', conversions: 6, revenue: 1794 }
      ],
      geographic_activity: {
        'US': 45.2,
        'EU': 28.7,
        'APAC': 18.9,
        'Others': 7.2
      },
      conversion_rate_trend: [8.2, 8.5, 8.7, 8.4, 8.9, 8.6, 8.8],
      timestamp: new Date().toISOString()
    }
    
    return c.json(metrics)
  } catch (error) {
    return c.json({ error: 'Failed to fetch real-time metrics' }, 500)
  }
})

// Smart Bidding Optimization
app.post('/api/campaigns/optimize', async (c) => {
  const { env } = c
  try {
    const { campaign_id, optimization_type } = await c.req.json()
    
    // Smart bidding optimization logic (simplified)
    const optimization = {
      campaign_id,
      optimization_type,
      current_performance: {
        cpc: 2.45,
        cvr: 8.7,
        roas: 4.2
      },
      recommended_changes: {
        bid_adjustment: '+15%',
        target_cpc: 2.82,
        expected_cvr: 9.8,
        expected_roas: 4.9
      },
      confidence_level: 92.1,
      implementation_date: new Date().toISOString(),
      estimated_impact: {
        revenue_increase: 23.4,
        cost_efficiency: 12.8,
        reach_expansion: 18.6
      }
    }
    
    return c.json({ success: true, optimization })
  } catch (error) {
    return c.json({ error: 'Optimization failed' }, 500)
  }
})

// Advanced AI Query with Enhanced Features
app.post('/api/ai/query/advanced', async (c) => {
  const { env } = c
  try {
    const apiKey = c.req.header('Authorization')?.replace('Bearer ', '')
    if (!apiKey) {
      return c.json({ error: 'API key required' }, 401)
    }
    
    const platform = await env.DB.prepare(`
      SELECT id, name, revenue_share FROM ai_platforms WHERE api_key = ?
    `).bind(apiKey).first()
    
    if (!platform) {
      return c.json({ error: 'Invalid API key' }, 401)
    }
    
    const { 
      user_query, 
      conversation_context, 
      user_intent, 
      user_demographics,
      conversation_id,
      advanced_options 
    } = await c.req.json()
    
    // Enhanced AI matching with advanced features
    const advancedRecommendations = [
      {
        recommendation_id: Math.floor(Math.random() * 1000000),
        product: {
          id: 1,
          title: "ASUS ROG Strix G15 Gaming Laptop",
          description: "High-performance gaming laptop with RTX 4070, AMD Ryzen 9, perfect for competitive esports and streaming",
          price: 1499.99,
          brand: "ASUS ROG", 
          image_url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
          product_url: "https://www.asus.com/laptops/rog-strix-g15/",
          category: "electronics",
          subcategory: "laptops"
        },
        advertiser: {
          name: "ASUS Gaming",
          handle: "asus_gaming",
          verified: true,
          rating: 4.8
        },
        matching_score: 94.2,
        relevance_breakdown: {
          relevance_score: 95,
          intent_match: 92,
          context_match: 90,
          audience_match: 94,
          budget_efficiency: 88
        },
        ai_insights: {
          confidence_level: 'very_high',
          conversion_probability: 0.847,
          expected_revenue: 1499.99,
          competition_level: 'medium',
          seasonal_factor: 1.23
        },
        personalization: {
          user_preference_match: 96.2,
          behavioral_similarity: 89.4,
          purchase_readiness: 'high',
          price_sensitivity: 'medium'
        },
        recommendation_reason: "Perfect match for competitive gaming with high-end specs, excellent performance ratings, and strong user reviews in your demographic",
        earnly_link: `https://earnly.app/l/demo_${Date.now()}`,
        estimated_commission: 127.49,
        conversion_tracking: {
          click_tracking: true,
          view_tracking: true,
          conversion_attribution: '30_day'
        }
      },
      {
        recommendation_id: Math.floor(Math.random() * 1000000),
        product: {
          id: 2,
          title: "Sony WH-1000XM5 Wireless Headphones",
          description: "Industry-leading noise canceling headphones with exceptional sound quality for gaming and music",
          price: 399.99,
          brand: "Sony", 
          image_url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
          product_url: "https://www.sony.com/headphones/wh-1000xm5",
          category: "electronics",
          subcategory: "audio"
        },
        advertiser: {
          name: "Sony Electronics",
          handle: "sony_official",
          verified: true,
          rating: 4.9
        },
        matching_score: 89.1,
        relevance_breakdown: {
          relevance_score: 88,
          intent_match: 91,
          context_match: 87,
          audience_match: 90,
          budget_efficiency: 92
        },
        ai_insights: {
          confidence_level: 'high',
          conversion_probability: 0.723,
          expected_revenue: 399.99,
          competition_level: 'high',
          seasonal_factor: 1.15
        },
        personalization: {
          user_preference_match: 88.7,
          behavioral_similarity: 85.2,
          purchase_readiness: 'medium_high',
          price_sensitivity: 'low'
        },
        recommendation_reason: "Excellent audio quality for streaming and content creation, highly rated in gaming communities with superior noise cancellation",
        earnly_link: `https://earnly.app/l/demo_${Date.now() + 1}`,
        estimated_commission: 59.99,
        conversion_tracking: {
          click_tracking: true,
          view_tracking: true,
          conversion_attribution: '30_day'
        }
      }
    ]
    
    return c.json({
      success: true,
      recommendations: advancedRecommendations,
      advanced_analytics: {
        query_analysis: {
          intent_confidence: 0.926,
          sentiment: 'positive',
          urgency_level: 'medium_high',
          budget_indication: 'premium',
          device_context: 'desktop'
        },
        market_context: {
          demand_level: 'high',
          competition_density: 'medium',
          pricing_trend: 'stable',
          seasonal_multiplier: 1.18
        },
        optimization_suggestions: {
          bid_adjustment: '+12%',
          audience_expansion: 'similar_interests',
          timing_optimization: 'peak_hours',
          creative_variation: 'performance_focused'
        }
      },
      context: {
        platform: platform.name,
        query_processed: true,
        revenue_share: platform.revenue_share || 25.0,
        processing_time_ms: Math.floor(Math.random() * 100) + 50,
        ai_model_version: 'earnly-ai-v3.2'
      }
    })
  } catch (error) {
    console.error('Advanced AI Query error:', error)
    return c.json({ error: 'Advanced query processing failed', details: error.message }, 500)
  }
})

// ============================================================================
// GENERATIVE ENGINE OPTIMIZATION (GEO) API ENDPOINTS
// ============================================================================

// Get AI platform performance data
app.get('/api/geo/performance', async (c) => {
  try {
    // Simulate AI platform optimization performance data
    const geoPerformance = {
      platforms: [
        {
          id: 'chatgpt',
          name: 'ChatGPT',
          score: 94,
          visibility: 89,
          queries: 15420,
          conversions: 2847,
          revenue: 18650,
          trend: 'up',
          change: '+12.4%',
          ranking_improvement: '+23%',
          optimization_opportunities: 5
        },
        {
          id: 'claude',
          name: 'Claude',
          score: 87,
          visibility: 85,
          queries: 8920,
          conversions: 1654,
          revenue: 12340,
          trend: 'up',
          change: '+8.7%',
          ranking_improvement: '+18%',
          optimization_opportunities: 3
        },
        {
          id: 'gemini',
          name: 'Gemini',
          score: 82,
          visibility: 78,
          queries: 12540,
          conversions: 2156,
          revenue: 14890,
          trend: 'up',
          change: '+15.2%',
          ranking_improvement: '+31%',
          optimization_opportunities: 7
        },
        {
          id: 'perplexity',
          name: 'Perplexity',
          score: 79,
          visibility: 74,
          queries: 6780,
          conversions: 987,
          revenue: 8450,
          trend: 'up',
          change: '+6.8%',
          ranking_improvement: '+14%',
          optimization_opportunities: 4
        }
      ],
      summary: {
        overallScore: 87,
        totalQueries: 43660,
        totalConversions: 7644,
        totalRevenue: 54330,
        averageVisibility: 81.5,
        conversionRate: 17.5
      },
      categories: {
        'Product Information': { share: 35, score: 92 },
        'Product Comparisons': { share: 28, score: 87 },
        'How-to Guides': { share: 15, score: 84 },
        'Reviews & Ratings': { share: 12, score: 89 },
        'Pricing Information': { share: 7, score: 91 },
        'Support & Help': { share: 3, score: 86 }
      }
    };
    
    return c.json(geoPerformance);
  } catch (error) {
    return c.json({ error: 'Failed to fetch GEO performance data' }, 500);
  }
});

// Get AI optimization trends data
app.get('/api/geo/trends', async (c) => {
  try {
    const trends = {
      optimization_scores: [
        { week: 'Week 1', chatgpt: 78, claude: 72, gemini: 68, perplexity: 65 },
        { week: 'Week 2', chatgpt: 82, claude: 76, gemini: 73, perplexity: 69 },
        { week: 'Week 3', chatgpt: 87, claude: 80, gemini: 77, perplexity: 72 },
        { week: 'Week 4', chatgpt: 91, claude: 84, gemini: 80, perplexity: 76 },
        { week: 'Week 5', chatgpt: 93, claude: 86, gemini: 82, perplexity: 78 },
        { week: 'Week 6', chatgpt: 94, claude: 87, gemini: 82, perplexity: 79 }
      ],
      query_volume: [
        { date: '2024-10-17', queries: 8420, conversions: 1247, score: 84.2 },
        { date: '2024-10-18', queries: 9120, conversions: 1389, score: 85.7 },
        { date: '2024-10-19', queries: 8940, conversions: 1456, score: 87.1 },
        { date: '2024-10-20', queries: 10240, conversions: 1672, score: 88.3 },
        { date: '2024-10-21', queries: 11580, conversions: 1834, score: 89.6 },
        { date: '2024-10-22', queries: 12340, conversions: 2046, score: 90.8 }
      ],
      peak_performance_hours: [
        { hour: '09:00', score: 92, queries: 1340 },
        { hour: '14:00', score: 89, queries: 1680 },
        { hour: '16:00', score: 94, queries: 1890 },
        { hour: '20:00', score: 87, queries: 1420 }
      ]
    };
    
    return c.json(trends);
  } catch (error) {
    return c.json({ error: 'Failed to fetch AI optimization trends data' }, 500);
  }
});

// Get AI optimization opportunities
app.get('/api/geo/opportunities', async (c) => {
  try {
    const opportunities = [
      {
        platform: 'Google Bard',
        type: 'new_platform',
        untappedPotential: 78,
        estimatedQueries: 25000,
        estimatedRevenue: 45000,
        timeframe: '2 weeks',
        confidence: 92,
        description: 'High potential for optimization on Google Bard with emerging query patterns'
      },
      {
        platform: 'Microsoft Copilot',
        type: 'expansion',
        untappedPotential: 65,
        estimatedQueries: 18000,
        estimatedRevenue: 32000,
        timeframe: '3 weeks',
        confidence: 87,
        description: 'Significant opportunity in Microsoft Copilot for business-related queries'
      },
      {
        platform: 'Anthropic Claude Pro',
        type: 'optimization',
        untappedPotential: 43,
        estimatedQueries: 12000,
        estimatedRevenue: 28000,
        timeframe: '1 week',
        confidence: 95,
        description: 'Quick wins available through keyword optimization in Claude Pro responses'
      },
      {
        platform: 'Perplexity Pro',
        type: 'ranking_improvement',
        untappedPotential: 56,
        estimatedQueries: 15000,
        estimatedRevenue: 34000,
        timeframe: '2 weeks',
        confidence: 89,
        description: 'Significant ranking improvements possible with content optimization'
      }
    ];
    
    return c.json(opportunities);
  } catch (error) {
    return c.json({ error: 'Failed to fetch AI optimization opportunities' }, 500);
  }
});

// Get AI optimization suggestions
app.get('/api/geo/suggestions', async (c) => {
  try {
    const suggestions = [
      {
        type: 'keyword-optimization',
        priority: 'high',
        title: 'Optimize Query Keywords',
        description: 'Your products appear 34% more often when queries include "AI-powered" or "smart" keywords. Consider optimizing product descriptions.',
        impact: {
          visibilityIncrease: 34,
          estimatedRevenue: 12000,
          implementationTime: '2 days'
        },
        confidence: 92,
        affected_platforms: ['ChatGPT', 'Claude', 'Gemini']
      },
      {
        type: 'response-optimization',
        priority: 'high',
        title: 'Improve Response Relevance',
        description: 'AI engines rank your products lower due to generic descriptions. Adding specific use cases could improve rankings by 28%.',
        impact: {
          rankingImprovement: 28,
          estimatedConversions: 450,
          implementationTime: '3 days'
        },
        confidence: 87,
        affected_platforms: ['ChatGPT', 'Perplexity']
      },
      {
        type: 'platform-expansion',
        priority: 'medium',
        title: 'Expand to New AI Platforms',
        description: 'Your products are not optimized for Anthropic Claude Pro and Google Bard. Potential 67% revenue increase.',
        impact: {
          marketExpansion: 67,
          estimatedRevenue: 23000,
          implementationTime: '1 week'
        },
        confidence: 78,
        affected_platforms: ['Claude Pro', 'Bard']
      },
      {
        type: 'timing-optimization',
        priority: 'medium',
        title: 'Optimize Query Timing',
        description: 'AI queries for your products peak at 2-4 PM EST. Adjusting bid timing could increase visibility by 22%.',
        impact: {
          visibilityIncrease: 22,
          costEfficiency: 18,
          implementationTime: 'immediate'
        },
        confidence: 85,
        affected_platforms: ['All Platforms']
      },
      {
        type: 'content-enhancement',
        priority: 'high',
        title: 'Enhance Product Content',
        description: 'AI models prefer detailed, structured content. Adding technical specifications and use cases could boost scores by 31%.',
        impact: {
          scoreImprovement: 31,
          visibilityIncrease: 25,
          implementationTime: '4 days'
        },
        confidence: 89,
        affected_platforms: ['Gemini', 'Claude', 'Perplexity']
      }
    ];
    
    return c.json(suggestions);
  } catch (error) {
    return c.json({ error: 'Failed to fetch AI optimization suggestions' }, 500);
  }
});

// Implement AI optimization suggestion
app.post('/api/geo/implement-suggestion', async (c) => {
  try {
    const { suggestionType, parameters } = await c.req.json();
    
    // Simulate AI optimization implementation logic
    const implementations = {
      'keyword-optimization': {
        status: 'implemented',
        message: 'Keyword optimization completed. AI-powered keywords added to 247 product descriptions.',
        changes: {
          products_updated: 247,
          new_keywords: ['AI-powered', 'smart', 'intelligent', 'automated'],
          expected_visibility_increase: 34,
          platforms_affected: ['ChatGPT', 'Claude', 'Gemini']
        }
      },
      'response-optimization': {
        status: 'implemented',
        message: 'Response relevance improved. Use cases and detailed descriptions added to optimize AI rankings.',
        changes: {
          content_enhanced: 156,
          use_cases_added: 312,
          expected_ranking_improvement: 28,
          platforms_affected: ['ChatGPT', 'Perplexity']
        }
      },
      'platform-expansion': {
        status: 'in-progress',
        message: 'Platform expansion initiated. Optimizing content for Claude Pro and Google Bard.',
        changes: {
          new_platforms: ['Claude Pro', 'Google Bard'],
          products_to_optimize: 189,
          expected_completion: '1 week',
          estimated_revenue_increase: 67
        }
      },
      'timing-optimization': {
        status: 'implemented',
        message: 'Query timing optimization activated. Peak hour bidding strategies implemented.',
        changes: {
          peak_hours: ['14:00-16:00 EST', '20:00-22:00 EST'],
          bid_adjustments: '+25% during peak hours',
          expected_visibility_increase: 22,
          cost_efficiency_improvement: 18
        }
      },
      'content-enhancement': {
        status: 'in-progress',
        message: 'Content enhancement in progress. Adding technical specifications and structured data.',
        changes: {
          products_enhancing: 198,
          specifications_added: 567,
          structured_data_implemented: true,
          expected_score_improvement: 31,
          estimated_completion: '4 days'
        }
      }
    };
    
    const result = implementations[suggestionType] || {
      status: 'error',
      message: 'Optimization suggestion type not recognized'
    };
    
    return c.json(result);
  } catch (error) {
    return c.json({ error: 'Failed to implement AI optimization suggestion' }, 500);
  }
});

// Export GEO (Generative Engine Optimization) report
app.post('/api/geo/export', async (c) => {
  try {
    const { format, dateRange, platforms, includeOptimizations } = await c.req.json();
    
    // Simulate GEO report export process
    const exportData = {
      exportId: `geo_report_${Date.now()}`,
      format: format,
      status: 'processing',
      estimatedTime: format === 'pdf' ? 30 : 45, // seconds
      downloadUrl: null,
      reportData: {
        platforms: platforms || ['chatgpt', 'claude', 'gemini', 'perplexity'],
        dateRange: dateRange || '30_days',
        includeOptimizations: includeOptimizations || true,
        metrics: ['scores', 'queries', 'conversions', 'revenue', 'trends']
      }
    };
    
    // Simulate processing delay
    setTimeout(() => {
      exportData.status = 'completed';
      exportData.downloadUrl = `https://earnly.app/downloads/geo-reports/${exportData.exportId}.${format}`;
    }, exportData.estimatedTime * 1000);
    
    return c.json(exportData);
  } catch (error) {
    return c.json({ error: 'GEO report export failed' }, 500);
  }
});

// Get top AI queries and performance
app.get('/api/geo/queries', async (c) => {
  try {
    const topQueries = {
      queries: [
        {
          query: 'best AI-powered productivity tools',
          rank: 1,
          impressions: 8420,
          conversions: 234,
          score: 94,
          platforms: ['ChatGPT', 'Claude', 'Gemini'],
          trend: 'up',
          change: '+12%'
        },
        {
          query: 'smart home automation devices',
          rank: 2,
          impressions: 6780,
          conversions: 189,
          score: 89,
          platforms: ['ChatGPT', 'Perplexity'],
          trend: 'up',
          change: '+8%'
        },
        {
          query: 'AI writing assistant software',
          rank: 3,
          impressions: 5940,
          conversions: 167,
          score: 87,
          platforms: ['Claude', 'Gemini'],
          trend: 'stable',
          change: '+2%'
        },
        {
          query: 'machine learning course recommendations',
          rank: 4,
          impressions: 4320,
          conversions: 98,
          score: 82,
          platforms: ['ChatGPT', 'Perplexity'],
          trend: 'up',
          change: '+15%'
        },
        {
          query: 'automated marketing tools',
          rank: 5,
          impressions: 3890,
          conversions: 87,
          score: 79,
          platforms: ['Claude', 'Gemini', 'Perplexity'],
          trend: 'down',
          change: '-3%'
        }
      ],
      categories: {
        'Product Information': { percentage: 35, performance: 92 },
        'Product Comparisons': { percentage: 28, performance: 87 },
        'How-to Guides': { percentage: 15, performance: 84 },
        'Reviews & Ratings': { percentage: 12, performance: 89 },
        'Pricing Information': { percentage: 7, performance: 91 },
        'Support & Help': { percentage: 3, performance: 86 }
      },
      summary: {
        totalQueries: 29350,
        averageScore: 86.2,
        totalConversions: 775,
        conversionRate: 2.64
      }
    };
    
    return c.json(topQueries);
  } catch (error) {
    return c.json({ error: 'Failed to fetch AI query data' }, 500);
  }
});

// ============================================================================
// MAIN ROUTES
// ============================================================================

// Advanced Homepage
app.get('/', (c) => {
  const authParam = c.req.query('auth')
  
  if (authParam === 'signin' || authParam === 'signup') {
    // Return dashboard app for authentication
    return c.html(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Earnly AI | Sign ${authParam === 'signin' ? 'In' : 'Up'}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
          <link href="/static/styles.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100 min-h-screen">
          <div id="app">
              <!-- Dashboard app content -->
          </div>
          
          <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          <script src="/static/app.js"></script>
      </body>
      </html>
    `)
  }
  
  // Return advanced homepage
  return c.html(AdvancedHomepage())
})

// Services route removed

// For Advertisers Page - Using Fixed Version with Interactive Brand Demo
app.get('/for-advertisers', (c) => {
  return c.html(ForAdvertisersFixed())
})

// For AI Platforms Page  
app.get('/for-ai-platforms', (c) => {
  return c.html(ForAIPlatformsPage())
})

// GEO Report Page
app.get('/geo-report', (c) => {
  return c.html(GeoReportPage())
})

// AI Platforms Directory Page
app.get('/ai-directory', (c) => {
  return aiPlatformsDirectoryPage(c)
})

// Get Started Page - Superior to AdMesh
app.get('/get-started', (c) => {
  return getStartedPage(c)
})

// Dashboard route for authenticated users
app.get('/dashboard', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Earnly AI | Dashboard</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100 min-h-screen">
        <div id="app">
            <!-- Dashboard content loaded by JavaScript -->
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// Role-Specific Dashboard Routes
// Advertiser Dashboard
app.get('/dashboard/advertiser', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Advertiser Dashboard | Earnly AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        </style>
    </head>
    <body class="bg-gray-900 text-white min-h-screen">
        <!-- Navigation -->
        <nav class="glass fixed top-0 w-full z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="flex items-center">
                            <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                 alt="Earnly Logo" class="h-9 w-auto">
                        </a>
                        <span class="text-blue-400 font-semibold">Advertiser Dashboard</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-white hover:text-blue-400 transition-colors">Home</a>
                        <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                        <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Dashboard Content -->
        <div class="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-white mb-2">Advertiser Dashboard</h1>
                <p class="text-gray-300">Monitor your AI-native advertising campaigns and performance metrics</p>
            </div>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Active Campaigns</h3>
                        <i class="fas fa-bullhorn text-blue-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">24</div>
                    <div class="text-sm text-green-400">+3 this week</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Total Spend</h3>
                        <i class="fas fa-dollar-sign text-green-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">$47,320</div>
                    <div class="text-sm text-green-400">+12% vs last month</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Conversions</h3>
                        <i class="fas fa-shopping-cart text-purple-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">1,847</div>
                    <div class="text-sm text-green-400">+28% vs last month</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">ROAS</h3>
                        <i class="fas fa-chart-line text-orange-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">6.2x</div>
                    <div class="text-sm text-green-400">Above target</div>
                </div>
            </div>

            <!-- Coming Soon Message -->
            <div class="glass p-12 rounded-xl text-center">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-white mb-4">Full Dashboard Coming Soon</h2>
                <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                    We're building a comprehensive advertiser dashboard with real-time campaign management, 
                    detailed analytics, and AI-powered optimization tools.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="requestEarlyAccess()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                        Request Early Access
                    </button>
                    <a href="/for-advertisers" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Back to Advertiser Page
                    </a>
                </div>
            </div>
        </div>

        <script>
            function requestEarlyAccess() {
                alert('Early access request submitted! Our team will contact you within 24 hours to set up your full dashboard access.');
            }
        </script>
    </body>
    </html>
  `)
})

// AI Platform Dashboard  
app.get('/dashboard/platform', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Platform Dashboard | Earnly AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
          .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        </style>
    </head>
    <body class="bg-gray-900 text-white min-h-screen">
        <!-- Navigation -->
        <nav class="glass fixed top-0 w-full z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="flex items-center">
                            <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                 alt="Earnly Logo" class="h-9 w-auto">
                        </a>
                        <span class="text-green-400 font-semibold">Platform Dashboard</span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-white hover:text-blue-400 transition-colors">Home</a>
                        <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                        <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Dashboard Content -->
        <div class="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-white mb-2">AI Platform Dashboard</h1>
                <p class="text-gray-300">Manage your AI platform monetization and integration settings</p>
            </div>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">API Calls</h3>
                        <i class="fas fa-code text-green-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">2.4M</div>
                    <div class="text-sm text-green-400">+15% this week</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Revenue Earned</h3>
                        <i class="fas fa-coins text-yellow-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">$18,590</div>
                    <div class="text-sm text-green-400">+22% vs last month</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Active Users</h3>
                        <i class="fas fa-users text-blue-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">47,320</div>
                    <div class="text-sm text-green-400">+8% vs last month</div>
                </div>

                <div class="glass p-6 rounded-xl">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-medium text-gray-300">Fill Rate</h3>
                        <i class="fas fa-percentage text-purple-400"></i>
                    </div>
                    <div class="text-3xl font-bold text-white mb-2">94.2%</div>
                    <div class="text-sm text-green-400">Excellent</div>
                </div>
            </div>

            <!-- Coming Soon Message -->
            <div class="glass p-12 rounded-xl text-center">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-cogs text-white text-2xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-white mb-4">Full Platform Dashboard Coming Soon</h2>
                <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                    We're building a comprehensive platform dashboard with integration management, 
                    revenue analytics, and SDK configuration tools.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="requestIntegrationSupport()" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
                        Request Integration Support
                    </button>
                    <a href="/for-ai-platforms" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Back to Platform Page
                    </a>
                </div>
            </div>
        </div>

        <script>
            function requestIntegrationSupport() {
                alert('Integration support request submitted! Our technical team will contact you within 2 hours to assist with your platform integration.');
            }
        </script>
    </body>
    </html>
  `)
})

export default app