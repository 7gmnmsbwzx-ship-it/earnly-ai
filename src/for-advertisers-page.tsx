// For Advertisers - Redesigned Structure
export const ForAdvertisersPage = () => {
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
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
          /* Modern layout system */
          .section-spacing { padding: 6rem 0; }
          .hero-spacing { padding: 8rem 0 4rem 0; }
          
          /* Glass morphism refined */
          .glass-refined {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          
          /* Calculator specific styling */
          .calculator-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          
          /* Animations */
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
          .animate-slide-in-right { animation: slideInRight 0.8s ease-out 0.2s both; }
          
          /* Hover effects */
          .hover-scale {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hover-scale:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
          
          /* Performance metrics animations */
          .metric-highlight {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          
          /* Text gradients */
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6 0%, #9333ea 50%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Responsive grid improvements */
          .responsive-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: start;
          }
          
          @media (min-width: 1024px) {
            .responsive-grid {
              grid-template-columns: 1.2fr 0.8fr;
              gap: 4rem;
            }
          }
          
          /* Section separators */
          .section-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          }
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
                            <a href="/for-advertisers" class="text-blue-400 hover:text-blue-300 transition-colors font-semibold">For Advertisers</a>
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
                            <span class="text-white counter" id="live-conversions">1,247</span>
                            <span class="text-gray-400">conversions today</span>
                        </div>
                        
                        <button class="btn-interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative animated-bg hero-spacing">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
            
            <!-- Floating Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="floating absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
                <div class="floating absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                <div class="floating absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500 rounded-full opacity-10 blur-xl"></div>
            </div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="responsive-grid">
                    <!-- Hero Content -->
                    <div class="animate-fade-in-up">
                        <div class="mb-8">
                            <div class="inline-flex items-center space-x-2 glass-refined rounded-full px-4 py-2 mb-6">
                                <span class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                                <span class="text-sm text-white font-medium">AI-Native Advertising Platform</span>
                            </div>
                        </div>
                        
                        <h1 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            Advertise at the
                            <span class="gradient-text block mt-2">Moment of Intent</span>
                        </h1>
                        
                        <p class="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
                            Reach users when they're actively seeking solutions in AI conversations. 
                            <span class="text-green-400 font-semibold">Performance-only billing</span> ensures you 
                            <span class="text-blue-400 font-semibold">only pay for verified results</span>.
                        </p>
                        
                        <!-- Performance Highlights -->
                        <div class="grid grid-cols-3 gap-6 mb-12">
                            <div class="metric-highlight p-4 rounded-xl text-center">
                                <div class="text-3xl font-bold text-green-400 mb-2">12.7%</div>
                                <div class="text-sm text-gray-300">Average CTR</div>
                            </div>
                            <div class="metric-highlight p-4 rounded-xl text-center">
                                <div class="text-3xl font-bold text-blue-400 mb-2">20.1%</div>
                                <div class="text-sm text-gray-300">Conversion Rate</div>
                            </div>
                            <div class="metric-highlight p-4 rounded-xl text-center">
                                <div class="text-3xl font-bold text-purple-400 mb-2">$10</div>
                                <div class="text-sm text-gray-300">Avg CPA</div>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                            <button onclick="startCampaignNow()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover-scale flex items-center justify-center">
                                <i class="fas fa-rocket mr-3"></i>
                                Start Your Campaign
                            </button>
                            <button onclick="scrollToCalculator()" class="glass-refined border border-white border-opacity-20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-scale flex items-center justify-center">
                                <i class="fas fa-calculator mr-3"></i>
                                Calculate ROI
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
                    <div class="animate-slide-in-right">
                        <div class="demo-card p-8 rounded-2xl hover-scale sticky top-24" id="brand-demo">
                            <div class="mb-6 text-center">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-globe text-white text-xl"></i>
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-2">Interactive Brand Demo</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">Enter your website URL and select a platform category to see how your brand appears in realistic ad previews</p>
                            </div>
                            
                            <!-- Live Demo Notice -->
                            <div class="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                                <p class="text-sm text-gray-700 mb-3">Want to see how your product shows in a real AI search platform?</p>
                                <a href="#" onclick="openAdPlexDemo()" class="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                    Try AdPlex Live Demo 
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
                                    <label class="block text-sm font-medium text-gray-700 mb-3">Platform Category</label>
                                    <select id="platform-category" onchange="updateBrandPreview()" 
                                            class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 font-medium bg-white">
                                        <option value="chatgpt">ChatGPT & AI Assistants</option>
                                        <option value="search">AI Search Engines</option>
                                        <option value="shopping">AI Shopping Platforms</option>
                                        <option value="productivity">Productivity Tools</option>
                                        <option value="creative">Creative Platforms</option>
                                        <option value="business">Business Intelligence</option>
                                    </select>
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
                                    <div class="mt-6 grid grid-cols-2 gap-3">
                                        <button onclick="downloadPreview()" class="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                                            <i class="fas fa-download mr-2"></i>
                                            Download
                                        </button>
                                        <button onclick="startCampaign()" class="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all">
                                            <i class="fas fa-rocket mr-2"></i>
                                            Launch Campaign
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section Divider -->
        <div class="section-divider"></div>

        <!-- Performance Comparison -->
        <section class="section-spacing bg-gray-800">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-6">
                        Performance Comparison
                    </h2>
                    <p class="text-xl text-gray-300 max-w-2xl mx-auto">
                        See how AI-native advertising delivers superior results compared to traditional methods
                    </p>
                </div>
                
                <div class="glass-refined p-10 rounded-3xl">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <!-- Traditional -->
                        <div class="space-y-6">
                            <div class="text-center mb-8">
                                <h3 class="text-2xl font-semibold text-white mb-2">Traditional Advertising</h3>
                                <p class="text-gray-400">Standard display & search ads</p>
                            </div>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-xl">
                                    <span class="text-gray-300 font-medium">Cost Per Click</span>
                                    <span class="text-red-400 font-bold text-lg">$2.20</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-xl">
                                    <span class="text-gray-300 font-medium">Total Clicks</span>
                                    <span class="text-white font-semibold">4,545</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-xl">
                                    <span class="text-gray-300 font-medium">Conversions</span>
                                    <span class="text-white font-semibold">113</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-gray-700 bg-opacity-50 rounded-xl border-l-4 border-red-400">
                                    <span class="text-gray-300 font-medium">Total Revenue</span>
                                    <span class="text-white font-bold text-xl">$16,950</span>
                                </div>
                            </div>
                            <div class="text-center p-4 bg-red-500 bg-opacity-10 rounded-xl border border-red-500 border-opacity-30">
                                <div class="text-red-400 font-bold text-lg">1.69x ROAS</div>
                            </div>
                        </div>

                        <!-- With Earnly AI -->
                        <div class="space-y-6">
                            <div class="text-center mb-8">
                                <h3 class="text-2xl font-semibold text-white mb-2">With Earnly AI</h3>
                                <p class="text-green-400">Intent-based AI placements</p>
                            </div>
                            <div class="space-y-4">
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30">
                                    <span class="text-gray-300 font-medium">Effective CPC</span>
                                    <span class="text-green-400 font-bold text-lg">$1.58</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30">
                                    <span class="text-gray-300 font-medium">Total Clicks</span>
                                    <span class="text-green-300 font-semibold">6,329</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30">
                                    <span class="text-gray-300 font-medium">Conversions</span>
                                    <span class="text-green-300 font-semibold">441</span>
                                </div>
                                <div class="flex justify-between items-center p-4 bg-green-600 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30 border-l-4 border-l-green-400">
                                    <span class="text-gray-300 font-medium">Total Revenue</span>
                                    <span class="text-green-300 font-bold text-xl">$66,150</span>
                                </div>
                            </div>
                            <div class="text-center p-4 bg-green-500 bg-opacity-20 rounded-xl border border-green-500 border-opacity-50">
                                <div class="text-green-400 font-bold text-lg">6.62x ROAS</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Performance Highlights -->
                    <div class="mt-12 pt-8 border-t border-gray-600 border-opacity-30">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div class="text-3xl font-bold text-green-400 mb-2">+290%</div>
                                <div class="text-gray-300">Higher Revenue</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-blue-400 mb-2">-28%</div>
                                <div class="text-gray-300">Lower Cost</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-purple-400 mb-2">+292%</div>
                                <div class="text-gray-300">Better ROI</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section Divider -->
        <div class="section-divider"></div>

        <!-- Core Benefits -->
        <section class="section-spacing bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-white mb-6">
                        Why AI-Native Advertising?
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Move beyond interruption-based advertising to contextual, helpful recommendations that users actually want to see.
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-4 gap-8">
                    <!-- Intent-Based Targeting -->
                    <div class="glass-refined p-8 rounded-3xl hover-scale text-center group">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-crosshairs text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Intent-Based Targeting</h3>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Reach users at the exact moment they express purchase intent in natural conversations.
                        </p>
                        <div class="text-blue-400 font-bold text-2xl mb-1">12.7%</div>
                        <div class="text-blue-300 text-sm">Average CTR</div>
                    </div>

                    <!-- Performance Billing -->
                    <div class="glass-refined p-8 rounded-3xl hover-scale text-center group">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-hand-holding-dollar text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Performance-Only Billing</h3>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Pay only for verified actions and conversions. Zero waste on bot traffic or fake clicks.
                        </p>
                        <div class="text-green-400 font-bold text-2xl mb-1">$10</div>
                        <div class="text-green-300 text-sm">Average CPA</div>
                    </div>

                    <!-- Native Integration -->
                    <div class="glass-refined p-8 rounded-3xl hover-scale text-center group">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-puzzle-piece text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Native Integration</h3>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Products appear naturally within AI conversations, feeling helpful rather than intrusive.
                        </p>
                        <div class="text-purple-400 font-bold text-2xl mb-1">20.1%</div>
                        <div class="text-purple-300 text-sm">Conversion Rate</div>
                    </div>

                    <!-- Real-Time Analytics -->
                    <div class="glass-refined p-8 rounded-3xl hover-scale text-center group">
                        <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-chart-line text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">Real-Time Analytics</h3>
                        <p class="text-gray-300 mb-6 leading-relaxed">
                            Enterprise-grade analytics with AI-powered insights and optimization recommendations.
                        </p>
                        <div class="text-orange-400 font-bold text-2xl mb-1">99.9%</div>
                        <div class="text-orange-300 text-sm">Uptime SLA</div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Section Divider -->
        <div class="section-divider"></div>

        <!-- CTA Section -->
        <section class="section-spacing bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
            <!-- Background Effects -->
            <div class="absolute inset-0">
                <div class="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
                <div class="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
            </div>
            
            <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Transform Your Advertising?
                </h2>
                <p class="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    Join leading brands leveraging AI-native advertising for superior performance and ROI. Start seeing results from day one.
                </p>
                
                <div class="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                    <button class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover-scale shadow-2xl">
                        <i class="fas fa-rocket mr-3"></i>
                        Start Free Trial
                    </button>
                    <button class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all hover-scale">
                        <i class="fas fa-calendar mr-3"></i>
                        Schedule Demo
                    </button>
                </div>
                
                <!-- Trust Elements -->
                <div class="flex flex-wrap justify-center gap-8 mb-8 text-sm opacity-80">
                    <span class="flex items-center"><i class="fas fa-check-circle mr-2"></i> No setup fees</span>
                    <span class="flex items-center"><i class="fas fa-check-circle mr-2"></i> Performance-only billing</span>
                    <span class="flex items-center"><i class="fas fa-check-circle mr-2"></i> Cancel anytime</span>
                    <span class="flex items-center"><i class="fas fa-check-circle mr-2"></i> 24/7 support</span>
                </div>
                
                <!-- Customer Logos Placeholder -->
                <div class="text-xs opacity-60">
                    Trusted by 500+ brands worldwide
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

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="/static/for-advertisers.js"></script>
        
        <script>
            // Smooth scroll to calculator
            function scrollToCalculator() {
                document.getElementById('roi-calculator').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
            
            // Additional interactive functions
            function startCampaignNow() {
                alert('Campaign setup coming soon! Contact our team for early access.');
            }
            
            function getDetailedAnalysis() {
                const adSpend = document.getElementById('ad-spend')?.value || '10,000';
                const industry = document.getElementById('industry')?.value || 'ecommerce';
                alert('Detailed Analysis Request:\\n\\nBudget: $' + adSpend + '\\nIndustry: ' + industry + '\\n\\nOur AI experts will prepare a custom analysis for your specific use case. Contact our team to schedule your free consultation!');
            }
        </script>
    </body>
    </html>
  `
}