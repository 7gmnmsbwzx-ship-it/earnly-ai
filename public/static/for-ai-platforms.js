// Revenue Calculator for AI Platforms - Enhanced Version
class EarnlyAIPlatforms {
    constructor() {
        this.platformMultipliers = {
            'search': { rpm: 2.5, engagement: 1.8, retention: 0.85 },
            'assistant': { rpm: 4.2, engagement: 2.3, retention: 0.78 },
            'chatbot': { rpm: 4.2, engagement: 2.3, retention: 0.78 }, // Same as assistant
            'creative': { rpm: 3.1, engagement: 1.9, retention: 0.72 },
            'enterprise': { rpm: 8.5, engagement: 3.2, retention: 0.92 },
            'education': { rpm: 1.8, engagement: 2.1, retention: 0.88 },
            'productivity': { rpm: 3.7, engagement: 2.0, retention: 0.81 },
            'voice': { rpm: 3.5, engagement: 2.2, retention: 0.76 },
            'content': { rpm: 3.8, engagement: 2.1, retention: 0.74 },
            'analytics': { rpm: 3.3, engagement: 1.9, retention: 0.83 },
            'coding': { rpm: 5.1, engagement: 2.8, retention: 0.85 }
        };
        
        this.industryBenchmarks = {
            'search': { avgQueries: 12, avgSession: 8.5 },
            'assistant': { avgQueries: 25, avgSession: 15.2 },
            'chatbot': { avgQueries: 25, avgSession: 15.2 }, // Same as assistant  
            'creative': { avgQueries: 18, avgSession: 22.1 },
            'enterprise': { avgQueries: 35, avgSession: 45.5 },
            'education': { avgQueries: 20, avgSession: 28.3 },
            'productivity': { avgQueries: 15, avgSession: 12.7 },
            'voice': { avgQueries: 22, avgSession: 18.5 },
            'content': { avgQueries: 16, avgSession: 25.3 },
            'analytics': { avgQueries: 14, avgSession: 35.8 },
            'coding': { avgQueries: 28, avgSession: 42.1 }
        };
        
        // Set SaaS as default category for attractive initial revenue
        this.selectedCategory = 'saas';
        
        this.initializeCalculator();
    }
    
    initializeCalculator() {
        // Set default values
        this.setDefaultValues();
        
        // Add event listeners
        this.addEventListeners();
        
        // Initial calculation with delay to ensure DOM is ready
        setTimeout(() => {
            this.calculatePlatformRevenueRealTime();
        }, 100);
    }
    
