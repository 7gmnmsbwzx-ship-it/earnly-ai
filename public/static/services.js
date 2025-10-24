// Earnly Services - Interactive AI Marketing Services Showcase
class EarnlyServices {
    constructor() {
        this.initializeAnimations();
        this.setupInteractiveElements();
        this.initializeCounters();
        this.setupServiceDemos();
        this.setupCapabilityMeters();
        this.setupLiveUpdates();
        this.setupServiceActions();
    }

    initializeAnimations() {
        // Animate hero metrics on load
        setTimeout(() => {
            const counters = document.querySelectorAll('[data-counter]');
            counters.forEach(counter => {
                this.animateCounter(counter);
            });
        }, 500);

        // Animate service cards on scroll
        this.observeElements('.service-card', 'slideInUp');
        this.observeElements('.tech-stack-item', 'fadeInScale');

        // Hero section dynamic elements
        this.animateHeroElements();
    }

    observeElements(selector, animationClass) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    
                    // Special handling for capability meters
                    if (entry.target.classList.contains('tech-stack-item')) {
                        const meter = entry.target.querySelector('.capability-meter');
                        if (meter) {
                            setTimeout(() => {
                                meter.classList.add('animate-meter');
                            }, 500);
                        }
                    }
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(selector).forEach(el => {
            observer.observe(el);
        });
    }

    animateCounter(element) {
        const target = parseFloat(element.dataset.counter);
        const prefix = element.dataset.prefix || '';
        const suffix = element.dataset.suffix || '';
        const decimals = element.dataset.decimals || 0;
        
        let current = 0;
        const increment = target / 60;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = `${prefix}${current.toLocaleString('en-US', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })}${suffix}`;
        }, 30);
    }

    animateHeroElements() {
        // Animate live dashboard elements
        const progressBars = document.querySelectorAll('.service-demo .animate-pulse');
        
        setInterval(() => {
            progressBars.forEach(bar => {
                const currentWidth = parseInt(bar.style.width);
                const variation = (Math.random() - 0.5) * 10;
                const newWidth = Math.max(70, Math.min(95, currentWidth + variation));
                bar.style.width = `${newWidth}%`;
                
                // Update percentage text if it exists
                const parentElement = bar.closest('.flex');
                if (parentElement) {
                    const percentText = parentElement.querySelector('.font-bold');
                    if (percentText) {
                        percentText.textContent = `${Math.round(newWidth)}%`;
                    }
                }
            });
        }, 3000);
    }

    setupInteractiveElements() {
        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.highlightServiceCard(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.unhighlightServiceCard(card);
            });
        });

        // Feature spotlight rotation
        this.rotateFeatureSpotlight();
    }

    highlightServiceCard(card) {
        // Add special highlight effects
        card.style.transform = 'translateY(-12px) scale(1.02)';
        card.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.3)';
        
        // Animate service icon
        const icon = card.querySelector('i');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    }

    unhighlightServiceCard(card) {
        // Reset to normal state
        card.style.transform = '';
        card.style.boxShadow = '';
        
        const icon = card.querySelector('i');
        if (icon) {
            icon.style.transform = '';
        }
    }

    rotateFeatureSpotlight() {
        const serviceCards = document.querySelectorAll('.service-card');
        let currentSpotlight = 1; // Start with predictive analytics (index 1)
        
        setInterval(() => {
            // Remove spotlight from all cards
            serviceCards.forEach(card => {
                card.classList.remove('feature-spotlight');
            });
            
            // Add spotlight to next card
            if (serviceCards[currentSpotlight]) {
                serviceCards[currentSpotlight].classList.add('feature-spotlight');
            }
            
            currentSpotlight = (currentSpotlight + 1) % serviceCards.length;
        }, 8000); // Rotate every 8 seconds
    }

    initializeCounters() {
        // Live service counter
        const liveServices = document.getElementById('live-services');
        if (liveServices) {
            setInterval(() => {
                const currentValue = parseInt(liveServices.textContent);
                // Simulate service activity
                const newValue = Math.max(8, Math.min(15, currentValue + (Math.random() - 0.5) * 2));
                liveServices.textContent = Math.round(newValue);
            }, 5000);
        }
    }

    setupServiceDemos() {
        // Interactive demo for each service
        const serviceDemos = {
            'geo-intelligence': () => this.demoGeoIntelligence(),
            'predictive-analytics': () => this.demoPredictiveAnalytics(),
            'real-time-optimization': () => this.demoRealTimeOptimization(),
            'audience-intelligence': () => this.demoAudienceIntelligence(),
            'competitive-intelligence': () => this.demoCompetitiveIntelligence(),
            'roi-maximization': () => this.demoROIMaximization()
        };

        // Setup demo triggers
        Object.keys(serviceDemos).forEach(serviceId => {
            const demoBtn = document.querySelector(`[onclick="learnMore('${serviceId}')"]`);
            if (demoBtn) {
                demoBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    serviceDemos[serviceId]();
                });
            }
        });
    }

    demoGeoIntelligence() {
        this.showServiceDemo('Geographic Intelligence', [
            'Analyzing global performance data...',
            'Processing 195 country metrics...',
            'Identifying top-performing regions...',
            'Generating optimization recommendations...'
        ], () => {
            this.showNotification('GEO Intelligence demo complete! 87% improvement potential identified in Southeast Asia.', 'success');
            
            // Simulate redirect to GEO report
            setTimeout(() => {
                window.location.href = '/geo-report';
            }, 2000);
        });
    }

    demoPredictiveAnalytics() {
        this.showServiceDemo('Predictive Analytics', [
            'Loading historical performance data...',
            'Training prediction models...',
            'Analyzing market trends...',
            'Generating 7-day forecast...'
        ], () => {
            this.showNotification('Prediction complete! Your campaigns are forecast to generate $247K (+23%) in the next 7 days.', 'success');
        });
    }

    demoRealTimeOptimization() {
        this.showServiceDemo('Real-time Optimization', [
            'Monitoring campaign performance...',
            'Detecting optimization opportunities...',
            'Adjusting bid strategies...',
            'Reallocating budget distribution...'
        ], () => {
            this.showNotification('Optimization active! Budget reallocated for 34% better performance. Savings: $12K/month.', 'success');
        });
    }

    demoAudienceIntelligence() {
        this.showServiceDemo('Audience Intelligence', [
            'Analyzing user behavior patterns...',
            'Segmenting audience demographics...',
            'Identifying high-value segments...',
            'Creating predictive personas...'
        ], () => {
            this.showNotification('Audience analysis complete! Discovered 3 new high-value segments with 67% higher conversion rates.', 'success');
        });
    }

    demoCompetitiveIntelligence() {
        this.showServiceDemo('Competitive Intelligence', [
            'Scanning competitor strategies...',
            'Analyzing market positioning...',
            'Identifying opportunity gaps...',
            'Generating competitive insights...'
        ], () => {
            this.showNotification('Intelligence gathered! Found 5 market gaps worth $1.2M opportunity in Q4.', 'success');
        });
    }

    demoROIMaximization() {
        this.showServiceDemo('ROI Maximization', [
            'Calculating current ROI metrics...',
            'Optimizing channel allocation...',
            'Applying performance algorithms...',
            'Maximizing return efficiency...'
        ], () => {
            this.showNotification('ROI optimization complete! Projected increase: +340% with current budget allocation.', 'success');
        });
    }

    showServiceDemo(serviceName, steps, onComplete) {
        // Create demo modal
        const modal = document.createElement('div');
        modal.className = 'service-demo-modal';
        modal.innerHTML = `
            <div class="demo-content">
                <div class="demo-header">
                    <h3>${serviceName} Demo</h3>
                    <button onclick="this.closest('.service-demo-modal').remove()" class="close-btn">&times;</button>
                </div>
                <div class="demo-body">
                    <div class="demo-progress">
                        <div class="progress-bar"></div>
                    </div>
                    <div class="demo-status">Initializing...</div>
                    <div class="demo-visualization">
                        <div class="pulse-circle"></div>
                        <div class="data-streams"></div>
                    </div>
                </div>
            </div>
        `;
        
        // Add modal styles
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        `;
        
        document.body.appendChild(modal);
        
        // Run demo steps
        this.runDemoSteps(modal, steps, onComplete);
    }

    runDemoSteps(modal, steps, onComplete) {
        const statusEl = modal.querySelector('.demo-status');
        const progressEl = modal.querySelector('.progress-bar');
        let currentStep = 0;
        
        const runStep = () => {
            if (currentStep >= steps.length) {
                statusEl.textContent = 'Demo Complete!';
                progressEl.style.width = '100%';
                
                setTimeout(() => {
                    modal.remove();
                    if (onComplete) onComplete();
                }, 1000);
                return;
            }
            
            statusEl.textContent = steps[currentStep];
            const progress = ((currentStep + 1) / steps.length) * 100;
            progressEl.style.width = `${progress}%`;
            
            currentStep++;
            setTimeout(runStep, 1500);
        };
        
        runStep();
    }

    setupCapabilityMeters() {
        // Animate capability meters when they come into view
        const meters = document.querySelectorAll('.capability-meter');
        
        meters.forEach(meter => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCapabilityMeter(meter);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(meter);
        });
    }

    animateCapabilityMeter(meter) {
        const fillPercentage = meter.style.getPropertyValue('--fill-percentage') || '0%';
        const after = meter.querySelector('::after');
        
        // Animate the fill
        setTimeout(() => {
            meter.style.setProperty('--fill-percentage', fillPercentage);
            meter.classList.add('animate-fill');
        }, Math.random() * 1000);
    }

    setupLiveUpdates() {
        // Simulate real-time service activity
        setInterval(() => {
            this.updateLiveMetrics();
        }, 8000);
    }

    updateLiveMetrics() {
        // Update live service counter
        const liveServices = document.getElementById('live-services');
        if (liveServices) {
            const currentValue = parseInt(liveServices.textContent);
            const newValue = Math.max(8, Math.min(15, currentValue + (Math.random() > 0.5 ? 1 : -1)));
            liveServices.textContent = newValue;
            
            // Add pulse effect
            liveServices.parentElement.classList.add('pulse-glow');
            setTimeout(() => {
                liveServices.parentElement.classList.remove('pulse-glow');
            }, 1000);
        }
    }

    setupServiceActions() {
        // Global action handlers
        window.exploreServices = () => {
            document.querySelector('#core-services').scrollIntoView({ 
                behavior: 'smooth' 
            });
        };

        window.watchDemo = () => {
            this.showVideoDemo();
        };

        window.requestDemo = () => {
            this.requestDemo();
        };

        window.learnMore = (serviceId) => {
            // This is handled by setupServiceDemos
        };

        window.viewIntegrations = () => {
            this.showIntegrationsModal();
        };

        window.startTrial = () => {
            this.startTrial();
        };

        window.scheduleConsultation = () => {
            this.scheduleConsultation();
        };

        window.requestCustomDemo = () => {
            this.requestCustomDemo();
        };
    }

    showVideoDemo() {
        this.showNotification('Loading AI marketing demo video...', 'info');
        
        setTimeout(() => {
            // Simulate video modal
            const videoModal = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center;">
                    <div style="background: white; padding: 20px; border-radius: 12px; text-align: center; max-width: 500px;">
                        <h3 style="color: #1f2937; margin-bottom: 15px;">AI Marketing Demo</h3>
                        <p style="color: #6b7280; margin-bottom: 20px;">Experience how our AI transforms marketing campaigns in real-time.</p>
                        <div style="background: #f3f4f6; padding: 40px; border-radius: 8px; margin-bottom: 20px;">
                            <i class="fas fa-play-circle" style="font-size: 60px; color: #3b82f6;"></i>
                            <p style="margin-top: 10px; color: #6b7280;">Demo Video Playing...</p>
                        </div>
                        <button onclick="this.closest('div').remove()" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer;">Close</button>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', videoModal);
        }, 1000);
    }

    requestDemo() {
        this.showNotification('Opening demo request form...', 'info');
        
        setTimeout(() => {
            const demoType = prompt('What type of demo interests you most?\n1. Geographic Intelligence\n2. Predictive Analytics\n3. Full Platform Tour\n\nEnter 1, 2, or 3:');
            
            if (demoType) {
                const demoNames = {
                    '1': 'Geographic Intelligence',
                    '2': 'Predictive Analytics', 
                    '3': 'Full Platform Tour'
                };
                
                this.showNotification(`Demo request submitted for ${demoNames[demoType] || 'Custom Demo'}. Our team will contact you within 24 hours.`, 'success');
            }
        }, 500);
    }

    showIntegrationsModal() {
        const modal = document.createElement('div');
        modal.innerHTML = `
            <div class="integrations-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Available Integrations</h3>
                        <button onclick="this.closest('div').remove()" class="close-btn">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="integration-categories">
                            <div class="category">
                                <h4>🎯 Advertising Platforms</h4>
                                <p>Google Ads, Facebook Ads, LinkedIn Ads, Twitter Ads, TikTok Ads, Snapchat Ads</p>
                            </div>
                            <div class="category">
                                <h4>📊 Analytics & Data</h4>
                                <p>Google Analytics, Adobe Analytics, Mixpanel, Segment, Amplitude, Hotjar</p>
                            </div>
                            <div class="category">
                                <h4>🔄 Marketing Automation</h4>
                                <p>HubSpot, Marketo, Salesforce, Pardot, Mailchimp, Klaviyo</p>
                            </div>
                            <div class="category">
                                <h4>💼 CRM & Sales</h4>
                                <p>Salesforce, Pipedrive, Zoho, Microsoft Dynamics, Freshworks</p>
                            </div>
                        </div>
                        <button onclick="requestIntegration()" style="margin-top: 20px; background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; width: 100%;">Request Custom Integration</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        document.body.appendChild(modal);
    }

    startTrial() {
        this.showNotification('Initializing free trial setup...', 'info');
        
        setTimeout(() => {
            this.showNotification('Free trial activated! You now have access to all AI marketing services for 14 days.', 'success');
        }, 2000);
    }

    scheduleConsultation() {
        this.showNotification('Opening consultation scheduler...', 'info');
        
        setTimeout(() => {
            const time = prompt('Preferred consultation time?\n1. This week\n2. Next week\n3. Flexible\n\nEnter 1, 2, or 3:');
            
            if (time) {
                this.showNotification('Consultation scheduled! Calendar invite sent to your email.', 'success');
            }
        }, 500);
    }

    requestCustomDemo() {
        this.showNotification('Preparing custom demo builder...', 'info');
        
        setTimeout(() => {
            const focus = prompt('What\'s your main marketing challenge?\n1. Geographic expansion\n2. ROI optimization\n3. Audience targeting\n4. Competitive analysis\n\nEnter 1, 2, 3, or 4:');
            
            if (focus) {
                this.showNotification('Custom demo created! Our AI specialists will tailor the demonstration to your specific needs.', 'success');
            }
        }, 1500);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 6000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EarnlyServices();
});

