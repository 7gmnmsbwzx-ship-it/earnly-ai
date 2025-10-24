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
                transition: all 0.2s ease;
            }
            
            .hover-scale:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
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
                transition: all 0.2s ease;
            }
            
            .form-input:focus {
                border-color: #667eea;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
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
        <div class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            <div class="max-w-md mx-auto">
                
                <!-- Simplified Header -->
                <div class="text-center mb-10">
                    <h1 class="text-4xl font-bold text-white mb-4">
                        Join EarnlyAI
                    </h1>
                    <p class="text-lg text-white/90 mb-8">
                        Connect advertisers with AI platforms through intelligent monetization
                    </p>
                    
                    <!-- Simple Trust Indicator -->
                    <div class="flex items-center justify-center space-x-6 text-white/80 text-sm mb-8">
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-users"></i>
                            <span>2,500+ platforms</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-chart-line"></i>
                            <span>8.7% avg CVR</span>
                        </div>
                    </div>
                </div>

                <!-- Centered Registration Form -->
                <div class="glass-card rounded-2xl p-8 hover-scale">
                    <!-- Account Type Selection - More Prominent -->
                    <div class="mb-8">
                        <h3 class="text-xl font-bold text-gray-800 mb-6 text-center">Choose Your Role</h3>
                        <div class="space-y-4">
                            <button onclick="selectAccountType('advertiser')" 
                                    class="account-type-btn w-full p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all text-left group"
                                    id="advertiser-btn">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <i class="fas fa-bullhorn text-xl"></i>
                                    </div>
                                    <div class="flex-1">
                                        <div class="font-bold text-gray-800 text-lg">Advertiser</div>
                                        <div class="text-sm text-gray-600">I want to promote products through AI platforms</div>
                                    </div>
                                    <div class="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <i class="fas fa-chevron-right text-blue-500"></i>
                                    </div>
                                </div>
                            </button>
                            
                            <button onclick="selectAccountType('platform')" 
                                    class="account-type-btn w-full p-6 rounded-xl border-2 border-blue-500 bg-blue-50 text-left group selected"
                                    id="platform-btn">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                                        <i class="fas fa-robot text-xl"></i>
                                    </div>
                                    <div class="flex-1">
                                        <div class="font-bold text-gray-800 text-lg">AI Platform Owner</div>
                                        <div class="text-sm text-gray-600">I want to monetize my AI platform or service</div>
                                    </div>
                                    <div class="text-blue-500">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    <!-- Registration Form -->
                    <form onsubmit="handleRegistration(event)" class="space-y-5">
                        <!-- Email -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input type="email" 
                                   name="email"
                                   required
                                   class="form-input w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-gray-200"
                                   placeholder="you@company.com">
                        </div>

                        <!-- Company/Platform Name -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <span id="company-label">AI Platform Name</span>
                            </label>
                            <input type="text" 
                                   name="company"
                                   required
                                   class="form-input w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-gray-200"
                                   placeholder="Your AI platform name"
                                   id="company-input">
                        </div>

                        <!-- Website -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Website URL
                            </label>
                            <input type="url" 
                                   name="website"
                                   required
                                   class="form-input w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-gray-200"
                                   placeholder="https://yourwebsite.com">
                        </div>

                        <!-- Password -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div class="relative">
                                <input type="password" 
                                       name="password"
                                       required
                                       minlength="8"
                                       class="form-input w-full px-4 py-3 rounded-lg focus:outline-none border-2 border-gray-200 pr-12"
                                       placeholder="Create a secure password">
                                <button type="button" onclick="togglePassword()" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <i class="fas fa-eye" id="password-toggle"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Terms and Privacy -->
                        <div class="flex items-start space-x-3 py-2">
                            <input type="checkbox" 
                                   name="terms"
                                   required
                                   class="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                            <div class="text-sm text-gray-600">
                                I agree to the 
                                <a href="/terms" class="text-blue-600 hover:text-blue-800 underline">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <button type="submit" 
                                class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg">
                            Create Account
                        </button>

                        <!-- Alternative Sign Up -->
                        <div class="relative my-6">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-4 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <button type="button" class="flex items-center justify-center space-x-2 w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" class="w-5 h-5">
                                <span class="text-gray-700">Google</span>
                            </button>
                            
                            <button type="button" class="flex items-center justify-center space-x-2 w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <i class="fab fa-github text-gray-700"></i>
                                <span class="text-gray-700">GitHub</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

                </div>
            </div>
        </div>
        
        <!-- Simple Footer -->
        <div class="text-center py-8">
            <p class="text-white/60 text-sm">
                Already have an account? 
                <a href="/signin" class="text-white font-medium hover:text-blue-200 transition-colors ml-1">Sign in here</a>
            </p>
        </div>

        <!-- JavaScript for Enhanced Functionality -->
        <script src="/static/get-started.js"></script>
    </body>
    </html>
  `)
}