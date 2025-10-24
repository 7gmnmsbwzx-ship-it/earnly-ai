import type { Context } from 'hono'

export function getStartedPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get started with Earnly - Create Your Account</title>
        <meta name="description" content="Join Earnly and start monetizing AI platforms instantly. Create your account to connect with customers through AI Platforms.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* Modern gradient design */
            body {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                min-height: 100vh;
            }
            
            .glass-card {
                background: rgba(30, 41, 59, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(148, 163, 184, 0.2);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            }
            
            .form-input {
                transition: all 0.3s ease;
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.3);
                color: #fff;
                backdrop-filter: blur(10px);
            }
            
            .form-input:focus {
                border-color: #3b82f6;
                background: rgba(15, 23, 42, 0.8);
                outline: none;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                transform: translateY(-1px);
            }
            
            .form-input::placeholder {
                color: #94a3b8;
            }
            
            .role-btn {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.3);
                backdrop-filter: blur(10px);
            }
            
            .role-btn:hover {
                background: rgba(59, 130, 246, 0.1);
                border-color: #3b82f6;
                transform: translateY(-2px);
            }
            
            .role-btn.active {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                border-color: #3b82f6;
                color: white;
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
            }
            
            .testimonial-card {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.2);
                backdrop-filter: blur(15px);
            }
            
            .password-requirement {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 12px;
                color: #94a3b8;
                padding: 4px 0;
            }
            
            .requirement-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #374151;
                transition: all 0.3s ease;
                border: 1px solid #4b5563;
            }
            
            .requirement-dot.met {
                background: #10b981;
                border-color: #10b981;
                box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
            }
            
            .create-account-btn {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                transition: all 0.3s ease;
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
            }
            
            .create-account-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
            }
            
            .floating-animation {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        </style>
    </head>
    <body class="text-white min-h-screen">
        <!-- Header Navigation -->
        <nav class="backdrop-blur-sm bg-white/5 border-b border-white/10 py-6">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center floating-animation">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="Earnly Logo" 
                             class="h-10 w-auto">
                    </a>
                    
                    <div class="flex items-center space-x-6">
                        <span class="text-slate-300 text-sm">Already have an account?</span>
                        <a href="/signin" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-white/20">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content - AdMesh Style Layout -->
        <div class="min-h-screen flex items-center py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <!-- Left Side - Welcome & Testimonial (Modern Glass Design) -->
                    <div class="text-white">
                        <div class="mb-8">
                            <h1 class="text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Welcome to Earnly
                            </h1>
                            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                                Join our platform to connect with customers through AI Platforms
                            </p>
                        </div>
                        
                        <!-- Modern Testimonial Card -->
                        <div class="testimonial-card rounded-2xl p-8 floating-animation">
                            <div class="flex items-start space-x-4 mb-6">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                                     class="w-16 h-16 rounded-full border-2 border-blue-400/50" alt="Sarah C.">
                                <div class="flex-1">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="font-bold text-white text-lg">Sarah C.</div>
                                        <div class="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                                            Verified User
                                        </div>
                                    </div>
                                    <div class="text-sm text-slate-400 mb-4">Head of Growth, TechFlow AI</div>
                                </div>
                            </div>
                            <blockquote class="text-slate-200 text-lg leading-relaxed mb-4">
                                "Earnly gave us instant visibility across all apps. We hit <span class="text-green-400 font-semibold">500 conversions</span> in our first week through AI-driven offers. It's the future of marketing."
                            </blockquote>
                            <div class="flex items-center space-x-4 text-sm text-slate-400">
                                <div class="flex items-center space-x-1">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <span>5.0 rating</span>
                                </div>
                                <div class="flex items-center space-x-1">
                                    <i class="fas fa-calendar text-blue-400"></i>
                                    <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Modern Glass Registration Form -->
                    <div class="glass-card rounded-3xl p-10 max-w-lg mx-auto w-full">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                                <i class="fas fa-rocket text-white text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-2">Get started with Earnly</h2>
                            <p class="text-slate-400">Create your account to start connecting with customers through AI Platforms</p>
                        </div>

                        <!-- Modern Role Selection -->
                        <div class="mb-8">
                            <p class="text-sm text-slate-300 mb-4 font-medium">I am a...</p>
                            <div class="grid grid-cols-2 gap-3">
                                <button onclick="selectAccountType('advertiser')" 
                                        class="role-btn px-6 py-4 text-sm font-semibold rounded-xl text-slate-300 hover:text-white transition-all duration-300"
                                        id="advertiser-btn">
                                    <div class="flex flex-col items-center space-y-2">
                                        <i class="fas fa-bullhorn text-lg"></i>
                                        <span>Advertiser</span>
                                    </div>
                                </button>
                                <button onclick="selectAccountType('platform')" 
                                        class="role-btn active px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300"
                                        id="platform-btn">
                                    <div class="flex flex-col items-center space-y-2">
                                        <i class="fas fa-robot text-lg"></i>
                                        <span>AI Platform</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <!-- Registration Form -->
                        <form onsubmit="handleRegistration(event)" class="space-y-4">
                            <!-- Company Website -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    <span id="website-label">Company Website</span>
                                </label>
                                <div class="relative group">
                                    <input type="url" 
                                           name="website"
                                           required
                                           class="form-input w-full px-4 py-4 pl-12 rounded-xl text-lg"
                                           placeholder="example.com"
                                           id="website-input">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-globe text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Password -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    Password
                                </label>
                                <div class="relative group">
                                    <input type="password" 
                                           name="password"
                                           required
                                           minlength="8"
                                           class="form-input w-full px-4 py-4 pl-12 pr-14 rounded-xl text-lg"
                                           placeholder="••••••••"
                                           oninput="checkPasswordRequirements(this.value)">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-lock text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                    <button type="button" onclick="togglePassword()" class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <i class="fas fa-eye text-slate-500 hover:text-slate-300 transition-colors" id="password-toggle"></i>
                                    </button>
                                </div>
                                
                                <!-- Password Requirements (AdMesh Style) -->
                                <div class="mt-3 space-y-2">
                                    <p class="text-xs text-gray-400">Password requirements:</p>
                                    <div class="space-y-1">
                                        <div class="password-requirement">
                                            <div class="requirement-dot" id="length-dot"></div>
                                            <span>At least 8 characters</span>
                                        </div>
                                        <div class="password-requirement">
                                            <div class="requirement-dot" id="uppercase-dot"></div>
                                            <span>One uppercase letter</span>
                                        </div>
                                        <div class="password-requirement">
                                            <div class="requirement-dot" id="number-dot"></div>
                                            <span>One number</span>
                                        </div>
                                        <div class="password-requirement">
                                            <div class="requirement-dot" id="symbol-dot"></div>
                                            <span>One symbol</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Modern Create Account Button -->
                            <button type="submit" 
                                    class="create-account-btn w-full text-white py-4 px-6 rounded-xl font-semibold text-lg mt-8">
                                <span class="flex items-center justify-center space-x-2">
                                    <span>Create account</span>
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </button>

                            <!-- Modern Terms -->
                            <p class="text-xs text-slate-400 text-center leading-relaxed mt-6">
                                By continuing, you agree to Earnly's 
                                <a href="/terms" class="text-blue-400 hover:text-blue-300 underline">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>, 
                                and to receive periodic emails with updates.
                            </p>

                            <!-- Modern Sign In Link -->
                            <div class="text-center mt-8 pt-6 border-t border-white/10">
                                <p class="text-sm text-slate-400">
                                    Already have an account? 
                                    <a href="/signin" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Sign in</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- JavaScript for Enhanced Functionality -->
        <script>
            let selectedAccountType = 'platform';

            function selectAccountType(type) {
                selectedAccountType = type;
                
                const advertiserBtn = document.getElementById('advertiser-btn');
                const platformBtn = document.getElementById('platform-btn');
                const websiteLabel = document.getElementById('website-label');
                const websiteInput = document.getElementById('website-input');

                // Reset styles
                advertiserBtn.className = 'role-btn px-6 py-4 text-sm font-semibold rounded-xl text-slate-300 hover:text-white transition-all duration-300';
                platformBtn.className = 'role-btn px-6 py-4 text-sm font-semibold rounded-xl text-slate-300 hover:text-white transition-all duration-300';

                // Apply active style
                if (type === 'advertiser') {
                    advertiserBtn.className = 'role-btn active px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300';
                    websiteLabel.textContent = 'Company Website';
                    websiteInput.placeholder = 'company.com';
                } else {
                    platformBtn.className = 'role-btn active px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300';
                    websiteLabel.textContent = 'AI Platform Website';
                    websiteInput.placeholder = 'your-ai-platform.com';
                }
            }

            function togglePassword() {
                const passwordInput = document.querySelector('input[name="password"]');
                const toggleIcon = document.getElementById('password-toggle');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleIcon.className = 'fas fa-eye-slash text-slate-500 hover:text-slate-300 transition-colors';
                } else {
                    passwordInput.type = 'password';
                    toggleIcon.className = 'fas fa-eye text-slate-500 hover:text-slate-300 transition-colors';
                }
            }

            function checkPasswordRequirements(password) {
                const lengthDot = document.getElementById('length-dot');
                const uppercaseDot = document.getElementById('uppercase-dot');
                const numberDot = document.getElementById('number-dot');
                const symbolDot = document.getElementById('symbol-dot');

                // Check length
                lengthDot.classList.toggle('met', password.length >= 8);
                
                // Check uppercase
                uppercaseDot.classList.toggle('met', /[A-Z]/.test(password));
                
                // Check number
                numberDot.classList.toggle('met', /[0-9]/.test(password));
                
                // Check symbol
                symbolDot.classList.toggle('met', /[^a-zA-Z0-9]/.test(password));
            }

            async function handleRegistration(event) {
                event.preventDefault();
                
                const formData = new FormData(event.target);
                const data = {
                    accountType: selectedAccountType,
                    website: formData.get('website'),
                    password: formData.get('password')
                };

                // Show loading state
                const submitButton = event.target.querySelector('button[type="submit"]');
                const originalContent = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Creating Account...';
                submitButton.disabled = true;

                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Show success and redirect
                    submitButton.innerHTML = '<i class="fas fa-check mr-2"></i>Account Created!';
                    submitButton.className = 'w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium';
                    
                    setTimeout(() => {
                        if (selectedAccountType === 'advertiser') {
                            window.location.href = '/for-advertisers?welcome=true';
                        } else {
                            window.location.href = '/for-ai-platforms?welcome=true';
                        }
                    }, 1500);

                } catch (error) {
                    submitButton.innerHTML = originalContent;
                    submitButton.disabled = false;
                    alert('Registration failed. Please try again.');
                }
            }
        </script>
    </body>
    </html>
  `)
}