// Add CSS animations and demo styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeInScale {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
    }
    
    .animate-fade-in-up {
        animation: slideInUp 0.6s ease forwards;
    }
    
    .pulse-glow {
        animation: pulse-glow 1s ease;
    }
    
    .demo-content {
        background: white;
        border-radius: 12px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        color: #1f2937;
    }
    
    .demo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .demo-header h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .close-btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #6b7280;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .demo-progress {
        width: 100%;
        height: 6px;
        background: #e5e7eb;
        border-radius: 3px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    
    .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #3b82f6, #1e40af);
        width: 0%;
        transition: width 0.5s ease;
        border-radius: 3px;
    }
    
    .demo-status {
        font-size: 1.1rem;
        margin-bottom: 25px;
        color: #374151;
    }
    
    .demo-visualization {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        position: relative;
    }
    
    .pulse-circle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, #3b82f6, #1e40af);
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.7; }
    }
    
    .integrations-modal .modal-content {
        background: white;
        border-radius: 12px;
        padding: 30px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        color: #1f2937;
    }
    
    .integration-categories .category {
        background: #f9fafb;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 15px;
    }
    
    .integration-categories h4 {
        margin: 0 0 8px 0;
        font-weight: bold;
        color: #374151;
    }
    
    .integration-categories p {
        margin: 0;
        color: #6b7280;
        font-size: 0.9rem;
    }
    
    .capability-meter.animate-fill::after {
        animation: meterFill 2s ease-out forwards;
    }
`;
document.head.appendChild(style);