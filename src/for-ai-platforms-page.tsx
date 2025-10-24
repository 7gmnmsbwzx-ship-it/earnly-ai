// For AI Platforms - Integration & Revenue Opportunities Page
export const ForAIPlatformsPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For AI Platforms | Earnly - Monetize Every Conversation</title>
        <meta name="description" content="Transform your AI platform into a revenue engine. Seamless integration, contextual recommendations, transparent earnings.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
          .integration-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .integration-card:hover {
            transform: translateY(-8px) rotateY(5deg);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          }
          
          .revenue-metric {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            animation: revenue-pulse 3s infinite;
          }
          
          @keyframes revenue-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
          }
          
          .code-preview {
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
            font-family: 'Monaco', 'Menlo', monospace;
          }
          
          .tech-stack {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          }
          
          /* Custom slider styles */
          .slider {
            -webkit-appearance: none;
            background: transparent;
            cursor: pointer;
          }
          
          .slider::-webkit-slider-track {
            background: #374151;
            height: 8px;
            border-radius: 4px;
          }
          
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #1f2937;
          }
          
          .slider::-moz-range-track {
            background: #374151;
            height: 8px;
            border-radius: 4px;
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #1f2937;
          }
        </style>
    </head>
    <body class="bg-gray-900 text-white overflow-x-hidden">
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
                        <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                        <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        <a href="/dashboard/platform" class="text-white hover:text-blue-400 transition-colors bg-green-600 bg-opacity-20 px-3 py-1 rounded-lg border border-green-500 border-opacity-30">
                            <i class="fas fa-cogs mr-2"></i>Dashboard
                        </a>
                        <button onclick="startIntegrationNow()" class="btn-interactive bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Start Integration
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center animated-bg pt-16">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-fade-in-up">
                        <div class="mb-6">
                            <div class="inline-flex items-center space-x-2 bg-green-600 bg-opacity-20 rounded-full px-4 py-2 mb-4">
                                <i class="fas fa-robot text-green-400"></i>
                                <span class="text-green-400 font-semibold">For AI Platforms</span>
                            </div>
                        </div>
                        
                        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Turn Conversations Into
                            <span class="text-gradient text-glow">Revenue Streams</span>
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                            Seamlessly monetize your AI platform with contextual recommendations that 
                            <span class="text-green-400 font-semibold">users actually appreciate</span>. 
                            <span class="text-blue-400 font-semibold">One SDK call</span> to unlock 
                            <span class="text-purple-400 font-semibold">unlimited revenue potential</span>.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                            <button onclick="startQuickIntegration()" class="btn-interactive bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                                <i class="fas fa-code mr-3"></i>
                                Quick Integration
                            </button>
                            <button onclick="viewLiveDemo()" class="btn-interactive bg-white bg-opacity-10 border border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                                <i class="fas fa-play mr-3"></i>
                                See Live Demo
                            </button>
                        </div>
                        
                        <!-- Live Revenue Metrics -->
                        <div class="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <div class="text-3xl font-bold text-green-400 counter" id="live-monthly-revenue" data-target="124750">$124,750</div>
                                <div class="text-gray-300 text-sm">Monthly Revenue</div>
                                <div class="text-gray-400 text-xs">average performance</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-blue-400 counter" id="live-integration-time" data-target="15">15min</div>
                                <div class="text-gray-300 text-sm">Avg Integration Time</div>
                                <div class="text-gray-400 text-xs">to first revenue</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-purple-400 counter" id="live-satisfaction" data-target="94">94%</div>
                                <div class="text-gray-300 text-sm">User Satisfaction</div>
                                <div class="text-gray-400 text-xs">recommendation quality</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Live Integration Preview -->
                    <div class="animate-scale-in">
                        <div class="glass-card p-6 hover-lift">
                            <div class="mb-4 flex items-center justify-between">
                                <h3 class="text-xl font-bold text-gray-800">Live Integration Preview</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                    <span class="text-sm text-green-600 font-medium">Running</span>
                                </div>
                            </div>
                            
                            <!-- AI Conversation Simulation -->
                            <div class="bg-gray-50 rounded-xl p-4 mb-4">
                                <div class="mb-3">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <i class="fas fa-user text-white text-xs"></i>
                                        </div>
                                        <span class="text-gray-800 font-medium text-sm">User</span>
                                    </div>
                                    <div class="bg-white rounded-lg p-2 ml-8">
                                        <p class="text-gray-800 text-sm">I need a reliable project management tool for my team</p>
                                    </div>
                                </div>
                                
                                <div class="mb-2">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <i class="fas fa-robot text-white text-xs"></i>
                                        </div>
                                        <span class="text-gray-800 font-medium text-sm">Your AI</span>
                                    </div>
                                    <div class="bg-white rounded-lg p-2 ml-8">
                                        <p class="text-gray-800 text-sm mb-2">I can help you find the perfect project management solution! Based on your team size and needs:</p>
                                        
                                        <!-- Earnly Monetization -->
                                        <div class="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-2">
                                            <div class="flex items-center space-x-2">
                                                <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop" 
                                                     class="w-10 h-10 rounded-lg object-cover flex-shrink-0" alt="Product">
                                                <div class="flex-1 min-w-0">
                                                    <div class="flex items-center justify-between">
                                                        <h4 class="font-semibold text-gray-900 text-sm truncate">Asana Premium</h4>
                                                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex-shrink-0">97% Match</span>
                                                    </div>
                                                    <p class="text-xs text-gray-600">Advanced project tracking with team collaboration</p>
                                                    <div class="flex items-center justify-between mt-1">
                                                        <span class="text-sm font-bold text-green-600">Free Trial</span>
                                                        <span class="text-xs text-gray-500"><i class="fas fa-shield-alt mr-1"></i>Sponsored by Earnly</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Integration Code -->
                            <div class="code-preview rounded-xl p-3 text-green-400 text-sm mb-4">
                                <div class="mb-1 text-gray-400 text-xs">// Your integration (3 lines)</div>
                                <div class="mb-1">import { Earnly } from 'earnly-sdk'</div>
                                <div class="mb-1">const recommendations = await earnly.query({</div>
                                <div class="ml-4 mb-1">context: userMessage</div>
                                <div>})</div>
                            </div>
                            
                            <div class="flex space-x-2">
                                <button onclick="tryLiveDemo()" class="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                                    Try Interactive Demo
                                </button>
                                <button onclick="viewFullCode()" class="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-code text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Integration Methods Section -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        Integration Made Simple
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose the integration method that works best for your platform. 
                        From one-line SDK to enterprise webhooks, we support every architecture.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- SDK Integration -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-bolt text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Quick Start SDK</h3>
                        <p class="text-gray-600 mb-6">
                            One line of code, unlimited possibilities. Perfect for rapid integration 
                            and getting started in minutes, not hours.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2">npm install earnly-sdk</div>
                            <div>const recs = earnly.query(context)</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>2-minute setup</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Auto-optimization</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Real-time analytics</li>
                        </ul>
                        
                        <button onclick="startSDKIntegration()" class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Start with SDK
                        </button>
                    </div>
                    
                    <!-- REST API -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">REST API</h3>
                        <p class="text-gray-600 mb-6">
                            Full control with our RESTful API. Perfect for custom implementations 
                            and advanced use cases with complete flexibility.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2">POST /api/recommendations</div>
                            <div>curl -H "Authorization: Bearer $KEY"</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Full customization</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Language agnostic</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Enterprise ready</li>
                        </ul>
                        
                        <button onclick="exploreAPI()" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Explore API
                        </button>
                    </div>
                    
                    <!-- Enterprise Solutions -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-users text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                        <p class="text-gray-600 mb-6">
                            White-label integrations with dedicated support. Custom AI models, 
                            private deployments, and enterprise-grade compliance.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2"># Your dedicated instance</div>
                            <div>your-company.earnly.ai</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Dedicated support</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Custom AI models</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>SOC 2 compliance</li>
                        </ul>
                        
                        <button onclick="contactEnterprise()" class="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why AI Platforms Choose Earnly Section -->
        <section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            <!-- Background effects -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center space-x-2 bg-blue-600 bg-opacity-20 rounded-full px-6 py-3 mb-6 border border-blue-500/30">
                        <i class="fas fa-star text-blue-400"></i>
                        <span class="text-blue-400 font-semibold">Why Choose Earnly</span>
                    </div>
                    <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why AI Platforms Choose
                        <span class="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Earnly</span>
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Join 200+ AI platforms that chose Earnly for seamless monetization with zero compromise on user experience
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Benefits Cards -->
                    <div class="space-y-6">
                        <!-- No Inventory Required -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-box-open text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">No Inventory Required</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    Focus on your AI while we handle product sourcing, affiliate relationships, and inventory management across thousands of partners.
                                </p>
                                <div class="flex items-center text-green-400 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Zero overhead, maximum revenue</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Better User Outcomes -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-heart text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">Better User Outcomes</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    AI-powered contextual recommendations that users actually appreciate. 94% satisfaction rate with recommendations that solve real problems.
                                </p>
                                <div class="flex items-center text-blue-400 font-semibold">
                                    <i class="fas fa-thumbs-up mr-2"></i>
                                    <span>94% user satisfaction rate</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Clear Earning Logic -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-chart-line text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">Clear Earning Logic</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    Transparent revenue sharing with real-time analytics. Know exactly how much you earn from each interaction with detailed breakdowns.
                                </p>
                                <div class="flex items-center text-purple-400 font-semibold">
                                    <i class="fas fa-dollar-sign mr-2"></i>
                                    <span>Real-time revenue tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Platform Dashboard Preview -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl"></div>
                        <div class="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-2xl font-bold text-white">AI Platform Dashboard</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-green-400 font-medium">Live</span>
                                </div>
                            </div>
                            
                            <!-- Revenue Metrics -->
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-4 border border-green-500/30">
                                    <div class="text-green-400 text-sm font-medium mb-1">Monthly Revenue</div>
                                    <div class="text-3xl font-bold text-white">$124,750</div>
                                    <div class="text-green-400 text-sm">↗ +31% this month</div>
                                </div>
                                <div class="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
                                    <div class="text-blue-400 text-sm font-medium mb-1">Conversion Rate</div>
                                    <div class="text-3xl font-bold text-white">1.2%</div>
                                    <div class="text-blue-400 text-sm">↗ +0.3% from last month</div>
                                </div>
                            </div>
                            
                            <!-- Recent Earnings Chart Simulation -->
                            <div class="mb-8">
                                <div class="text-white font-semibold mb-4">Recent Earnings (7 days)</div>
                                <div class="h-32 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl flex items-end justify-between p-4 space-x-2">
                                    <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-sm" style="height: 60%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm" style="height: 45%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm" style="height: 80%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-teal-500 to-teal-400 rounded-sm" style="height: 65%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-pink-500 to-pink-400 rounded-sm" style="height: 90%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-sm" style="height: 75%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-sm" style="height: 95%; width: 12%;"></div>
                                </div>
                            </div>
                            
                            <!-- Top Performing Categories -->
                            <div class="space-y-3">
                                <div class="text-white font-semibold mb-4">Top Performing Categories</div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">E-commerce</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$18,650</span>
                                </div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">SaaS</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$14,280</span>
                                </div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">Finance</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$12,450</span>
                                </div>
                            </div>
                            
                            <div class="mt-6 pt-6 border-t border-white/20">
                                <button onclick="viewFullDashboard()" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                                    <i class="fas fa-external-link-alt mr-2"></i>
                                    View Full Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Earnings Calculator Section -->
        <section class="py-20 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <div class="text-sm text-gray-400 uppercase tracking-wide font-medium mb-4">EARNINGS CALCULATOR</div>
                    <h2 class="text-5xl font-bold text-white mb-6">See Your Earning Potential</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Use our interactive calculator to estimate how much you could earn by integrating 
                        Earnly into your AI platform.
                    </p>
                </div>
                
                <div class="max-w-6xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <!-- Configure Your Platform -->
                        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <div class="flex items-center mb-8">
                                <div class="w-6 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center">
                                    <i class="fas fa-cog text-white text-xs"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white">Configure Your Platform</h3>
                            </div>
                            
                            <!-- Monthly Active Users/Queries -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4">
                                    <label class="text-white text-sm font-medium mr-2">Monthly Active Users/Queries</label>
                                    <div class="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center cursor-help" title="Total monthly active users or queries processed">
                                        <i class="fas fa-question text-xs text-gray-300"></i>
                                    </div>
                                </div>
                                <div class="relative">
                                    <input type="range" id="monthly-users" min="1000" max="10000000" value="25000" step="1000" 
                                           class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                           oninput="calculatePlatformRevenueRealTime()" onchange="calculatePlatformRevenueRealTime()">
                                    <div class="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>1K</span>
                                        <span id="monthly-users-value" class="font-bold text-white">25K</span>
                                        <span>10M</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Qualified Engagement Rate -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4">
                                    <label class="text-white text-sm font-medium mr-2">Qualified Engagement Rate (%)</label>
                                    <div class="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center cursor-help" title="Percentage of engaged users shown offers">
                                        <i class="fas fa-question text-xs text-gray-300"></i>
                                    </div>
                                </div>
                                <div class="relative">
                                    <input type="range" id="sessions-per-user" min="1" max="60" value="15" step="1"
                                           class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                           oninput="calculatePlatformRevenueRealTime()" onchange="calculatePlatformRevenueRealTime()">
                                    <div class="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>10%</span>
                                        <span id="engagement-rate-value" class="font-bold text-white">75%</span>
                                        <span>60%</span>
                                    </div>
                                </div>
                                <p class="text-xs text-gray-400 mt-2">Only engaged users are shown offers (real-world: 5-15% typical for general AI)</p>
                            </div>
                            
                            <!-- Revenue Model -->
                            <div class="mb-8">
                                <div class="text-white text-sm font-medium mb-4">Revenue Model</div>
                                <div class="flex justify-between text-xs text-gray-400 mb-4">
                                    <span>Content Category</span>
                                    <span>Custom Values</span>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <!-- E-commerce -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-ecommerce" onclick="selectCategory('ecommerce')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">E-commerce</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$15 CPA • 1.8%</div>
                                    </div>
                                    
                                    <!-- SaaS -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-green-500" id="category-saas" onclick="selectCategory('saas')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">SaaS</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$25 CPA • 1.5%</div>
                                    </div>
                                    
                                    <!-- Finance -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-finance" onclick="selectCategory('finance')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Finance</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$28 CPA • 1.0%</div>
                                    </div>
                                    
                                    <!-- Education -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-education" onclick="selectCategory('education')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Education</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$18 CPA • 1.5%</div>
                                    </div>
                                    
                                    <!-- Travel -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-travel" onclick="selectCategory('travel')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Travel</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$16 CPA • 1.6%</div>
                                    </div>
                                    
                                    <!-- Health -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-health" onclick="selectCategory('health')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Health</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$20 CPA • 1.4%</div>
                                    </div>
                                </div>
                                
                                <div class="text-xs text-gray-400 mt-3">Realistic CPA: $25 • Conversion Rate: 1.5%</div>
                            </div>
                        </div>
                        
                        <!-- Gross Revenue from Conversions -->
                        <div class="bg-gray-700 rounded-2xl p-8">
                            <div class="flex items-center mb-8">
                                <div class="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                                    <i class="fas fa-chart-line text-white text-xs"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white">Gross Revenue from Conversions</h3>
                            </div>
                            
                            <!-- Main Revenue Display -->
                            <div class="text-center mb-8">
                                <div class="text-6xl font-bold text-white mb-2" id="gross-revenue">$2,640</div>
                                <div class="text-gray-300 text-lg">/mo</div>
                                <div class="text-green-400 text-sm mt-2" id="yearly-revenue">$31,680 /YR</div>
                                <div class="text-xs text-gray-400 mt-2">All figures: "Gross, before fees or splits"</div>
                            </div>
                            
                            <!-- Metrics Grid -->
                            <div class="grid grid-cols-3 gap-4 mb-8">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="monthly-users-display">25,000</div>
                                    <div class="text-xs text-gray-400">Monthly Users</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="engaged-offers">3,750</div>
                                    <div class="text-xs text-gray-400">Engaged w/ Offers</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="paid-conversions">45</div>
                                    <div class="text-xs text-gray-400">Paid Conversions</div>
                                </div>
                            </div>
                            
                            <!-- CPA and Conversion Rate -->
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="text-center bg-gray-800 rounded-lg p-4">
                                    <div class="text-2xl font-bold text-white" id="cpa-rate">$22.00</div>
                                    <div class="text-xs text-gray-400">CPA Rate</div>
                                </div>
                                <div class="text-center bg-gray-800 rounded-lg p-4">
                                    <div class="text-2xl font-bold text-white" id="conversion-rate">1.2%</div>
                                    <div class="text-xs text-gray-400">Conversion Rate</div>
                                </div>
                            </div>
                            
                            <!-- Ready to Start Earning -->
                            <div class="bg-white rounded-xl p-6">
                                <h4 class="text-lg font-bold text-gray-900 text-center mb-4">Ready to Start Earning?</h4>
                                <p class="text-sm text-gray-600 text-center mb-6">
                                    Join Earnly and see how much real revenue your platform can generate from qualified conversions.
                                </p>
                                <button onclick="getStartedEarning()" class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    Get Started
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Technical Documentation -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-4">Developer Resources</h2>
                    <p class="text-xl text-gray-300">Everything you need to integrate and optimize</p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12">
                    <!-- Code Examples -->
                    <div class="space-y-6">
                        <div class="bg-gray-900 rounded-2xl p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-xl font-bold text-white">Quick Integration</h3>
                                <span class="bg-green-600 text-white px-3 py-1 rounded-full text-sm">SDK</span>
                            </div>
                            
                            <div class="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                                <div class="text-gray-400 mb-2">// Install & Initialize</div>
                                <div class="mb-2">npm install earnly-sdk</div>
                                <div class="mb-4">import { Earnly } from 'earnly-sdk'</div>
                                
                                <div class="text-gray-400 mb-2">// Get recommendations</div>
                                <div class="mb-2">const earnly = new Earnly('your-api-key')</div>
                                <div class="mb-2">const recs = await earnly.query({</div>
                                <div class="ml-4 mb-2">context: userMessage,</div>
                                <div class="ml-4 mb-2">userId: userId,</div>
                                <div class="ml-4 mb-2">platform: 'your-platform'</div>
                                <div class="mb-4">})</div>
                                
                                <div class="text-gray-400 mb-2">// Display recommendations</div>
                                <div>recs.forEach(rec => display(rec))</div>
                            </div>
                        </div>
                        
                        <div class="bg-gray-900 rounded-2xl p-6">
                            <div class="flex items-center justify-between mb-4">
                                <h3 class="text-xl font-bold text-white">REST API Example</h3>
                                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">API</span>
                            </div>
                            
                            <div class="bg-black rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                                <div class="text-gray-400 mb-2">// POST /api/recommendations</div>
                                <div class="mb-2">curl -X POST \\</div>
                                <div class="mb-2">  -H "Authorization: Bearer $API_KEY" \\</div>
                                <div class="mb-2">  -H "Content-Type: application/json" \\</div>
                                <div class="mb-2">  -d '{</div>
                                <div class="ml-4 mb-2">"context": "user message",</div>
                                <div class="ml-4 mb-2">"userId": "user_123",</div>
                                <div class="ml-4 mb-2">"platform": "your-platform"</div>
                                <div class="mb-4">  }' \\</div>
                                <div>  https://api.earnly.com/recommendations</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Documentation Links -->
                    <div class="space-y-6">
                        <div class="bg-white rounded-2xl p-8">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Documentation</h3>
                            
                            <div class="space-y-4">
                                <a href="#" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors">
                                    <div class="flex items-center">
                                        <i class="fas fa-rocket text-green-600 mr-3"></i>
                                        <div>
                                            <div class="font-semibold text-gray-900">Quick Start Guide</div>
                                            <div class="text-sm text-gray-600">Get up and running in 5 minutes</div>
                                        </div>
                                    </div>
                                    <i class="fas fa-arrow-right text-gray-400"></i>
                                </a>
                                
                                <a href="#" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors">
                                    <div class="flex items-center">
                                        <i class="fas fa-book text-blue-600 mr-3"></i>
                                        <div>
                                            <div class="font-semibold text-gray-900">API Reference</div>
                                            <div class="text-sm text-gray-600">Complete API documentation</div>
                                        </div>
                                    </div>
                                    <i class="fas fa-arrow-right text-gray-400"></i>
                                </a>
                                
                                <a href="#" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors">
                                    <div class="flex items-center">
                                        <i class="fas fa-code text-purple-600 mr-3"></i>
                                        <div>
                                            <div class="font-semibold text-gray-900">SDK Documentation</div>
                                            <div class="text-sm text-gray-600">Language-specific guides</div>
                                        </div>
                                    </div>
                                    <i class="fas fa-arrow-right text-gray-400"></i>
                                </a>
                                
                                <a href="#" class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                                    <div class="flex items-center">
                                        <i class="fas fa-lightbulb text-orange-600 mr-3"></i>
                                        <div>
                                            <div class="font-semibold text-gray-900">Best Practices</div>
                                            <div class="text-sm text-gray-600">Optimization tips & tricks</div>
                                        </div>
                                    </div>
                                    <i class="fas fa-arrow-right text-gray-400"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-2xl p-8">
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Support</h3>
                            
                            <div class="space-y-4">
                                <button onclick="openLiveChat()" class="w-full flex items-center justify-center p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                    <i class="fas fa-comments mr-3"></i>
                                    Live Chat Support
                                </button>
                                
                                <button onclick="joinSlackCommunity()" class="w-full flex items-center justify-center p-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                    <i class="fab fa-slack mr-3"></i>
                                    Join Developer Community
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-green-900 to-teal-900">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-5xl font-bold text-white mb-6">Ready to Monetize Your AI Platform?</h2>
                <p class="text-xl text-gray-200 mb-8">
                    Join 200+ AI platforms already generating revenue with contextual recommendations
                </p>
                
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center mb-8">
                    <button onclick="startIntegrationFlow()" class="btn-interactive bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                        <i class="fas fa-code mr-3"></i>
                        Start Integration
                    </button>
                    <button onclick="talkToExpert()" class="btn-interactive border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                        <i class="fas fa-users mr-3"></i>
                        Talk to Expert
                    </button>
                </div>
                
                <div class="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <i class="fas fa-bolt text-green-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">2-Minute Setup</div>
                        <div class="text-gray-300 text-sm">Start earning today</div>
                    </div>
                    <div>
                        <i class="fas fa-dollar-sign text-blue-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">No Minimum Revenue</div>
                        <div class="text-gray-300 text-sm">Earn from day one</div>
                    </div>
                    <div>
                        <i class="fas fa-heart text-purple-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">User-Friendly</div>
                        <div class="text-gray-300 text-sm">94% satisfaction rate</div>
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

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/for-ai-platforms.js"></script>
    </body>
    </html>
  `
}