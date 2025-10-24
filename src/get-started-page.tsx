import type { Context } from 'hono'

export function getStartedPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get Started - Transform AI Conversations Into Revenue | EarnlyAI</title>
        <meta name="description" content="Join EarnlyAI and start monetizing AI platforms instantly. Advanced AI-native advertising with real-time optimization and predictive analytics.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* Advanced animations and effects */
            .gradient-bg {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                background-size: 400% 400%;
                animation: gradientShift 8s ease infinite;
            }
            
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .glass-card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .hover-scale {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .hover-scale:hover {
                transform: scale(1.02);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            }
            
            .progress-step {
                transition: all 0.5s ease;
            }
            
            .progress-step.active {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                transform: scale(1.1);
            }
            
            .form-input {
                transition: all 0.3s ease;
                border: 2px solid #e5e7eb;
            }
            
            .form-input:focus {
                border-color: #667eea;
                box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
                transform: translateY(-2px);
            }
            
            .success-checkmark {
                animation: checkmark 0.6s ease-in-out;
            }
            
            @keyframes checkmark {
                0% { transform: scale(0) rotate(45deg); }
                50% { transform: scale(1.2) rotate(45deg); }
                100% { transform: scale(1) rotate(45deg); }
            }
            
            .floating-element {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            .revenue-counter {
                font-variant-numeric: tabular-nums;
                font-feature-settings: "tnum";
            }
        </style>
    </head>
    <body class="gradient-bg min-h-screen">
        <!-- Header with Progress -->
        <nav class="relative z-50 py-4">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="EarnlyAI Logo" 
                             class="h-10 w-auto">
                        <span class="text-2xl font-bold text-white">EarnlyAI</span>
                    </a>
                    
                    <!-- Progress Indicator -->
                    <div class="hidden md:flex items-center space-x-4">
                        <div class="flex items-center space-x-2">
                            <div class="progress-step active w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                1
                            </div>
                            <span class="text-white text-sm font-medium">Account Setup</span>
                        </div>
                        <div class="w-16 h-1 bg-white/30 rounded-full">
                            <div class="w-1/3 h-full bg-white rounded-full transition-all duration-500"></div>
                        </div>
                        <div class="flex items-center space-x-2">
                            <div class="progress-step w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center text-sm font-bold text-white/70">
                                2
                            </div>
                            <span class="text-white/70 text-sm font-medium">Platform Setup</span>
                        </div>
                        <div class="w-16 h-1 bg-white/30 rounded-full"></div>
                        <div class="flex items-center space-x-2">
                            <div class="progress-step w-8 h-8 rounded-full border-2 border-white/50 flex items-center justify-center text-sm font-bold text-white/70">
                                3
                            </div>
                            <span class="text-white/70 text-sm font-medium">Launch</span>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <span class="text-white/80 text-sm">Already have an account?</span>
                        <a href="/signin" class="text-white font-semibold hover:text-blue-200 transition-colors">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                
                <!-- Left Side - Value Proposition -->
                <div class="text-white space-y-8">
                    <!-- Floating Revenue Counter -->
                    <div class="floating-element bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-semibold">Live Revenue Generated</h3>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span class="text-sm text-green-400">Real-time</span>
                            </div>
                        </div>
                        <div class="text-4xl font-bold revenue-counter" id="live-revenue">$247,892</div>
                        <div class="text-sm text-white/70 mt-2">
                            <i class="fas fa-arrow-up text-green-400 mr-1"></i>
                            +23.4% from last month
                        </div>
                    </div>

                    <div>
                        <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Start Earning From
                            <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                                AI Conversations
                            </span>
                            Today
                        </h1>
                        
                        <p class="text-xl text-white/90 mb-8 leading-relaxed">
                            Join 2,500+ AI platforms generating revenue through contextual advertising. 
                            Our advanced AI matches the perfect products to every conversation.
                        </p>
                    </div>

                    <!-- Trust Indicators -->
                    <div class="grid grid-cols-2 gap-6">
                        <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <div class="text-3xl font-bold text-green-400">8.7%</div>
                            <div class="text-sm text-white/80">Average Conversion Rate</div>
                            <div class="text-xs text-white/60 mt-2">3x higher than industry standard</div>
                        </div>
                        
                        <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                            <div class="text-3xl font-bold text-blue-400">2.1s</div>
                            <div class="text-sm text-white/80">Setup Time</div>
                            <div class="text-xs text-white/60 mt-2">Fastest integration in market</div>
                        </div>
                    </div>

                    <!-- Social Proof -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" class="w-10 h-10 rounded-full border-2 border-white" alt="User 1">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616b669ad5c?w=40&h=40&fit=crop&crop=face" class="w-10 h-10 rounded-full border-2 border-white" alt="User 2">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" class="w-10 h-10 rounded-full border-2 border-white" alt="User 3">
                                <div class="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-xs font-bold">
                                    +2K
                                </div>
                            </div>
                            <div>
                                <div class="text-sm font-medium">Join 2,500+ AI Platforms</div>
                                <div class="text-xs text-white/70">Already generating revenue with EarnlyAI</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Side - Advanced Registration Form -->
                <div class="glass-card rounded-3xl p-8 lg:p-10 hover-scale">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
                        <p class="text-gray-600">Start monetizing in under 3 minutes</p>
                    </div>

                    <!-- Account Type Selection -->
                    <div class="mb-8">
                        <label class="block text-sm font-semibold text-gray-700 mb-4">I am a...</label>
                        <div class="grid grid-cols-2 gap-4">
                            <button onclick="selectAccountType('advertiser')" 
                                    class="account-type-btn p-4 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-left group"
                                    id="advertiser-btn">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <i class="fas fa-bullhorn"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-800">Advertiser</div>
                                        <div class="text-xs text-gray-500">Promote products</div>
                                    </div>
                                </div>
                            </button>
                            
                            <button onclick="selectAccountType('platform')" 
                                    class="account-type-btn p-4 rounded-xl border-2 border-blue-500 bg-blue-50 text-left group"
                                    id="platform-btn">
                                <div class="flex items-center space-x-3">
                                    <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                                        <i class="fas fa-robot"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-gray-800">AI Platform</div>
                                        <div class="text-xs text-gray-500">Monetize AI</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Registration Form -->
                    <form onsubmit="handleRegistration(event)" class="space-y-6">
                        <!-- Email -->
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">
                                Work Email Address
                            </label>
                            <div class="relative">
                                <input type="email" 
                                       name="email"
                                       required
                                       class="form-input w-full px-4 py-4 rounded-xl focus:outline-none pl-12"
                                       placeholder="you@company.com">
                                <i class="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>

                        <!-- Company/Platform Name -->
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">
                                <span id="company-label">Company Name</span>
                            </label>
                            <div class="relative">
                                <input type="text" 
                                       name="company"
                                       required
                                       class="form-input w-full px-4 py-4 rounded-xl focus:outline-none pl-12"
                                       placeholder="Your company name">
                                <i class="fas fa-building absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>

                        <!-- Website -->
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">
                                Website URL
                            </label>
                            <div class="relative">
                                <input type="url" 
                                       name="website"
                                       required
                                       class="form-input w-full px-4 py-4 rounded-xl focus:outline-none pl-12"
                                       placeholder="https://yourwebsite.com">
                                <i class="fas fa-globe absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                            </div>
                        </div>

                        <!-- Password -->
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">
                                Create Password
                            </label>
                            <div class="relative">
                                <input type="password" 
                                       name="password"
                                       required
                                       minlength="8"
                                       class="form-input w-full px-4 py-4 rounded-xl focus:outline-none pl-12 pr-12"
                                       placeholder="Create a secure password">
                                <i class="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <button type="button" onclick="togglePassword()" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-eye" id="password-toggle"></i>
                                </button>
                            </div>
                            <div class="mt-2 space-y-1">
                                <div class="flex items-center space-x-2 text-xs">
                                    <div class="w-2 h-2 rounded-full bg-gray-300" id="length-check"></div>
                                    <span class="text-gray-500">At least 8 characters</span>
                                </div>
                            </div>
                        </div>

                        <!-- Terms and Privacy -->
                        <div class="flex items-start space-x-3">
                            <input type="checkbox" 
                                   name="terms"
                                   required
                                   class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <div class="text-sm text-gray-600 leading-relaxed">
                                By creating an account, you agree to our 
                                <a href="/terms" class="text-blue-600 hover:text-blue-800 font-semibold">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-600 hover:text-blue-800 font-semibold">Privacy Policy</a>.
                                We'll send you product updates and marketing emails.
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" 
                                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            <span class="flex items-center justify-center space-x-2">
                                <span>Start Earning Now</span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>

                        <!-- Alternative Sign Up -->
                        <div class="relative my-8">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-4 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4">
                            <button type="button" class="flex items-center justify-center space-x-2 w-full py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" class="w-5 h-5">
                                <span class="text-gray-700 font-medium">Google</span>
                            </button>
                            
                            <button type="button" class="flex items-center justify-center space-x-2 w-full py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github text-gray-700 text-lg"></i>
                                <span class="text-gray-700 font-medium">GitHub</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Live Success Stories -->
        <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div class="text-center mb-12">
                <h3 class="text-3xl font-bold text-white mb-4">Join Successful AI Platforms</h3>
                <p class="text-white/80 text-lg">See how others are monetizing with EarnlyAI</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" class="w-12 h-12 rounded-full" alt="CEO">
                        <div>
                            <div class="font-semibold text-white">Sarah Chen</div>
                            <div class="text-sm text-white/70">CEO, ChatFlow AI</div>
                        </div>
                    </div>
                    <blockquote class="text-white/90 mb-4">
                        "EarnlyAI increased our revenue by 340% in just 2 months. The AI matching is incredibly accurate."
                    </blockquote>
                    <div class="flex items-center space-x-4 text-sm">
                        <span class="bg-green-400/20 text-green-400 px-3 py-1 rounded-full">+340% Revenue</span>
                        <span class="text-white/70">2 months</span>
                    </div>
                </div>

                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" class="w-12 h-12 rounded-full" alt="CTO">
                        <div>
                            <div class="font-semibold text-white">Marcus Rodriguez</div>
                            <div class="text-sm text-white/70">CTO, VoiceBot Pro</div>
                        </div>
                    </div>
                    <blockquote class="text-white/90 mb-4">
                        "Setup took literally 90 seconds. We're now generating $50K monthly from voice conversations."
                    </blockquote>
                    <div class="flex items-center space-x-4 text-sm">
                        <span class="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full">$50K/month</span>
                        <span class="text-white/70">90 seconds setup</span>
                    </div>
                </div>

                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div class="flex items-center space-x-3 mb-4">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b669ad5c?w=50&h=50&fit=crop&crop=face" class="w-12 h-12 rounded-full" alt="Founder">
                        <div>
                            <div class="font-semibold text-white">Emma Thompson</div>
                            <div class="text-sm text-white/70">Founder, AI Helper</div>
                        </div>
                    </div>
                    <blockquote class="text-white/90 mb-4">
                        "The contextual recommendations feel natural. Our users love the relevant product suggestions."
                    </blockquote>
                    <div class="flex items-center space-x-4 text-sm">
                        <span class="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full">12.4% CVR</span>
                        <span class="text-white/70">Natural integration</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- JavaScript for Enhanced Functionality -->
        <script src="/static/get-started.js"></script>
    </body>
    </html>
  `)
}