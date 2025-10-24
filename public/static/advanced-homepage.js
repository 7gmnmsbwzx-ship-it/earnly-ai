// Advanced Interactive Features for Earnly AI Platform
// Real-time data, WebSocket connections, and premium UX

// Global functions for user type selection
function selectUserType() {
    // Show user type selection modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Path</h3>
            <div class="space-y-4">
                <button onclick="selectAdvertiser(); closeModal();" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl font-semibold hover:scale-105 transition-transform">
                    <i class="fas fa-bullhorn mr-3"></i>
                    I'm an Advertiser
                    <div class="text-sm opacity-90">Reach engaged users in AI conversations</div>
                </button>
                <button onclick="selectAIPlatform(); closeModal();" class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-xl font-semibold hover:scale-105 transition-transform">
                    <i class="fas fa-robot mr-3"></i>
                    I'm an AI Platform
                    <div class="text-sm opacity-90">Monetize your conversations seamlessly</div>
                </button>
                <button onclick="closeModal();" class="w-full border-2 border-gray-300 text-gray-700 p-3 rounded-xl font-semibold hover:bg-gray-50">
                    I'll decide later
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function selectAdvertiser() {
    trackEvent('user_type_selected', { type: 'advertiser' });
    // Scroll to advertiser section and highlight
    document.getElementById('advertisers')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        startAdvertiserDemo();
    }, 1000);
}

function selectAIPlatform() {
    trackEvent('user_type_selected', { type: 'ai_platform' });
    // Scroll to AI platforms section and highlight
    document.getElementById('ai-platforms')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        startPlatformDemo();
    }, 1000);
}

function closeModal() {
    const modals = document.querySelectorAll('.fixed.inset-0.bg-black.bg-opacity-50');
    modals.forEach(modal => modal.remove());
}

function startAdvertiserDemo() {
    alert('🎯 Advertiser Dashboard Demo\n\n✅ Campaign Management\n✅ Real-time Analytics\n✅ Product Performance\n✅ Audience Insights\n\nRedirecting to advertiser onboarding...');
    // In production: window.location.href = '/dashboard?onboarding=advertiser';
}

function startPlatformDemo() {
    alert('🤖 AI Platform Integration Demo\n\n✅ Easy SDK Integration\n✅ Live Preview\n✅ Revenue Tracking\n✅ API Documentation\n\nRedirecting to integration guide...');
    // In production: window.location.href = '/integration?type=platform';
}

function showChatPreview() {
    document.getElementById('chat-preview')?.classList.remove('hidden');
    document.getElementById('code-preview')?.classList.add('hidden');
    
    // Update button styles
    event.target.className = 'bg-blue-600 text-white px-3 py-1 rounded text-sm';
    event.target.nextElementSibling.className = 'bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm';
}

function showCodePreview() {
    document.getElementById('code-preview')?.classList.remove('hidden');
    document.getElementById('chat-preview')?.classList.add('hidden');
    
    // Update button styles
    event.target.className = 'bg-blue-600 text-white px-3 py-1 rounded text-sm';
    event.target.previousElementSibling.className = 'bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm';
}

function showSignInForm() {
    window.location.href = '/?auth=signin';
}

function trackEvent(event, data = {}) {
    console.log(`Event: ${event}`, data);
    // In production, send to analytics
}

class EarnlyAdvanced {
    constructor() {
        this.websocket = null;
        this.isConnected = false;
        this.counters = new Map();
        this.activityFeed = [];
        this.demoProducts = [];
        
        this.init();
    }
    
    init() {
        this.initWebSocket();
        this.initCounters();
        this.initScrollAnimations();
        this.initActivityFeed();
        this.initDemoSystem();
        this.initParallaxEffects();
        
        console.log('🚀 Earnly Advanced initialized');
    }
    
