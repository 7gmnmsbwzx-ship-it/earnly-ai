// For Advertisers - Fixed Working Version
export const ForAdvertisersFixed = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Advertisers | Earnly - AI-Native Advertising Platform</title>
        <meta name="description" content="Transform your advertising with AI-native placements that reach users at the moment of intent. Performance-only billing, contextual targeting, and verified results.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
          /* Glass morphism effects */
          .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          
          /* Hover effects */
          .hover-scale {
            transition: all 0.3s ease;
          }
          .hover-scale:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          /* Background gradient */
          .bg-gradient {
            background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%);
          }
          
          /* Text gradient */
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        </style>
    </head>
    <body class="bg-gray-900 text-white">
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
                        <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                        <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        <a href="/dashboard/advertiser" class="text-white hover:text-blue-400 transition-colors bg-blue-600 bg-opacity-20 px-3 py-1 rounded-lg border border-blue-500 border-opacity-30">
                            <i class="fas fa-chart-line mr-2"></i>Dashboard
                        </a>
                        <button onclick="startCampaign()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover-scale">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="bg-gradient pt-24 pb-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-fade-in">
                        <div class="mb-6">
                            <div class="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
                                <span class="w-2 h-2 bg-blue-400 rounded-full"></span>
                                <span class="text-sm text-white font-medium">AI-Native Advertising Platform</span>
                            </div>
                        </div>
                        
                        <h1 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Advertise at the
                            <span class="gradient-text block mt-2">Moment of Intent</span>
                        </h1>
                        
                        <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                            Reach users when they're actively searching for solutions in AI conversations. 
                            <span class="text-green-400 font-semibold">Performance-only billing</span> ensures you 
                            <span class="text-blue-400 font-semibold">only pay for verified results</span>.
                        </p>
                        
                        <!-- Performance Highlights -->
                        <div class="grid grid-cols-3 gap-6 mb-8">
                            <div class="glass p-4 rounded-xl text-center">
                                <div class="text-2xl font-bold text-green-400 mb-2">12.7%</div>
                                <div class="text-sm text-gray-300">Average CTR</div>
                            </div>
                            <div class="glass p-4 rounded-xl text-center">
                                <div class="text-2xl font-bold text-blue-400 mb-2">20.1%</div>
                                <div class="text-sm text-gray-300">Conversion Rate</div>
                            </div>
                            <div class="glass p-4 rounded-xl text-center">
                                <div class="text-2xl font-bold text-purple-400 mb-2">$10</div>
                                <div class="text-sm text-gray-300">Avg CPA</div>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                            <button onclick="startCampaign()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover-scale">
                                <i class="fas fa-rocket mr-3"></i>
                                Start Your Campaign
                            </button>
                            <button onclick="openVarioDemo()" class="glass text-white px-8 py-4 rounded-xl font-semibold text-lg hover-scale">
                                <i class="fas fa-search mr-3"></i>
                                Try Vario™ Demo
                            </button>
                        </div>
                        
                        <!-- Trust Indicators -->
                        <div class="flex flex-wrap gap-6 text-sm text-gray-300">
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
                    
                    <!-- Interactive Brand Demo -->
                    <div class="animate-fade-in">
                        <div class="glass-card p-8 rounded-2xl hover-scale" id="brand-demo">
                            <div class="mb-6 text-center">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-globe text-white text-xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Interactive Brand Demo</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">Enter your website URL and select a platform category to see how your brand appears in realistic ad previews</p>
                            </div>
                            
                            <!-- Live Demo Notice -->
                            <div class="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                                <div class="flex items-center mb-3">
                                    <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                                        <i class="fas fa-brain text-white text-sm"></i>
                                    </div>
                                    <div>
                                        <p class="text-sm font-semibold text-gray-800">Experience Vario™ - AI Search Engine</p>
                                        <p class="text-xs text-gray-600">See how your brand appears in real AI-powered search results</p>
                                    </div>
                                </div>
                                <a href="#" onclick="openVarioDemo()" class="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors bg-white px-3 py-2 rounded-lg shadow-sm">
                                    <i class="fas fa-search mr-2"></i>
                                    Try Vario™ Live Demo 
                                    <i class="fas fa-external-link-alt ml-2"></i>
                                </a>
                            </div>
                            
                            <div class="space-y-6">
                                <!-- URL Input -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-3">Enter Website URL</label>
                                    <div class="relative">
                                        <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <i class="fas fa-link"></i>
                                        </span>
                                        <input type="url" id="brand-url" 
                                               placeholder="https://yourbrand.com" 
                                               class="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white text-base"
                                               oninput="updateBrandPreview()">
                                    </div>
                                </div>
                                
                                <!-- Example URLs -->
                                <div>
                                    <p class="text-sm text-gray-600 mb-3">Or try these examples:</p>
                                    <div class="flex flex-wrap gap-2">
                                        <button onclick="setBrandURL('shopify.com')" 
                                                class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                                            shopify.com
                                        </button>
                                        <button onclick="setBrandURL('notion.so')" 
                                                class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                                            notion.so
                                        </button>
                                        <button onclick="setBrandURL('stripe.com')" 
                                                class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                                            stripe.com
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Platform Category Selection -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-3">AI Platform Category</label>
                                    <select id="platform-category" onchange="updateBrandPreview()" 
                                            class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white">
                                        <option value="search">🔍 Vario™ AI Search - Contextual Results</option>
                                        <option value="chatgpt">💬 ChatGPT & AI Assistants - Conversation Flow</option>
                                        <option value="shopping">🛒 AI Shopping Platforms - E-commerce Focus</option>
                                        <option value="productivity">⚡ Productivity Tools - B2B Solutions</option>
                                        <option value="creative">🎨 Creative Platforms - Design & Media</option>
                                        <option value="business">📊 Business Intelligence - Analytics & Data</option>
                                    </select>
                                </div>
                                
                                <!-- Ad Format Selection -->
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-3">Ad Format Preview</label>
                                    <div class="grid grid-cols-3 gap-2">
                                        <button type="button" onclick="selectAdFormat('inline')" id="format-inline" 
                                                class="ad-format-btn px-3 py-2 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium transition-all">
                                            Inline Card
                                        </button>
                                        <button type="button" onclick="selectAdFormat('product')" id="format-product" 
                                                class="ad-format-btn px-3 py-2 border-2 border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-medium transition-all hover:border-blue-300">
                                            Product Card
                                        </button>
                                        <button type="button" onclick="selectAdFormat('summary')" id="format-summary" 
                                                class="ad-format-btn px-3 py-2 border-2 border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-medium transition-all hover:border-blue-300">
                                            Summary Unit
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- Preview Button -->
                                <button onclick="generateBrandPreview()" 
                                        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                                    <i class="fas fa-eye mr-2"></i>
                                    Preview
                                </button>
                            </div>
                            
                            <!-- Preview Results -->
                            <div id="brand-preview-results" class="mt-8 hidden">
                                <div class="border-t border-gray-200 pt-6">
                                    <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                        <i class="fas fa-magic text-blue-600 mr-2"></i>
                                        AI-Generated Ad Preview
                                    </h4>
                                    
                                    <!-- Mock Ad Preview -->
                                    <div id="ad-preview-container" class="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
                                        <div class="text-center text-gray-500">
                                            <i class="fas fa-spinner fa-spin text-2xl mb-3"></i>
                                            <p>Generating realistic ad preview...</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Performance Metrics -->
                                    <div class="mt-6 grid grid-cols-3 gap-4">
                                        <div class="text-center">
                                            <div class="text-2xl font-bold text-green-600" id="predicted-ctr">2.8%</div>
                                            <div class="text-xs text-gray-500">Predicted CTR</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="text-2xl font-bold text-blue-600" id="engagement-score">89</div>
                                            <div class="text-xs text-gray-500">Engagement Score</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="text-2xl font-bold text-purple-600" id="relevance-match">94%</div>
                                            <div class="text-xs text-gray-500">Relevance Match</div>
                                        </div>
                                    </div>
                                    
                                    <!-- Action Buttons -->
                                    <div class="mt-6">
                                        <button onclick="startCampaign()" class="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-4 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all text-lg">
                                            <i class="fas fa-rocket mr-2"></i>
                                            Launch Campaign with This Preview
                                        </button>
                                        <div class="mt-3 flex justify-center">
                                            <button onclick="sharePreview()" class="text-gray-600 hover:text-gray-800 font-medium text-sm flex items-center">
                                                <i class="fas fa-share-alt mr-2"></i>
                                                Share Preview with Team
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Performance Comparison -->
        <section class="py-16 bg-gray-800">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Performance Comparison</h2>
                    <p class="text-xl text-gray-300">Traditional Advertising vs Earnly AI</p>
                </div>
                
                <div class="glass p-8 rounded-2xl">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <!-- Traditional -->
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-6 text-center">Traditional Advertising</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                                    <span class="text-gray-300">Cost Per Click</span>
                                    <span class="text-red-400 font-bold text-lg">$2.20</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                                    <span class="text-gray-300">Total Clicks</span>
                                    <span class="text-white">4,545</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                                    <span class="text-gray-300">Conversions</span>
                                    <span class="text-white">113</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-red-600 bg-opacity-20 rounded-lg border border-red-500 border-opacity-30">
                                    <span class="text-gray-300">Revenue</span>
                                    <span class="text-red-300 font-bold text-xl">$16,950</span>
                                </div>
                            </div>
                        </div>

                        <!-- With Earnly AI -->
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-6 text-center">With Earnly AI</h3>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-500 border-opacity-30">
                                    <span class="text-gray-300">Effective CPC</span>
                                    <span class="text-green-400 font-bold text-lg">$1.58</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-500 border-opacity-30">
                                    <span class="text-gray-300">Total Clicks</span>
                                    <span class="text-green-300">6,329</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-500 border-opacity-30">
                                    <span class="text-gray-300">Conversions</span>
                                    <span class="text-green-300">441</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-lg border border-green-500 border-opacity-30">
                                    <span class="text-gray-300">Revenue</span>
                                    <span class="text-green-300 font-bold text-xl">$66,150</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why AI-Native Advertising -->
        <section class="py-16 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-white mb-4">Why AI-Native Advertising?</h2>
                    <p class="text-xl text-gray-300">Move beyond interruption-based advertising to contextual, helpful recommendations.</p>
                </div>
                
                <div class="grid lg:grid-cols-4 gap-6">
                    <div class="glass p-6 rounded-2xl hover-scale text-center">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-crosshairs text-white text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-3">Intent-Based Targeting</h3>
                        <p class="text-gray-300 text-sm mb-4">Reach users at the exact moment they express purchase intent.</p>
                        <div class="text-blue-400 font-bold text-xl">12.7%</div>
                        <div class="text-blue-300 text-xs">Average CTR</div>
                    </div>

                    <div class="glass p-6 rounded-2xl hover-scale text-center">
                        <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-hand-holding-dollar text-white text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-3">Performance-Only Billing</h3>
                        <p class="text-gray-300 text-sm mb-4">Pay only for verified actions. No waste on bot traffic.</p>
                        <div class="text-green-400 font-bold text-xl">$10</div>
                        <div class="text-green-300 text-xs">Average CPA</div>
                    </div>

                    <div class="glass p-6 rounded-2xl hover-scale text-center">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-puzzle-piece text-white text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-3">Native Integration</h3>
                        <p class="text-gray-300 text-sm mb-4">Products appear naturally within AI conversations.</p>
                        <div class="text-purple-400 font-bold text-xl">20.1%</div>
                        <div class="text-purple-300 text-xs">Conversion Rate</div>
                    </div>

                    <div class="glass p-6 rounded-2xl hover-scale text-center">
                        <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-chart-line text-white text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-3">Real-Time Analytics</h3>
                        <p class="text-gray-300 text-sm mb-4">Enterprise-grade analytics and optimization insights.</p>
                        <div class="text-orange-400 font-bold text-xl">99.9%</div>
                        <div class="text-orange-300 text-xs">Uptime SLA</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Advertisers Choose Earnly -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <p class="text-sm font-semibold text-blue-400 mb-4 tracking-wide uppercase">WHY ADVERTISERS CHOOSE EARNLY</p>
                    <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Move Beyond Ads — Get Discovered at the Moment of Intent
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Earnly puts your products into real conversations inside AI platforms — reaching users 
                        when they are actively searching, comparing, and ready to decide.
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-start">
                    <!-- Left Column - Key Features -->
                    <div class="space-y-8">
                        <!-- Native Discovery -->
                        <div class="glass p-8 rounded-3xl hover-scale">
                            <div class="flex items-start space-x-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                        <i class="fas fa-search text-white text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-white mb-4">Native Discovery</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed mb-4">
                                        Be discovered naturally through AI agent conversations, not intrusive ads.
                                    </p>
                                    <div class="text-sm text-gray-400">
                                        Users engage with your brand when they're actively seeking solutions
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Intent-Verified Traffic -->
                        <div class="glass p-8 rounded-3xl hover-scale">
                            <div class="flex items-start space-x-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                                        <i class="fas fa-bullseye text-white text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-white mb-4">Intent-Verified Traffic</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed mb-4">
                                        Reach users exactly when they are searching, comparing, or deciding.
                                    </p>
                                    <div class="text-sm text-gray-400">
                                        Every click represents genuine purchase intent, not random browsing
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Performance-Only Billing -->
                        <div class="glass p-8 rounded-3xl hover-scale">
                            <div class="flex items-start space-x-6">
                                <div class="flex-shrink-0">
                                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                        <i class="fas fa-chart-line text-white text-xl"></i>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-2xl font-bold text-white mb-4">Performance-Only Billing</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed mb-4">
                                        No impressions. No wasted clicks. Only pay for measurable results.
                                    </p>
                                    <div class="text-sm text-gray-400">
                                        Transparent pricing with guaranteed ROI protection
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Dashboard Preview -->
                    <div class="glass p-8 rounded-3xl hover-scale">
                        <div class="mb-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-chart-bar text-white"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-white">Brand Dashboard</h3>
                                        <p class="text-sm text-gray-400">Your CPA Performance • Live</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <i class="fas fa-bolt text-yellow-400"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Metrics Grid -->
                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <div class="bg-gray-700 bg-opacity-50 p-4 rounded-xl">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-400">Total Discoveries</span>
                                    <i class="fas fa-search text-blue-400"></i>
                                </div>
                                <div class="text-2xl font-bold text-white mb-1">12,400</div>
                                <div class="text-xs text-green-400">+18% vs last week</div>
                            </div>

                            <div class="bg-gray-700 bg-opacity-50 p-4 rounded-xl">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-400">Total Clicks</span>
                                    <i class="fas fa-mouse-pointer text-purple-400"></i>
                                </div>
                                <div class="text-2xl font-bold text-white mb-1">1,580</div>
                                <div class="text-xs text-green-400">+24% vs last week</div>
                            </div>

                            <div class="bg-gray-700 bg-opacity-50 p-4 rounded-xl">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-400">Total Conversions</span>
                                    <i class="fas fa-shopping-cart text-green-400"></i>
                                </div>
                                <div class="text-2xl font-bold text-white mb-1">317</div>
                                <div class="text-xs text-green-400">+32% vs last week</div>
                            </div>

                            <div class="bg-gray-700 bg-opacity-50 p-4 rounded-xl">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-400">Total Spend</span>
                                    <i class="fas fa-dollar-sign text-orange-400"></i>
                                </div>
                                <div class="text-2xl font-bold text-white mb-1">$9,510</div>
                                <div class="text-xs text-green-400">+15% vs last week</div>
                            </div>
                        </div>

                        <!-- Performance Metrics -->
                        <div class="space-y-4">
                            <div class="flex items-center justify-between text-sm text-gray-400 mb-2">
                                <span>Offer Performance</span>
                                <span>Last 30 days</span>
                            </div>
                            
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">Click-Through Rate (CTR)</span>
                                    <span class="text-white font-semibold">12.7%</span>
                                </div>
                                <div class="w-full bg-gray-600 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">Conversion Rate (CVR)</span>
                                    <span class="text-white font-semibold">20.1%</span>
                                </div>
                                <div class="w-full bg-gray-600 rounded-full h-2">
                                    <div class="bg-purple-500 h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-300">Avg CPA (Cost Per Acquisition)</span>
                                    <span class="text-white font-semibold">$10</span>
                                </div>
                                <div class="w-full bg-gray-600 rounded-full h-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                        </div>

                        <button onclick="startDemo()" class="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-4">Ready to Transform Your Advertising?</h2>
                <p class="text-xl mb-8 opacity-90">Join leading brands leveraging AI-native advertising for superior performance and ROI.</p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-6 mb-8">
                    <button onclick="startTrial()" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover-scale">
                        <i class="fas fa-rocket mr-3"></i>Start Free Trial
                    </button>
                    <button onclick="scheduleDemo()" class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
                        <i class="fas fa-calendar mr-3"></i>Schedule Demo
                    </button>
                </div>
                
                <div class="text-sm opacity-75">
                    No setup fees • Performance-only billing • Cancel anytime
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-6">
                    <div>
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="Earnly Logo" 
                             class="h-8 w-auto mb-4">
                        <p class="text-gray-400 text-sm">AI-native advertising platform for the modern enterprise.</p>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold mb-3">Platform</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><a href="/for-advertisers" class="hover:text-white transition-colors">For Advertisers</a></li>
                            <li><a href="/for-ai-platforms" class="hover:text-white transition-colors">For AI Platforms</a></li>
                            <li><a href="/geo-report" class="hover:text-white transition-colors">Analytics</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold mb-3">Company</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="font-semibold mb-3">Support</h4>
                        <ul class="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" class="hover:text-white transition-colors">API Reference</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 Earnly. All rights reserved.</p>
                </div>
            </div>
        </footer>

        <script>
            // Global variables
            let currentAdFormat = 'inline';
            let currentBrand = '';
            let currentPlatform = 'search';
            
            // Brand Demo Functions
            function setBrandURL(url) {
                document.getElementById('brand-url').value = 'https://' + url;
                currentBrand = url;
                updateBrandPreview();
            }
            
            function selectAdFormat(format) {
                currentAdFormat = format;
                
                // Update button states
                document.querySelectorAll('.ad-format-btn').forEach(btn => {
                    btn.className = 'ad-format-btn px-3 py-2 border-2 border-gray-200 bg-white text-gray-600 rounded-lg text-xs font-medium transition-all hover:border-blue-300';
                });
                
                const selectedBtn = document.getElementById('format-' + format);
                if (selectedBtn) {
                    selectedBtn.className = 'ad-format-btn px-3 py-2 border-2 border-blue-500 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium transition-all';
                }
                
                updateBrandPreview();
            }
            
            function updateBrandPreview() {
                const url = document.getElementById('brand-url').value;
                const platform = document.getElementById('platform-category').value;
                
                if (url && url.length > 10) {
                    currentBrand = url.replace('https://', '').replace('http://', '');
                    currentPlatform = platform;
                }
            }
            
            function generateBrandPreview() {
                const url = document.getElementById('brand-url')?.value;
                const platform = document.getElementById('platform-category')?.value;
                
                if (!url || url.length < 10) {
                    alert('Please enter a valid website URL (e.g., https://yourbrand.com)');
                    return;
                }
                
                currentBrand = url.replace('https://', '').replace('http://', '');
                currentPlatform = platform;
                
                // Update button state
                const previewButton = document.getElementById('preview-button');
                const previewButtonText = document.getElementById('preview-button-text');
                if (previewButton && previewButtonText) {
                    previewButton.disabled = true;
                    previewButton.classList.add('opacity-75', 'cursor-not-allowed');
                    previewButtonText.innerHTML = '<i class=\"fas fa-spinner fa-spin mr-2\"></i>Generating...';
                }
                
                // Show results section with animation
                const resultsDiv = document.getElementById('brand-preview-results');
                resultsDiv.classList.remove('hidden');
                resultsDiv.style.opacity = '0';
                resultsDiv.style.transform = 'translateY(20px)';
                
                // Animate in the results section
                setTimeout(() => {
                    resultsDiv.style.transition = 'all 0.5s ease';
                    resultsDiv.style.opacity = '1';
                    resultsDiv.style.transform = 'translateY(0)';
                }, 100);
                
                // Show loading state
                const container = document.getElementById('ad-preview-container');
                container.innerHTML = \`
                    <div class="text-center text-gray-500 py-8">
                        <div class="relative inline-block">
                            <i class="fas fa-brain text-4xl mb-4 text-blue-500 animate-pulse"></i>
                            <div class="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                        <p class="font-medium text-gray-700">AI analyzing your brand...</p>
                        <p class="text-sm text-gray-500 mt-1">Generating \${currentAdFormat} format for \${platform}</p>
                        <div class="mt-4 flex justify-center space-x-1">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                        </div>
                    </div>
                \`;
                
                // Simulate AI processing with realistic delay
                setTimeout(() => {
                    generateAdPreview();
                    updateMetrics();
                    
                    // Restore button state
                    if (previewButton && previewButtonText) {
                        previewButton.disabled = false;
                        previewButton.classList.remove('opacity-75', 'cursor-not-allowed');
                        previewButtonText.innerHTML = '<i class=\"fas fa-sync-alt mr-2\"></i>Generate New Preview';
                    }
                    
                    // Scroll to preview results smoothly
                    setTimeout(() => {
                        const previewContainer = document.getElementById('ad-preview-container');
                        if (previewContainer) {
                            previewContainer.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'center' 
                            });
                        }
                    }, 200);
                    
                }, 2500);
            }
            
            function generateAdPreview() {
                const container = document.getElementById('ad-preview-container');
                let previewHTML = '';
                
                const brandName = currentBrand.split('.')[0].charAt(0).toUpperCase() + currentBrand.split('.')[0].slice(1);
                
                // Always respect the selected format, regardless of platform
                if (currentAdFormat === 'inline') {
                    previewHTML = generateInlineFormatAd(brandName, currentPlatform);
                } else if (currentAdFormat === 'product') {
                    previewHTML = generateProductFormatAd(brandName, currentPlatform);
                } else if (currentAdFormat === 'summary') {
                    previewHTML = generateSummaryFormatAd(brandName, currentPlatform);
                }
                
                container.innerHTML = previewHTML;
            }
            
            function generateInlineFormatAd(brandName, platform) {
                // Platform-specific inline format variations
                const platformStyles = {
                    'search': generateVarioInlineAd(brandName),
                    'chatgpt': generateChatGPTInlineAd(brandName),
                    'shopping': generateShoppingInlineAd(brandName),
                    'productivity': generateProductivityInlineAd(brandName),
                    'creative': generateCreativeInlineAd(brandName),
                    'business': generateBusinessInlineAd(brandName)
                };
                
                return platformStyles[platform] || platformStyles['search'];
            }
            
            function generateVarioInlineAd(brandName) {
                return \`
                    <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 border border-blue-200 max-w-lg mx-auto shadow-lg">
                        <!-- Vario™ Header -->
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center">
                                <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                                    <i class="fas fa-brain text-white text-lg"></i>
                                </div>
                                <div>
                                    <div class="font-bold text-gray-900 text-base">Vario™ AI Search</div>
                                    <div class="text-sm text-blue-600 font-medium">Intelligent recommendations</div>
                                </div>
                            </div>
                            <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">AI-Matched</div>
                        </div>
                        
                        <!-- Search Context -->
                        <div class="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                            <div class="text-sm text-gray-600 mb-2">🔍 Based on your search: <em>"best solutions for productivity"</em></div>
                            <div class="text-xs text-gray-500">Vario™ found this highly relevant match:</div>
                        </div>
                        
                        <!-- Brand Recommendation Card -->
                        <div class="bg-white rounded-xl p-4 border border-blue-300 shadow-sm">
                            <div class="flex items-start space-x-4">
                                <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span class="text-blue-700 font-bold text-2xl">\${brandName.charAt(0)}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-2">
                                        <h4 class="font-bold text-gray-900 text-lg">\${brandName}</h4>
                                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Sponsored</span>
                                    </div>
                                    <p class="text-gray-700 text-sm mb-3 leading-relaxed">Industry-leading platform trusted by professionals worldwide. Streamline workflows and boost productivity.</p>
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center">
                                            <span class="text-yellow-500">★★★★★</span>
                                            <span class="text-sm text-gray-600 ml-2">4.8/5 (2,100+ reviews)</span>
                                        </div>
                                        <span class="text-green-600 font-semibold text-sm">✓ Free trial</span>
                                    </div>
                                    <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                                        Explore \${brandName}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Vario™ Footer -->
                        <div class="mt-3 text-center">
                            <span class="text-xs text-gray-500">Powered by Vario™ AI • Personalized for you</span>
                        </div>
                    </div>
                \`;
            }
            
            function generateProductFormatAd(brandName, platform) {
                // Platform-specific product format variations
                const platformStyles = {
                    'search': generateVarioProductCard(brandName),
                    'chatgpt': generateChatGPTProductCard(brandName),
                    'shopping': generateShoppingProductCard(brandName),
                    'productivity': generateProductivityProductCard(brandName),
                    'creative': generateCreativeProductCard(brandName),
                    'business': generateBusinessProductCard(brandName)
                };
                
                return platformStyles[platform] || platformStyles['search'];
            }
            
            function generateVarioProductCard(brandName) {
                return \`
                    <div class="bg-white rounded-2xl p-6 border-2 border-blue-200 max-w-sm mx-auto shadow-xl">
                        <!-- Product Hero Section -->
                        <div class="text-center mb-6">
                            <div class="relative">
                                <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                                    <span class="text-white font-bold text-3xl">\${brandName.charAt(0)}</span>
                                </div>
                                <div class="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✓</div>
                            </div>
                            <h3 class="font-bold text-gray-900 text-xl mb-2">\${brandName}</h3>
                            <p class="text-gray-600 text-sm leading-relaxed mb-4">Enterprise-grade platform designed for modern teams and professionals</p>
                        </div>
                        
                        <!-- Trust Indicators -->
                        <div class="mb-4">
                            <div class="flex items-center justify-center space-x-3 mb-3">
                                <div class="flex items-center">
                                    <span class="text-yellow-500 text-lg">★★★★★</span>
                                    <span class="text-sm text-gray-700 ml-2 font-medium">4.8/5</span>
                                </div>
                                <div class="text-sm text-gray-500">(2,100+ reviews)</div>
                            </div>
                            <div class="flex justify-center space-x-4 text-xs text-gray-600">
                                <span class="flex items-center"><i class="fas fa-users mr-1 text-blue-500"></i>50k+ users</span>
                                <span class="flex items-center"><i class="fas fa-shield-alt mr-1 text-green-500"></i>SOC2 Compliant</span>
                            </div>
                        </div>
                        
                        <!-- Value Proposition -->
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
                            <div class="text-center">
                                <div class="text-green-700 font-bold text-lg mb-1">Start Free Today</div>
                                <div class="text-green-600 text-sm">14-day trial • No credit card required</div>
                                <div class="text-green-500 text-xs mt-1">Setup in under 5 minutes</div>
                            </div>
                        </div>
                        
                        <!-- CTA Button -->
                        <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                            Try \${brandName} Free
                        </button>
                        
                        <!-- Attribution -->
                        <div class="mt-4 text-center">
                            <div class="flex items-center justify-center text-xs text-gray-500">
                                <i class="fas fa-brain mr-1 text-blue-500"></i>
                                <span>Recommended by Vario™ AI</span>
                                <span class="mx-2">•</span>
                                <span class="text-blue-600">Sponsored</span>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateSummaryFormatAd(brandName, platform) {
                // Platform-specific summary format variations
                const platformStyles = {
                    'search': generateVarioSummaryUnit(brandName),
                    'chatgpt': generateChatGPTSummaryUnit(brandName),
                    'shopping': generateShoppingSummaryUnit(brandName),
                    'productivity': generateProductivitySummaryUnit(brandName),
                    'creative': generateCreativeSummaryUnit(brandName),
                    'business': generateBusinessSummaryUnit(brandName)
                };
                
                return platformStyles[platform] || platformStyles['search'];
            }
            
            function generateVarioSummaryUnit(brandName) {
                return \`
                    <div class="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 max-w-2xl mx-auto shadow-lg">
                        <!-- AI Analysis Header -->
                        <div class="flex items-start space-x-4 mb-5">
                            <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <i class="fas fa-brain text-white text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <h4 class="font-bold text-gray-900 text-lg">Vario™ AI Analysis</h4>
                                    <span class="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold border border-blue-300">Smart Match</span>
                                </div>
                                <p class="text-gray-700 text-sm leading-relaxed">
                                    Based on your search query and preferences, I found <strong>\${brandName}</strong> to be an excellent match with high relevance scores.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Recommendation Card -->
                        <div class="bg-white rounded-xl p-5 border border-gray-300 shadow-sm mb-4">
                            <div class="flex items-start space-x-4">
                                <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-700 font-bold text-2xl">\${brandName.charAt(0)}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between mb-3">
                                        <h5 class="font-bold text-gray-900 text-lg">\${brandName}</h5>
                                        <div class="flex items-center">
                                            <span class="text-yellow-500">★★★★★</span>
                                            <span class="text-gray-600 text-sm ml-2 font-medium">4.8/5</span>
                                        </div>
                                    </div>
                                    
                                    <!-- User Review Quote -->
                                    <div class="bg-gray-50 rounded-lg p-3 mb-3 border-l-4 border-blue-500">
                                        <p class="text-gray-700 text-sm italic mb-2">"Exceptional platform that transformed our workflow. The AI features are incredibly intuitive and saved us hours daily."</p>
                                        <div class="text-xs text-gray-500">— Sarah M., Product Manager</div>
                                    </div>
                                    
                                    <!-- Key Features -->
                                    <div class="grid grid-cols-2 gap-2 mb-4">
                                        <div class="flex items-center text-xs text-gray-600">
                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                            <span>Enterprise Security</span>
                                        </div>
                                        <div class="flex items-center text-xs text-gray-600">
                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                            <span>24/7 Support</span>
                                        </div>
                                        <div class="flex items-center text-xs text-gray-600">
                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                            <span>Free Trial Available</span>
                                        </div>
                                        <div class="flex items-center text-xs text-gray-600">
                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                            <span>No Setup Fees</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Action Section -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                                    Explore \${brandName}
                                </button>
                                <button class="text-gray-600 hover:text-gray-800 text-sm font-medium">
                                    Save for Later
                                </button>
                            </div>
                            <div class="text-right">
                                <div class="text-xs text-gray-500">Sponsored content</div>
                                <div class="text-xs text-blue-600 font-medium">Verified by Vario™</div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateGenericAd(brandName) {
                // Platform-specific templates based on current platform selection
                const platformTemplates = {
                    'chatgpt': generateChatGPTAd(brandName),
                    'shopping': generateShoppingAd(brandName),
                    'productivity': generateProductivityAd(brandName),
                    'creative': generateCreativeAd(brandName),
                    'business': generateBusinessAd(brandName)
                };
                
                return platformTemplates[currentPlatform] || generateDefaultAd(brandName);
            }
            
            function generateChatGPTAd(brandName) {
                return \`
                    <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200 max-w-lg mx-auto shadow-md">
                        <!-- ChatGPT Conversation Context -->
                        <div class="mb-4">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                    <i class="fas fa-robot text-white text-sm"></i>
                                </div>
                                <span class="font-medium text-gray-800">ChatGPT</span>
                            </div>
                            <div class="bg-white rounded-lg p-4 mb-3 shadow-sm">
                                <p class="text-gray-700 text-sm mb-3">Based on your requirements, I'd recommend checking out <strong>\${brandName}</strong>. It's a highly-rated solution that aligns well with what you're looking for.</p>
                                
                                <!-- Integrated Ad Card -->
                                <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-3">
                                    <div class="flex items-start space-x-3">
                                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span class="text-white font-bold text-lg">\${brandName.charAt(0)}</span>
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex items-center justify-between mb-2">
                                                <h4 class="font-semibold text-gray-900">\${brandName}</h4>
                                                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Sponsored</span>
                                            </div>
                                            <p class="text-gray-600 text-sm mb-2">Professional-grade platform trusted by industry leaders worldwide.</p>
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center text-sm">
                                                    <span class="text-yellow-500">★★★★★</span>
                                                    <span class="text-gray-600 ml-2">4.8/5</span>
                                                </div>
                                                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateShoppingAd(brandName) {
                return \`
                    <div class="bg-white rounded-2xl p-5 border border-gray-200 max-w-md mx-auto shadow-lg">
                        <!-- Shopping Platform Header -->
                        <div class="flex items-center justify-between mb-4">
                            <div class="text-sm font-medium text-gray-600">🛒 AI Shopping Assistant</div>
                            <div class="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">Sponsored</div>
                        </div>
                        
                        <!-- Product Showcase -->
                        <div class="text-center mb-5">
                            <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-3xl">\${brandName.charAt(0)}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 text-xl mb-2">\${brandName} Products</h3>
                            <p class="text-gray-600 text-sm">Premium quality, trusted by millions</p>
                        </div>
                        
                        <!-- Product Grid -->
                        <div class="grid grid-cols-2 gap-3 mb-4">
                            <div class="bg-gray-50 rounded-lg p-3 text-center">
                                <div class="text-lg font-bold text-gray-900">$99</div>
                                <div class="text-xs text-gray-500">Starting at</div>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-3 text-center">
                                <div class="text-lg font-bold text-green-600">✓ 4.8</div>
                                <div class="text-xs text-gray-500">Rating</div>
                            </div>
                        </div>
                        
                        <!-- Special Offers -->
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-4 border border-green-200">
                            <div class="text-center">
                                <div class="text-green-700 font-semibold text-sm">🎉 Special Offer</div>
                                <div class="text-green-600 text-xs">Free shipping + 30% off today only</div>
                            </div>
                        </div>
                        
                        <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                            Shop Now
                        </button>
                    </div>
                \`;
            }
            
            function generateProductivityAd(brandName) {
                return \`
                    <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-300 max-w-lg mx-auto shadow-md">
                        <!-- Productivity Context -->
                        <div class="flex items-center mb-5">
                            <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3">
                                <i class="fas fa-bolt text-white"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-gray-900 text-lg">\${brandName} for Teams</h4>
                                <p class="text-blue-600 text-sm font-medium">Productivity Powerhouse</p>
                            </div>
                        </div>
                        
                        <!-- Value Proposition -->
                        <div class="mb-5">
                            <p class="text-gray-700 text-sm leading-relaxed mb-4">
                                Streamline workflows and boost team efficiency with \${brandName}'s AI-powered productivity suite.
                            </p>
                            
                            <!-- Key Metrics -->
                            <div class="grid grid-cols-3 gap-3 mb-4">
                                <div class="bg-white rounded-lg p-3 text-center border">
                                    <div class="text-xl font-bold text-blue-600">40%</div>
                                    <div class="text-xs text-gray-500">Faster</div>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center border">
                                    <div class="text-xl font-bold text-green-600">14d</div>
                                    <div class="text-xs text-gray-500">Free Trial</div>
                                </div>
                                <div class="bg-white rounded-lg p-3 text-center border">
                                    <div class="text-xl font-bold text-purple-600">SOC2</div>
                                    <div class="text-xs text-gray-500">Certified</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Features List -->
                        <div class="mb-5">
                            <div class="space-y-2">
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>AI-powered automation</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Real-time collaboration</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    <span>Enterprise security</span>
                                </div>
                            </div>
                        </div>
                        
                        <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                            Start Free Trial
                        </button>
                        
                        <div class="mt-3 text-center">
                            <span class="text-xs text-gray-500">Recommended solution • <span class="text-blue-600">Sponsored</span></span>
                        </div>
                    </div>
                \`;
            }
            
            function generateCreativeAd(brandName) {
                return \`
                    <div class="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-3xl p-6 border-2 border-pink-200 max-w-md mx-auto shadow-xl">
                        <!-- Creative Header -->
                        <div class="text-center mb-5">
                            <div class="w-16 h-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <span class="text-white font-bold text-2xl">\${brandName.charAt(0)}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 text-xl mb-2">\${brandName} Studio</h3>
                            <p class="text-purple-700 text-sm font-medium">Creative Suite for Professionals</p>
                        </div>
                        
                        <!-- Creative Features -->
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-palette text-pink-600"></i>
                                </div>
                                <span class="text-gray-700 text-sm">Advanced design tools</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-magic text-purple-600"></i>
                                </div>
                                <span class="text-gray-700 text-sm">AI-powered creativity</span>
                            </div>
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                                    <i class="fas fa-users text-indigo-600"></i>
                                </div>
                                <span class="text-gray-700 text-sm">Collaborative workspace</span>
                            </div>
                        </div>
                        
                        <!-- Creator Testimonial -->
                        <div class="bg-white rounded-2xl p-4 mb-5 border border-gray-200">
                            <div class="flex items-center mb-2">
                                <div class="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                                <span class="text-sm font-medium text-gray-800">Alex Chen, Designer</span>
                            </div>
                            <p class="text-gray-600 text-xs italic">"\${brandName} transformed my creative workflow. The AI features are incredible!"</p>
                            <div class="text-yellow-500 text-sm mt-1">★★★★★</div>
                        </div>
                        
                        <button class="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-3 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                            Unleash Creativity
                        </button>
                        
                        <div class="mt-3 text-center">
                            <span class="text-xs text-gray-500">Featured creator tool • <span class="text-purple-600">Sponsored</span></span>
                        </div>
                    </div>
                \`;
            }
            
            function generateBusinessAd(brandName) {
                return \`
                    <div class="bg-white rounded-2xl p-6 border border-gray-300 max-w-lg mx-auto shadow-lg">
                        <!-- Business Header -->
                        <div class="flex items-center justify-between mb-5">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-3">
                                    <span class="text-white font-bold text-lg">\${brandName.charAt(0)}</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900 text-lg">\${brandName} Analytics</h3>
                                    <p class="text-gray-600 text-sm">Business Intelligence Platform</p>
                                </div>
                            </div>
                            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Enterprise</span>
                        </div>
                        
                        <!-- Key Metrics Dashboard Preview -->
                        <div class="bg-gray-50 rounded-xl p-4 mb-5">
                            <div class="text-sm text-gray-600 mb-3">Live Performance Dashboard</div>
                            <div class="grid grid-cols-3 gap-3">
                                <div class="text-center">
                                    <div class="text-lg font-bold text-blue-600">99.9%</div>
                                    <div class="text-xs text-gray-500">Uptime</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-lg font-bold text-green-600">500+</div>
                                    <div class="text-xs text-gray-500">Integrations</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-lg font-bold text-purple-600">SOC2</div>
                                    <div class="text-xs text-gray-500">Certified</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Enterprise Features -->
                        <div class="mb-5">
                            <div class="text-sm font-semibold text-gray-800 mb-3">Enterprise Features:</div>
                            <div class="grid grid-cols-2 gap-2">
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-shield-alt text-green-500 mr-2"></i>
                                    <span>Advanced Security</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-chart-line text-blue-500 mr-2"></i>
                                    <span>Real-time Analytics</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-cogs text-purple-500 mr-2"></i>
                                    <span>Custom Workflows</span>
                                </div>
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-headset text-orange-500 mr-2"></i>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                        
                        <button class="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all">
                            Request Enterprise Demo
                        </button>
                        
                        <div class="mt-3 text-center">
                            <span class="text-xs text-gray-500">Trusted by Fortune 500 • <span class="text-gray-700">Sponsored</span></span>
                        </div>
                    </div>
                \`;
            }
            
            // ChatGPT Format Variations
            function generateChatGPTInlineAd(brandName) {
                return \`
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-200 max-w-md mx-auto">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                <i class="fas fa-robot text-white text-sm"></i>
                            </div>
                            <span class="font-medium text-gray-800">ChatGPT Response</span>
                        </div>
                        <div class="bg-white rounded-lg p-3 shadow-sm">
                            <p class="text-gray-700 text-sm mb-3">For your needs, I'd recommend <strong>\${brandName}</strong>:</p>
                            <div class="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg border border-blue-200">
                                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                    <span class="text-white font-bold">\${brandName.charAt(0)}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-semibold text-gray-900 text-sm">\${brandName}</h4>
                                        <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Ad</span>
                                    </div>
                                    <p class="text-gray-600 text-xs">Trusted by professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateChatGPTProductCard(brandName) {
                return \`
                    <div class="bg-white rounded-2xl p-5 border border-gray-300 max-w-sm mx-auto shadow-lg">
                        <div class="text-center mb-4">
                            <div class="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3">
                                <i class="fas fa-robot mr-1"></i> ChatGPT Recommendation
                            </div>
                            <div class="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                                <span class="text-white font-bold text-2xl">\${brandName.charAt(0)}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 text-xl mb-2">\${brandName}</h3>
                            <p class="text-gray-600 text-sm mb-4">AI-recommended solution for your specific use case</p>
                        </div>
                        <div class="bg-gray-50 rounded-xl p-4 mb-4">
                            <div class="text-sm text-gray-700 mb-2">Key Features:</div>
                            <div class="space-y-1">
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-check text-green-500 mr-2"></i>Easy integration
                                </div>
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-check text-green-500 mr-2"></i>Scalable solution
                                </div>
                                <div class="flex items-center text-xs text-gray-600">
                                    <i class="fas fa-check text-green-500 mr-2"></i>24/7 support
                                </div>
                            </div>
                        </div>
                        <button class="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-bold">
                            Explore \${brandName}
                        </button>
                    </div>
                \`;
            }
            
            function generateChatGPTSummaryUnit(brandName) {
                return \`
                    <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200 max-w-lg mx-auto">
                        <div class="flex items-start space-x-3">
                            <div class="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                                <i class="fas fa-lightbulb text-white"></i>
                            </div>
                            <div class="flex-1">
                                <div class="font-semibold text-gray-900 mb-2">ChatGPT Analysis Summary</div>
                                <p class="text-gray-700 text-sm mb-3">
                                    After analyzing your requirements, <strong>\${brandName}</strong> emerges as the top recommendation based on feature matching and user feedback.
                                </p>
                                <div class="bg-white rounded-lg p-3 border">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="font-medium text-gray-900">\${brandName}</span>
                                        <span class="text-green-600 text-sm font-semibold">95% Match</span>
                                    </div>
                                    <div class="text-xs text-gray-600 mb-2">Recommended for: Productivity, Collaboration, Scalability</div>
                                    <button class="bg-green-600 text-white px-4 py-1 rounded text-xs font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            // Shopping Format Variations
            function generateShoppingInlineAd(brandName) {
                return \`
                    <div class="bg-white rounded-xl p-4 border border-orange-200 max-w-md mx-auto shadow-md">
                        <div class="flex items-center justify-between mb-3">
                            <span class="text-sm font-medium text-orange-600">🛒 Shopping Result</span>
                            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">Sponsored</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                                <span class="text-white font-bold text-xl">\${brandName.charAt(0)}</span>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-900">\${brandName} Products</h4>
                                <div class="flex items-center space-x-2 my-1">
                                    <span class="text-yellow-500">★★★★★</span>
                                    <span class="text-sm text-gray-600">4.8 (2.1k)</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-lg font-bold text-green-600">From $99</span>
                                    <span class="text-xs text-green-600">✓ Free shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateShoppingProductCard(brandName) {
                return \`
                    <div class="bg-white rounded-2xl p-5 border-2 border-orange-300 max-w-sm mx-auto shadow-xl">
                        <div class="relative">
                            <div class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                                30% OFF
                            </div>
                            <div class="text-center mb-4">
                                <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <span class="text-white font-bold text-3xl">\${brandName.charAt(0)}</span>
                                </div>
                                <h3 class="font-bold text-gray-900 text-lg mb-2">\${brandName} Collection</h3>
                                <div class="flex justify-center items-center space-x-2 mb-2">
                                    <span class="text-yellow-500">★★★★★</span>
                                    <span class="text-sm text-gray-600">(1,234 reviews)</span>
                                </div>
                            </div>
                            <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 mb-4">
                                <div class="text-center">
                                    <div class="flex items-center justify-center space-x-2">
                                        <span class="text-2xl font-bold text-gray-900">$99</span>
                                        <span class="text-lg text-gray-500 line-through">$149</span>
                                    </div>
                                    <div class="text-green-600 text-sm font-medium">Limited time offer</div>
                                </div>
                            </div>
                            <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                \`;
            }
            
            function generateShoppingSummaryUnit(brandName) {
                return \`
                    <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200 max-w-lg mx-auto">
                        <div class="text-center mb-4">
                            <h4 class="font-bold text-gray-900 text-lg mb-2">🛒 Shopping Recommendation</h4>
                            <p class="text-gray-600 text-sm">Based on your search and preferences</p>
                        </div>
                        <div class="bg-white rounded-xl p-4 shadow-sm">
                            <div class="grid grid-cols-3 gap-3">
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-purple-600 font-bold">\${brandName.charAt(0)}</span>
                                    </div>
                                    <div class="text-xs font-medium">\${brandName}</div>
                                    <div class="text-xs text-green-600">$99</div>
                                </div>
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-gray-600 font-bold">A</span>
                                    </div>
                                    <div class="text-xs font-medium">Alternative</div>
                                    <div class="text-xs text-gray-600">$129</div>
                                </div>
                                <div class="text-center">
                                    <div class="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                        <span class="text-gray-600 font-bold">B</span>
                                    </div>
                                    <div class="text-xs font-medium">Option B</div>
                                    <div class="text-xs text-gray-600">$149</div>
                                </div>
                            </div>
                            <div class="mt-3 text-center">
                                <button class="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium text-sm">
                                    Compare All
                                </button>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            // Add similar patterns for other platforms...
            function generateProductivityInlineAd(brandName) {
                return \`
                    <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 max-w-md mx-auto">
                        <div class="flex items-center mb-3">
                            <i class="fas fa-bolt text-blue-600 mr-2"></i>
                            <span class="font-medium text-blue-800">Productivity Boost</span>
                        </div>
                        <div class="flex items-center space-x-3 bg-white rounded-lg p-3">
                            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold">\${brandName.charAt(0)}</span>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-900">\${brandName}</h4>
                                <p class="text-xs text-gray-600">Save 40% time on workflows</p>
                                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Free Trial</span>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateProductivityProductCard(brandName) {
                return generateProductivityAd(brandName); // Use existing detailed version
            }
            
            function generateProductivitySummaryUnit(brandName) {
                return \`
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200 max-w-lg mx-auto">
                        <h4 class="font-bold text-gray-900 mb-3">⚡ Productivity Analysis</h4>
                        <div class="bg-white rounded-lg p-3">
                            <div class="flex items-center justify-between mb-2">
                                <span class="font-medium">\${brandName}</span>
                                <span class="text-blue-600 font-bold">40% faster</span>
                            </div>
                            <p class="text-sm text-gray-600 mb-2">Best for: Team collaboration, automation</p>
                            <button class="bg-blue-600 text-white px-4 py-1 rounded text-sm">Try Free</button>
                        </div>
                    </div>
                \`;
            }
            
            // Creative platform variations
            function generateCreativeInlineAd(brandName) {
                return \`
                    <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200 max-w-md mx-auto">
                        <div class="flex items-center space-x-3">
                            <div class="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                                <span class="text-white font-bold text-lg">\${brandName.charAt(0)}</span>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-900">\${brandName} Studio</h4>
                                <p class="text-sm text-purple-600">Creative tools for professionals</p>
                                <span class="text-xs bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-2 py-1 rounded">Design Suite</span>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateCreativeProductCard(brandName) {
                return generateCreativeAd(brandName); // Use existing detailed version
            }
            
            function generateCreativeSummaryUnit(brandName) {
                return \`
                    <div class="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200 max-w-lg mx-auto">
                        <h4 class="font-bold text-gray-900 mb-3">🎨 Creative Suite Comparison</h4>
                        <div class="space-y-2">
                            <div class="bg-white rounded-lg p-2 border border-pink-200">
                                <div class="flex items-center justify-between">
                                    <span class="font-medium">\${brandName}</span>
                                    <span class="text-pink-600">★ Best Match</span>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-lg p-2">
                                <span class="text-sm text-gray-600">Alternative tools available</span>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            // Business platform variations
            function generateBusinessInlineAd(brandName) {
                return \`
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-300 max-w-md mx-auto">
                        <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                                <span class="text-white font-bold">\${brandName.charAt(0)}</span>
                            </div>
                            <div class="flex-1">
                                <h4 class="font-bold text-gray-900">\${brandName} Enterprise</h4>
                                <p class="text-sm text-gray-600">Business intelligence platform</p>
                                <span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Enterprise</span>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateBusinessProductCard(brandName) {
                return generateBusinessAd(brandName); // Use existing detailed version
            }
            
            function generateBusinessSummaryUnit(brandName) {
                return \`
                    <div class="bg-gray-50 rounded-xl p-4 border border-gray-300 max-w-lg mx-auto">
                        <h4 class="font-bold text-gray-900 mb-3">📊 Business Intelligence</h4>
                        <div class="bg-white rounded-lg p-3">
                            <div class="grid grid-cols-3 gap-2 mb-2">
                                <div class="text-center">
                                    <div class="text-lg font-bold text-blue-600">99.9%</div>
                                    <div class="text-xs text-gray-500">Uptime</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-lg font-bold text-green-600">SOC2</div>
                                    <div class="text-xs text-gray-500">Certified</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-lg font-bold text-purple-600">500+</div>
                                    <div class="text-xs text-gray-500">Integrations</div>
                                </div>
                            </div>
                            <button class="w-full bg-gray-900 text-white py-2 rounded text-sm font-medium">
                                Request Demo
                            </button>
                        </div>
                    </div>
                \`;
            }
            
            function generateDefaultAd(brandName) {
                return \`
                    <div class="bg-white rounded-xl p-5 border border-gray-200 max-w-md mx-auto shadow-md">
                        <div class="text-center">
                            <div class="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
                                <span class="text-white font-bold text-xl">\${brandName.charAt(0)}</span>
                            </div>
                            <h3 class="font-bold text-gray-900 text-lg mb-2">\${brandName}</h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">Contextual recommendation based on user intent and search behavior</p>
                            <button class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                                Learn More
                            </button>
                            <div class="mt-3 text-xs text-gray-500">Sponsored content</div>
                        </div>
                    </div>
                \`;
            }
            
            function updateMetrics() {
                // Platform-specific performance metrics
                const platformMetrics = {
                    'search': { ctr: [3.2, 4.8], engagement: [88, 96], relevance: [92, 98] },
                    'chatgpt': { ctr: [2.8, 4.2], engagement: [85, 93], relevance: [89, 95] },
                    'shopping': { ctr: [4.1, 6.2], engagement: [91, 97], relevance: [94, 99] },
                    'productivity': { ctr: [2.6, 3.8], engagement: [82, 90], relevance: [86, 92] },
                    'creative': { ctr: [3.5, 5.1], engagement: [88, 95], relevance: [87, 94] },
                    'business': { ctr: [2.4, 3.6], engagement: [84, 91], relevance: [90, 96] }
                };
                
                const metrics = platformMetrics[currentPlatform] || platformMetrics['search'];
                
                // Generate realistic metrics with platform-specific ranges
                const ctr = (Math.random() * (metrics.ctr[1] - metrics.ctr[0]) + metrics.ctr[0]).toFixed(1);
                const engagement = Math.round(Math.random() * (metrics.engagement[1] - metrics.engagement[0]) + metrics.engagement[0]);
                const relevance = Math.round(Math.random() * (metrics.relevance[1] - metrics.relevance[0]) + metrics.relevance[0]);
                
                // Animate the updates
                animateMetricUpdate('predicted-ctr', ctr + '%');
                animateMetricUpdate('engagement-score', engagement);
                animateMetricUpdate('relevance-match', relevance + '%');
                
                // Add visual feedback based on performance
                updateMetricColors(parseFloat(ctr), engagement, relevance);
            }
            
            function animateMetricUpdate(elementId, newValue) {
                const element = document.getElementById(elementId);
                if (!element) return;
                
                // Add scale animation
                element.style.transform = 'scale(1.1)';
                element.style.transition = 'all 0.3s ease';
                
                setTimeout(() => {
                    element.textContent = newValue;
                    element.style.transform = 'scale(1)';
                }, 150);
            }
            
            function updateMetricColors(ctr, engagement, relevance) {
                // Update CTR color
                const ctrElement = document.getElementById('predicted-ctr');
                if (ctrElement) {
                    ctrElement.className = ctr >= 4.0 ? 'text-2xl font-bold text-green-600' :
                                          ctr >= 3.0 ? 'text-2xl font-bold text-blue-600' :
                                          ctr >= 2.0 ? 'text-2xl font-bold text-yellow-600' :
                                          'text-2xl font-bold text-orange-600';
                }
                
                // Update engagement color
                const engagementElement = document.getElementById('engagement-score');
                if (engagementElement) {
                    engagementElement.className = engagement >= 90 ? 'text-2xl font-bold text-green-600' :
                                                 engagement >= 85 ? 'text-2xl font-bold text-blue-600' :
                                                 engagement >= 80 ? 'text-2xl font-bold text-yellow-600' :
                                                 'text-2xl font-bold text-orange-600';
                }
                
                // Update relevance color
                const relevanceElement = document.getElementById('relevance-match');
                if (relevanceElement) {
                    relevanceElement.className = relevance >= 95 ? 'text-2xl font-bold text-green-600' :
                                                relevance >= 90 ? 'text-2xl font-bold text-purple-600' :
                                                relevance >= 85 ? 'text-2xl font-bold text-blue-600' :
                                                'text-2xl font-bold text-yellow-600';
                }
            }
            
            function sharePreview() {
                const url = document.getElementById('brand-url').value;
                const platform = document.getElementById('platform-category').value;
                const brandName = url ? url.replace('https://', '').replace('http://', '').split('.')[0] : 'your brand';
                
                // Create shareable preview summary
                const previewData = {
                    brand: brandName,
                    platform: platform,
                    format: currentAdFormat,
                    metrics: {
                        ctr: document.getElementById('predicted-ctr')?.textContent || '2.8%',
                        engagement: document.getElementById('engagement-score')?.textContent || '89',
                        relevance: document.getElementById('relevance-match')?.textContent || '94%'
                    },
                    timestamp: new Date().toLocaleDateString()
                };
                
                // Generate shareable content
                const shareContent = \`Earnly AI Ad Preview - \${brandName.charAt(0).toUpperCase() + brandName.slice(1)}\\n\\n\` +
                    \`Platform: \${platform}\\n\` +
                    \`Format: \${currentAdFormat}\\n\\n\` +
                    \`Predicted Performance:\\n\` +
                    \`• CTR: \${previewData.metrics.ctr}\\n\` +
                    \`• Engagement: \${previewData.metrics.engagement}\\n\` +
                    \`• Relevance: \${previewData.metrics.relevance}\\n\\n\` +
                    \`Generated on \${previewData.timestamp}\\n\\n\` +
                    \`Ready to launch? Contact Earnly AI for campaign setup.\`;
                
                // Copy to clipboard or show share options
                if (navigator.share) {
                    navigator.share({
                        title: \`Earnly AI Preview - \${brandName}\`,
                        text: shareContent
                    }).catch(() => {
                        // Fallback to copy
                        copyToClipboard(shareContent);
                    });
                } else {
                    copyToClipboard(shareContent);
                }
            }
            
            function copyToClipboard(text) {
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(() => {
                        alert('Preview details copied to clipboard! Share with your team.');
                    }).catch(() => {
                        showManualCopy(text);
                    });
                } else {
                    showManualCopy(text);
                }
            }
            
            function showManualCopy(text) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    alert('Preview details copied to clipboard! Share with your team.');
                } catch (err) {
                    alert('Preview Details:\\\\n\\\\n' + text);
                }
                document.body.removeChild(textarea);
            }
            
            function collapsePreview() {
                const resultsContainer = document.getElementById('brand-preview-results');
                const demoContainer = document.getElementById('brand-demo');
                
                if (resultsContainer && demoContainer) {
                    // Add collapse animation
                    resultsContainer.style.transition = 'all 0.3s ease';
                    resultsContainer.style.opacity = '0';
                    resultsContainer.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        resultsContainer.classList.add('hidden');
                        resultsContainer.style.opacity = '';
                        resultsContainer.style.transform = '';
                        
                        // Scroll back to the demo section smoothly
                        demoContainer.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                        
                        // Reset form state
                        resetPreviewForm();
                    }, 300);
                }
            }
            
            function resetPreviewForm() {
                // Reset the preview container
                const previewContainer = document.getElementById('ad-preview-container');
                if (previewContainer) {
                    previewContainer.innerHTML = \`
                        <div class="text-center text-gray-500 py-8">
                            <i class="fas fa-eye text-4xl mb-4 text-gray-300"></i>
                            <p class="text-gray-600">Enter a URL and select platform to generate preview</p>
                            <p class="text-gray-500 text-sm mt-2">Your ad preview will appear here</p>
                        </div>
                    \`;
                }
                
                // Reset metrics to defaults
                const ctrElement = document.getElementById('predicted-ctr');
                const engagementElement = document.getElementById('engagement-score');
                const relevanceElement = document.getElementById('relevance-match');
                
                if (ctrElement) {
                    ctrElement.textContent = '2.8%';
                    ctrElement.className = 'text-2xl font-bold text-green-600';
                }
                if (engagementElement) {
                    engagementElement.textContent = '89';
                    engagementElement.className = 'text-2xl font-bold text-blue-600';
                }
                if (relevanceElement) {
                    relevanceElement.textContent = '94%';
                    relevanceElement.className = 'text-2xl font-bold text-purple-600';
                }
                
                // Reset preview button text
                const previewButtonText = document.getElementById('preview-button-text');
                if (previewButtonText) {
                    previewButtonText.textContent = 'Generate Preview';
                }
            }
            
            function openVarioDemo() {
                // Open Vario™ demo in new window
                const varioUrl = 'https://vario-demo.earnly.com'; // Placeholder
                alert('Vario™ AI Search Engine Demo\\n\\nExperience our AI-powered search platform with smart recommendations.\\n\\nFeatures:\\n• Contextual AI responses\\n• Smart product recommendations\\n• Real-time learning\\n• Enterprise-grade accuracy\\n\\nDemo coming soon!');
            }
            
            // Navigation Functions
            function startCampaign() {
                alert('Campaign setup coming soon! Contact our team for early access.');
            }
            
            function startTrial() {
                alert('Free trial setup coming soon! Contact our team for early access.');
            }
            
            function scheduleDemo() {
                alert('Demo scheduling coming soon! Contact our team to book a personalized demo.');
            }
            
            function startDemo() {
                alert('Dashboard demo coming soon! Contact our team to see the full analytics platform in action.');
            }
            
            // Initialize on load
            document.addEventListener('DOMContentLoaded', function() {
                selectAdFormat('inline'); // Set default format
            });
        </script>
    </body>
    </html>
  `
}