#!/usr/bin/env node

// AI API Test Script for Earnly Platform
// Tests the AI-driven product matching and recommendation engine

const BASE_URL = 'http://localhost:3000';

async function testAIQuery() {
  console.log('🤖 Testing AI Query API...\n');
  
  try {
    const response = await fetch(`${BASE_URL}/api/ai/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test_api_key'
      },
      body: JSON.stringify({
        user_query: "I'm looking for a high-performance gaming laptop for competitive esports",
        conversation_context: "User is building a gaming setup and needs professional-grade equipment",
        user_intent: "shopping",
        user_demographics: {
          age_range: "18-25",
          interests: ["gaming", "technology", "esports", "streaming"],
          location: "US"
        },
        conversation_id: `test_${Date.now()}`
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ AI Query API Response:');
      console.log(JSON.stringify(data, null, 2));
      
      if (data.recommendations && data.recommendations.length > 0) {
        console.log('\n🎯 Product Recommendations:');
        data.recommendations.forEach((rec, i) => {
          console.log(`\n${i + 1}. ${rec.product.title}`);
          console.log(`   Brand: ${rec.product.brand}`);
          console.log(`   Price: $${rec.product.price}`);
          console.log(`   Match Score: ${rec.matching_score}`);
          console.log(`   Reason: ${rec.recommendation_reason}`);
          console.log(`   Earnly Link: ${rec.earnly_link}`);
        });
      }
    } else {
      console.log('❌ API Error:', response.status, response.statusText);
      const errorData = await response.text();
      console.log('Error Details:', errorData);
    }
  } catch (error) {
    console.error('❌ Request failed:', error.message);
  }
}

async function testPlatformRegistration() {
  console.log('\n🔧 Testing AI Platform Registration...\n');
  
  try {
    const response = await fetch(`${BASE_URL}/api/ai/platforms/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "ChatGPT Integration",
        platform_type: "assistant",
        webhook_url: "https://api.openai.com/webhooks/earnly",
        monthly_queries: 50000,
        expected_conversion_rate: 3.5
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Platform Registration Response:');
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Registration Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Registration failed:', error.message);
  }
}

async function testAdvertiserAPI() {
  console.log('\n📦 Testing Advertiser Product Creation...\n');
  
  try {
    const response = await fetch(`${BASE_URL}/api/advertiser/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        advertiser_id: 1,
        title: "ASUS ROG Strix G15 Gaming Laptop",
        description: "High-performance gaming laptop with RTX 4070, AMD Ryzen 9, 32GB RAM, perfect for competitive gaming and streaming",
        category: "electronics",
        subcategory: "laptops",
        price: 1499.99,
        product_url: "https://www.asus.com/laptops/for-gaming/rog-strix/rog-strix-g15-2024/",
        image_url: "https://dlcdnwebimgs.asus.com/gain/C22E154B-1247-4037-8E5D-FE3F105B1032/w1000/h732",
        brand: "ASUS ROG",
        keywords: "gaming, laptop, RTX 4070, AMD Ryzen, esports, streaming, RGB",
        target_audience: "gamers, content creators, esports enthusiasts",
        commission_rate: 8.5,
        cpc_rate: 2.50,
        budget_daily: 200,
        budget_total: 5000
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log('✅ Product Creation Response:');
      console.log(JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Product Creation Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('❌ Product creation failed:', error.message);
  }
}

async function runAllTests() {
  console.log('🚀 Earnly AI-Native Monetization Platform - API Tests\n');
  console.log('==================================================\n');
  
  // Wait a bit for service to be ready
  console.log('⏳ Waiting for service to be ready...\n');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Run all tests
  await testPlatformRegistration();
  await testAdvertiserAPI();
  await testAIQuery();
  
  console.log('\n✨ Test suite completed!\n');
  console.log('🌐 Access the platform: https://3000-iym6gdsyrgvh7nix90lk8-c07dda5e.sandbox.novita.ai');
  console.log('📖 Features:');
  console.log('   • AI-driven product recommendations');
  console.log('   • Contextual advertising in conversations');
  console.log('   • Real-time analytics and revenue tracking');
  console.log('   • Creator economy integration');
  console.log('   • Advanced matching algorithms');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests().catch(console.error);
}

export { testAIQuery, testPlatformRegistration, testAdvertiserAPI };