    setDefaultValues() {
        const defaults = {
            'monthly-users': 25000,  // Increased for more attractive starting revenue
            'sessions-per-user': 15, // Higher engagement rate
            'queries-per-session': 12,
            'platform-type': 'saas'  // Start with higher-value SaaS category
        };
        
        Object.entries(defaults).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element && !element.value) {
                element.value = value;
            }
        });
    }
    
    addEventListeners() {
        const inputs = ['monthly-users', 'sessions-per-user'];
        inputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('input', () => {
                    this.updateSliderValues();
                    this.calculatePlatformRevenueRealTime();
                });
                element.addEventListener('change', () => this.calculatePlatformRevenueRealTime());
            }
        });
    }
    
    updateSliderValues() {
        const monthlyUsers = document.getElementById('monthly-users')?.value || 25000;
        const engagementRate = document.getElementById('sessions-per-user')?.value || 15;
        
        // Update display values
        const userValue = document.getElementById('monthly-users-value');
        const engagementValue = document.getElementById('engagement-rate-value');
        
        if (userValue) {
            userValue.textContent = this.formatNumberWithK(monthlyUsers);
        }
        
        if (engagementValue) {
            engagementValue.textContent = engagementRate + '%';
        }
    }
    
    calculatePlatformRevenueRealTime() {
        try {
            // Get input values with validation
            const monthlyUsers = this.validateNumber('monthly-users', 1000, 10000000, 25000);
            const engagementRate = this.validateNumber('sessions-per-user', 1, 60, 15); // Now engagement rate %
            const selectedCategory = this.selectedCategory || 'saas';
            
            // Update slider displays
            this.updateSliderValues();
            
            // Category-specific CPA and conversion rates - More realistic and attractive
            const categoryData = {
                'ecommerce': { cpa: 15, conversionRate: 1.8 },
                'saas': { cpa: 25, conversionRate: 1.5 }, // Increased for better display
                'finance': { cpa: 32, conversionRate: 1.0 },
                'education': { cpa: 18, conversionRate: 1.6 },
                'travel': { cpa: 16, conversionRate: 1.7 },
                'health': { cpa: 22, conversionRate: 1.4 }
            };
            
            const categorySettings = categoryData[selectedCategory] || categoryData['ecommerce'];
            
            // Core AdMesh-style calculations
            const qualifiedEngagement = engagementRate / 100; // Convert percentage to decimal
            const engagedUsers = Math.floor(monthlyUsers * qualifiedEngagement);
            const conversionRate = categorySettings.conversionRate / 100; // Convert to decimal
            const paidConversions = Math.floor(engagedUsers * conversionRate);
            const cpaRate = categorySettings.cpa;
            
            // Revenue calculation
            const grossRevenue = paidConversions * cpaRate;
            const annualRevenue = grossRevenue * 12;
            
            // Display results in new interface
            this.displayAdMeshResults({
                monthlyUsers,
                engagedUsers,
                paidConversions,
                grossRevenue,
                annualRevenue,
                cpaRate,
                conversionRate: categorySettings.conversionRate,
                selectedCategory
            });
            
            // Visual feedback
            this.updateVisualFeedback(monthlyUsers, totalMonthlyQueries, grossRevenue);
            
        } catch (error) {
            console.error('Revenue calculation error:', error);
            this.displayError('Calculation error. Please check your inputs.');
        }
    }
    
    validateNumber(id, min, max, defaultValue) {
        const element = document.getElementById(id);
        if (!element) return defaultValue;
        
        let value = parseFloat(element.value) || defaultValue;
        value = Math.max(min, Math.min(max, value));
        
        // Update display if value was adjusted
        if (element.value && parseFloat(element.value) !== value) {
            element.value = value;
        }
        
        return value;
    }
    
    getSeasonalityFactor() {
        const month = new Date().getMonth();
        const seasonalFactors = {
            0: 1.05, 1: 0.95, 2: 1.02, 3: 1.08, 4: 1.12, 5: 1.15,
            6: 1.18, 7: 1.22, 8: 1.15, 9: 1.10, 10: 1.25, 11: 1.30
        };
        return seasonalFactors[month] || 1.0;
    }
    
    calculateGrowthRate(platformType, userBase) {
        const baseGrowth = {
            'search': 0.08,
            'assistant': 0.15,
            'chatbot': 0.15,
            'creative': 0.12,
            'enterprise': 0.06,
            'education': 0.10,
            'productivity': 0.09,
            'voice': 0.13,
            'content': 0.11,
            'analytics': 0.09,
            'coding': 0.16
        };
        
        let growth = baseGrowth[platformType] || 0.08;
        
        // Adjust based on user base size (network effects)
        if (userBase < 10000) growth *= 1.5;
        else if (userBase < 100000) growth *= 1.2;
        else if (userBase > 1000000) growth *= 0.8;
        
        return growth;
    }
    
    calculateAnnualProjection(monthlyRevenue, growthRate) {
        let total = 0;
        let currentRevenue = monthlyRevenue;
        
        for (let month = 0; month < 12; month++) {
            total += currentRevenue;
            currentRevenue *= (1 + growthRate);
        }
        
        return total;
    }
    
    displayAdMeshResults(data) {
        // Update main revenue display with proper formatting
        const grossRevenueEl = document.getElementById('gross-revenue');
        if (grossRevenueEl) {
            grossRevenueEl.textContent = this.formatRevenueWithK(data.grossRevenue);
        }
        
        // Update yearly revenue display (NEW FEATURE)
        const yearlyRevenueEl = document.getElementById('yearly-revenue');
        if (yearlyRevenueEl) {
            yearlyRevenueEl.textContent = this.formatRevenueWithK(data.annualRevenue) + ' /YR';
        }
        
        // Update monthly users display
        const monthlyUsersEl = document.getElementById('monthly-users-display');
        if (monthlyUsersEl) {
            monthlyUsersEl.textContent = this.formatNumberWithK(data.monthlyUsers);
        }
        
        // Update engaged users
        const engagedOffersEl = document.getElementById('engaged-offers');
        if (engagedOffersEl) {
            engagedOffersEl.textContent = this.formatNumberWithK(data.engagedUsers);
        }
        
        // Update paid conversions with proper formatting
        const paidConversionsEl = document.getElementById('paid-conversions');
        if (paidConversionsEl) {
            paidConversionsEl.textContent = this.formatNumberWithK(data.paidConversions);
        }
        
        // Update CPA rate
        const cpaRateEl = document.getElementById('cpa-rate');
        if (cpaRateEl) {
            cpaRateEl.textContent = '$' + data.cpaRate.toFixed(2);
        }
        
        // Update conversion rate
        const conversionRateEl = document.getElementById('conversion-rate');
        if (conversionRateEl) {
            conversionRateEl.textContent = data.conversionRate.toFixed(1) + '%';
        }
    }
    
    selectCategory(category) {
        this.selectedCategory = category;
        
        // Update category selection visual feedback
        const categories = ['ecommerce', 'saas', 'finance', 'education', 'travel', 'health'];
        categories.forEach(cat => {
            const element = document.getElementById('category-' + cat);
            if (element) {
                if (cat === category) {
                    element.classList.remove('border-gray-600');
                    element.classList.add('border-blue-500');
                } else {
                    element.classList.remove('border-blue-500');
                    element.classList.add('border-gray-600');
                }
            }
        });
        
        this.calculatePlatformRevenueRealTime();
    }
    
    updatePerformanceInsights(data) {
        const insightsContainer = document.getElementById('performance-insights');
        if (!insightsContainer) return;
        
        const insights = [];
        
        if (data.monthlyGrowthRate > 10) {
            insights.push({ type: 'success', text: `Excellent ${data.monthlyGrowthRate.toFixed(1)}% growth rate for ${data.platformType} platform` });
        }
        
        if (data.revenuePerUser > 5) {
            insights.push({ type: 'success', text: `Strong $${data.revenuePerUser.toFixed(2)} revenue per user` });
        }
        
        if (data.retentionRate > 80) {
            insights.push({ type: 'success', text: `High ${data.retentionRate.toFixed(1)}% user retention rate` });
        }
        
        if (data.engagementMultiplier > 2) {
            insights.push({ type: 'info', text: `${data.engagementMultiplier}x engagement boost from platform optimization` });
        }
        
        insightsContainer.innerHTML = insights.map(insight => `
            <div class="p-3 rounded-lg ${insight.type === 'success' ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'}">
                <div class="text-sm ${insight.type === 'success' ? 'text-green-300' : 'text-blue-300'}">${insight.text}</div>
            </div>
        `).join('');
    }
    
    updateVisualFeedback(users, queries, revenue) {
        // Add visual feedback for input quality
        const feedbackElements = {
            'monthly-users': users >= 50000 ? 'excellent' : users >= 10000 ? 'good' : 'fair',
            'queries-per-session': queries/users/12 >= 15 ? 'excellent' : queries/users/12 >= 8 ? 'good' : 'fair'
        };
        
        Object.entries(feedbackElements).forEach(([id, quality]) => {
            const element = document.getElementById(id);
            if (element) {
                element.className = element.className.replace(/border-\w+-\d+/g, '');
                const colorClass = {
                    'excellent': 'border-green-500 focus:ring-green-500',
                    'good': 'border-blue-500 focus:ring-blue-500',
                    'fair': 'border-yellow-500 focus:ring-yellow-500'
                }[quality] || 'border-gray-300 focus:ring-purple-500';
                
                element.className += ` ${colorClass}`;
            }
        });
    }
    
    formatNumber(num) {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
        if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toFixed(0);
    }
    
    // Enhanced formatting specifically for /K notation as requested
    formatNumberWithK(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            // Use whole numbers for thousands to match reference image
            const thousands = num / 1000;
            return (thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)) + 'K';
        } else {
            return num.toString();
        }
    }
    
    // Special formatting for revenue display
    formatRevenueWithK(amount) {
        if (amount >= 1000000) {
            return '$' + (amount / 1000000).toFixed(1) + 'M';
        } else if (amount >= 1000) {
            const thousands = amount / 1000;
            return '$' + (thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)) + 'K';
        } else {
            return '$' + amount.toFixed(0);
        }
    }
    
    displayError(message) {
        const revenueDisplay = document.getElementById('revenue-result');
        if (revenueDisplay) {
            revenueDisplay.innerHTML = `
                <div class="text-center p-6">
                    <div class="text-red-400 text-lg font-semibold">${message}</div>
                    <div class="text-gray-400 text-sm mt-2">Please adjust your inputs and try again</div>
                </div>
            `;
        }
    }
}

// Global functions for HTML compatibility
function calculatePlatformRevenueRealTime() {
    if (window.earnlyAIPlatforms) {
        window.earnlyAIPlatforms.calculatePlatformRevenueRealTime();
    }
}

function selectCategory(category) {
    if (window.earnlyAIPlatforms) {
        window.earnlyAIPlatforms.selectCategory(category);
    }
}

function getStartedEarning() {
    // Scroll to integration section or show modal
    const integrationSection = document.querySelector('[data-section="integration"]');
    if (integrationSection) {
        integrationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Open contact modal or redirect
        window.location.href = '/contact';
    }
}

function viewFullDashboard() {
    // Redirect to dashboard with demo data
    window.location.href = '/dashboard/platform?demo=true';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.earnlyAIPlatforms = new EarnlyAIPlatforms();
});

// Initialize immediately if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.earnlyAIPlatforms = new EarnlyAIPlatforms();
    });
} else {
    window.earnlyAIPlatforms = new EarnlyAIPlatforms();
}