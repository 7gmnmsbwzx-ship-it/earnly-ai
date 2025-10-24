// Enhanced AI Platforms Directory JavaScript

class AIPlatformsApp {
    constructor() {
        this.platforms = [];
        this.filteredPlatforms = [];
        this.currentFilter = 'all';
        this.currentView = 'grid';
        this.searchTerm = '';
        
        this.init();
    }

    init() {
        this.generatePlatformData();
        this.bindEvents();
        this.animateCounters();
        this.startLiveUpdates();
    }

    generatePlatformData() {
        // Comprehensive platform data
        this.platforms = [
            {
                id: 'chatgpt-style',
                name: 'ChatGPT-Style Platform',
                description: 'Advanced conversational AI with contextual product recommendations and seamless monetization integration.',
                category: ['chatbots', 'assistants'],
                status: 'active',
                cvr: 8.7,
                revenue: 247,
                integration: '2.1s',
                technologies: ['SDK', 'REST API', 'Webhooks'],
                icon: 'fas fa-comments',
                color: 'green',
                popularity: 95
            },
            {
                id: 'voice-ai',
                name: 'Voice AI Platform',
                description: 'Voice-activated AI with natural language processing and audio-based product recommendations.',
                category: ['voice', 'assistants'],
                status: 'beta',
                cvr: 12.3,
                revenue: 389,
                integration: '3.2s',
                technologies: ['Voice SDK', 'Audio API', 'NLP'],
                icon: 'fas fa-microphone',
                color: 'orange',
                popularity: 87
            },
            {
                id: 'analytics-ai',
                name: 'Analytics AI Platform',
                description: 'AI-powered business analytics with intelligent tool and service recommendations based on data insights.',
                category: ['analytics', 'assistants'],
                status: 'enterprise',
                cvr: 15.2,
                revenue: 892,
                integration: '1.8s',
                technologies: ['GraphQL', 'REST API', 'Real-time'],
                icon: 'fas fa-chart-line',
                color: 'blue',
                popularity: 92
            },
            {
                id: 'content-gen',
                name: 'Content Generation AI',
                description: 'Creative AI platform for content generation with contextual tool and service recommendations.',
                category: ['content', 'assistants'],
                status: 'active',
                cvr: 9.8,
                revenue: 412,
                integration: '2.5s',
                technologies: ['SDK', 'REST API', 'Streaming'],
                icon: 'fas fa-pen',
                color: 'purple',
                popularity: 89
            },
            {
                id: 'customer-service',
                name: 'Customer Service AI',
                description: 'Intelligent customer support platform with automated product and solution recommendations.',
                category: ['chatbots', 'assistants'],
                status: 'active',
                cvr: 11.4,
                revenue: 623,
                integration: '1.9s',
                technologies: ['SDK', 'Webhooks', 'CRM API'],
                icon: 'fas fa-headset',
                color: 'teal',
                popularity: 91
            },
            {
                id: 'shopping-assistant',
                name: 'Shopping Assistant AI',
                description: 'E-commerce focused AI with advanced product matching and recommendation algorithms.',
                category: ['chatbots', 'assistants'],
                status: 'active',
                cvr: 18.7,
                revenue: 1247,
                integration: '1.4s',
                technologies: ['E-commerce API', 'ML Engine', 'Real-time'],
                icon: 'fas fa-shopping-cart',
                color: 'green',
                popularity: 96
            }
        ];

        this.filteredPlatforms = [...this.platforms];
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('platform-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value;
                this.filterAndRender();
            });
        }

        // Sort functionality
        const sortSelect = document.getElementById('sort-by');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortPlatforms(e.target.value);
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && !e.target.matches('input, textarea')) {
                e.preventDefault();
                searchInput?.focus();
            }
        });
    }

    searchPlatforms() {
        const searchTerm = document.getElementById('platform-search').value;
        this.searchTerm = searchTerm;
        this.filterAndRender();
        
        // Analytics tracking
        if (searchTerm) {
            this.trackEvent('platform_search', { term: searchTerm });
        }
    }

    filterBy(category) {
        this.currentFilter = category;
        this.updateFilterButtons();
        this.filterAndRender();
        
        this.trackEvent('platform_filter', { category });
    }

    updateFilterButtons() {
        document.querySelectorAll('.filter-tag').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`[onclick="filterBy('${this.currentFilter}')"]`)?.classList.add('active');
    }

    filterAndRender() {
        this.filteredPlatforms = this.platforms.filter(platform => {
            // Category filter
            const categoryMatch = this.currentFilter === 'all' || 
                                platform.category.includes(this.currentFilter);
            
            // Search filter
            const searchMatch = !this.searchTerm || 
                              platform.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                              platform.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                              platform.category.some(cat => cat.toLowerCase().includes(this.searchTerm.toLowerCase()));
            
            return categoryMatch && searchMatch;
        });

        this.renderPlatforms();
    }

    sortPlatforms(sortBy) {
        switch (sortBy) {
            case 'popularity':
                this.filteredPlatforms.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'integration':
                this.filteredPlatforms.sort((a, b) => parseFloat(a.integration) - parseFloat(b.integration));
                break;
            case 'revenue':
                this.filteredPlatforms.sort((a, b) => b.revenue - a.revenue);
                break;
            case 'recent':
                // Simulate recency by ID
                this.filteredPlatforms.sort((a, b) => b.id.localeCompare(a.id));
                break;
        }
        
        this.renderPlatforms();
    }

    renderPlatforms() {
        const grid = document.getElementById('platforms-grid');
        if (!grid) return;

        const loadMoreBtn = grid.querySelector('.col-span-full');
        
        // Clear existing platform cards but keep load more button
        Array.from(grid.children).forEach(child => {
            if (!child.classList.contains('col-span-full')) {
                child.remove();
            }
        });

        this.filteredPlatforms.forEach((platform, index) => {
            const platformCard = this.createPlatformCard(platform);
            
            // Insert before load more button
            if (loadMoreBtn) {
                grid.insertBefore(platformCard, loadMoreBtn);
            } else {
                grid.appendChild(platformCard);
            }

            // Animate card entry
            setTimeout(() => {
                platformCard.style.opacity = '0';
                platformCard.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    platformCard.style.transition = 'all 0.5s ease';
                    platformCard.style.opacity = '1';
                    platformCard.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });

        // Update results count
        this.updateResultsCount();
    }

    createPlatformCard(platform) {
        const card = document.createElement('div');
        card.className = 'platform-card glass-card p-6 hover-lift';
        card.setAttribute('data-category', platform.category.join(' '));

        const statusColor = {
            'active': 'green',
            'beta': 'orange',
            'enterprise': 'blue'
        }[platform.status] || 'gray';

        card.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-${platform.color}-500 rounded-xl flex items-center justify-center">
                        <i class="${platform.icon} text-white text-xl"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900">${platform.name}</h3>
                        <p class="text-sm text-gray-600">${platform.category.join(' • ')}</p>
                    </div>
                </div>
                <span class="bg-${statusColor}-100 text-${statusColor}-800 text-xs font-medium px-3 py-1 rounded-full">${platform.status}</span>
            </div>
            
            <div class="mb-4">
                <p class="text-gray-600 mb-3">${platform.description}</p>
                
                <div class="grid grid-cols-3 gap-2 text-sm">
                    <div class="text-center">
                        <div class="font-bold text-purple-600">${platform.cvr}%</div>
                        <div class="text-gray-500">CVR</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-blue-600">$${platform.revenue}</div>
                        <div class="text-gray-500">Avg Revenue</div>
                    </div>
                    <div class="text-center">
                        <div class="font-bold text-green-600">${platform.integration}</div>
                        <div class="text-gray-500">Integration</div>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    ${platform.technologies.map(tech => 
                        `<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">${tech}</span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="flex space-x-2">
                <button onclick="aiPlatformsApp.integrateNow('${platform.id}')" 
                        class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                    ${platform.status === 'beta' ? 'Join Beta' : 'Integrate Now'}
                </button>
                <button onclick="aiPlatformsApp.viewDetails('${platform.id}')" 
                        class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        `;

        return card;
    }

    updateResultsCount() {
        const count = this.filteredPlatforms.length;
        const total = this.platforms.length;
        
        // You could add a results counter element here
        console.log(`Showing ${count} of ${total} platforms`);
    }

    setView(viewType) {
        this.currentView = viewType;
        
        // Update view buttons
        document.getElementById('grid-view')?.classList.toggle('bg-blue-600', viewType === 'grid');
        document.getElementById('grid-view')?.classList.toggle('text-white', viewType === 'grid');
        document.getElementById('grid-view')?.classList.toggle('bg-white', viewType !== 'grid');
        document.getElementById('grid-view')?.classList.toggle('text-gray-700', viewType !== 'grid');
        
        document.getElementById('list-view')?.classList.toggle('bg-blue-600', viewType === 'list');
        document.getElementById('list-view')?.classList.toggle('text-white', viewType === 'list');
        document.getElementById('list-view')?.classList.toggle('bg-white', viewType !== 'list');
        document.getElementById('list-view')?.classList.toggle('text-gray-700', viewType !== 'list');

        // Update grid layout
        const grid = document.getElementById('platforms-grid');
        if (grid) {
            if (viewType === 'list') {
                grid.className = 'space-y-4';
                // Update card styling for list view
                grid.querySelectorAll('.platform-card').forEach(card => {
                    card.classList.add('flex', 'items-center', 'space-x-6');
                });
            } else {
                grid.className = 'grid md:grid-cols-2 lg:grid-cols-3 gap-8';
                // Reset card styling for grid view
                grid.querySelectorAll('.platform-card').forEach(card => {
                    card.classList.remove('flex', 'items-center', 'space-x-6');
                });
            }
        }
        
        this.trackEvent('view_change', { view: viewType });
    }

    previewPlatform(type) {
        // Update preview buttons
        document.querySelectorAll('.preview-btn').forEach(btn => {
            btn.className = 'preview-btn p-4 border border-gray-300 rounded-xl text-center hover:bg-gray-50 transition-colors';
            btn.querySelector('i').className = btn.querySelector('i').className.replace('text-blue-600', 'text-gray-600');
            btn.querySelector('span').className = 'text-gray-600 font-medium';
        });

        // Highlight selected button
        const selectedBtn = document.querySelector(`[onclick="previewPlatform('${type}')"]`);
        if (selectedBtn) {
            selectedBtn.className = 'preview-btn p-4 border-2 border-blue-600 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors';
            selectedBtn.querySelector('i').className = selectedBtn.querySelector('i').className.replace('text-gray-600', 'text-blue-600');
            selectedBtn.querySelector('span').className = 'text-blue-600 font-medium';
        }

        // Update preview content based on type
        this.updatePreviewContent(type);
        
        this.trackEvent('preview_platform', { type });
    }

    updatePreviewContent(type) {
        const preview = document.getElementById('integration-preview');
        if (!preview) return;

        const previewContent = {
            chatbot: {
                userMessage: 'I need a good gaming laptop for streaming',
                assistantResponse: 'I can help you find the perfect gaming laptop! Based on your needs for streaming, here are some excellent options:',
                product: {
                    title: 'ASUS ROG Strix G15 Gaming Laptop',
                    description: 'RTX 4070, AMD Ryzen 9 - Perfect for streaming',
                    price: '$1,499',
                    match: '94% Match'
                }
            },
            assistant: {
                userMessage: 'What tools do I need to start a podcast?',
                assistantResponse: 'Starting a podcast requires some essential equipment and software. Let me recommend some professional-grade options:',
                product: {
                    title: 'Audio-Technica AT2020USB+ Microphone',
                    description: 'Professional USB condenser microphone - Industry standard',
                    price: '$169',
                    match: '96% Match'
                }
            }
        };

        const content = previewContent[type] || previewContent.chatbot;
        
        // Update the preview with smooth animation
        preview.style.opacity = '0.5';
        
        setTimeout(() => {
            preview.innerHTML = `
                <div class="mb-4">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-white text-sm"></i>
                        </div>
                        <span class="text-gray-800 font-medium">User</span>
                    </div>
                    <div class="bg-white rounded-lg p-3 ml-11">
                        <p class="text-gray-800">${content.userMessage}</p>
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex items-center space-x-3 mb-3">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                            <i class="fas fa-robot text-white text-sm"></i>
                        </div>
                        <span class="text-gray-800 font-medium">AI Assistant</span>
                    </div>
                    <div class="bg-white rounded-lg p-3 ml-11 mb-3">
                        <p class="text-gray-800 mb-3">${content.assistantResponse}</p>
                        
                        <!-- Earnly Integration Preview -->
                        <div class="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
                            <div class="flex items-start space-x-3">
                                <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=60&h=60&fit=crop" 
                                     class="w-15 h-15 rounded-lg object-cover" alt="Product">
                                <div class="flex-1">
                                    <h4 class="font-semibold text-gray-900">${content.product.title}</h4>
                                    <p class="text-sm text-gray-600 mb-2">${content.product.description}</p>
                                    <div class="flex items-center justify-between">
                                        <span class="text-lg font-bold text-green-600">${content.product.price}</span>
                                        <div class="text-xs text-gray-500">
                                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">${content.product.match}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 text-xs text-gray-500 flex items-center">
                                <i class="fas fa-shield-alt mr-1"></i>
                                Sponsored by Earnly • Verified Advertiser
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            preview.style.opacity = '1';
        }, 150);
    }

    integrateNow(platformId) {
        const platform = this.platforms.find(p => p.id === platformId);
        
        // Show integration modal or redirect
        alert(`Starting integration with ${platform?.name}!\n\nNext steps:\n1. Generate API key\n2. Install SDK\n3. Configure settings\n4. Test integration\n\nRedirecting to integration wizard...`);
        
        this.trackEvent('integration_start', { platform_id: platformId });
        
        // In a real app, redirect to integration flow
        // window.location.href = `/integrate/${platformId}`;
    }

    viewDetails(platformId) {
        const platform = this.platforms.find(p => p.id === platformId);
        
        // Show detailed platform information
        alert(`${platform?.name} Details:\n\n${platform?.description}\n\nTechnologies: ${platform?.technologies.join(', ')}\nConversion Rate: ${platform?.cvr}%\nAvg Revenue: $${platform?.revenue}\nIntegration Time: ${platform?.integration}`);
        
        this.trackEvent('platform_details_view', { platform_id: platformId });
    }

    loadMorePlatforms() {
        // Simulate loading more platforms
        const newPlatforms = [
            {
                id: 'workflow-ai',
                name: 'Workflow AI Platform',
                description: 'Automation-focused AI with intelligent tool recommendations for workflow optimization.',
                category: ['assistants', 'analytics'],
                status: 'active',
                cvr: 13.6,
                revenue: 567,
                integration: '2.2s',
                technologies: ['Automation API', 'Webhooks', 'Integration Hub'],
                icon: 'fas fa-sitemap',
                color: 'indigo',
                popularity: 88
            }
        ];

        this.platforms.push(...newPlatforms);
        this.filterAndRender();
        
        this.trackEvent('load_more_platforms');
    }

    startIntegration() {
        // Show integration selection modal
        alert('Choose your integration method:\n\n1. Quick Start SDK (Recommended)\n2. REST API Integration\n3. Custom Webhook Setup\n4. Enterprise Solutions\n\nRedirecting to integration hub...');
        
        this.trackEvent('start_integration_flow');
    }

    animateCounters() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target')) || parseInt(counter.textContent);
            const increment = target / 50;
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
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    startLiveUpdates() {
        // Simulate live metrics updates
        setInterval(() => {
            // Update platform metrics
            this.platforms.forEach(platform => {
                // Small random variations
                platform.cvr += (Math.random() - 0.5) * 0.2;
                platform.revenue += Math.floor((Math.random() - 0.5) * 20);
                
                // Keep within reasonable bounds
                platform.cvr = Math.max(1, Math.min(30, platform.cvr));
                platform.revenue = Math.max(50, platform.revenue);
            });
            
            // Re-render if needed
            if (this.filteredPlatforms.length < 10) {
                this.renderPlatforms();
            }
        }, 30000); // Update every 30 seconds
    }

    trackEvent(event, data = {}) {
        // Analytics tracking
        console.log(`Event: ${event}`, data);
        
        // In a real app, send to analytics service
        // analytics.track(event, data);
    }
}

// Global functions for onclick handlers
let aiPlatformsApp;

function searchPlatforms() {
    aiPlatformsApp?.searchPlatforms();
}

function filterBy(category) {
    aiPlatformsApp?.filterBy(category);
}

function setView(viewType) {
    aiPlatformsApp?.setView(viewType);
}

function previewPlatform(type) {
    aiPlatformsApp?.previewPlatform(type);
}

function loadMorePlatforms() {
    aiPlatformsApp?.loadMorePlatforms();
}

function startIntegration() {
    aiPlatformsApp?.startIntegration();
}

function showSignInForm() {
    window.location.href = '/?auth=signin';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    aiPlatformsApp = new AIPlatformsApp();
});