-- Enhanced schema for AI-native monetization platform
-- Building on existing schema with AI conversation commerce

-- AI Agents and Platforms table
CREATE TABLE IF NOT EXISTS ai_platforms (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  platform_type TEXT NOT NULL, -- 'chatbot', 'assistant', 'search', 'voice'
  api_key TEXT UNIQUE NOT NULL,
  webhook_url TEXT,
  status TEXT DEFAULT 'active', -- 'active', 'inactive', 'suspended'
  monthly_queries INTEGER DEFAULT 0,
  conversion_rate DECIMAL(5,2) DEFAULT 0,
  revenue_share DECIMAL(5,2) DEFAULT 30, -- Platform's revenue share %
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Products/Offers for AI discovery
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  advertiser_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  price DECIMAL(10,2),
  currency TEXT DEFAULT 'USD',
  product_url TEXT NOT NULL,
  image_url TEXT,
  brand TEXT NOT NULL,
  keywords TEXT, -- JSON array of keywords for matching
  target_audience TEXT, -- JSON object with demographic info
  conversion_value DECIMAL(10,2), -- Expected conversion value
  commission_rate DECIMAL(5,2) DEFAULT 10,
  cpa_rate DECIMAL(10,2), -- Cost per acquisition
  cpc_rate DECIMAL(5,2), -- Cost per click
  budget_daily DECIMAL(10,2),
  budget_total DECIMAL(10,2),
  spend_total DECIMAL(10,2) DEFAULT 0,
  status TEXT DEFAULT 'active', -- 'active', 'paused', 'rejected', 'pending'
  quality_score DECIMAL(3,1) DEFAULT 0, -- 0-10 quality rating
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (advertiser_id) REFERENCES users(id) ON DELETE CASCADE
);

-- AI Conversations and Context
CREATE TABLE IF NOT EXISTS ai_conversations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  platform_id INTEGER NOT NULL,
  conversation_id TEXT NOT NULL, -- External conversation ID
  user_query TEXT NOT NULL,
  intent_category TEXT, -- 'shopping', 'research', 'comparison', 'help'
  context_data TEXT, -- JSON with conversation context
  location TEXT,
  language TEXT DEFAULT 'en',
  user_profile TEXT, -- JSON with user preferences/history
  session_duration INTEGER, -- in seconds
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (platform_id) REFERENCES ai_platforms(id) ON DELETE CASCADE
);

-- Product Recommendations in Conversations
CREATE TABLE IF NOT EXISTS product_recommendations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  conversation_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  recommendation_score DECIMAL(5,2), -- 0-100 relevance score
  position INTEGER, -- Position in recommendation list
  recommendation_reason TEXT, -- Why this product was recommended
  context_match TEXT, -- JSON with matching criteria
  shown_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES ai_conversations(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- User Interactions with Recommendations
CREATE TABLE IF NOT EXISTS recommendation_interactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recommendation_id INTEGER NOT NULL,
  interaction_type TEXT NOT NULL, -- 'view', 'click', 'save', 'share', 'purchase'
  value DECIMAL(10,2), -- Monetary value of interaction
  metadata TEXT, -- JSON with additional interaction data
  user_agent TEXT,
  ip_address TEXT,
  referrer TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (recommendation_id) REFERENCES product_recommendations(id) ON DELETE CASCADE
);

-- Revenue Tracking
CREATE TABLE IF NOT EXISTS revenue_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  interaction_id INTEGER NOT NULL,
  event_type TEXT NOT NULL, -- 'click', 'conversion', 'commission'
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  advertiser_cost DECIMAL(10,2), -- What advertiser pays
  platform_share DECIMAL(10,2), -- Platform's cut
  creator_share DECIMAL(10,2), -- Creator's cut (if applicable)
  earnly_share DECIMAL(10,2), -- Earnly's revenue
  processed BOOLEAN DEFAULT FALSE,
  processed_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (interaction_id) REFERENCES recommendation_interactions(id) ON DELETE CASCADE
);

