// Advanced AI-Driven Product Matching Engine for Earnly
// This module handles contextual product recommendations based on AI conversations

export interface ConversationContext {
  user_query: string
  conversation_context?: string
  user_intent: string
  user_demographics?: {
    age_range?: string
    interests?: string[]
    location?: string
  }
  conversation_history?: string[]
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  subcategory: string
  price: number
  brand: string
  keywords: string
  target_audience: string
  quality_score: number
  cpc_rate: number
  commission_rate: number
  budget_daily: number
  spent_today: number
  conversion_value: number
}

export interface MatchScore {
  product: Product
  relevance_score: number
  intent_match: number
  context_match: number
  audience_match: number
  budget_efficiency: number
  final_score: number
}

export class ProductMatchingEngine {
  // Intent keywords mapping for better matching
  private static intentKeywords = {
    'shopping': ['buy', 'purchase', 'shop', 'order', 'get', 'need', 'want', 'looking for'],
    'comparison': ['compare', 'vs', 'versus', 'better', 'best', 'difference', 'which', 'choose'],
    'research': ['review', 'opinion', 'experience', 'recommend', 'quality', 'rating'],
    'price': ['cheap', 'affordable', 'expensive', 'cost', 'price', 'budget', 'deal', 'discount'],
    'technical': ['specs', 'features', 'technical', 'how', 'works', 'compatibility'],
    'lifestyle': ['fashion', 'style', 'trend', 'lifestyle', 'aesthetic', 'look']
  }

  // Category relevance weights
  private static categoryWeights = {
    'electronics': 1.2,
    'fashion': 1.1,
    'health': 1.3,
    'home': 1.0,
    'beauty': 1.1,
    'sports': 1.0,
    'books': 0.9,
    'food': 1.0
  }

  /**
   * Main matching function - finds best products for given conversation context
   */
  static async findBestMatches(
    context: ConversationContext, 
    products: Product[], 
    maxResults: number = 3
  ): Promise<MatchScore[]> {
    const matches: MatchScore[] = []

    for (const product of products) {
      const score = this.calculateMatchScore(context, product)
      matches.push({
        product,
        ...score
      })
    }

    // Sort by final score (highest first) and return top results
    return matches
      .sort((a, b) => b.final_score - a.final_score)
      .slice(0, maxResults)
  }

  /**
   * Calculate comprehensive match score for a product
   */
  private static calculateMatchScore(
    context: ConversationContext, 
    product: Product
  ): Omit<MatchScore, 'product'> {
    const relevanceScore = this.calculateRelevanceScore(context.user_query, product)
    const intentMatch = this.calculateIntentMatch(context.user_intent, context.user_query, product)
    const contextMatch = this.calculateContextMatch(context.conversation_context || '', product)
    const audienceMatch = this.calculateAudienceMatch(context.user_demographics, product)
    const budgetEfficiency = this.calculateBudgetEfficiency(product)

    // Weighted final score calculation
    const finalScore = (
      relevanceScore * 0.3 +
      intentMatch * 0.25 +
      contextMatch * 0.2 +
      audienceMatch * 0.15 +
      budgetEfficiency * 0.1
    ) * (product.quality_score / 100) // Quality score multiplier

    return {
      relevance_score: Math.round(relevanceScore * 100) / 100,
      intent_match: Math.round(intentMatch * 100) / 100,
      context_match: Math.round(contextMatch * 100) / 100,
      audience_match: Math.round(audienceMatch * 100) / 100,
      budget_efficiency: Math.round(budgetEfficiency * 100) / 100,
      final_score: Math.round(finalScore * 100) / 100
    }
  }

  /**
   * Calculate how relevant the product is to the user query
   */
  private static calculateRelevanceScore(query: string, product: Product): number {
    const queryLower = query.toLowerCase()
    const productText = `${product.title} ${product.description} ${product.keywords}`.toLowerCase()
    
    let score = 0
    const queryWords = queryLower.split(/\s+/)
    
    // Direct keyword matches
    for (const word of queryWords) {
      if (word.length < 3) continue // Skip short words
      
      if (product.title.toLowerCase().includes(word)) score += 2.0
      if (product.description.toLowerCase().includes(word)) score += 1.5
      if (product.keywords.toLowerCase().includes(word)) score += 1.0
      if (product.brand.toLowerCase().includes(word)) score += 1.5
    }
    
    // Category relevance
    const categoryWeight = this.categoryWeights[product.category.toLowerCase()] || 1.0
    score *= categoryWeight
    
    // Normalize to 0-100 range
    return Math.min(score / queryWords.length * 20, 100)
  }

  /**
   * Calculate how well the product matches user intent
   */
  private static calculateIntentMatch(intent: string, query: string, product: Product): number {
    let score = 0
    const intentLower = intent.toLowerCase()
    const queryLower = query.toLowerCase()
    
    // Check if intent keywords appear in product context
    for (const [intentType, keywords] of Object.entries(this.intentKeywords)) {
      if (intentLower.includes(intentType)) {
        for (const keyword of keywords) {
          if (queryLower.includes(keyword)) {
            score += 15
          }
        }
      }
    }
    
    // Shopping intent gets higher scores for products with good conversion rates
    if (intentLower.includes('shop') || intentLower.includes('buy')) {
      score += product.conversion_value / 10
    }
    
    // Comparison intent favors products with detailed descriptions
    if (intentLower.includes('compar') || queryLower.includes('vs')) {
      score += product.description.length / 20
    }
    
    return Math.min(score, 100)
  }