    // WebSocket for Real-time Data
    initWebSocket() {
        try {
            // In production, this would connect to a WebSocket server
            // For demo, we'll simulate with setInterval
            this.simulateWebSocket();
        } catch (error) {
            console.log('WebSocket simulation started');
            this.simulateWebSocket();
        }
    }
    
    simulateWebSocket() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateLiveMetrics();
            this.updateActivityFeed();
        }, 2000);
        
        setInterval(() => {
            this.updateConversationCount();
        }, 5000);
        
        this.isConnected = true;
        console.log('✅ Real-time data simulation active');
    }
    
    // Animated Counters
    initCounters() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.counter').forEach(counter => {
            observer.observe(counter);
        });
    }
    
    animateCounter(element) {
        const target = parseFloat(element.dataset.target) || 
                      parseFloat(element.textContent.replace(/[^0-9.]/g, '')) || 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;
        
        const timer = setInterval(() => {
            current += increment;
            step++;
            
            if (step >= steps) {
                current = target;
                clearInterval(timer);
            }
            
            // Format based on element type
            if (element.id === 'revenue-counter') {
                element.textContent = '$' + current.toLocaleString('en-US', { 
                    maximumFractionDigits: 0 
                });
            } else if (element.id === 'conversion-rate') {
                element.textContent = current.toFixed(1) + '%';
            } else if (target < 50) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
            
            element.classList.add('counter-animate');
            setTimeout(() => element.classList.remove('counter-animate'), 100);
        }, duration / steps);
    }
    
    // Live Metrics Updates
    updateLiveMetrics() {
        const revenueElement = document.getElementById('revenue-counter');
        const conversionElement = document.getElementById('conversion-rate');
        
        if (revenueElement) {
            const currentRevenue = parseFloat(revenueElement.textContent.replace(/[^0-9.]/g, ''));
            const newRevenue = currentRevenue + Math.random() * 50 + 10;
            revenueElement.textContent = '$' + newRevenue.toLocaleString('en-US', { 
                maximumFractionDigits: 0 
            });
        }
        
        if (conversionElement) {
            const currentRate = parseFloat(conversionElement.textContent);
            const variation = (Math.random() - 0.5) * 0.2;
            const newRate = Math.max(0, currentRate + variation);
            conversionElement.textContent = newRate.toFixed(1) + '%';
        }
    }
    
    updateConversationCount() {
        const liveCounter = document.getElementById('live-conversations');
        if (liveCounter) {
            const current = parseInt(liveCounter.textContent.replace(/,/g, ''));
            const increment = Math.floor(Math.random() * 20) + 5;
            const newCount = current + increment;
            liveCounter.textContent = newCount.toLocaleString();
        }
    }
    
    // Activity Feed
    initActivityFeed() {
        this.activityTemplates = [
            '🎯 AI matched gaming laptop to user in Seattle - $1,299 conversion',
            '💡 Smart recommendation: Wireless headphones for work-from-home query',
            '🚀 Enterprise client activated new campaign - Tech category',
            '📊 Conversion rate increased 12% for Beauty products',
            '⚡ Real-time optimization improved CTR by 23%',
            '🎮 Gaming accessories surge detected - Auto-scaling campaigns',
            '💼 B2B software query matched to CRM solution - $2,500 deal',
            '🏠 Home improvement season driving smart home recommendations',
        ];
        
        this.updateActivityFeed();
    }
    
    updateActivityFeed() {
        const feed = document.getElementById('activity-feed');
        if (!feed) return;
        
        // Add new activity
        const template = this.activityTemplates[Math.floor(Math.random() * this.activityTemplates.length)];
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const activityItem = document.createElement('div');
        activityItem.className = 'flex items-center justify-between p-2 bg-white rounded-lg border border-gray-100 notification-modern';
        activityItem.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700">${template}</span>
            </div>
            <span class="text-xs text-gray-500">${timestamp}</span>
        `;
        
        // Add to top of feed
        feed.insertBefore(activityItem, feed.firstChild);
        
        // Remove old items (keep only 3)
        const items = feed.children;
        if (items.length > 3) {
            for (let i = items.length - 1; i >= 3; i--) {
                items[i].remove();
            }
        }
    }
    
    // Scroll Animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.glass-card, .interactive-demo').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Parallax Effects
    initParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.floating');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    // Demo System
    initDemoSystem() {
        this.demoProducts = [
            {
                title: 'ASUS ROG Strix G15 Gaming Laptop',
                price: '$1,499',
                image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=60&h=60&fit=crop',
                score: 94.2,
                commission: '12%',
                reasoning: 'Perfect match for gaming performance requirements with high-end specs'
            },
            {
                title: 'Sony WH-1000XM5 Headphones',
                price: '$399',
                image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=60&h=60&fit=crop',
                score: 89.1,
                commission: '15%',
                reasoning: 'Excellent audio quality for streaming and content creation'
            },
            {
                title: 'Razer DeathAdder V3 Gaming Mouse',
                price: '$89',
                image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=60&h=60&fit=crop',
                score: 87.5,
                commission: '18%',
                reasoning: 'High-precision gaming mouse perfect for competitive play'
            }
        ];
    }
    
    runDemoQuery() {
        const query = document.getElementById('demo-query')?.value;
        if (!query) return;
        
        const loadingEl = document.getElementById('demo-loading');
        const resultsEl = document.getElementById('demo-results');
        const productsEl = document.getElementById('demo-products');
        
        // Show loading
        if (loadingEl) loadingEl.classList.remove('hidden');
        if (resultsEl) resultsEl.classList.add('hidden');
        
        // Simulate AI processing
        setTimeout(() => {
            if (loadingEl) loadingEl.classList.add('hidden');
            if (resultsEl) resultsEl.classList.remove('hidden');
            
            // Populate results
            if (productsEl) {
                productsEl.innerHTML = this.demoProducts.map(product => `
                    <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover-lift">
                        <div class="flex items-center space-x-4">
                            <img src="${product.image}" alt="${product.title}" class="w-12 h-12 rounded-lg object-cover">
                            <div>
                                <div class="font-semibold text-gray-900">${product.title}</div>
                                <div class="text-sm text-gray-600">Match Score: ${product.score}%</div>
                                <div class="text-xs text-gray-500 mt-1">${product.reasoning}</div>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="text-lg font-bold text-green-600">${product.price}</div>
                            <div class="text-xs text-gray-500">${product.commission} commission</div>
                        </div>
                    </div>
                `).join('');
            }
            
            // Add success notification
            this.showNotification('AI analysis complete! Found 3 highly relevant products.', 'success');
        }, 2000);
    }
    
    // Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification-modern p-4 mb-4 rounded-lg ${
            type === 'success' ? 'bg-green-100 border-green-500 text-green-700' :
            type === 'error' ? 'bg-red-100 border-red-500 text-red-700' :
            'bg-blue-100 border-blue-500 text-blue-700'
        }`;
        
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${
                    type === 'success' ? 'fa-check-circle' :
                    type === 'error' ? 'fa-exclamation-circle' :
                    'fa-info-circle'
                } mr-3"></i>
                <span class="font-medium">${message}</span>
            </div>
        `;
        
        // Add to page
        const container = document.body;
        container.insertBefore(notification, container.firstChild);
        
        // Auto-remove
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
    
    // Interactive Methods
    startInteractiveDemo() {
        // Scroll to demo section
        document.getElementById('demo')?.scrollIntoView({ 
            behavior: 'smooth' 
        });
        
        // Focus on demo input
        setTimeout(() => {
            document.getElementById('demo-query')?.focus();
        }, 800);
        
        this.showNotification('Welcome to the interactive demo! Try entering a search query.', 'info');
    }
    
    scheduleCall() {
        this.showNotification('Enterprise consultation booking opened in new tab.', 'info');
        // In production, this would integrate with calendly or similar
        window.open('https://calendly.com/earnly-enterprise', '_blank');
    }
    
    startDemo() {
        this.showNotification('Demo environment loading...', 'info');
        
        // Simulate demo environment setup
        setTimeout(() => {
            window.location.hash = '#demo';
            this.startInteractiveDemo();
        }, 1000);
    }
}

// Utility Functions for Global Access
window.earnlyAdvanced = new EarnlyAdvanced();

// Global Functions
window.runDemoQuery = () => window.earnlyAdvanced.runDemoQuery();
window.startInteractiveDemo = () => window.earnlyAdvanced.startInteractiveDemo();
window.scheduleCall = () => window.earnlyAdvanced.scheduleCall();
window.startDemo = () => window.earnlyAdvanced.startDemo();

// Authentication Functions (from original app)
window.showSignInForm = () => {
    window.location.href = '/?auth=signin';
};

window.showSignUpForm = () => {
    window.location.href = '/?auth=signup';
};

// Enhanced Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-black', 'bg-opacity-80');
            } else {
                navbar.classList.remove('bg-black', 'bg-opacity-80');
            }
        }
    });
    
    // Demo query suggestions
    const demoInput = document.getElementById('demo-query');
    if (demoInput) {
        const suggestions = [
            'best gaming laptop for streaming',
            'wireless headphones for work from home',
            'smart home security system',
            'professional video editing software',
            'ergonomic office chair under $500',
            'AI-powered marketing tools',
            'sustainable fashion brands',
            'electric vehicle charging station'
        ];
        
        let suggestionIndex = 0;
        setInterval(() => {
            if (demoInput === document.activeElement || demoInput.value) return;
            
            demoInput.placeholder = `Try: ${suggestions[suggestionIndex]}`;
            suggestionIndex = (suggestionIndex + 1) % suggestions.length;
        }, 3000);
    }
    
    console.log('🎉 Advanced homepage loaded successfully!');
});

// Performance Analytics
const analytics = {
    trackEvent: (event, data) => {
        console.log('📊 Analytics Event:', event, data);
        // In production, send to analytics service
    },
    
    trackConversion: (type, value) => {
        console.log('💰 Conversion Tracked:', type, value);
        // In production, send to conversion tracking
    },
    
    trackEngagement: (element, action) => {
        console.log('👆 Engagement:', element, action);
        // In production, track user engagement
    }
};

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EarnlyAdvanced, analytics };
}

// ============================================================================
// AI PLATFORMS DIRECTORY FUNCTIONS (INLINE)
// ============================================================================

// AI Platforms directory state
let currentPlatformFilter = 'all';
let platformSearchTerm = '';

// Enhanced search for main platforms directory
function searchPlatformsMain() {
    const searchInput = document.getElementById('platform-search-main');
    if (searchInput) {
        platformSearchTerm = searchInput.value.toLowerCase();
        filterAndRenderMainPlatforms();
        
        // Track search
        analytics.trackEvent('platform_search_main', { term: platformSearchTerm });
    }
}

// Filter platforms in main directory
function filterPlatformsMain(category) {
    currentPlatformFilter = category;
    updateMainFilterButtons();
    filterAndRenderMainPlatforms();
    
    analytics.trackEvent('platform_filter_main', { category });
}

// Update filter button states
function updateMainFilterButtons() {
    document.querySelectorAll('.filter-tag-main').forEach(btn => {
        btn.classList.remove('active', 'bg-gradient-to-r', 'from-purple-600', 'to-blue-600', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700');
    });
    
    const activeBtn = document.querySelector(`[onclick="filterPlatformsMain('${currentPlatformFilter}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-gradient-to-r', 'from-purple-600', 'to-blue-600', 'text-white');
        activeBtn.classList.remove('bg-white', 'text-gray-700');
    }
}

