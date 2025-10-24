// Enterprise-Grade Homepage Component for Earnly AI Platform
// Surpasses useadmesh.com with advanced interactive features

export const AdvancedHomepage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Earnly AI | Enterprise AI-Native Monetization Platform</title>
        <meta name="description" content="Transform AI conversations into revenue. The world's most advanced platform for contextual advertising in AI ecosystems with real-time optimization and predictive analytics.">
        
        <!-- Preload Critical Assets -->
        <link rel="preload" href="https://cdn.tailwindcss.com" as="script">
        <link rel="preload" href="/static/advanced-styles.css" as="style">
        
        <!-- Styling -->
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <!-- Analytics & Performance -->
        <script>
          // Performance monitoring
          window.performance.mark('page-start');
        </script>
        
        <style>
          /* Tailwind Config */
          @tailwind utilities;
          
          /* Custom animations */
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .animate-fade-in-up { animation: fadeInUp 0.6s ease-out; }
          .animate-scale-in { animation: scaleIn 0.5s ease-out; }
          
          /* Interactive elements */
          .hover-lift { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
          .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        </style>
    </head>
    <body class="bg-gray-900 text-white overflow-x-hidden">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center">
                            <div class="flex items-center justify-center py-2 pr-2">
                                <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                     alt="Earnly Logo" 
                                     class="h-9 w-auto"
                                     style="background: transparent;">
                            </div>
                        </div>
                        
                        <div class="hidden md:flex space-x-8 ml-10">
                            <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                            <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                            <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="hidden lg:flex items-center space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                                <span class="text-green-400">Live</span>
                            </div>
                            <span class="text-gray-400">|</span>
                            <span class="text-white counter" id="live-conversations">2,847</span>
                            <span class="text-gray-400">conversations</span>
                        </div>
                        
                        <a href="/for-advertisers" class="btn-interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center animated-bg pt-16">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <!-- Floating Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="floating absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating absolute bottom-20 left-1/4 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-fade-in-up">
                        <div class="mb-6">
                            <div class="inline-flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 mb-4">
                                <span class="w-2 h-2 bg-green-400 rounded-full"></span>
                                <span class="text-sm text-white">New: Real-time AI Optimization</span>
                            </div>
                        </div>
                        
                        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Connect
                            <span class="text-gradient text-glow">Advertisers & AI Platforms</span>
                            Seamlessly
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl">
                            Advanced AI-native monetization platform connecting advertisers with AI platforms through 
                            <span class="text-blue-400 font-semibold">contextual recommendations</span> and 
                            <span class="text-green-400 font-semibold">real-time optimization</span>.
                        </p>
                        
                        <!-- Trust Indicators -->
                        <div class="flex items-center space-x-8 text-sm text-gray-300 mb-8">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-shield-alt text-green-400"></i>
                                <span>SOC 2 Compliant</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-lock text-blue-400"></i>
                                <span>GDPR Ready</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-chart-line text-purple-400"></i>
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Interactive Dashboard Preview -->
                    <div class="animate-scale-in">
                        <div class="glass-card p-6 hover-lift">
                            <div class="mb-4 flex items-center justify-between">
                                <h3 class="text-lg font-semibold text-gray-800">Live Performance Dashboard</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                    <span class="text-sm text-green-600 font-medium">Real-time</span>
                                </div>
                            </div>
                            
                            <!-- Live Metrics -->
                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 text-white">
                                    <div class="text-2xl font-bold counter" id="revenue-counter">$47,892</div>
                                    <div class="text-sm opacity-90">Revenue Today</div>
                                    <div class="text-xs opacity-75 mt-1">
                                        <i class="fas fa-arrow-up mr-1"></i>+23.4%
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-4 text-white">
                                    <div class="text-2xl font-bold counter" id="conversion-rate">8.7%</div>
                                    <div class="text-sm opacity-90">Conversion Rate</div>
                                    <div class="text-xs opacity-75 mt-1">
                                        <i class="fas fa-arrow-up mr-1"></i>+1.2%
                                    </div>
                                </div>
                            </div>
                            
                            <!-- AI Recommendations Preview -->
                            <div class="bg-gray-50 rounded-xl p-4">
                                <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                                    <i class="fas fa-brain text-purple-600 mr-2"></i>
                                    AI Recommendations
                                </h4>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover-lift">
                                        <div class="flex items-center space-x-3">
                                            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=40&h=40&fit=crop" 
                                                 class="w-10 h-10 rounded-lg object-cover" alt="Product">
                                            <div>
                                                <div class="font-medium text-gray-900">Gaming Laptop Pro</div>
                                                <div class="text-sm text-gray-600">Match Score: 94.2%</div>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-lg font-bold text-green-600">$1,299</div>
                                            <div class="text-xs text-gray-500">12% commission</div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover-lift">
                                        <div class="flex items-center space-x-3">
                                            <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=40&h=40&fit=crop" 
                                                 class="w-10 h-10 rounded-lg object-cover" alt="Product">
                                            <div>
                                                <div class="font-medium text-gray-900">Wireless Headphones</div>
                                                <div class="text-sm text-gray-600">Match Score: 89.1%</div>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-lg font-bold text-green-600">$299</div>
                                            <div class="text-xs text-gray-500">15% commission</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Real-time Activity Feed -->
                            <div class="mt-4 bg-gray-50 rounded-xl p-4">
                                <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                                    <i class="fas fa-pulse text-green-600 mr-2"></i>
                                    Live Activity
                                </h4>
                                <div id="activity-feed" class="space-y-2 max-h-32 overflow-hidden">
                                    <!-- Dynamic activity items will be added here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- AI Platforms Directory -->
        <section class="py-16 bg-gray-50" id="ai-platforms-directory">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">AI Platforms Directory</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Discover and integrate with leading AI platforms. Advanced search, real-time integration preview, and enterprise-grade analytics.
                    </p>
                    
                    <!-- Enhanced Search Bar -->
                    <div class="max-w-2xl mx-auto mb-8">
                        <div class="relative">
                            <input type="text" 
                                   id="platform-search-main"
                                   placeholder="Search platforms by name, category, or integration type..."
                                   class="w-full px-6 py-4 pl-12 pr-16 rounded-2xl border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg">
                            <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                            <button onclick="searchPlatformsMain()" 
                                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Platform Statistics -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div class="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div class="text-3xl font-bold text-purple-600 counter" data-target="247">0</div>
                        <div class="text-gray-600 mt-2">AI Platforms</div>
                    </div>
                    <div class="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div class="text-3xl font-bold text-blue-600 counter" data-target="89">0</div>
                        <div class="text-gray-600 mt-2">Integration Types</div>
                    </div>
                    <div class="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div class="text-3xl font-bold text-green-600 counter" data-target="156">0</div>
                        <div class="text-gray-600 mt-2">Active Integrations</div>
                    </div>
                    <div class="text-center bg-white rounded-xl p-6 shadow-lg">
                        <div class="text-3xl font-bold text-orange-600">$2.4M</div>
                        <div class="text-gray-600 mt-2">Revenue Generated</div>
                    </div>
                </div>

                <!-- Platform Filters -->
                <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
                    <button onclick="filterPlatformsMain('all')" class="filter-tag-main active px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:scale-105 transition-all">
                        All Platforms
                    </button>
                    <button onclick="filterPlatformsMain('chatbots')" class="filter-tag-main px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-all">
                        <i class="fas fa-comments mr-2"></i>Chatbots
                    </button>
                    <button onclick="filterPlatformsMain('assistants')" class="filter-tag-main px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-all">
                        <i class="fas fa-robot mr-2"></i>AI Assistants
                    </button>
                    <button onclick="filterPlatformsMain('analytics')" class="filter-tag-main px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-all">
                        <i class="fas fa-chart-line mr-2"></i>Analytics
                    </button>
                    <button onclick="filterPlatformsMain('content')" class="filter-tag-main px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-all">
                        <i class="fas fa-pen mr-2"></i>Content Gen
                    </button>
                    <button onclick="filterPlatformsMain('voice')" class="filter-tag-main px-6 py-3 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 transition-all">
                        <i class="fas fa-microphone mr-2"></i>Voice AI
                    </button>
                </div>

                <!-- Featured Platforms Grid -->
                <div id="platforms-grid-main" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <!-- Platform Card 1 - ChatGPT Style -->
                    <div class="platform-card glass-card p-6 hover-lift" data-category="chatbots assistants">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-comments text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">ChatGPT-Style Platform</h3>
                                    <p class="text-sm text-gray-600">Conversational AI</p>
                                </div>
                            </div>
                            <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Active</span>
                        </div>
                        
                        <p class="text-gray-600 mb-4">Advanced conversational AI with contextual product recommendations and seamless monetization.</p>
                        
                        <div class="grid grid-cols-3 gap-2 text-sm mb-4">
                            <div class="text-center">
                                <div class="font-bold text-purple-600">8.7%</div>
                                <div class="text-gray-500">CVR</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-blue-600">$247</div>
                                <div class="text-gray-500">Revenue</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-green-600">2.1s</div>
                                <div class="text-gray-500">Setup</div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">SDK</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">REST API</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Webhooks</span>
                            </div>
                        </div>
                        
                        <button onclick="integrateNowMain('chatgpt-style')" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Integrate Now
                        </button>
                    </div>

                    <!-- Platform Card 2 - Voice AI -->
                    <div class="platform-card glass-card p-6 hover-lift" data-category="voice assistants">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-microphone text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">Voice AI Platform</h3>
                                    <p class="text-sm text-gray-600">Smart Voice Assistant</p>
                                </div>
                            </div>
                            <span class="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">Beta</span>
                        </div>
                        
                        <p class="text-gray-600 mb-4">Voice-activated AI with natural language processing and audio-based product recommendations.</p>
                        
                        <div class="grid grid-cols-3 gap-2 text-sm mb-4">
                            <div class="text-center">
                                <div class="font-bold text-purple-600">12.3%</div>
                                <div class="text-gray-500">CVR</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-blue-600">$389</div>
                                <div class="text-gray-500">Revenue</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-green-600">3.2s</div>
                                <div class="text-gray-500">Setup</div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Voice SDK</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Audio API</span>
                                <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">NLP</span>
                            </div>
                        </div>
                        
                        <button onclick="integrateNowMain('voice-ai')" class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Join Beta
                        </button>
                    </div>

                    <!-- Platform Card 3 - Analytics AI -->
                    <div class="platform-card glass-card p-6 hover-lift" data-category="analytics assistants">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-chart-line text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">Analytics AI Platform</h3>
                                    <p class="text-sm text-gray-600">Business Intelligence</p>
                                </div>
                            </div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Enterprise</span>
                        </div>
                        
                        <p class="text-gray-600 mb-4">AI-powered business analytics with intelligent tool and service recommendations based on insights.</p>
                        
                        <div class="grid grid-cols-3 gap-2 text-sm mb-4">
                            <div class="text-center">
                                <div class="font-bold text-purple-600">15.2%</div>
                                <div class="text-gray-500">CVR</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-blue-600">$892</div>
                                <div class="text-gray-500">Revenue</div>
                            </div>
                            <div class="text-center">
                                <div class="font-bold text-green-600">1.8s</div>
                                <div class="text-gray-500">Setup</div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">GraphQL</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">REST API</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Real-time</span>
                            </div>
                        </div>
                        
                        <button onclick="integrateNowMain('analytics-ai')" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Get Started
                        </button>
                    </div>
                </div>

                <!-- View All Platforms Button -->
                <div class="text-center">
                    <button onclick="showAllPlatforms()" class="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 hover:text-white transition-all">
                        View All 247 Platforms
                        <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-20 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Trusted by Enterprise Brands Worldwide</h2>
                    <p class="text-xl text-gray-300">Real results from real companies using Earnly AI</p>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-gradient counter" data-target="500">0</div>
                        <div class="text-gray-400 mt-2">Enterprise Customers</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-gradient counter" data-target="2.8">0</div>
                        <div class="text-gray-400 mt-2">Billion AI Conversations</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-gradient counter" data-target="47">0</div>
                        <div class="text-gray-400 mt-2">Average CVR Increase (%)</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-gradient counter" data-target="15.2">0</div>
                        <div class="text-gray-400 mt-2">Average ROAS</div>
                    </div>
                </div>
                
                <!-- Company Logos -->
                <div class="flex justify-center items-center space-x-12 opacity-60">
                    <div class="text-2xl font-bold">Microsoft</div>
                    <div class="text-2xl font-bold">Shopify</div>
                    <div class="text-2xl font-bold">Adobe</div>
                    <div class="text-2xl font-bold">Stripe</div>
                    <div class="text-2xl font-bold">Salesforce</div>
                </div>
            </div>
        </section>

        <!-- Integration Section -->
        <section class="py-20 bg-gray-800" id="integration">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        How Earnly Works
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Connecting advertisers with AI platforms through intelligent, contextual recommendations 
                        that benefit users, platforms, and brands alike.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Step 1: Connect -->
                    <div class="glass-card p-8 hover-lift ai-glow text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <i class="fas fa-handshake text-white text-2xl"></i>
                        </div>
                        <div class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">Step 1</div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
                        <p class="text-gray-600 mb-6">
                            Advertisers list products and set targeting preferences. AI platforms integrate our SDK 
                            or API in minutes to start serving contextual recommendations.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Product Catalog Setup</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>SDK Integration</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Targeting Configuration</li>
                        </ul>
                    </div>
                    
                    <!-- Step 2: Match -->
                    <div class="glass-card p-8 hover-lift ai-glow text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <i class="fas fa-brain text-white text-2xl"></i>
                        </div>
                        <div class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">Step 2</div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Match</h3>
                        <p class="text-gray-600 mb-6">
                            Our AI analyzes conversation context and user intent to match the most relevant 
                            products in real-time, ensuring high conversion rates and user satisfaction.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Intent Detection</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Contextual Analysis</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Real-time Scoring</li>
                        </ul>
                    </div>
                    
                    <!-- Step 3: Earn -->
                    <div class="glass-card p-8 hover-lift ai-glow text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                            <i class="fas fa-dollar-sign text-white text-2xl"></i>
                        </div>
                        <div class="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block">Step 3</div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Earn</h3>
                        <p class="text-gray-600 mb-6">
                            Advertisers pay for conversions while AI platforms earn revenue share. 
                            Transparent tracking, real-time analytics, and automated payments for all parties.
                        </p>
                        <ul class="space-y-2 text-sm text-gray-700">
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Revenue Tracking</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Automated Payments</li>
                            <li class="flex items-center justify-center"><i class="fas fa-check text-green-500 mr-2"></i>Performance Analytics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Enhanced Interactive Demo Section -->
        <section class="py-20 bg-gray-900 relative overflow-hidden" id="demo">
            <!-- Animated background -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
            <div class="absolute inset-0">
                <div class="demo-particles absolute inset-0"></div>
            </div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center space-x-2 bg-purple-600 bg-opacity-20 rounded-full px-6 py-3 mb-6">
                        <i class="fas fa-play-circle text-purple-400 text-xl"></i>
                        <span class="text-purple-400 font-semibold text-lg">LIVE DEMO</span>
                    </div>
                    <h2 class="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        See Earnly AI in Action
                    </h2>
                    <p class="text-2xl text-gray-400 max-w-3xl mx-auto">Experience the power of AI-native advertising with real-time analytics and intelligent recommendations</p>
                </div>
                
                <!-- Main Demo Interface -->
                <div class="grid lg:grid-cols-3 gap-8 mb-12">
                    <!-- Query Input Panel -->
                    <div class="lg:col-span-2">
                        <div class="glass-card-demo p-8 h-full">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-2xl font-bold text-gray-900">AI Query Processor</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-sm text-gray-600 font-medium">Live Processing</span>
                                </div>
                            </div>
                            
                            <!-- Demo Query Examples -->
                            <div class="mb-6">
                                <p class="text-gray-600 mb-3 font-medium">Try these example queries:</p>
                                <div class="flex flex-wrap gap-2">
                                    <button onclick="setDemoQuery('best wireless headphones for workouts')" 
                                            class="demo-query-btn px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                                        Workout headphones
                                    </button>
                                    <button onclick="setDemoQuery('gaming laptop under $2000')" 
                                            class="demo-query-btn px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                                        Gaming laptop
                                    </button>
                                    <button onclick="setDemoQuery('sustainable fashion brands')" 
                                            class="demo-query-btn px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                                        Eco fashion
                                    </button>
                                    <button onclick="setDemoQuery('smart home security system')" 
                                            class="demo-query-btn px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
                                        Smart security
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Enhanced Query Input -->
                            <div class="relative mb-6">
                                <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
                                    <i class="fas fa-search text-gray-400 text-xl"></i>
                                </div>
                                <input type="text" 
                                       id="enhanced-demo-query" 
                                       placeholder="Enter your query to see AI recommendations..."
                                       class="w-full pl-12 pr-20 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg font-medium bg-white/90 backdrop-blur-sm transition-all text-gray-900">
                                <button onclick="runEnhancedDemo()" 
                                        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
                                    Analyze
                                    <i class="fas fa-magic ml-2"></i>
                                </button>
                            </div>
                            
                            <!-- AI Processing Visualization -->
                            <div id="ai-processing" class="hidden bg-gray-50 rounded-xl p-6 mb-6">
                                <div class="flex items-center mb-4">
                                    <div class="ai-brain-animation mr-4"></div>
                                    <div>
                                        <h4 class="font-bold text-gray-900">AI Processing Pipeline</h4>
                                        <p class="text-gray-600 text-sm">Analyzing context and matching products...</p>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div class="processing-step flex items-center">
                                        <div class="step-icon w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-brain text-white text-sm"></i>
                                        </div>
                                        <div class="flex-1">
                                            <div class="processing-bar bg-gray-200 h-2 rounded-full overflow-hidden">
                                                <div class="processing-fill bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <span class="ml-3 text-sm font-medium text-gray-700">Intent Analysis</span>
                                    </div>
                                    <div class="processing-step flex items-center">
                                        <div class="step-icon w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-search text-white text-sm"></i>
                                        </div>
                                        <div class="flex-1">
                                            <div class="processing-bar bg-gray-200 h-2 rounded-full overflow-hidden">
                                                <div class="processing-fill bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <span class="ml-3 text-sm font-medium text-gray-700">Product Matching</span>
                                    </div>
                                    <div class="processing-step flex items-center">
                                        <div class="step-icon w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                            <i class="fas fa-chart-line text-white text-sm"></i>
                                        </div>
                                        <div class="flex-1">
                                            <div class="processing-bar bg-gray-200 h-2 rounded-full overflow-hidden">
                                                <div class="processing-fill bg-gradient-to-r from-green-500 to-purple-500 h-full rounded-full"></div>
                                            </div>
                                        </div>
                                        <span class="ml-3 text-sm font-medium text-gray-700">Scoring & Ranking</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Enhanced Results Display -->
                            <div id="enhanced-demo-results" class="hidden">
                                <div class="flex items-center justify-between mb-4">
                                    <h4 class="font-bold text-gray-900 text-xl">AI-Matched Products</h4>
                                    <div class="flex items-center space-x-2 text-sm text-gray-600">
                                        <i class="fas fa-clock text-green-500"></i>
                                        <span>Processed in <span id="processing-time">0.24</span>s</span>
                                    </div>
                                </div>
                                <div id="enhanced-demo-products" class="space-y-4">
                                    <!-- Enhanced results will be populated here -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Real-time Analytics Panel -->
                    <div class="lg:col-span-1">
                        <div class="glass-card-demo p-6 h-full">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-xl font-bold text-gray-900">Live Analytics</h3>
                                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                            
                            <!-- Performance Metrics -->
                            <div class="space-y-6">
                                <div class="metric-card bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-sm font-medium opacity-90">Match Accuracy</span>
                                        <i class="fas fa-bullseye"></i>
                                    </div>
                                    <div class="text-3xl font-bold" id="accuracy-metric">94.7%</div>
                                    <div class="text-xs opacity-75">+<span id="accuracy-change">2.3</span>% from last hour</div>
                                </div>
                                
                                <div class="metric-card bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-sm font-medium opacity-90">Conversion Rate</span>
                                        <i class="fas fa-chart-line"></i>
                                    </div>
                                    <div class="text-3xl font-bold" id="conversion-metric">12.4%</div>
                                    <div class="text-xs opacity-75">+<span id="conversion-change">5.8</span>% vs traditional ads</div>
                                </div>
                                
                                <div class="metric-card bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-sm font-medium opacity-90">Revenue Impact</span>
                                        <i class="fas fa-dollar-sign"></i>
                                    </div>
                                    <div class="text-3xl font-bold" id="revenue-metric">$2.4M</div>
                                    <div class="text-xs opacity-75">This month (+<span id="revenue-growth">47</span>%)</div>
                                </div>
                            </div>
                            
                            <!-- Mini Chart -->
                            <div class="mt-6">
                                <h4 class="font-semibold text-gray-800 mb-3">Performance Trend</h4>
                                <div class="chart-container">
                                    <canvas id="mini-performance-chart" width="250" height="120"></canvas>
                                </div>
                            </div>
                            
                            <!-- Active Campaigns -->
                            <div class="mt-6">
                                <h4 class="font-semibold text-gray-800 mb-3 flex items-center">
                                    <i class="fas fa-pulse text-green-500 mr-2"></i>
                                    Active Campaigns
                                </h4>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="text-gray-600">Electronics</span>
                                        <span class="font-medium text-green-600">+24%</span>
                                    </div>
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="text-gray-600">Fashion</span>
                                        <span class="font-medium text-blue-600">+18%</span>
                                    </div>
                                    <div class="flex items-center justify-between text-sm">
                                        <span class="text-gray-600">Home & Garden</span>
                                        <span class="font-medium text-purple-600">+31%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom CTA -->
                <div class="text-center">
                    <div class="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <div class="text-white">
                            <div class="text-lg font-semibold mb-1">Ready to see real results?</div>
                            <div class="text-gray-300 text-sm">Join 500+ brands using AI-native advertising</div>
                        </div>
                        <a href="/for-advertisers" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                            Start Your Campaign
                            <i class="fas fa-rocket ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>





        <!-- Footer -->
        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-16 border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-5 md:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div class="lg:col-span-2">
                        <div class="flex items-center mb-6">
                            <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                 alt="Earnly Logo" 
                                 class="h-10 w-auto"
                                 style="background: transparent;">
                        </div>
                        <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
                            The world's most advanced AI-native monetization platform connecting advertisers with AI platforms through contextual recommendations.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-github text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-discord text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Solutions -->
                    <div>
                        <h4 class="font-semibold text-white mb-4">Solutions</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="/for-advertisers" class="hover:text-white transition-colors">For Advertisers</a></li>
                            <li><a href="/for-ai-platforms" class="hover:text-white transition-colors">For AI Platforms</a></li>
                            <li><a href="/geo-report" class="hover:text-white transition-colors">GEO Analytics</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">API Integration</a></li>
                        </ul>
                    </div>
                    
                    <!-- Platform -->
                    <div>
                        <h4 class="font-semibold text-white mb-4">Platform</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="#" class="hover:text-white transition-colors">AI Matching Engine</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Real-time Analytics</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Performance Insights</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Optimization Tools</a></li>
                        </ul>
                    </div>
                    
                    <!-- Support -->
                    <div>
                        <h4 class="font-semibold text-white mb-4">Support</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Contact Support</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">System Status</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Bottom Section -->
                <div class="border-t border-gray-800 mt-12 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="text-gray-400 text-sm mb-4 md:mb-0">
                            <p>&copy; 2025 Earnly AI. All rights reserved.</p>
                        </div>
                        <div class="flex space-x-6 text-sm text-gray-400">
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Security</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/advanced-homepage.js"></script>
        
        <script>
          // Performance measurement
          window.addEventListener('load', () => {
            window.performance.mark('page-end');
            window.performance.measure('page-load', 'page-start', 'page-end');
            console.log('Page loaded in:', window.performance.getEntriesByName('page-load')[0].duration + 'ms');
          });
        </script>
    </body>
    </html>
  `
}