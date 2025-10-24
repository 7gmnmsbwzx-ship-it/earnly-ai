-- Seed data for AI-native monetization platform

-- Sample AI platforms that integrate with Earnly
INSERT OR IGNORE INTO ai_platforms (name, platform_type, api_key, webhook_url, monthly_queries, conversion_rate, revenue_share) VALUES 
  ('ChatBot Pro', 'chatbot', 'cbp_ak_12345678901234567890', 'https://api.chatbotpro.com/webhooks/earnly', 50000, 2.5, 25.0),
  ('VoiceAssist AI', 'voice', 'va_ak_98765432109876543210', 'https://voiceassist.ai/webhooks/earnly', 75000, 3.2, 30.0),
  ('SearchMind', 'search', 'sm_ak_11111111122222222222', 'https://searchmind.io/api/earnly-webhook', 120000, 4.1, 20.0),
  ('ConversaBot', 'assistant', 'conv_ak_33333333344444444444', 'https://conversabot.com/hooks/earnly', 35000, 2.8, 35.0),
  ('ShopTalk AI', 'chatbot', 'st_ak_55555555566666666666', 'https://shoptalk.ai/integration/earnly', 28000, 5.2, 28.0);

-- Sample advertisers (enhance existing users)
UPDATE users SET 
  bio = 'E-commerce brand specializing in sustainable tech accessories',
  instagram_handle = 'ecotechbrand',
  follower_count = 0,
  is_verified = TRUE
WHERE email = 'test@example.com';