// Filter and render platforms in main directory
function filterAndRenderMainPlatforms() {
    const platforms = document.querySelectorAll('#platforms-grid-main .platform-card');
    
    platforms.forEach(platform => {
        const categories = platform.getAttribute('data-category') || '';
        const platformName = platform.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = platform.querySelector('p')?.textContent.toLowerCase() || '';
        
        // Category filter
        const categoryMatch = currentPlatformFilter === 'all' || 
                            categories.includes(currentPlatformFilter);
        
        // Search filter
        const searchMatch = !platformSearchTerm || 
                          platformName.includes(platformSearchTerm) ||
                          description.includes(platformSearchTerm) ||
                          categories.includes(platformSearchTerm);
        
        // Show/hide platform
        if (categoryMatch && searchMatch) {
            platform.style.display = 'block';
            platform.style.opacity = '0';
            platform.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                platform.style.transition = 'all 0.5s ease';
                platform.style.opacity = '1';
                platform.style.transform = 'translateY(0)';
            }, 100);
        } else {
            platform.style.display = 'none';
        }
    });
}

// Integration handler for main directory
function integrateNowMain(platformId) {
    // Show integration modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-lg w-full mx-4">
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Start Integration</h3>
                <p class="text-gray-600">Choose your preferred integration method</p>
            </div>
            
            <div class="space-y-3 mb-6">
                <button onclick="startQuickIntegration('${platformId}'); closeModal();" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-xl font-semibold hover:scale-105 transition-transform text-left">
                    <div class="flex items-center">
                        <i class="fas fa-zap mr-3 text-xl"></i>
                        <div>
                            <div class="font-bold">Quick Start SDK</div>
                            <div class="text-sm opacity-90">Get running in under 5 minutes</div>
                        </div>
                    </div>
                </button>
                
                <button onclick="startRestIntegration('${platformId}'); closeModal();" class="w-full border-2 border-purple-600 text-purple-600 p-4 rounded-xl font-semibold hover:bg-purple-50 transition-all text-left">
                    <div class="flex items-center">
                        <i class="fas fa-code mr-3 text-xl"></i>
                        <div>
                            <div class="font-bold">REST API Integration</div>
                            <div class="text-sm opacity-75">Full control with our API</div>
                        </div>
                    </div>
                </button>
                
                <button onclick="requestCustomIntegration('${platformId}'); closeModal();" class="w-full border border-gray-300 text-gray-700 p-4 rounded-xl font-semibold hover:bg-gray-50 transition-all text-left">
                    <div class="flex items-center">
                        <i class="fas fa-users mr-3 text-xl"></i>
                        <div>
                            <div class="font-bold">Enterprise Solutions</div>
                            <div class="text-sm opacity-75">Custom integration with support</div>
                        </div>
                    </div>
                </button>
            </div>
            
            <button onclick="closeModal();" class="w-full text-gray-500 hover:text-gray-700">
                Cancel
            </button>
        </div>
    `;
    document.body.appendChild(modal);
    
    analytics.trackEvent('integration_modal_opened', { platform_id: platformId });
}

// Quick integration flow
function startQuickIntegration(platformId) {
    alert(`Starting Quick SDK Integration for ${platformId}!\n\n✅ Generating API key...\n✅ Preparing SDK package...\n✅ Creating integration guide...\n\nRedirecting to integration wizard...`);
    
    analytics.trackEvent('quick_integration_started', { platform_id: platformId });
}

// REST API integration flow
function startRestIntegration(platformId) {
    alert(`Starting REST API Integration for ${platformId}!\n\n✅ API documentation loading...\n✅ Generating test credentials...\n✅ Preparing code samples...\n\nRedirecting to API docs...`);
    
    analytics.trackEvent('rest_integration_started', { platform_id: platformId });
}

// Custom integration request
function requestCustomIntegration(platformId) {
    alert(`Enterprise Integration Request for ${platformId}!\n\n✅ Creating support ticket...\n✅ Assigning integration specialist...\n✅ Scheduling consultation call...\n\nOur team will contact you within 24 hours.`);
    
    analytics.trackEvent('custom_integration_requested', { platform_id: platformId });
}

// Show all platforms (redirect to full directory)
function showAllPlatforms() {
    // Animate button
    const btn = event.target;
    btn.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
        // Redirect to full directory page
        window.location.href = '/ai-platforms';
    }, 150);
    
    analytics.trackEvent('view_all_platforms_clicked');
}

// Animate platform counters when visible
function animatePlatformCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 60;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

// Enhanced Demo Functions
let demoChart = null;
let processingAnimationInterval = null;

function setDemoQuery(query) {
    document.getElementById('enhanced-demo-query').value = query;
    runEnhancedDemo();
}

function runEnhancedDemo() {
    const query = document.getElementById('enhanced-demo-query').value.trim();
    if (!query) return;
    
    // Hide previous results
    document.getElementById('enhanced-demo-results').classList.add('hidden');
    
    // Show AI processing animation
    showAIProcessing();
    
    // Simulate AI processing time
    setTimeout(() => {
        hideAIProcessing();
        showEnhancedResults(query);
        updateLiveMetrics();
    }, 2500);
    
    trackEvent('enhanced_demo_used', { query });
}

function showAIProcessing() {
    const processingDiv = document.getElementById('ai-processing');
    processingDiv.classList.remove('hidden');
    
    // Animate processing bars
    const steps = document.querySelectorAll('.processing-step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            const fill = step.querySelector('.processing-fill');
            fill.style.width = '0%';
            fill.style.transition = 'width 0.8s ease-out';
            setTimeout(() => {
                fill.style.width = '100%';
            }, 100);
        }, index * 600);
    });
    
    // Update processing time
    let time = 0;
    processingAnimationInterval = setInterval(() => {
        time += 0.01;
        document.getElementById('processing-time').textContent = time.toFixed(2);
    }, 10);
}

function hideAIProcessing() {
    document.getElementById('ai-processing').classList.add('hidden');
    if (processingAnimationInterval) {
        clearInterval(processingAnimationInterval);
        processingAnimationInterval = null;
    }
}

function showEnhancedResults(query) {
    const resultsDiv = document.getElementById('enhanced-demo-results');
    const productsDiv = document.getElementById('enhanced-demo-products');
    
    // Generate sample products based on query
    const products = generateSampleProducts(query);
    
    productsDiv.innerHTML = products.map((product, index) => `
        <div class="enhanced-product-card bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all transform hover:-translate-y-1" style="animation: slideInUp 0.6s ease-out ${index * 0.1}s both;">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center">
                        <i class="${product.icon} text-white text-2xl"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-gray-900 text-lg">${product.name}</h5>
                        <p class="text-gray-600">${product.brand}</p>
                    </div>
                </div>
                <div class="text-right">
                    <div class="flex items-center space-x-2 mb-1">
                        <div class="match-score bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            ${product.matchScore}%
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-900">${product.price}</div>
                </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center space-x-2">
                        <div class="flex text-yellow-400">
                            ${('⭐'.repeat(product.rating))}
                        </div>
                        <span class="text-sm text-gray-600">(${product.reviews} reviews)</span>
                    </div>
                    <div class="text-sm font-semibold text-green-600">${product.discount}</div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="text-sm">
                        <span class="text-gray-500">Available at:</span>
                        <div class="font-medium text-blue-600">${product.retailer}</div>
                    </div>
                    <div class="text-sm">
                        <span class="text-gray-500">Shipping:</span>
                        <div class="font-medium text-gray-700">${product.shipping}</div>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex space-x-2">
                    ${product.tags.map(tag => `
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">${tag}</span>
                    `).join('')}
                </div>
                <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
    
    resultsDiv.classList.remove('hidden');
}