-- Campaign Management
CREATE TABLE IF NOT EXISTS campaigns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  advertiser_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  objective TEXT NOT NULL, -- 'awareness', 'traffic', 'conversions', 'sales'
  budget DECIMAL(10,2) NOT NULL,
  daily_budget DECIMAL(10,2),
  bid_strategy TEXT DEFAULT 'automatic', -- 'automatic', 'manual_cpc', 'manual_cpa'
  target_cpa DECIMAL(10,2),
  target_keywords TEXT, -- JSON array
  target_demographics TEXT, -- JSON object
  target_contexts TEXT, -- JSON array of conversation contexts
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active',
  spend DECIMAL(10,2) DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (advertiser_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Campaign-Product Relationships
CREATE TABLE IF NOT EXISTS campaign_products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  campaign_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  bid_adjustment DECIMAL(5,2) DEFAULT 0, -- Percentage bid adjustment
  priority INTEGER DEFAULT 1, -- Product priority within campaign
  status TEXT DEFAULT 'active',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Intent Detection and Matching
CREATE TABLE IF NOT EXISTS intent_patterns (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pattern TEXT NOT NULL, -- Regex or keyword pattern
  intent_type TEXT NOT NULL,
  confidence_score DECIMAL(3,2), -- 0-1 confidence level
  product_categories TEXT, -- JSON array of relevant categories
  created_by TEXT DEFAULT 'system',
  is_active BOOLEAN DEFAULT TRUE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Performance Analytics
CREATE TABLE IF NOT EXISTS analytics_daily (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date DATE NOT NULL,
  platform_id INTEGER,
  product_id INTEGER,
  campaign_id INTEGER,
  queries INTEGER DEFAULT 0,
  recommendations INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  revenue DECIMAL(10,2) DEFAULT 0,
  ctr DECIMAL(5,2) DEFAULT 0, -- Click-through rate
  cvr DECIMAL(5,2) DEFAULT 0, -- Conversion rate
  avg_cpc DECIMAL(5,2) DEFAULT 0,
  avg_cpa DECIMAL(10,2) DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (platform_id) REFERENCES ai_platforms(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
);

-- API Rate Limiting and Usage
CREATE TABLE IF NOT EXISTS api_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  platform_id INTEGER NOT NULL,
  endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  date_hour DATETIME NOT NULL, -- Hourly tracking
  response_time_avg DECIMAL(8,3), -- Average response time in ms
  error_count INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (platform_id) REFERENCES ai_platforms(id) ON DELETE CASCADE
);

-- User Preferences and Personalization
CREATE TABLE IF NOT EXISTS user_preferences (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_identifier TEXT NOT NULL, -- Hashed user ID from AI platform
  platform_id INTEGER NOT NULL,
  preferences TEXT, -- JSON with user preferences
  interaction_history TEXT, -- JSON with past interactions
  purchase_history TEXT, -- JSON with purchase data
  lifetime_value DECIMAL(10,2) DEFAULT 0,
  last_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (platform_id) REFERENCES ai_platforms(id) ON DELETE CASCADE
);

-- Create comprehensive indexes for performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category, status);
CREATE INDEX IF NOT EXISTS idx_products_advertiser ON products(advertiser_id, status);
CREATE INDEX IF NOT EXISTS idx_products_keywords ON products(keywords);
CREATE INDEX IF NOT EXISTS idx_conversations_platform ON ai_conversations(platform_id, created_at);
CREATE INDEX IF NOT EXISTS idx_conversations_intent ON ai_conversations(intent_category, created_at);
CREATE INDEX IF NOT EXISTS idx_recommendations_conversation ON product_recommendations(conversation_id, recommendation_score);
CREATE INDEX IF NOT EXISTS idx_recommendations_product ON product_recommendations(product_id, shown_at);
CREATE INDEX IF NOT EXISTS idx_interactions_recommendation ON recommendation_interactions(recommendation_id, interaction_type);
CREATE INDEX IF NOT EXISTS idx_interactions_created ON recommendation_interactions(created_at, interaction_type);
CREATE INDEX IF NOT EXISTS idx_revenue_events_interaction ON revenue_events(interaction_id, event_type);
CREATE INDEX IF NOT EXISTS idx_revenue_events_date ON revenue_events(created_at, processed);
CREATE INDEX IF NOT EXISTS idx_campaigns_advertiser ON campaigns(advertiser_id, status);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics_daily(date, platform_id);
CREATE INDEX IF NOT EXISTS idx_api_usage_platform ON api_usage(platform_id, date_hour);
CREATE INDEX IF NOT EXISTS idx_user_prefs_platform ON user_preferences(platform_id, user_identifier);