-- Sample product categories and offers
INSERT OR IGNORE INTO products (advertiser_id, title, description, category, subcategory, price, product_url, image_url, brand, keywords, target_audience, conversion_value, commission_rate, cpa_rate, cpc_rate, budget_daily, budget_total, quality_score) VALUES 
  (1, 'EcoPhone Wireless Charger', 'Sustainable bamboo wireless charging pad with fast-charge technology', 'Electronics', 'Phone Accessories', 49.99, 'https://ecotechstore.com/wireless-charger', 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400', 'EcoTech', '["wireless charger", "bamboo", "sustainable", "phone charger", "eco-friendly", "fast charging"]', '{"age_range": "25-45", "interests": ["technology", "sustainability", "gadgets"], "income_level": "middle-to-high"}', 49.99, 15.0, 7.50, 0.75, 100.00, 2000.00, 8.5),
  
  (1, 'Solar Power Bank 20000mAh', 'High-capacity solar power bank with dual USB ports and LED flashlight', 'Electronics', 'Power Banks', 79.99, 'https://ecotechstore.com/solar-powerbank', 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400', 'EcoTech', '["power bank", "solar", "portable charger", "outdoor", "emergency power", "USB charging"]', '{"age_range": "20-50", "interests": ["outdoor", "travel", "technology", "sustainability"], "lifestyle": "active"}', 79.99, 18.0, 12.00, 1.20, 150.00, 3000.00, 9.2),
  
  (1, 'Smart Plant Monitor', 'IoT device that monitors soil moisture, light, and temperature for optimal plant care', 'Home & Garden', 'Smart Devices', 34.99, 'https://ecotechstore.com/plant-monitor', 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400', 'EcoTech', '["plant monitor", "smart garden", "IoT", "plant care", "gardening", "sensors"]', '{"age_range": "25-55", "interests": ["gardening", "smart home", "plants", "technology"], "housing": "homeowner"}', 34.99, 20.0, 5.25, 0.52, 75.00, 1500.00, 7.8),
  
  (1, 'Recycled Laptop Stand', 'Adjustable laptop stand made from 100% recycled aluminum with cooling design', 'Office', 'Laptop Accessories', 69.99, 'https://ecotechstore.com/laptop-stand', 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400', 'EcoTech', '["laptop stand", "ergonomic", "recycled aluminum", "adjustable", "cooling", "workspace"]', '{"age_range": "22-45", "interests": ["remote work", "ergonomics", "sustainability"], "occupation": "knowledge_worker"}', 69.99, 16.0, 10.50, 1.05, 120.00, 2500.00, 8.8);

-- Sample campaigns
INSERT OR IGNORE INTO campaigns (advertiser_id, name, objective, budget, daily_budget, bid_strategy, target_cpa, target_keywords, target_demographics, target_contexts, start_date, end_date, status) VALUES 
  (1, 'Sustainable Tech Q4 Campaign', 'conversions', 5000.00, 50.00, 'manual_cpa', 8.00, '["wireless charging", "sustainable tech", "eco-friendly gadgets", "green technology"]', '{"age_range": "25-45", "interests": ["sustainability", "technology"], "income": "middle-high"}', '["product_search", "comparison", "eco_shopping", "tech_advice"]', '2024-10-01', '2024-12-31', 'active'),
  
  (1, 'Holiday Gift Guide 2024', 'traffic', 3000.00, 40.00, 'automatic', NULL, '["holiday gifts", "tech gifts", "sustainable gifts", "Christmas shopping"]', '{"age_range": "30-55", "shopping_intent": "gift_giving"}', '["gift_recommendations", "holiday_shopping", "product_discovery"]', '2024-11-15', '2024-12-25', 'active');

-- Link campaigns to products
INSERT OR IGNORE INTO campaign_products (campaign_id, product_id, bid_adjustment, priority, status) VALUES 
  (1, 1, 10.0, 1, 'active'), -- Wireless charger - high priority for sustainability campaign
  (1, 2, 15.0, 1, 'active'), -- Solar power bank - highest priority for sustainability
  (1, 3, 5.0, 2, 'active'),  -- Plant monitor - medium priority
  (1, 4, 8.0, 1, 'active'),  -- Laptop stand - high priority
  (2, 1, 0.0, 2, 'active'),  -- All products in holiday campaign
  (2, 2, 5.0, 1, 'active'),
  (2, 3, -5.0, 3, 'active'),
  (2, 4, 3.0, 2, 'active');

-- Sample AI conversations demonstrating various intents
INSERT OR IGNORE INTO ai_conversations (platform_id, conversation_id, user_query, intent_category, context_data, location, language) VALUES 
  (1, 'conv_001', 'I need a wireless charger for my iPhone that is environmentally friendly', 'shopping', '{"previous_queries": ["eco-friendly tech", "sustainable accessories"], "user_context": "environmentally_conscious_shopper"}', 'San Francisco, CA', 'en'),
  
  (2, 'conv_002', 'What are the best power banks for camping and hiking?', 'research', '{"conversation_flow": ["outdoor gear discussion", "power solutions"], "user_intent": "outdoor_enthusiast"}', 'Denver, CO', 'en'),
  
  (3, 'conv_003', 'Compare wireless chargers under $50 with good reviews', 'comparison', '{"comparison_criteria": ["price", "reviews", "features"], "budget": 50}', 'Austin, TX', 'en'),
  
  (4, 'conv_004', 'My plants keep dying, is there a tech solution to help me?', 'help', '{"problem": "plant_care", "user_experience": "beginner_gardener"}', 'Seattle, WA', 'en'),
  
  (5, 'conv_005', 'I work from home and need ergonomic accessories for my setup', 'shopping', '{"context": "remote_work", "needs": ["ergonomics", "productivity"], "workspace": "home_office"}', 'New York, NY', 'en');

-- Sample product recommendations based on conversations
INSERT OR IGNORE INTO product_recommendations (conversation_id, product_id, recommendation_score, position, recommendation_reason, context_match) VALUES 
  (1, 1, 95.5, 1, 'Perfect match for eco-friendly wireless charging need', '{"keyword_match": ["wireless charger", "environmentally friendly"], "category_match": true, "price_range_match": true}'),
  
  (2, 2, 92.8, 1, 'Solar power bank ideal for outdoor activities and camping', '{"keyword_match": ["power bank", "camping", "hiking"], "feature_match": ["solar", "outdoor"], "durability": "high"}'),
  
  (3, 1, 88.2, 1, 'High-rated wireless charger within budget range', '{"price_match": true, "review_score": "high", "budget_fit": true}'),
  (3, 4, 76.5, 2, 'Alternative ergonomic accessory within price range', '{"price_match": true, "category_related": true}'),
  
  (4, 3, 94.1, 1, 'Smart plant monitor solves plant care challenges with technology', '{"problem_solution_match": true, "keyword_match": ["plants", "tech solution"], "user_level": "beginner_friendly"}'),
  
  (5, 4, 91.7, 1, 'Ergonomic laptop stand perfect for remote work setup', '{"keyword_match": ["ergonomic", "work from home"], "category_match": true, "use_case_match": true}');

-- Sample interactions with recommendations
INSERT OR IGNORE INTO recommendation_interactions (recommendation_id, interaction_type, value, metadata, created_at) VALUES 
  (1, 'view', 0, '{"view_duration": 15, "scroll_depth": 0.8}', '2024-10-15 10:30:00'),
  (1, 'click', 0, '{"click_position": "primary_cta", "time_to_click": 8}', '2024-10-15 10:30:08'),
  (1, 'purchase', 49.99, '{"purchase_id": "ord_12345", "quantity": 1}', '2024-10-15 11:45:00'),
  
  (2, 'view', 0, '{"view_duration": 22, "scroll_depth": 1.0}', '2024-10-16 14:15:00'),
  (2, 'click', 0, '{"click_position": "product_link", "time_to_click": 12}', '2024-10-16 14:15:12'),
  (2, 'save', 0, '{"saved_to": "wishlist", "note": "for_next_camping_trip"}', '2024-10-16 14:16:00'),
  
  (3, 'view', 0, '{"view_duration": 8, "scroll_depth": 0.4}', '2024-10-17 09:20:00'),
  
  (4, 'view', 0, '{"view_duration": 18, "scroll_depth": 0.9}', '2024-10-17 09:21:00'),
  (4, 'click', 0, '{"click_position": "compare_button", "time_to_click": 15}', '2024-10-17 09:21:15'),
  
  (5, 'view', 0, '{"view_duration": 25, "scroll_depth": 1.0}', '2024-10-18 16:45:00'),
  (5, 'click', 0, '{"click_position": "primary_cta", "time_to_click": 20}', '2024-10-18 16:45:20'),
  (5, 'purchase', 34.99, '{"purchase_id": "ord_67890", "quantity": 1}', '2024-10-18 17:30:00'),
  
  (6, 'view', 0, '{"view_duration": 30, "scroll_depth": 1.0}', '2024-10-19 13:10:00'),
  (6, 'click', 0, '{"click_position": "product_link", "time_to_click": 25}', '2024-10-19 13:10:25'),
  (6, 'purchase', 69.99, '{"purchase_id": "ord_11111", "quantity": 1}', '2024-10-19 14:20:00');

-- Sample revenue events
INSERT OR IGNORE INTO revenue_events (interaction_id, event_type, amount, advertiser_cost, platform_share, creator_share, earnly_share, processed) VALUES 
  (2, 'click', 0.75, 0.75, 0.19, 0.00, 0.56, TRUE),
  (3, 'conversion', 7.50, 7.50, 1.88, 0.00, 5.62, TRUE),
  (5, 'click', 1.20, 1.20, 0.36, 0.00, 0.84, TRUE),
  (8, 'click', 1.05, 1.05, 0.21, 0.00, 0.84, TRUE),
  (10, 'click', 0.52, 0.52, 0.18, 0.00, 0.34, TRUE),
  (11, 'conversion', 5.25, 5.25, 1.84, 0.00, 3.41, TRUE),
  (13, 'click', 1.05, 1.05, 0.37, 0.00, 0.68, TRUE),
  (14, 'conversion', 10.50, 10.50, 3.68, 0.00, 6.82, TRUE);

-- Sample intent patterns for AI matching
INSERT OR IGNORE INTO intent_patterns (pattern, intent_type, confidence_score, product_categories) VALUES 
  ('(need|want|looking for).*(wireless charg|phone charg)', 'shopping', 0.85, '["Electronics", "Phone Accessories"]'),
  ('(best|top|recommend).*(power bank|portable charg)', 'research', 0.82, '["Electronics", "Power Banks"]'),
  ('compare.*(wireless charg|phone accessories)', 'comparison', 0.88, '["Electronics", "Phone Accessories"]'),
  ('(plant|garden).*(dying|care|help|monitor)', 'help', 0.79, '["Home & Garden", "Smart Devices"]'),
  ('(ergonomic|work from home|home office|setup)', 'shopping', 0.81, '["Office", "Laptop Accessories"]'),
  ('(eco-friendly|sustainable|green|environment)', 'shopping', 0.77, '["Electronics", "Home & Garden", "Office"]'),
  ('(camping|hiking|outdoor|travel).*(power|charg)', 'shopping', 0.84, '["Electronics", "Power Banks"]'),
  ('(gift|present|holiday).*(tech|gadget)', 'shopping', 0.76, '["Electronics"]');

-- Sample daily analytics data
INSERT OR IGNORE INTO analytics_daily (date, platform_id, product_id, campaign_id, queries, recommendations, clicks, conversions, revenue, ctr, cvr, avg_cpc, avg_cpa) VALUES 
  ('2024-10-15', 1, 1, 1, 150, 45, 12, 3, 149.97, 26.67, 25.00, 0.75, 7.50),
  ('2024-10-15', 2, 2, 1, 200, 38, 8, 1, 79.99, 21.05, 12.50, 1.20, 12.00),
  ('2024-10-15', 3, 1, 2, 180, 52, 15, 2, 99.98, 28.85, 13.33, 0.75, 5.00),
  ('2024-10-16', 1, 3, 1, 120, 28, 6, 2, 69.98, 21.43, 33.33, 0.52, 2.62),
  ('2024-10-16', 4, 4, 1, 95, 22, 5, 1, 69.99, 22.73, 20.00, 1.05, 10.50),
  ('2024-10-17', 5, 1, 2, 85, 18, 4, 1, 49.99, 22.22, 25.00, 0.75, 7.50),
  ('2024-10-17', 3, 2, 1, 210, 42, 9, 0, 0.00, 21.43, 0.00, 1.20, 0.00),
  ('2024-10-18', 1, 3, 1, 140, 35, 8, 3, 104.97, 22.86, 37.50, 0.52, 1.75),
  ('2024-10-18', 2, 4, 2, 110, 25, 6, 1, 69.99, 24.00, 16.67, 1.05, 10.50),
  ('2024-10-19', 4, 1, 1, 160, 40, 10, 2, 99.98, 25.00, 20.00, 0.75, 3.75);

-- Sample user preferences for personalization
INSERT OR IGNORE INTO user_preferences (user_identifier, platform_id, preferences, interaction_history, purchase_history, lifetime_value) VALUES 
  ('user_hash_abc123', 1, '{"interests": ["sustainability", "technology"], "price_sensitivity": "medium", "brand_preferences": ["eco-friendly"]}', '{"recent_searches": ["wireless charger", "eco tech"], "engagement_score": 0.75}', '{"total_purchases": 2, "avg_order_value": 59.99, "categories": ["Electronics"]}', 119.98),
  
  ('user_hash_def456', 2, '{"interests": ["outdoor", "travel"], "price_sensitivity": "low", "lifestyle": ["active", "adventurous"]}', '{"recent_searches": ["camping gear", "portable power"], "engagement_score": 0.68}', '{"total_purchases": 1, "avg_order_value": 79.99, "categories": ["Electronics"]}', 79.99),
  
  ('user_hash_ghi789', 3, '{"interests": ["home improvement", "smart home"], "price_sensitivity": "high", "shopping_behavior": "research_heavy"}', '{"recent_searches": ["smart home devices", "plant care"], "engagement_score": 0.82}', '{"total_purchases": 3, "avg_order_value": 51.65, "categories": ["Home & Garden", "Electronics"]}', 154.95),
  
  ('user_hash_jkl012', 4, '{"interests": ["productivity", "work"], "price_sensitivity": "medium", "occupation": "remote_worker"}', '{"recent_searches": ["ergonomic accessories", "home office"], "engagement_score": 0.71}', '{"total_purchases": 1, "avg_order_value": 69.99, "categories": ["Office"]}', 69.99);