function generateSampleProducts(query) {
    const productTemplates = {
        'headphones': [
            { name: 'AirPods Pro Max', brand: 'Apple', price: '$549', gradient: 'from-purple-500 to-blue-500', icon: 'fas fa-headphones', rating: 5, reviews: '2,847', discount: '15% off', retailer: 'Amazon', shipping: 'Free 2-day', tags: ['Premium', 'Wireless', 'ANC'] },
            { name: 'Sony WH-1000XM5', brand: 'Sony', price: '$399', gradient: 'from-blue-500 to-green-500', icon: 'fas fa-headphones', rating: 5, reviews: '1,923', discount: '20% off', retailer: 'Best Buy', shipping: 'Free shipping', tags: ['Noise Cancel', 'Wireless'] },
            { name: 'Bose QuietComfort', brand: 'Bose', price: '$329', gradient: 'from-green-500 to-teal-500', icon: 'fas fa-headphones', rating: 4, reviews: '1,456', discount: '25% off', retailer: 'Target', shipping: 'Same day', tags: ['Comfort', 'Travel'] }
        ],
        'laptop': [
            { name: 'MacBook Pro M3', brand: 'Apple', price: '$1,999', gradient: 'from-gray-700 to-gray-900', icon: 'fas fa-laptop', rating: 5, reviews: '5,234', discount: '$200 off', retailer: 'Apple Store', shipping: 'Free shipping', tags: ['Pro', 'M3 Chip', '16GB'] },
            { name: 'ASUS ROG Strix', brand: 'ASUS', price: '$1,599', gradient: 'from-red-500 to-orange-500', icon: 'fas fa-laptop', rating: 4, reviews: '3,891', discount: '$300 off', retailer: 'Newegg', shipping: 'Free 3-day', tags: ['Gaming', 'RTX 4070'] },
            { name: 'Dell XPS 15', brand: 'Dell', price: '$1,299', gradient: 'from-blue-600 to-purple-600', icon: 'fas fa-laptop', rating: 4, reviews: '2,657', discount: '$250 off', retailer: 'Dell Direct', shipping: 'Free shipping', tags: ['Business', '4K Display'] }
        ],
        'fashion': [
            { name: 'Organic Cotton Tee', brand: 'Patagonia', price: '$45', gradient: 'from-green-600 to-teal-600', icon: 'fas fa-tshirt', rating: 5, reviews: '1,245', discount: '30% off', retailer: 'Patagonia', shipping: 'Free over $75', tags: ['Sustainable', 'Organic'] },
            { name: 'Denim Jacket', brand: 'Levi\'s', price: '$89', gradient: 'from-blue-700 to-indigo-700', icon: 'fas fa-user-tie', rating: 4, reviews: '2,103', discount: '40% off', retailer: 'Levi\'s Store', shipping: 'Free shipping', tags: ['Classic', 'Denim'] },
            { name: 'Eco Sneakers', brand: 'Allbirds', price: '$98', gradient: 'from-purple-600 to-pink-600', icon: 'fas fa-shoe-prints', rating: 4, reviews: '3,456', discount: '25% off', retailer: 'Allbirds', shipping: 'Free returns', tags: ['Eco-friendly', 'Comfort'] }
        ],
        'security': [
            { name: 'Ring Video Doorbell', brand: 'Amazon', price: '$199', gradient: 'from-orange-500 to-red-500', icon: 'fas fa-video', rating: 4, reviews: '12,847', discount: '$50 off', retailer: 'Amazon', shipping: 'Prime 1-day', tags: ['Smart', 'HD Video'] },
            { name: 'Nest Cam Indoor', brand: 'Google', price: '$129', gradient: 'from-blue-500 to-green-500', icon: 'fas fa-camera', rating: 4, reviews: '8,234', discount: '$30 off', retailer: 'Google Store', shipping: 'Free shipping', tags: ['Indoor', 'AI Detection'] },
            { name: 'SimpliSafe Kit', brand: 'SimpliSafe', price: '$299', gradient: 'from-gray-600 to-gray-800', icon: 'fas fa-shield-alt', rating: 5, reviews: '5,678', discount: '$100 off', retailer: 'SimpliSafe', shipping: 'Free install', tags: ['Complete Kit', 'No Contract'] }
        ]
    };
    
    // Determine product category from query
    let category = 'headphones'; // default
    if (query.toLowerCase().includes('laptop') || query.toLowerCase().includes('gaming')) category = 'laptop';
    if (query.toLowerCase().includes('fashion') || query.toLowerCase().includes('clothing')) category = 'fashion';
    if (query.toLowerCase().includes('security') || query.toLowerCase().includes('smart home')) category = 'security';
    if (query.toLowerCase().includes('headphones') || query.toLowerCase().includes('workout')) category = 'headphones';
    
    // Add match scores based on query relevance
    const products = productTemplates[category] || productTemplates['headphones'];
    return products.map((product, index) => ({
        ...product,
        matchScore: Math.floor(95 - index * 3 + Math.random() * 5)
    }));
}

