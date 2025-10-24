// Enhanced AI Platforms Directory - Superior to useadmesh.com/agents
export const AIPlatformsPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Platforms Directory | Earnly - Connect, Integrate, Monetize</title>
        <meta name="description" content="Discover and integrate with leading AI platforms. Advanced search, filtering, and integration tools for developers and businesses.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
          .platform-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .platform-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }
          
          .integration-preview {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .filter-tag {
            transition: all 0.2s ease;
          }
          .filter-tag.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
        </style>
    </head>
    <body class="bg-gray-50 min-h-screen">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="flex items-center">
                            <div class="flex items-center justify-center py-2 pr-2">
                                <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                     alt="Earnly Logo" 
                                     class="h-9 w-auto"
                                     style="background: transparent;">
                            </div>
                        </a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-white hover:text-blue-400 transition-colors">Home</a>
                        <a href="/dashboard" class="text-white hover:text-blue-400 transition-colors">Dashboard</a>
                        <button onclick="showSignInForm()" class="btn-interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="pt-20 pb-12 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h1 class="text-5xl font-bold text-white mb-6">
                        AI Platforms Directory
                    </h1>
                    <p class="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        Discover, integrate, and monetize with the world's leading AI platforms. 
                        Advanced search, real-time integration preview, and enterprise-grade analytics.
                    </p>
                    
                    <!-- Enhanced Search Bar -->
                    <div class="max-w-2xl mx-auto">
                        <div class="relative">
                            <input type="text" 
                                   id="platform-search"
                                   placeholder="Search platforms by name, category, or integration type..."
                                   class="w-full px-6 py-4 pl-12 pr-16 rounded-2xl border-0 bg-white bg-opacity-10 backdrop-blur-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:bg-opacity-20 transition-all text-lg">
                            <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 text-lg"></i>
                            <button onclick="searchPlatforms()" 
                                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Filters and Stats -->
        <section class="py-8 bg-white border-b">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Platform Statistics -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-purple-600 counter" data-target="247">0</div>
                        <div class="text-gray-600">AI Platforms</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-blue-600 counter" data-target="89">0</div>
                        <div class="text-gray-600">Integration Types</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-green-600 counter" data-target="156">0</div>
                        <div class="text-gray-600">Active Integrations</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-orange-600">$2.4M</div>
                        <div class="text-gray-600">Revenue Generated</div>
                    </div>
                </div>

                <!-- Advanced Filters -->
                <div class="flex flex-wrap items-center justify-between mb-6">
                    <div class="flex flex-wrap gap-3 mb-4 md:mb-0">
                        <button onclick="filterBy('all')" class="filter-tag active px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            All Platforms
                        </button>
                        <button onclick="filterBy('chatbots')" class="filter-tag px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            <i class="fas fa-comments mr-2"></i>Chatbots
                        </button>
                        <button onclick="filterBy('assistants')" class="filter-tag px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            <i class="fas fa-robot mr-2"></i>AI Assistants
                        </button>
                        <button onclick="filterBy('analytics')" class="filter-tag px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            <i class="fas fa-chart-line mr-2"></i>Analytics
                        </button>
                        <button onclick="filterBy('content')" class="filter-tag px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            <i class="fas fa-pen mr-2"></i>Content Gen
                        </button>
                        <button onclick="filterBy('voice')" class="filter-tag px-4 py-2 rounded-full border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50">
                            <i class="fas fa-microphone mr-2"></i>Voice AI
                        </button>
                    </div>
                    
                    <div class="flex items-center space-x-3">
                        <select id="sort-by" class="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
                            <option value="popularity">Sort by Popularity</option>
                            <option value="integration">Integration Ease</option>
                            <option value="revenue">Revenue Potential</option>
                            <option value="recent">Recently Added</option>
                        </select>
                        
                        <div class="flex border border-gray-300 rounded-lg overflow-hidden">
                            <button onclick="setView('grid')" id="grid-view" class="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700">
                                <i class="fas fa-th"></i>
                            </button>
                            <button onclick="setView('list')" id="list-view" class="px-3 py-2 bg-white text-gray-700 hover:bg-gray-50">
                                <i class="fas fa-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Live Integration Preview -->
        <section class="py-12 integration-preview">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-white mb-6">
                            Live Integration Preview
                        </h2>
                        <p class="text-xl text-gray-200 mb-8">
                            See exactly how Earnly integrations will look in your AI platform. 
                            Test different ad units, customize styling, and optimize placement in real-time.
                        </p>
                        
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-green-400 text-xl"></i>
                                <span class="text-white">Real-time preview with your branding</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-green-400 text-xl"></i>
                                <span class="text-white">Multiple ad unit formats and sizes</span>
                            </div>
                            <div class="flex items-center space-x-3">
                                <i class="fas fa-check-circle text-green-400 text-xl"></i>
                                <span class="text-white">Performance metrics simulation</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card p-8">
                        <div class="mb-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Select Platform Type</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="previewPlatform('chatbot')" class="preview-btn p-4 border-2 border-blue-600 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
                                    <i class="fas fa-comments text-blue-600 text-2xl mb-2 block"></i>
                                    <span class="text-blue-600 font-medium">Chatbot</span>
                                </button>
                                <button onclick="previewPlatform('assistant')" class="preview-btn p-4 border border-gray-300 rounded-xl text-center hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-robot text-gray-600 text-2xl mb-2 block"></i>
                                    <span class="text-gray-600 font-medium">Assistant</span>
                                </button>
                            </div>
                        </div>
                        
                        <div class="bg-gray-50 rounded-xl p-6" id="integration-preview">
                            <div class="mb-4">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-user text-white text-sm"></i>
                                    </div>
                                    <span class="text-gray-800 font-medium">User</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 ml-11">
                                    <p class="text-gray-800">I need a good gaming laptop for streaming</p>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <div class="flex items-center space-x-3 mb-3">
                                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-robot text-white text-sm"></i>
                                    </div>
                                    <span class="text-gray-800 font-medium">AI Assistant</span>
                                </div>
                                <div class="bg-white rounded-lg p-3 ml-11 mb-3">
                                    <p class="text-gray-800 mb-3">I can help you find the perfect gaming laptop! Based on your needs for streaming, here are some excellent options:</p>
                                    
                                    <!-- Earnly Integration Preview -->
                                    <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
                                        <div class="flex items-start space-x-3">
                                            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=60&h=60&fit=crop" 
                                                 class="w-15 h-15 rounded-lg object-cover" alt="Product">
                                            <div class="flex-1">
                                                <h4 class="font-semibold text-gray-900">ASUS ROG Strix G15 Gaming Laptop</h4>
                                                <p class="text-sm text-gray-600 mb-2">RTX 4070, AMD Ryzen 9 - Perfect for streaming</p>
                                                <div class="flex items-center justify-between">
                                                    <span class="text-lg font-bold text-green-600">$1,499</span>
                                                    <div class="text-xs text-gray-500">
                                                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">94% Match</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-3 text-xs text-gray-500 flex items-center">
                                            <i class="fas fa-shield-alt mr-1"></i>
                                            Sponsored by Earnly • Verified Advertiser
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-6 flex space-x-3">
                            <button class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:scale-105 transition-transform">
                                Try Live Demo
                            </button>
                            <button class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-code mr-2"></i>View Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Platform Directory Grid -->
        <section class="py-16 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured AI Platforms</h2>
                    <p class="text-xl text-gray-600">Integrate with top-performing platforms and start monetizing today</p>
                </div>

                <div id="platforms-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Platform Card 1 - ChatGPT Style -->
                    <div class="platform-card glass-card p-6 hover-lift" data-category="chatbots assistants">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                                    <i class="fas fa-comments text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">ChatGPT-Style Platform</h3>
                                    <p class="text-sm text-gray-600">Conversational AI Assistant</p>
                                </div>
                            </div>
                            <span class="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Active</span>
                        </div>
                        
                        <div class="mb-4">
                            <p class="text-gray-600 mb-3">Advanced conversational AI with contextual product recommendations and seamless monetization integration.</p>
                            
                            <div class="grid grid-cols-3 gap-2 text-sm">
                                <div class="text-center">
                                    <div class="font-bold text-purple-600">8.7%</div>
                                    <div class="text-gray-500">CVR</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-blue-600">$247</div>
                                    <div class="text-gray-500">Avg Revenue</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-green-600">2.1s</div>
                                    <div class="text-gray-500">Integration</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">SDK</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">REST API</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Webhooks</span>
                            </div>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="integrateNow('chatgpt-style')" class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                                Integrate Now
                            </button>
                            <button onclick="viewDetails('chatgpt-style')" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Platform Card 2 - Voice Assistant -->
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
                        
                        <div class="mb-4">
                            <p class="text-gray-600 mb-3">Voice-activated AI with natural language processing and audio-based product recommendations.</p>
                            
                            <div class="grid grid-cols-3 gap-2 text-sm">
                                <div class="text-center">
                                    <div class="font-bold text-purple-600">12.3%</div>
                                    <div class="text-gray-500">CVR</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-blue-600">$389</div>
                                    <div class="text-gray-500">Avg Revenue</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-green-600">3.2s</div>
                                    <div class="text-gray-500">Integration</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Voice SDK</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Audio API</span>
                                <span class="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">NLP</span>
                            </div>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="integrateNow('voice-ai')" class="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                                Join Beta
                            </button>
                            <button onclick="viewDetails('voice-ai')" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
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
                                    <p class="text-sm text-gray-600">Business Intelligence AI</p>
                                </div>
                            </div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Enterprise</span>
                        </div>
                        
                        <div class="mb-4">
                            <p class="text-gray-600 mb-3">AI-powered business analytics with intelligent tool and service recommendations based on data insights.</p>
                            
                            <div class="grid grid-cols-3 gap-2 text-sm">
                                <div class="text-center">
                                    <div class="font-bold text-purple-600">15.2%</div>
                                    <div class="text-gray-500">CVR</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-blue-600">$892</div>
                                    <div class="text-gray-500">Avg Revenue</div>
                                </div>
                                <div class="text-center">
                                    <div class="font-bold text-green-600">1.8s</div>
                                    <div class="text-gray-500">Integration</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">GraphQL</span>
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">REST API</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Real-time</span>
                            </div>
                        </div>
                        
                        <div class="flex space-x-2">
                            <button onclick="integrateNow('analytics-ai')" class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                                Get Started
                            </button>
                            <button onclick="viewDetails('analytics-ai')" class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Load More Button -->
                    <div class="col-span-full text-center mt-8">
                        <button onclick="loadMorePlatforms()" class="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all">
                            Load More Platforms
                            <i class="fas fa-arrow-down ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Integration Guide Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Integration Made Simple</h2>
                    <p class="text-xl text-gray-600">Get up and running in minutes, not months</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-plug text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">1. Connect</h3>
                        <p class="text-gray-600 mb-6">
                            Choose your platform and integration method. SDK, REST API, or webhooks - 
                            we support all major integration patterns.
                        </p>
                        <div class="bg-gray-50 rounded-lg p-4 text-left">
                            <code class="text-sm text-gray-800">
                                npm install earnly-sdk<br>
                                // or<br>
                                curl -X POST api.earnly.com/platforms
                            </code>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-cogs text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">2. Configure</h3>
                        <p class="text-gray-600 mb-6">
                            Customize ad placement, styling, and targeting rules. 
                            Use our visual editor or configure programmatically.
                        </p>
                        <div class="bg-gray-50 rounded-lg p-4 text-left">
                            <code class="text-sm text-gray-800">
                                earnly.configure({<br>
                                &nbsp;&nbsp;placement: 'contextual',<br>
                                &nbsp;&nbsp;style: 'minimal'<br>
                                })
                            </code>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-rocket text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">3. Launch</h3>
                        <p class="text-gray-600 mb-6">
                            Go live and start earning. Monitor performance with real-time 
                            analytics and optimize with AI-powered insights.
                        </p>
                        <div class="bg-gray-50 rounded-lg p-4 text-left">
                            <code class="text-sm text-gray-800">
                                earnly.start()<br>
                                // Start earning revenue<br>
                                // Track with dashboard
                            </code>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <button onclick="startIntegration()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                        Start Integration Now
                        <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/ai-platforms.js"></script>
    </body>
    </html>
  `
}