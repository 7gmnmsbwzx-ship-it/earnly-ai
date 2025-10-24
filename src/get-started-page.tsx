import type { Context } from 'hono'

export function getStartedPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get started with EarnlyAI - Create Your Account</title>
        <meta name="description" content="Join EarnlyAI and start monetizing AI platforms instantly. Create your account to connect with customers through AI Platforms.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* AdMesh-inspired dark theme */
            body {
                background: #000;
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .form-input {
                transition: all 0.2s ease;
                background: #1a1a1a;
                border: 1px solid #333;
                color: #fff;
            }
            
            .form-input:focus {
                border-color: #2563eb;
                background: #1f1f1f;
                outline: none;
                box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
            }
            
            .form-input::placeholder {
                color: #999;
            }
            
            .role-btn {
                transition: all 0.2s ease;
            }
            
            .role-btn.active {
                background: #2563eb;
                border-color: #2563eb;
                color: white;
            }
            
            .password-requirement {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 12px;
                color: #999;
            }
            
            .requirement-dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #333;
                transition: background 0.2s ease;
            }
            
            .requirement-dot.met {
                background: #10b981;
            }
        </style>
    </head>
    <body class="bg-black text-white min-h-screen">
        <!-- Header Navigation -->
        <nav class="border-b border-gray-800 py-4">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="EarnlyAI Logo" 
                             class="h-8 w-auto">
                        <span class="text-xl font-bold">EarnlyAI</span>
                    </a>
                    
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-400 text-sm">Already have an account?</span>
                        <a href="/signin" class="text-blue-500 hover:text-blue-400 transition-colors font-medium">
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
                    
                    <!-- Left Side - Welcome & Testimonial (AdMesh Style) -->
                    <div class="text-white">
                        <h1 class="text-5xl font-bold mb-6 leading-tight">
                            Welcome to EarnlyAI
                        </h1>
                        <p class="text-xl text-gray-300 mb-12 leading-relaxed">
                            Join our platform to connect with customers through AI Platforms
                        </p>
                        
                        <!-- Testimonial Box (Exact AdMesh Style) -->
                        <div class="border border-gray-700 rounded-lg p-8 bg-gray-900/50">
                            <blockquote class="text-gray-200 text-lg leading-relaxed mb-6">
                                "EarnlyAI gave us instant visibility across all apps. We hit 500 conversions in our first week through AI-driven offers. It's the future of marketing."
                            </blockquote>
                            <div class="flex items-center space-x-3">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face" 
                                     class="w-12 h-12 rounded-full" alt="Sarah C.">
                                <div>
                                    <div class="font-semibold text-white">Sarah C.</div>
                                    <div class="text-sm text-gray-400">Head of Growth, TechFlow AI</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Registration Form (AdMesh Style) -->
                    <div class="bg-gray-900 rounded-2xl p-8 border border-gray-700 max-w-md mx-auto w-full">
                        <div class="mb-8">
                            <h2 class="text-2xl font-bold text-white mb-2">Get started with EarnlyAI</h2>
                            <p class="text-gray-400">Create your account to start connecting with customers through AI Platforms</p>
                        </div>

                        <!-- Role Selection (AdMesh Style) -->
                        <div class="mb-6">
                            <p class="text-sm text-gray-300 mb-3">I am a...</p>
                            <div class="flex space-x-2">
                                <button onclick="selectAccountType('advertiser')" 
                                        class="role-btn flex-1 px-4 py-3 text-sm font-medium rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                                        id="advertiser-btn">
                                    Advertiser
                                </button>
                                <button onclick="selectAccountType('platform')" 
                                        class="role-btn active flex-1 px-4 py-3 text-sm font-medium rounded-lg"
                                        id="platform-btn">
                                    AI Platform
                                </button>
                            </div>
                        </div>

                        <!-- Registration Form -->
                        <form onsubmit="handleRegistration(event)" class="space-y-4">
                            <!-- Company Website -->
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">
                                    <span id="website-label">Company Website</span>
                                </label>
                                <div class="relative">
                                    <input type="url" 
                                           name="website"
                                           required
                                           class="form-input w-full px-4 py-3 pl-10 rounded-lg"
                                           placeholder="example.com"
                                           id="website-input">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-globe text-gray-500"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Password -->
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <div class="relative">
                                    <input type="password" 
                                           name="password"
                                           required
                                           minlength="8"
                                           class="form-input w-full px-4 py-3 pl-10 pr-12 rounded-lg"
                                           placeholder="••••••••"
                                           oninput="checkPasswordRequirements(this.value)">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-lock text-gray-500"></i>
                                    </div>
                                    <button type="button" onclick="togglePassword()" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <i class="fas fa-eye text-gray-500 hover:text-gray-400" id="password-toggle"></i>
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

                            <!-- Create Account Button (AdMesh Style) -->
                            <button type="submit" 
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors mt-6">
                                Create account
                            </button>

                            <!-- Terms (AdMesh Style) -->
                            <p class="text-xs text-gray-500 text-center leading-relaxed mt-4">
                                By continuing, you agree to EarnlyAI's 
                                <a href="/terms" class="text-blue-400 hover:text-blue-300">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-400 hover:text-blue-300">Privacy Policy</a>, 
                                and to receive periodic emails with updates.
                            </p>

                            <!-- Sign In Link (AdMesh Style) -->
                            <p class="text-center text-sm text-gray-400 mt-6">
                                Already have an account? 
                                <a href="/signin" class="text-blue-400 hover:text-blue-300 font-medium">Sign in</a>
                            </p>
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
                advertiserBtn.className = 'role-btn flex-1 px-4 py-3 text-sm font-medium rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors';
                platformBtn.className = 'role-btn flex-1 px-4 py-3 text-sm font-medium rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors';

                // Apply active style
                if (type === 'advertiser') {
                    advertiserBtn.className = 'role-btn active flex-1 px-4 py-3 text-sm font-medium rounded-lg';
                    websiteLabel.textContent = 'Company Website';
                    websiteInput.placeholder = 'example.com';
                } else {
                    platformBtn.className = 'role-btn active flex-1 px-4 py-3 text-sm font-medium rounded-lg';
                    websiteLabel.textContent = 'AI Platform Website';
                    websiteInput.placeholder = 'your-ai-platform.com';
                }
            }

            function togglePassword() {
                const passwordInput = document.querySelector('input[name="password"]');
                const toggleIcon = document.getElementById('password-toggle');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleIcon.className = 'fas fa-eye-slash text-gray-500 hover:text-gray-400';
                } else {
                    passwordInput.type = 'password';
                    toggleIcon.className = 'fas fa-eye text-gray-500 hover:text-gray-400';
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