function updateLiveMetrics() {
    // Animate metrics with dynamic, competitive changes
    animateMetric('accuracy-metric', 94.7, 0.8);
    animateMetric('conversion-metric', 12.4, 0.5);
    
    // Update revenue with larger, more competitive increments
    const currentRevenue = parseFloat(document.getElementById('revenue-metric').textContent.replace('$', '').replace('M', ''));
    const increment = (Math.random() * 0.1) + 0.05; // $50K - $150K increments
    const newRevenue = currentRevenue + increment;
    document.getElementById('revenue-metric').textContent = `$${newRevenue.toFixed(1)}M`;
    
    // Update change indicators dynamically
    animateChangeIndicator('accuracy-change', 2.3, 1.5);
    animateChangeIndicator('conversion-change', 5.8, 2.0);
    animateChangeIndicator('revenue-growth', 47, 8);
    
    // Update mini chart
    updateMiniChart();
}

function animateMetric(elementId, baseValue, variance) {
    const element = document.getElementById(elementId);
    const change = (Math.random() - 0.5) * variance;
    const newValue = baseValue + change;
    
    if (elementId.includes('conversion')) {
        element.textContent = `${newValue.toFixed(1)}%`;
    } else {
        element.textContent = `${newValue.toFixed(1)}%`;
    }
    
    // Enhanced flash effect
    element.style.transform = 'scale(1.15)';
    element.style.color = '#ffffff';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '';
    }, 300);
}

