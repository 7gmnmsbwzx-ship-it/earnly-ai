// GEO Report - Generative Engine Optimization Performance Tracking
export const GeoReportPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GEO Report | Earnly - Generative Engine Optimization</title>
        <meta name="description" content="Track your Generative Engine Optimization performance across AI platforms. Monitor AI search rankings, optimization scores, and conversion rates across ChatGPT, Claude, Gemini, and more.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <!-- Additional Libraries -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        
        <style>
          /* Dark theme matching homepage */
          body {
            background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .geo-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .geo-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          .ai-platform-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }
          
          .ai-platform-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border-color: rgba(139, 92, 246, 0.6);
            background: rgba(255, 255, 255, 0.15);
          }
          
          .optimization-score {
            background: conic-gradient(from 0deg, #10b981, #34d399, #fbbf24, #f59e0b, #ef4444);
            border-radius: 50%;
            position: relative;
          }
          
          .score-pulse {
            animation: scorePulse 2s infinite;
          }
          
          @keyframes scorePulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
            50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(139, 92, 246, 0.8); }
          }
          
          .trend-up {
            color: #34d399;
            animation: trendUp 1s ease-in-out infinite alternate;
          }
          
          .trend-down {
            color: #f87171;
            animation: trendDown 1s ease-in-out infinite alternate;
          }
          
          @keyframes trendUp {
            from { transform: translateY(0); }
            to { transform: translateY(-2px); }
          }
          
          @keyframes trendDown {
            from { transform: translateY(0); }
            to { transform: translateY(2px); }
          }
          
          .ai-suggestions {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid #10b981;
            backdrop-filter: blur(10px);
          }
          
          .floating-widget {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
            animation: glow 2s ease-in-out infinite alternate;
          }
          
          @keyframes glow {
            from { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
            to { box-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6); }
          }
          
          .glass-nav {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .metric-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .platform-gradient-chatgpt { background: linear-gradient(135deg, #10a37f, #00d4aa); }
          .platform-gradient-claude { background: linear-gradient(135deg, #d97706, #f59e0b); }
          .platform-gradient-gemini { background: linear-gradient(135deg, #4285f4, #34a853); }
          .platform-gradient-perplexity { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
          
          .btn-interactive {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .btn-interactive:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
          
          .earnly-logo {
            height: 40px;
            width: auto;
            object-fit: contain;
            transition: all 0.3s ease;
            opacity: 0.95;
          }
          
          .earnly-logo:hover {
            opacity: 1;
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        </style>
    </head>
    <body class="text-white overflow-x-hidden min-h-screen">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass-nav">
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
                        <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                        <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                        <div class="hidden lg:flex items-center space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                                <span class="text-green-400">Live</span>
                            </div>
                            <span class="text-gray-400">|</span>
                            <span class="text-white">Real-time GEO</span>
                        </div>
                        
                        <button class="btn-interactive text-white px-6 py-2 rounded-lg font-semibold">
                            Export Report
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Free GEO Report Generator Section -->
        <section class="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            
            <!-- Floating Background Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="floating-widget absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating-widget absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating-widget absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-green-500 bg-opacity-20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-lg border border-green-500 border-opacity-30">
                        <i class="fas fa-gift"></i>
                        <span>Free Report Generator</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                        Instantly Generate Your
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                            Free GEO Report
                        </span>
                    </h1>
                    
                    <p class="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Simply enter your website to instantly generate a <strong class="text-green-400">Free GEO Report</strong> showing your traffic and sales by AI-powered recommendations. 
                        See how <strong class="text-blue-400">audience insights</strong> can power your next campaign.
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Report Generator Form -->
                    <div class="glass-card p-8 hover-lift">
                        <div class="mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-chart-line text-purple-600 mr-3"></i>
                                Generate Free Report
                            </h3>
                            <p class="text-gray-600">Enter any website URL to see AI optimization opportunities and performance insights.</p>
                        </div>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <i class="fas fa-globe"></i>
                                    </span>
                                    <input type="url" id="website-url" value="etsy.com" 
                                           class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-semibold text-lg bg-white"
                                           placeholder="example.com" oninput="updateReportPreview()">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                                    <select id="report-industry" onchange="updateReportPreview()" 
                                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900 font-semibold bg-white">
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="marketplace">Marketplace</option>
                                        <option value="saas">SaaS</option>
                                        <option value="retail">Retail</option>
                                        <option value="services">Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Region</label>
                                    <select id="report-region" onchange="updateReportPreview()" 
                                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900 font-semibold bg-white">
                                        <option value="global">Global</option>
                                        <option value="us">United States</option>
                                        <option value="eu">Europe</option>
                                        <option value="asia">Asia-Pacific</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button onclick="generateFreeReport()" 
                                    class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                                <i class="fas fa-chart-bar mr-2"></i>
                                Generate Free Report
                            </button>
                            
                            <div class="text-center">
                                <p class="text-sm text-gray-500">
                                    <i class="fas fa-shield-alt text-green-500 mr-1"></i>
                                    100% Free • No Email Required • Instant Results
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Live Example Preview -->
                    <div class="glass-card p-8">
                        <div class="mb-6 flex items-center justify-between">
                            <h3 class="text-2xl font-bold text-gray-900 flex items-center">
                                <i class="fas fa-eye text-blue-600 mr-3"></i>
                                Live Example: Etsy.com
                            </h3>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                <span class="text-sm text-green-600 font-medium">Live Data</span>
                            </div>
                        </div>
                        
                        <div class="space-y-6">
                            <!-- AI Platform Performance -->
                            <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                                <h4 class="font-semibold text-gray-800 mb-3">AI Platform Visibility</h4>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4 bg-green-500 rounded mr-2"></div>
                                            <span class="text-sm text-gray-700">ChatGPT Mentions</span>
                                        </div>
                                        <span class="font-bold text-green-600">8.7K/month</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                                            <span class="text-sm text-gray-700">Claude Recommendations</span>
                                        </div>
                                        <span class="font-bold text-blue-600">6.2K/month</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <div class="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                                            <span class="text-sm text-gray-700">Gemini Features</span>
                                        </div>
                                        <span class="font-bold text-purple-600">4.9K/month</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Key Insights -->
                            <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                                <h4 class="font-semibold text-gray-800 mb-3">Key Opportunities</h4>
                                <div class="space-y-2">
                                    <div class="flex items-start">
                                        <i class="fas fa-arrow-up text-green-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">47% increase potential in "handmade gifts" queries</span>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-target text-blue-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">Untapped seasonal optimization opportunities</span>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-lightbulb text-purple-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">Content gaps in AI recommendation algorithms</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- CTA for Advertisers -->
                            <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-bullhorn text-orange-600 mr-2"></i>
                                    <h4 class="font-semibold text-gray-800">Advertiser Opportunity</h4>
                                </div>
                                <p class="text-sm text-gray-700 mb-3">
                                    Etsy's audience shows high engagement with AI recommendations. 
                                    <strong>Perfect target for contextual advertising campaigns.</strong>
                                </p>
                                <button onclick="startAdvertiserCampaign()" 
                                        class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-all">
                                    <i class="fas fa-rocket mr-2"></i>
                                    Start Advertising Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Main GEO Analytics Dashboard -->
        <section class="py-16 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center space-x-2 bg-purple-500 bg-opacity-20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-lg border border-purple-500 border-opacity-30">
                        <i class="fas fa-robot"></i>
                        <span>Generative Engine Optimization</span>
                    </div>
                    <h1 class="text-6xl font-bold mb-6">
                        <span class="text-white">GEO Report</span>
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            AI Optimization Performance
                        </span>
                    </h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Track your optimization performance across generative AI platforms. Monitor rankings in ChatGPT, Claude, Gemini, Perplexity, and other AI engines to maximize your visibility and conversions.
                    </p>
                </div>

                <!-- Key Metrics Overview -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div class="geo-card rounded-2xl p-8 text-center floating-widget">
                        <div class="w-20 h-20 platform-gradient-chatgpt rounded-full flex items-center justify-center mx-auto mb-6 score-pulse">
                            <i class="fas fa-search text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="overall-score">87</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">Overall GEO Score</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+12.4%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -0.5s;">
                        <div class="w-20 h-20 platform-gradient-claude rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-eye text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="visibility-score">92</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI Visibility Score</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+8.7%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -1s;">
                        <div class="w-20 h-20 platform-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="conversion-rate">15.8%</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI Conversion Rate</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+23.1%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -1.5s;">
                        <div class="w-20 h-20 platform-gradient-perplexity rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-dollar-sign text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="ai-revenue">$47.2K</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI-Generated Revenue</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+34.5%</span>
                        </div>
                    </div>
                </div>

                <!-- AI Platforms Performance -->
                <div class="geo-card rounded-2xl p-10 mb-16">
                    <div class="flex items-center justify-between mb-10">
                        <h2 class="text-3xl font-bold text-white flex items-center">
                            <i class="fas fa-robot mr-4 text-blue-400"></i>
                            AI Platform Performance
                        </h2>
                        <select class="bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl px-6 py-3 text-white backdrop-blur-lg" id="platform-filter">
                            <option value="all">All Platforms</option>
                            <option value="chatgpt">ChatGPT</option>
                            <option value="claude">Claude</option>
                            <option value="gemini">Gemini</option>
                            <option value="perplexity">Perplexity</option>
                        </select>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8" id="ai-platforms">
                        <!-- Platform cards will be populated by JavaScript -->
                    </div>
                </div>

                <!-- Performance Trends -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div class="geo-card rounded-2xl p-10">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center">
                            <i class="fas fa-chart-area mr-4 text-blue-400"></i>
                            Optimization Score Trends
                        </h3>
                        <canvas id="optimization-trends-chart" width="400" height="200"></canvas>
                    </div>

                    <div class="geo-card rounded-2xl p-10">
                        <h3 class="text-2xl font-bold text-white mb-8 flex items-center">
                            <i class="fas fa-users mr-4 text-green-400"></i>
                            AI Query Performance
                        </h3>
                        <canvas id="query-performance-chart" width="400" height="200"></canvas>
                    </div>
                </div>

                <!-- AI Optimization Suggestions -->
                <div class="geo-card rounded-2xl p-10 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-10 flex items-center">
                        <i class="fas fa-lightbulb mr-4 text-yellow-400"></i>
                        AI Optimization Suggestions
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="optimization-suggestions">
                        <!-- Suggestions will be populated by JavaScript -->
                    </div>
                </div>

                <!-- Query Analysis -->
                <div class="geo-card rounded-2xl p-10 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-10 flex items-center">
                        <i class="fas fa-brain mr-4 text-purple-400"></i>
                        AI Query Analysis
                    </h2>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div class="lg:col-span-2">
                            <h3 class="text-xl font-semibold text-white mb-6">Top Performing Queries</h3>
                            <div class="space-y-4" id="top-queries">
                                <!-- Query data will be populated by JavaScript -->
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-white mb-6">Query Categories</h3>
                            <canvas id="query-categories-chart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Export and Actions -->
                <div class="text-center">
                    <div class="inline-flex items-center space-x-6 geo-card rounded-2xl p-8">
                        <button class="btn-interactive text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center text-lg font-semibold" onclick="exportGEOReport('pdf')">
                            <i class="fas fa-file-pdf mr-3"></i>
                            Export PDF Report
                        </button>
                        <button class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 flex items-center text-lg font-semibold" onclick="exportGEOReport('excel')">
                            <i class="fas fa-file-excel mr-3"></i>
                            Export Excel Data
                        </button>
                        <button class="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-violet-700 transition-all transform hover:scale-105 flex items-center text-lg font-semibold" onclick="scheduleReport()">
                            <i class="fas fa-calendar-alt mr-3"></i>
                            Schedule Report
                        </button>
                    </div>
                </div>
            </div>
        </section>

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

        <script src="/static/geo-report.js"></script>
    </body>
    </html>
  `
}