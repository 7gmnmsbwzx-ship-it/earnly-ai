import { Hono } from 'hono'

// AI Platforms Directory Page with Real Data
export function aiPlatformsDirectoryPage(c: any) {
    return c.html(`
        <!DOCTYPE html>
        <html lang="en" class="scroll-smooth">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AI Platforms Directory | Earnly AI</title>
            <meta name="description" content="Discover 247+ AI platforms and tools for integration. Advanced search, real-time analytics, and monetization opportunities.">
            
            <!-- Styling -->
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
            <link href="/static/advanced-styles.css" rel="stylesheet">
            
            <style>
                .platform-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .platform-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .category-highlight { border-left: 4px solid #10b981; }
                .category-verified { border-left: 4px solid #3b82f6; }
                .category-unclaimed { border-left: 4px solid #6b7280; }
                .search-highlight { background: linear-gradient(90deg, #fbbf24, #f59e0b); }
                .filter-active { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
            </style>
        </head>
        <body class="bg-gray-50 text-gray-900">
            <!-- Navigation -->
            <nav class="fixed top-0 w-full z-50 glass backdrop-blur-md bg-white/90 border-b border-gray-200">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex items-center space-x-4">
                            <a href="/" class="flex items-center">
                                <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                     alt="Earnly Logo" class="h-8 w-auto">
                            </a>
                            <div class="hidden md:flex space-x-6 ml-8">
                                <a href="/for-advertisers" class="text-gray-700 hover:text-purple-600 transition-colors">For Advertisers</a>
                                <a href="/for-ai-platforms" class="text-gray-700 hover:text-purple-600 transition-colors">For AI Platforms</a>
                                <a href="/ai-directory" class="text-purple-600 font-semibold">AI Directory</a>
                            </div>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <a href="/" class="text-gray-600 hover:text-gray-900 transition-colors">
                                <i class="fas fa-arrow-left mr-2"></i>Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Hero Section -->
            <section class="pt-24 pb-12 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-12">
                        <h1 class="text-5xl lg:text-6xl font-bold mb-6">
                            AI Platforms <span class="text-gradient bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Directory</span>
                        </h1>
                        <p class="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
                            Discover and integrate with 247+ leading AI platforms. Advanced search, real-time analytics, 
                            and enterprise-grade monetization opportunities.
                        </p>
                        
                        <!-- Enhanced Search Bar -->
                        <div class="max-w-3xl mx-auto mb-8">
                            <div class="relative">
                                <input type="text" 
                                       id="platform-search"
                                       placeholder="Search AI platforms by name, category, or integration type..."
                                       class="w-full px-6 py-4 pl-14 pr-32 rounded-2xl border-2 border-purple-300 bg-white/10 backdrop-blur-md text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-lg">
                                <i class="fas fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-purple-200 text-lg"></i>
                                <div class="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
                                    <button onclick="searchPlatforms()" 
                                            class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform">
                                        Search
                                    </button>
                                    <button onclick="clearSearch()" 
                                            class="bg-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-colors">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Statistics -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div class="text-center bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <div class="text-3xl font-bold text-white counter" data-target="247">247</div>
                                <div class="text-purple-200 mt-2">AI Platforms</div>
                            </div>
                            <div class="text-center bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <div class="text-3xl font-bold text-blue-300 counter" data-target="89">89</div>
                                <div class="text-purple-200 mt-2">Integration Types</div>
                            </div>
                            <div class="text-center bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <div class="text-3xl font-bold text-green-300 counter" data-target="156">156</div>
                                <div class="text-purple-200 mt-2">Active Integrations</div>
                            </div>
                            <div class="text-center bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <div class="text-3xl font-bold text-yellow-300">$2.4M</div>
                                <div class="text-purple-200 mt-2">Revenue Generated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Filters Section -->
            <section class="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div class="flex flex-wrap gap-3">
                            <button onclick="filterPlatforms('all')" class="filter-btn active bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all">
                                All Platforms
                            </button>
                            <button onclick="filterPlatforms('Highlight')" class="filter-btn px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800 transition-all">
                                <i class="fas fa-star mr-2"></i>Highlights
                            </button>
                            <button onclick="filterPlatforms('Verified')" class="filter-btn px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-all">
                                <i class="fas fa-check-circle mr-2"></i>Verified
                            </button>
                            <button onclick="filterPlatforms('chatbot')" class="filter-btn px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-800 transition-all">
                                <i class="fas fa-comments mr-2"></i>Chatbots
                            </button>
                            <button onclick="filterPlatforms('image')" class="filter-btn px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-pink-100 hover:text-pink-800 transition-all">
                                <i class="fas fa-image mr-2"></i>Image AI
                            </button>
                            <button onclick="filterPlatforms('content')" class="filter-btn px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-800 transition-all">
                                <i class="fas fa-pen mr-2"></i>Content AI
                            </button>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <select id="sort-select" onchange="sortPlatforms()" class="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-purple-500">
                                <option value="name">Sort by Name</option>
                                <option value="category">Sort by Category</option>
                                <option value="relevance">Sort by Relevance</option>
                            </select>
                            <div class="text-sm text-gray-500">
                                <span id="results-count">247</span> platforms found
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Platforms Grid -->
            <section class="py-12 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div id="platforms-grid" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <!-- Platforms will be loaded here by JavaScript -->
                    </div>

                    <!-- Load More Button -->
                    <div class="text-center mt-12">
                        <button id="load-more" onclick="loadMorePlatforms()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                            Load More Platforms
                        </button>
                    </div>
                </div>
            </section>

            <!-- Integration CTA -->
            <section class="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
                <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold mb-4">Ready to Monetize Your AI Platform?</h2>
                    <p class="text-xl text-purple-100 mb-8">
                        Join 156+ AI platforms already generating revenue through intelligent integrations
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/for-ai-platforms" class="bg-white text-purple-900 px-8 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                            Start Integration
                        </a>
                        <a href="/for-advertisers" class="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                            Become an Advertiser
                        </a>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="bg-gray-900 text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid md:grid-cols-4 gap-8">
                        <div>
                            <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                 alt="Earnly Logo" class="h-8 w-auto mb-4">
                            <p class="text-gray-400">Connecting AI platforms with monetization opportunities through intelligent integrations.</p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Platform</h4>
                            <ul class="space-y-2 text-gray-400">
                                <li><a href="/for-ai-platforms" class="hover:text-white">For AI Platforms</a></li>
                                <li><a href="/for-advertisers" class="hover:text-white">For Advertisers</a></li>
                                <li><a href="/ai-directory" class="hover:text-white">AI Directory</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Resources</h4>
                            <ul class="space-y-2 text-gray-400">
                                <li><a href="#" class="hover:text-white">Documentation</a></li>
                                <li><a href="#" class="hover:text-white">API Reference</a></li>
                                <li><a href="#" class="hover:text-white">Integration Guide</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Company</h4>
                            <ul class="space-y-2 text-gray-400">
                                <li><a href="#" class="hover:text-white">About</a></li>
                                <li><a href="#" class="hover:text-white">Contact</a></li>
                                <li><a href="#" class="hover:text-white">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Earnly AI. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            <script src="/static/ai-platforms-directory.js"></script>
        </body>
        </html>
    `)
}