function animateChangeIndicator(elementId, baseValue, variance) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const change = (Math.random() - 0.3) * variance; // Bias towards positive changes
    const newValue = Math.max(0.1, baseValue + change);
    
    element.textContent = newValue.toFixed(1);
    
    // Pulse effect
    element.style.transform = 'scale(1.2)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 250);
}

function updateMiniChart() {
    const canvas = document.getElementById('mini-performance-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (demoChart) {
        demoChart.destroy();
    }
    
    // Generate sample data
    const data = [];
    for (let i = 0; i < 7; i++) {
        data.push(Math.floor(Math.random() * 30) + 70);
    }
    
    demoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                data: data,
                borderColor: '#8B5CF6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointBackgroundColor: '#8B5CF6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    min: 60,
                    max: 100
                }
            },
            elements: {
                point: {
                    hoverRadius: 6
                }
            }
        }
    });
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize platform counters
    setTimeout(() => {
        animatePlatformCounters();
    }, 500);
    
    // Add search input event listener
    const searchInput = document.getElementById('platform-search-main');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            platformSearchTerm = e.target.value.toLowerCase();
            filterAndRenderMainPlatforms();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchPlatformsMain();
            }
        });
    }
    
    // Initialize enhanced demo
    setTimeout(() => {
        updateMiniChart();
    }, 1000);
    
    // Add enhanced demo input listener
    const enhancedDemoInput = document.getElementById('enhanced-demo-query');
    if (enhancedDemoInput) {
        enhancedDemoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                runEnhancedDemo();
            }
        });
    }
    
    // Start continuous metrics updates for dynamic effect
    setInterval(() => {
        updateLiveMetrics();
    }, 8000); // Update every 8 seconds
});