  /**
   * Calculate contextual relevance from conversation history
   */
  private static calculateContextMatch(conversationContext: string, product: Product): number {
    if (!conversationContext || conversationContext.length === 0) {
      return 50 // Neutral score if no context
    }
    
    let score = 0
    const contextLower = conversationContext.toLowerCase()
    const productTerms = [
      product.category, 
      product.subcategory, 
      product.brand,
      ...product.keywords.split(',')
    ]
    
    // Check for mentions of product-related terms in context
    for (const term of productTerms) {
      if (contextLower.includes(term.toLowerCase().trim())) {
        score += 20
      }
    }
    
    // Look for related conversation topics
    const contextWords = contextLower.split(/\s+/)
    const productWords = `${product.title} ${product.description}`.toLowerCase().split(/\s+/)
    
    let commonWords = 0
    for (const contextWord of contextWords) {
      if (contextWord.length > 3 && productWords.includes(contextWord)) {
        commonWords++
      }
    }
    
    score += (commonWords / Math.max(contextWords.length, 1)) * 30
    
    return Math.min(score, 100)
  }

  /**
   * Calculate audience demographic matching
   */
  private static calculateAudienceMatch(
    userDemo: ConversationContext['user_demographics'], 
    product: Product
  ): number {
    if (!userDemo) {
      return 75 // Neutral score if no demographic data
    }
    
    let score = 75 // Start with neutral
    const targetAudience = product.target_audience.toLowerCase()
    
    // Age range matching
    if (userDemo.age_range) {
      const ageRange = userDemo.age_range.toLowerCase()
      if (targetAudience.includes(ageRange) || 
          targetAudience.includes('all ages') ||
          targetAudience.includes('general')) {
        score += 15
      }
    }
    
    // Interest matching
    if (userDemo.interests && userDemo.interests.length > 0) {
      let interestMatches = 0
      for (const interest of userDemo.interests) {
        if (targetAudience.includes(interest.toLowerCase()) ||
            product.keywords.toLowerCase().includes(interest.toLowerCase())) {
          interestMatches++
        }
      }
      score += (interestMatches / userDemo.interests.length) * 20
    }
    
    return Math.min(score, 100)
  }

  /**
   * Calculate budget efficiency score
   */
  private static calculateBudgetEfficiency(product: Product): number {
    const remainingBudget = product.budget_daily - product.spent_today
    const budgetUtilization = product.spent_today / product.budget_daily
    
    let score = 0
    
    // Favor products with remaining budget
    if (remainingBudget > 0) {
      score += 40
      
      // Bonus for products with good budget remaining
      if (budgetUtilization < 0.5) score += 20
      if (budgetUtilization < 0.2) score += 20
    }
    
    // Factor in CPC rate (higher CPC = more valuable but lower score for efficiency)
    const cpcScore = Math.max(0, 20 - (product.cpc_rate / 10))
    score += cpcScore
    
    // Commission rate bonus
    score += Math.min(product.commission_rate / 2, 20)
    
    return Math.min(score, 100)
  }

  /**
   * Generate natural language explanation for why products were recommended
   */
  static generateRecommendationReasoning(
    context: ConversationContext,
    matches: MatchScore[]
  ): string[] {
    const reasons: string[] = []
    
    for (const match of matches) {
      let reason = `"${match.product.title}" was recommended because `
      const factors: string[] = []
      
      if (match.relevance_score > 70) {
        factors.push("it closely matches your search terms")
      }
      
      if (match.intent_match > 80) {
        factors.push("it aligns perfectly with your shopping intent")
      }
      
      if (match.context_match > 75) {
        factors.push("it relates to your conversation context")
      }
      
      if (match.audience_match > 85) {
        factors.push("it's targeted for users like you")
      }
      
      if (match.budget_efficiency > 80) {
        factors.push("it offers great value")
      }
      
      if (factors.length === 0) {
        factors.push("it's a popular choice in this category")
      }
      
      reason += factors.join(", ") + "."
      reasons.push(reason)
    }
    
    return reasons
  }

  /**
   * Track and learn from recommendation performance
   */
  static async updateMatchingModel(
    recommendationId: number,
    interactionType: string,
    conversionValue?: number
  ): Promise<void> {
    // This would update ML model weights based on user interactions
    // For now, we'll log the interaction for future model training
    
    const performance = {
      recommendation_id: recommendationId,
      interaction_type: interactionType,
      conversion_value: conversionValue,
      timestamp: new Date().toISOString()
    }
    
    console.log('Recommendation Performance:', performance)
    
    // TODO: Implement model weight updates based on performance data
    // This could adjust the weights used in calculateMatchScore based on
    // which factors lead to better conversion rates
  }
}

// Export utility functions for use in the main application
export default ProductMatchingEngine