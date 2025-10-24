// Services Page - Showcasing Earnly's Advanced AI Marketing Services
export const ServicesPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Advanced AI Marketing Services | Earnly - Transform Your Marketing Strategy</title>
        <meta name="description" content="Discover Earnly's comprehensive suite of AI-powered marketing services. From geographic analytics to predictive insights, revolutionize your marketing approach with cutting-edge artificial intelligence.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
          .service-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            transition: left 0.6s;
          }
          
          .service-card:hover::before {
            left: 100%;
          }
          
          .service-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.2);
            background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          }
          
          .feature-spotlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            animation: spotlightGlow 3s infinite alternate;
          }
          
          @keyframes spotlightGlow {
            0% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.3); }
            100% { box-shadow: 0 0 50px rgba(118, 75, 162, 0.5); }
          }
          
          .tech-stack-item {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .tech-stack-item:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
          }
          
          .service-demo {
            background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
            background-size: 400% 400%;
            animation: demoGradient 8s ease infinite;
          }
          
          @keyframes demoGradient {
            0%, 100% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
          }
          
          .capability-meter {
            height: 6px;
            background: linear-gradient(90deg, #ef4444 0%, #f59e0b 30%, #10b981 70%, #3b82f6 100%);
            border-radius: 3px;
            position: relative;
            overflow: hidden;
          }
          
          .capability-meter::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: white;
            border-radius: 3px;
            animation: meterFill 2s ease-out forwards;
          }
          
          @keyframes meterFill {
            from { width: 100%; }
            to { width: var(--fill-percentage); }
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
                        
                        <div class="hidden md:flex space-x-6 ml-10">
                            <a href="/services" class="text-blue-400 font-semibold">Services</a>
                            <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                            <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                            <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="hidden lg:flex items-center space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                                <span class="text-green-400">AI Active</span>
                            </div>
                            <span class="text-gray-400">|</span>
                            <span class="text-white counter" id="live-services">12</span>
                            <span class="text-gray-400">services running</span>
                        </div>
                        
                        <button onclick="requestDemo()" class="btn-interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
                            Request Demo
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center animated-bg">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-6xl font-bold text-white mb-6">
                            Advanced AI Marketing
                            <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Intelligence
                            </span>
                        </h1>
                        <p class="text-xl text-gray-200 mb-8 leading-relaxed">
                            Revolutionize your marketing strategy with Earnly's comprehensive suite of AI-powered services. 
                            From predictive analytics to real-time optimization, unlock the full potential of artificial intelligence 
                            for unprecedented marketing success.
                        </p>
                        
                        <!-- Key Metrics -->
                        <div class="grid grid-cols-3 gap-6 mb-8">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-400 counter" data-counter="340" data-suffix="%">0</div>
                                <div class="text-sm text-gray-300">ROI Increase</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-green-400 counter" data-counter="97.3" data-suffix="%">0</div>
                                <div class="text-sm text-gray-300">Accuracy Rate</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold text-purple-400 counter" data-counter="24" data-suffix="/7">0</div>
                                <div class="text-sm text-gray-300">Real-time</div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button onclick="exploreServices()" class="btn-interactive bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                                <i class="fas fa-rocket mr-3"></i>
                                Explore Services
                            </button>
                            <button onclick="watchDemo()" class="btn-interactive border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                                <i class="fas fa-play mr-3"></i>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                    
                    <!-- Interactive AI Visualization -->
                    <div class="relative">
                        <div class="service-demo p-8 rounded-2xl">
                            <div class="bg-black bg-opacity-20 backdrop-blur-lg rounded-xl p-6">
                                <h3 class="text-2xl font-bold text-white mb-4">Live AI Dashboard</h3>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white">Campaign Optimization</span>
                                        <div class="flex items-center">
                                            <div class="w-24 h-2 bg-gray-700 rounded-full mr-2">
                                                <div class="h-2 bg-green-400 rounded-full animate-pulse" style="width: 87%"></div>
                                            </div>
                                            <span class="text-green-400 font-bold">87%</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-white">Audience Analysis</span>
                                        <div class="flex items-center">
                                            <div class="w-24 h-2 bg-gray-700 rounded-full mr-2">
                                                <div class="h-2 bg-blue-400 rounded-full animate-pulse" style="width: 94%"></div>
                                            </div>
                                            <span class="text-blue-400 font-bold">94%</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-white">ROI Prediction</span>
                                        <div class="flex items-center">
                                            <div class="w-24 h-2 bg-gray-700 rounded-full mr-2">
                                                <div class="h-2 bg-purple-400 rounded-full animate-pulse" style="width: 91%"></div>
                                            </div>
                                            <span class="text-purple-400 font-bold">91%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Services -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">Core AI Marketing Services</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Comprehensive suite of AI-powered marketing solutions designed to transform your business performance
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Geographic Intelligence -->
                    <div class="service-card p-8 rounded-xl">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-globe-americas text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Geographic Intelligence</h3>
                        </div>
                        
                        <p class="text-gray-600 mb-6">
                            Advanced geographic analytics with real-time performance insights across 195+ countries. 
                            Optimize regional targeting and maximize ROI with AI-powered location intelligence.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Real-time geographic performance tracking
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                AI-powered regional optimization suggestions
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Interactive heat maps and visualizations
                            </div>
                        </div>
                        
                        <button onclick="learnMore('geo-intelligence')" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Explore GEO Analytics
                        </button>
                    </div>
                    
                    <!-- Predictive Analytics -->
                    <div class="service-card p-8 rounded-xl feature-spotlight">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-crystal-ball text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Predictive Analytics</h3>
                        </div>
                        
                        <p class="text-gray-100 mb-6">
                            Forecast campaign performance, predict customer behavior, and identify opportunities 
                            before they happen with our advanced machine learning algorithms.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-200">
                                <i class="fas fa-check text-green-400 mr-3"></i>
                                7-day performance forecasting
                            </div>
                            <div class="flex items-center text-sm text-gray-200">
                                <i class="fas fa-check text-green-400 mr-3"></i>
                                Customer lifetime value prediction
                            </div>
                            <div class="flex items-center text-sm text-gray-200">
                                <i class="fas fa-check text-green-400 mr-3"></i>
                                Market trend identification
                            </div>
                        </div>
                        
                        <button onclick="learnMore('predictive-analytics')" class="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Discover Predictions
                        </button>
                    </div>
                    
                    <!-- Real-time Optimization -->
                    <div class="service-card p-8 rounded-xl">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-cogs text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Real-time Optimization</h3>
                        </div>
                        
                        <p class="text-gray-600 mb-6">
                            Automatically adjust campaigns, budgets, and targeting in real-time based on performance data. 
                            Our AI continuously optimizes for maximum ROI without manual intervention.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Automated bid management
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Dynamic budget allocation
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Performance-based adjustments
                            </div>
                        </div>
                        
                        <button onclick="learnMore('real-time-optimization')" class="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Enable Auto-Optimization
                        </button>
                    </div>
                    
                    <!-- Audience Intelligence -->
                    <div class="service-card p-8 rounded-xl">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-users text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Audience Intelligence</h3>
                        </div>
                        
                        <p class="text-gray-600 mb-6">
                            Deep audience analysis powered by AI. Understand your customers better than ever with 
                            behavioral insights, demographic analysis, and predictive segmentation.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Behavioral pattern recognition
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Predictive audience segmentation
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Custom audience creation
                            </div>
                        </div>
                        
                        <button onclick="learnMore('audience-intelligence')" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Analyze Audiences
                        </button>
                    </div>
                    
                    <!-- Competitive Intelligence -->
                    <div class="service-card p-8 rounded-xl">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-chess text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">Competitive Intelligence</h3>
                        </div>
                        
                        <p class="text-gray-600 mb-6">
                            Stay ahead of the competition with AI-powered market analysis. Monitor competitor strategies, 
                            identify gaps, and capitalize on opportunities in real-time.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Competitor strategy monitoring
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Market gap identification
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Opportunity alerts
                            </div>
                        </div>
                        
                        <button onclick="learnMore('competitive-intelligence')" class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Monitor Competition
                        </button>
                    </div>
                    
                    <!-- ROI Maximization -->
                    <div class="service-card p-8 rounded-xl">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-yellow-600 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-chart-line text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900">ROI Maximization</h3>
                        </div>
                        
                        <p class="text-gray-600 mb-6">
                            Maximize return on investment with AI-driven optimization. Our algorithms continuously 
                            find the best performing strategies to increase your marketing ROI by up to 340%.
                        </p>
                        
                        <div class="space-y-3 mb-6">
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Multi-channel ROI tracking
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Budget optimization algorithms
                            </div>
                            <div class="flex items-center text-sm text-gray-700">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                Performance attribution modeling
                            </div>
                        </div>
                        
                        <button onclick="learnMore('roi-maximization')" class="w-full bg-gradient-to-r from-yellow-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Maximize ROI
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- AI Technology Stack -->
        <section class="py-20 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">Powered by Advanced AI</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Our cutting-edge technology stack leverages the latest advances in artificial intelligence and machine learning
                    </p>
                </div>
                
                <div class="grid md:grid-cols-4 gap-8">
                    <!-- Machine Learning -->
                    <div class="tech-stack-item p-6 rounded-xl text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-brain text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Machine Learning</h3>
                        <p class="text-gray-400 text-sm mb-4">Advanced ML algorithms for predictive analytics and pattern recognition</p>
                        
                        <div class="capability-meter" style="--fill-percentage: 5%;">
                            <div class="text-xs text-gray-400 mt-2">Capability: 95%</div>
                        </div>
                    </div>
                    
                    <!-- Natural Language Processing -->
                    <div class="tech-stack-item p-6 rounded-xl text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-language text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">NLP Processing</h3>
                        <p class="text-gray-400 text-sm mb-4">Sentiment analysis, content optimization, and language understanding</p>
                        
                        <div class="capability-meter" style="--fill-percentage: 8%;">
                            <div class="text-xs text-gray-400 mt-2">Capability: 92%</div>
                        </div>
                    </div>
                    
                    <!-- Computer Vision -->
                    <div class="tech-stack-item p-6 rounded-xl text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-eye text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Computer Vision</h3>
                        <p class="text-gray-400 text-sm mb-4">Visual content analysis, image optimization, and creative insights</p>
                        
                        <div class="capability-meter" style="--fill-percentage: 12%;">
                            <div class="text-xs text-gray-400 mt-2">Capability: 88%</div>
                        </div>
                    </div>
                    
                    <!-- Deep Learning -->
                    <div class="tech-stack-item p-6 rounded-xl text-center">
                        <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-network-wired text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-2">Deep Learning</h3>
                        <p class="text-gray-400 text-sm mb-4">Neural networks for complex pattern recognition and optimization</p>
                        
                        <div class="capability-meter" style="--fill-percentage: 3%;">
                            <div class="text-xs text-gray-400 mt-2">Capability: 97%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Integration Showcase -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-white mb-6">Seamless Platform Integration</h2>
                        <p class="text-xl text-gray-300 mb-8">
                            Connect Earnly's AI services with your existing marketing stack. 
                            Our flexible APIs and integrations work with 100+ popular platforms.
                        </p>
                        
                        <div class="space-y-6">
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold">Marketing Automation</div>
                                    <div class="text-gray-400 text-sm">HubSpot, Marketo, Salesforce, Pardot</div>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold">Analytics Platforms</div>
                                    <div class="text-gray-400 text-sm">Google Analytics, Adobe Analytics, Mixpanel</div>
                                </div>
                            </div>
                            
                            <div class="flex items-center">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <div class="text-white font-semibold">Advertising Platforms</div>
                                    <div class="text-gray-400 text-sm">Google Ads, Facebook Ads, LinkedIn Ads</div>
                                </div>
                            </div>
                        </div>
                        
                        <button onclick="viewIntegrations()" class="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                            View All Integrations
                        </button>
                    </div>
                    
                    <!-- Integration Visualization -->
                    <div class="relative">
                        <div class="grid grid-cols-3 gap-4">
                            <!-- Platform Icons -->
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fab fa-google text-3xl text-blue-600 mb-2"></i>
                                <div class="text-xs text-gray-600">Google</div>
                            </div>
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fab fa-facebook text-3xl text-blue-800 mb-2"></i>
                                <div class="text-xs text-gray-600">Facebook</div>
                            </div>
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fab fa-linkedin text-3xl text-blue-700 mb-2"></i>
                                <div class="text-xs text-gray-600">LinkedIn</div>
                            </div>
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fab fa-salesforce text-3xl text-blue-500 mb-2"></i>
                                <div class="text-xs text-gray-600">Salesforce</div>
                            </div>
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fas fa-chart-bar text-3xl text-green-600 mb-2"></i>
                                <div class="text-xs text-gray-600">Analytics</div>
                            </div>
                            <div class="service-card p-4 rounded-lg text-center">
                                <i class="fab fa-hubspot text-3xl text-orange-600 mb-2"></i>
                                <div class="text-xs text-gray-600">HubSpot</div>
                            </div>
                        </div>
                        
                        <!-- Central Earnly Hub -->
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div class="service-card p-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
                                <i class="fas fa-brain text-2xl mb-2"></i>
                                <div class="font-bold">Earnly AI</div>
                                <div class="text-xs opacity-80">Central Hub</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-5xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
                <p class="text-xl text-gray-200 mb-8">
                    Join 500+ enterprise brands already leveraging AI to revolutionize their marketing strategies
                </p>
                
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center mb-8">
                    <button onclick="startTrial()" class="btn-interactive bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                        <i class="fas fa-rocket mr-3"></i>
                        Start Free Trial
                    </button>
                    <button onclick="scheduleConsultation()" class="btn-interactive border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                        <i class="fas fa-calendar-alt mr-3"></i>
                        Schedule Consultation
                    </button>
                    <button onclick="requestCustomDemo()" class="btn-interactive bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                        <i class="fas fa-cog mr-3"></i>
                        Custom Demo
                    </button>
                </div>
                
                <div class="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <i class="fas fa-shield-alt text-green-400 text-3xl mb-3"></i>
                        <div class="text-white font-semibold">Enterprise Security</div>
                        <div class="text-gray-300 text-sm">SOC 2 Type II Certified</div>
                    </div>
                    <div>
                        <i class="fas fa-headset text-blue-400 text-3xl mb-3"></i>
                        <div class="text-white font-semibold">24/7 Support</div>
                        <div class="text-gray-300 text-sm">Dedicated success team</div>
                    </div>
                    <div>
                        <i class="fas fa-award text-purple-400 text-3xl mb-3"></i>
                        <div class="text-white font-semibold">Proven Results</div>
                        <div class="text-gray-300 text-sm">340% average ROI increase</div>
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

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/services.js"></script>
    </body>
    </html>
  `;
};