// Enhanced Advertisers Page with Smart ROI Calculator
class EarnlyAdvertisers {
    constructor() {
        this.init();
    }

    init() {
        // Initialize ROI calculator when DOM is loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeROICalculator();
            });
        } else {
            this.initializeROICalculator();
        }
    }

    initializeROICalculator() {
        // Set up real-time calculation
        const inputs = document.querySelectorAll('#ad-spend, #aov, #conversion-rate, #industry');
        inputs.forEach(input => {
            input.addEventListener('input', () => this.calculateROIRealTime());
            input.addEventListener('change', () => this.calculateROIRealTime());
        });

        // Initialize with default calculation
        this.calculateROIRealTime();
    }

    calculateROIRealTime() {
        try {
            // Get input values with validation
            const adSpend = this.validateInput('ad-spend', 1000, 1000000, 10000);
            const aov = this.validateInput('aov', 10, 10000, 150);
            const conversionRate = this.validateInput('conversion-rate', 0.1, 25, 2.5);
            const industry = document.getElementById('industry')?.value || 'ecommerce';

            // Industry-specific data based on real advertising performance
            const industryData = {
                'ecommerce': { 
                    avgCPC: 2.20, 
                    avgCTR: 2.1, 
                    intentBoost: 2.8, 
                    cpcEfficiency: 0.72,
                    marketSize: 'Large',
                    competitiveness: 'High'
                },
                'fashion': { 
                    avgCPC: 1.80, 
                    avgCTR: 1.8, 
                    intentBoost: 2.4, 
                    cpcEfficiency: 0.68,
                    marketSize: 'Large', 
                    competitiveness: 'Medium'
                },
                'beauty': { 
                    avgCPC: 2.10, 
                    avgCTR: 2.4, 
                    intentBoost: 3.2, 
                    cpcEfficiency: 0.70,
                    marketSize: 'Large', 
                    competitiveness: 'High'
                },
                'saas': { 
                    avgCPC: 4.50, 
                    avgCTR: 3.2, 
                    intentBoost: 4.1, 
                    cpcEfficiency: 0.75,
                    marketSize: 'Growing', 
                    competitiveness: 'Very High'
                },
                'fintech': { 
                    avgCPC: 3.80, 
                    avgCTR: 2.8, 
                    intentBoost: 3.6, 
                    cpcEfficiency: 0.73,
                    marketSize: 'Large', 
                    competitiveness: 'Very High'
                },
                'travel': { 
                    avgCPC: 2.60, 
                    avgCTR: 1.9, 
                    intentBoost: 2.2, 
                    cpcEfficiency: 0.69,
                    marketSize: 'Large', 
                    competitiveness: 'High'
                },
                'education': { 
                    avgCPC: 2.90, 
                    avgCTR: 2.6, 
                    intentBoost: 2.9, 
                    cpcEfficiency: 0.71,
                    marketSize: 'Medium', 
                    competitiveness: 'Medium'
                },
                'healthcare': { 
                    avgCPC: 4.20, 
                    avgCTR: 3.4, 
                    intentBoost: 3.8, 
                    cpcEfficiency: 0.76,
                    marketSize: 'Large', 
                    competitiveness: 'High'
                },
                'retail': { 
                    avgCPC: 2.40, 
                    avgCTR: 2.0, 
                    intentBoost: 2.6, 
                    cpcEfficiency: 0.70,
                    marketSize: 'Very Large', 
                    competitiveness: 'High'
                },
                'b2b': { 
                    avgCPC: 5.10, 
                    avgCTR: 3.8, 
                    intentBoost: 4.3, 
                    cpcEfficiency: 0.78,
                    marketSize: 'Growing', 
                    competitiveness: 'Very High'
                }
            };

            const industry_data = industryData[industry] || industryData['ecommerce'];
            
            // TRADITIONAL ADVERTISING PERFORMANCE
            const traditionalCPC = industry_data.avgCPC;
            const traditionalClicks = Math.floor(adSpend / traditionalCPC);
            const traditionalConversions = Math.floor(traditionalClicks * (conversionRate / 100));
            const traditionalRevenue = traditionalConversions * aov;
            const traditionalProfit = traditionalRevenue - adSpend;
            const traditionalROAS = traditionalRevenue / adSpend;
            
            // EARNLY AI-NATIVE PERFORMANCE
            // Key improvements: Intent-based targeting + AI contextual matching + Performance-only billing
            
            // 1. Better cost efficiency through AI targeting (lower effective CPC)
            const earnlyEffectiveCPC = traditionalCPC * industry_data.cpcEfficiency;
            
            // 2. More traffic for same budget
            const earnlyClicks = Math.floor(adSpend / earnlyEffectiveCPC);
            
            // 3. Higher conversion rates through intent-driven placement
            const conversionMultiplier = Math.min(industry_data.intentBoost, 
                conversionRate < 1.0 ? 5.0 : 
                conversionRate < 2.0 ? 4.0 : 
                conversionRate < 3.0 ? 3.0 : 2.5);
            
            const earnlyConversionRate = Math.min(conversionRate * conversionMultiplier, 
                industry === 'saas' || industry === 'b2b' ? 20 : 15); // Realistic caps
            
            const earnlyConversions = Math.floor(earnlyClicks * (earnlyConversionRate / 100));
            const earnlyRevenue = earnlyConversions * aov;
            const earnlyProfit = earnlyRevenue - adSpend;
            const earnlyROAS = earnlyRevenue / adSpend;
            
            // PERFORMANCE METRICS
            const additionalRevenue = earnlyRevenue - traditionalRevenue;
            const additionalProfit = earnlyProfit - traditionalProfit;
            const roiImprovement = earnlyROAS - traditionalROAS;
            const profitabilityThreshold = adSpend * 0.20; // 20% minimum profit margin
            
            // DYNAMIC RESULT QUALITY ASSESSMENT
            const isProfitable = earnlyProfit > profitabilityThreshold;
            const isHighPerforming = earnlyROAS > 3.0;
            const conversionQuality = earnlyConversionRate > 8 ? 'Excellent' : 
                                    earnlyConversionRate > 5 ? 'Good' : 
                                    earnlyConversionRate > 2 ? 'Fair' : 'Needs Optimization';

            // Display results with dynamic formatting
            this.displayResults({
                traditional: {
                    clicks: traditionalClicks,
                    conversions: traditionalConversions,
                    revenue: traditionalRevenue,
                    profit: traditionalProfit,
                    roas: traditionalROAS,
                    cpc: traditionalCPC
                },
                earnly: {
                    clicks: earnlyClicks,
                    conversions: earnlyConversions,
                    revenue: earnlyRevenue,
                    profit: earnlyProfit,
                    roas: earnlyROAS,
                    cpc: earnlyEffectiveCPC,
                    conversionRate: earnlyConversionRate
                },
                improvements: {
                    additionalRevenue,
                    additionalProfit,
                    roiImprovement,
                    isProfitable,
                    isHighPerforming,
                    conversionQuality
                },
                industry: {
                    name: industry,
                    data: industry_data
                },
                inputs: {
                    adSpend,
                    aov,
                    conversionRate
                }
            });

            // Add visual feedback based on performance
            this.updateVisualFeedback(earnlyROAS, isProfitable, isHighPerforming);

        } catch (error) {
            console.error('ROI Calculation error:', error);
            this.showErrorMessage('Calculation error. Please check your inputs.');
        }
    }

    validateInput(elementId, min, max, defaultValue) {
        const element = document.getElementById(elementId);
        if (!element) return defaultValue;
        
        let value = parseFloat(element.value) || defaultValue;
        value = Math.max(min, Math.min(max, value));
        
        // Update element if value was adjusted
        if (element.value && parseFloat(element.value) !== value) {
            element.value = value;
        }
        
        return value;
    }

    displayResults(data) {
        // Update main revenue display with dynamic content
        const revenueElement = document.getElementById('projected-revenue');
        const roiElement = document.getElementById('roi-multiple');
        
        if (revenueElement) {
            const revenue = data.improvements.additionalRevenue;
            revenueElement.textContent = revenue >= 0 ? 
                `$${Math.abs(revenue).toLocaleString()}` : 
                `-$${Math.abs(revenue).toLocaleString()}`;
            
            // Add color coding
            revenueElement.className = revenue >= 0 ? 'text-2xl font-bold text-green-400' : 'text-2xl font-bold text-red-400';
        }
        
        if (roiElement) {
            const roas = data.earnly.roas;
            roiElement.textContent = `${roas.toFixed(2)}x`;
            
            // Add color coding and context
            roiElement.className = roas >= 3.0 ? 'text-2xl font-bold text-green-400' : 
                                 roas >= 2.0 ? 'text-2xl font-bold text-yellow-400' : 
                                 roas >= 1.0 ? 'text-2xl font-bold text-orange-400' : 
                                 'text-2xl font-bold text-red-400';
        }

        // Update detailed breakdown (create if doesn't exist)
        const breakdownContainer = document.getElementById('roi-breakdown') || this.createBreakdownContainer();
        if (breakdownContainer) {
            breakdownContainer.innerHTML = `
                <div class="space-y-6">
                    <!-- Performance Comparison -->
                    <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                        <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
                            <i class="fas fa-chart-line mr-2 text-blue-400"></i>
                            Performance Comparison
                        </h4>
                        
                        <div class="grid grid-cols-2 gap-6">
                            <div class="space-y-3">
                                <h5 class="font-medium text-gray-300">Traditional Advertising</h5>
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">CPC:</span>
                                        <span class="text-white">$${data.traditional.cpc.toFixed(2)}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Clicks:</span>
                                        <span class="text-white">${data.traditional.clicks.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Conversions:</span>
                                        <span class="text-white">${data.traditional.conversions.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="text-white">$${data.traditional.revenue.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between border-t border-gray-600 pt-2">
                                        <span class="text-gray-400">ROAS:</span>
                                        <span class="${data.traditional.roas >= 1 ? 'text-green-400' : 'text-red-400'}">${data.traditional.roas.toFixed(2)}x</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="space-y-3">
                                <h5 class="font-medium text-green-300">With Earnly AI</h5>
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Effective CPC:</span>
                                        <span class="text-green-300">$${data.earnly.cpc.toFixed(2)}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Clicks:</span>
                                        <span class="text-green-300">${data.earnly.clicks.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Conversions:</span>
                                        <span class="text-green-300">${data.earnly.conversions.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="text-green-300">$${data.earnly.revenue.toLocaleString()}</span>
                                    </div>
                                    <div class="flex justify-between border-t border-gray-600 pt-2">
                                        <span class="text-gray-400">ROAS:</span>
                                        <span class="text-green-400 font-bold">${data.earnly.roas.toFixed(2)}x</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Key Improvements -->
                    <div class="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
                        <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
                            <i class="fas fa-rocket mr-2 text-purple-400"></i>
                            Earnly AI Improvements
                        </h4>
                        
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div class="text-2xl font-bold text-green-400">+${Math.abs(data.improvements.additionalRevenue).toLocaleString()}</div>
                                <div class="text-sm text-gray-300">Additional Revenue</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-blue-400">${data.earnly.conversionRate.toFixed(1)}%</div>
                                <div class="text-sm text-gray-300">Conversion Rate</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-purple-400">${data.improvements.conversionQuality}</div>
                                <div class="text-sm text-gray-300">Performance Level</div>
                            </div>
                        </div>
                    </div>

                    <!-- Industry Insights -->
                    <div class="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                        <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
                            <i class="fas fa-industry mr-2 text-cyan-400"></i>
                            ${this.getIndustryDisplayName(data.industry.name)} Industry Insights
                        </h4>
                        
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span class="text-gray-400">Market Size:</span>
                                <span class="text-white ml-2">${data.industry.data.marketSize}</span>
                            </div>
                            <div>
                                <span class="text-gray-400">Competition:</span>
                                <span class="text-white ml-2">${data.industry.data.competitiveness}</span>
                            </div>
                            <div>
                                <span class="text-gray-400">AI Intent Boost:</span>
                                <span class="text-cyan-400 ml-2">${data.industry.data.intentBoost}x potential</span>
                            </div>
                            <div>
                                <span class="text-gray-400">Cost Efficiency:</span>
                                <span class="text-green-400 ml-2">${((1 - data.industry.data.cpcEfficiency) * 100).toFixed(0)}% lower CPC</span>
                            </div>
                        </div>
                    </div>

                    <!-- Performance Assessment -->
                    ${this.generatePerformanceAssessment(data)}
                </div>
            `;
        }

        // Console log for debugging
        console.log('Dynamic ROI Calculation:', {
            inputs: `$${data.inputs.adSpend.toLocaleString()} budget, $${data.inputs.aov} AOV, ${data.inputs.conversionRate}% CR`,
            traditional: `${data.traditional.roas.toFixed(2)}x ROAS ($${data.traditional.revenue.toLocaleString()} revenue)`,
            earnly: `${data.earnly.roas.toFixed(2)}x ROAS ($${data.earnly.revenue.toLocaleString()} revenue)`,
            improvement: `+$${data.improvements.additionalRevenue.toLocaleString()} additional revenue`,
            assessment: data.improvements.conversionQuality
        });
    }

    animateValue(elementId, targetValue, prefix = '', decimals = 0, suffix = '') {
        const element = document.getElementById(elementId);
        if (!element) return;

        const currentValue = parseFloat(element.textContent.replace(/[^0-9.-]/g, '')) || 0;
        const increment = (targetValue - currentValue) / 30;
        let current = currentValue;

        const animation = setInterval(() => {
            current += increment;
            
            if ((increment > 0 && current >= targetValue) || (increment < 0 && current <= targetValue)) {
                current = targetValue;
                clearInterval(animation);
            }

            const formattedValue = decimals === 0 ? 
                Math.round(current).toLocaleString() : 
                current.toFixed(decimals);

            element.textContent = `${prefix}${formattedValue}${suffix}`;
            
            // Add pulse effect for significant changes
            if (Math.abs(targetValue - currentValue) > currentValue * 0.1) {
                element.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 200);
            }
        }, 16); // ~60 FPS
    }

    createBreakdownContainer() {
        const container = document.createElement('div');
        container.id = 'roi-breakdown';
        container.className = 'mt-6';
        
        // Insert after the main calculator results
        const calculatorCard = document.querySelector('.glass-card');
        if (calculatorCard && calculatorCard.parentNode) {
            calculatorCard.parentNode.insertBefore(container, calculatorCard.nextSibling);
        }
        
        return container;
    }

    getIndustryDisplayName(industry) {
        const displayNames = {
            'ecommerce': 'E-commerce',
            'fashion': 'Fashion & Apparel', 
            'beauty': 'Beauty & Cosmetics',
            'saas': 'SaaS & Software',
            'fintech': 'FinTech & Finance',
            'travel': 'Travel & Tourism',
            'education': 'Education & Learning',
            'healthcare': 'Healthcare & Wellness',
            'retail': 'Retail & Consumer Goods',
            'b2b': 'B2B Services'
        };
        return displayNames[industry] || 'E-commerce';
    }

    generatePerformanceAssessment(data) {
        const { improvements, earnly } = data;
        
        if (improvements.isHighPerforming) {
            return `
                <div class="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-trophy text-green-400 text-2xl"></i>
                        <div>
                            <h5 class="font-semibold text-green-300">Excellent Performance Potential</h5>
                            <p class="text-sm text-gray-300">Your campaign shows strong ROI potential with Earnly's AI-native targeting. Expected performance well above industry benchmarks.</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (improvements.isProfitable) {
            return `
                <div class="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-thumbs-up text-blue-400 text-2xl"></i>
                        <div>
                            <h5 class="font-semibold text-blue-300">Good Performance Potential</h5>
                            <p class="text-sm text-gray-300">Profitable campaign with solid returns. Consider optimizing AOV or targeting for even better results.</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-4">
                    <div class="flex items-center space-x-3">
                        <i class="fas fa-exclamation-triangle text-yellow-400 text-2xl"></i>
                        <div>
                            <h5 class="font-semibold text-yellow-300">Optimization Recommended</h5>
                            <p class="text-sm text-gray-300">Consider increasing AOV, improving conversion rate, or adjusting budget allocation for better ROI performance.</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    updateVisualFeedback(roas, isProfitable, isHighPerforming) {
        // Add visual feedback to calculator container
        const calculator = document.querySelector('.glass-card');
        if (!calculator) return;

        // Remove existing classes
        calculator.classList.remove('border-green-500/30', 'border-blue-500/30', 'border-yellow-500/30', 'border-red-500/30');

        // Add appropriate border color based on performance
        if (isHighPerforming) {
            calculator.classList.add('border-green-500/30');
        } else if (isProfitable) {
            calculator.classList.add('border-blue-500/30');
        } else if (roas >= 1.0) {
            calculator.classList.add('border-yellow-500/30');
        } else {
            calculator.classList.add('border-red-500/30');
        }
    }

    showErrorMessage(message) {
        const revenueElement = document.getElementById('projected-revenue');
        const roiElement = document.getElementById('roi-multiple');
        
        if (revenueElement) {
            revenueElement.textContent = 'Error';
            revenueElement.className = 'text-2xl font-bold text-red-400';
        }
        
        if (roiElement) {
            roiElement.textContent = '--';
            roiElement.className = 'text-2xl font-bold text-red-400';
        }
    }

    updateCalculatorStatus(adSpend, aov, conversionRate, roiMultiple = 0) {
        // Provide intelligent feedback based on inputs
        const calculator = document.querySelector('.glass-card');
        if (!calculator) return;

        // Remove existing status classes
        calculator.classList.remove('calculator-excellent', 'calculator-good', 'calculator-needs-improvement');

        // Determine status based on inputs
        const score = this.calculateInputScore(adSpend, aov, conversionRate);
        
        if (score >= 80) {
            calculator.classList.add('calculator-excellent');
        } else if (score >= 60) {
            calculator.classList.add('calculator-good');
        } else {
            calculator.classList.add('calculator-needs-improvement');
        }
    }

    calculateInputScore(adSpend, aov, conversionRate) {
        let score = 0;
        
        // Ad spend score (higher budget generally means more opportunity)
        if (adSpend >= 50000) score += 30;
        else if (adSpend >= 20000) score += 25;
        else if (adSpend >= 10000) score += 20;
        else if (adSpend >= 5000) score += 15;
        else score += 10;

        // AOV score (higher AOV means better margins)
        if (aov >= 500) score += 30;
        else if (aov >= 200) score += 25;
        else if (aov >= 100) score += 20;
        else if (aov >= 50) score += 15;
        else score += 10;

        // Conversion rate score (realistic rates score higher)
        if (conversionRate >= 2 && conversionRate <= 5) score += 40;
        else if (conversionRate >= 1 && conversionRate <= 8) score += 30;
        else if (conversionRate >= 0.5 && conversionRate <= 10) score += 20;
        else score += 10;

        return Math.min(score, 100);
    }

    showDefaultValues() {
        // Fallback to default values if calculation fails
        document.getElementById('projected-revenue').textContent = '$45,600';
        document.getElementById('roi-multiple').textContent = '4.56x';
    }

    // Integration methods for other page features
    setupIndustryInsights() {
        const industrySelect = document.getElementById('industry');
        if (!industrySelect) return;

        industrySelect.addEventListener('change', (e) => {
            this.showIndustrySpecificInsights(e.target.value);
        });
    }

    showIndustrySpecificInsights(industry) {
        const insights = {
            'ecommerce': 'E-commerce sees 320% ROI improvement with AI-powered product recommendations during peak shopping intent.',
            'saas': 'SaaS platforms achieve 410% ROI boost through contextual feature suggestions and upgrade recommendations.',
            'fintech': 'FinTech companies experience 380% ROI increase with AI-driven financial product matching.',
            'travel': 'Travel platforms see 290% ROI improvement through intelligent destination and booking recommendations.',
            'education': 'Education platforms achieve 350% ROI boost with personalized course and resource recommendations.'
        };

        // You could display these insights in a tooltip or info panel
        console.log(`Industry insight for ${industry}:`, insights[industry]);
    }
}

// Global functions for backward compatibility
window.calculateROIRealTime = function() {
    if (window.earnlyAdvertisers) {
        window.earnlyAdvertisers.calculateROIRealTime();
    }
};

window.calculateROI = function() {
    // Alias for backward compatibility
    window.calculateROIRealTime();
};

window.getDetailedAnalysis = function() {
    // Create a detailed analysis modal or redirect
    const adSpend = parseFloat(document.getElementById('ad-spend')?.value) || 10000;
    const aov = parseFloat(document.getElementById('aov')?.value) || 150;
    const industry = document.getElementById('industry')?.value || 'ecommerce';
    
    alert(`Detailed Analysis Request:\n\nBudget: $${adSpend.toLocaleString()}\nAOV: $${aov}\nIndustry: ${industry}\n\nOur AI experts will prepare a custom analysis for your specific use case. This analysis will include:\n\n• Industry-specific optimization strategies\n• Competitive benchmarking\n• Custom integration timeline\n• ROI projections with confidence intervals\n\nContact our team to schedule your free consultation!`);
};

// Interactive Brand Demo Functions
window.setBrandURL = function(url) {
    const input = document.getElementById('brand-url');
    if (input) {
        input.value = url.startsWith('http') ? url : `https://${url}`;
        updateBrandPreview();
    }
};

window.updateBrandPreview = function() {
    const url = document.getElementById('brand-url')?.value;
    const category = document.getElementById('platform-category')?.value;
    
    // Basic URL validation and preview updates
    if (url && url.length > 3) {
        console.log(`Updating brand preview for ${url} in ${category} category`);
    }
};

window.generateBrandPreview = function() {
    const url = document.getElementById('brand-url')?.value;
    const category = document.getElementById('platform-category')?.value;
    const resultsContainer = document.getElementById('brand-preview-results');
    const previewContainer = document.getElementById('ad-preview-container');
    
    if (!url || url.trim().length < 5) {
        alert('Please enter a valid website URL');
        return;
    }
    
    // Show results container
    resultsContainer.classList.remove('hidden');
    
    // Show loading state
    previewContainer.innerHTML = `
        <div class="text-center text-gray-500">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-3"></div>
            <p>Generating realistic ad preview...</p>
        </div>
    `;
    
    // Simulate API call delay
    setTimeout(() => {
        showBrandPreviewResults(url, category);
    }, 2000);
};

function showBrandPreviewResults(url, category) {
    const previewContainer = document.getElementById('ad-preview-container');
    const domain = extractDomain(url);
    
    // Generate mock ad preview based on platform category
    const adContent = generateMockAdContent(domain, category);
    
    previewContainer.innerHTML = adContent;
    
    // Update performance metrics with realistic values
    updatePreviewMetrics(domain, category);
    
    // Add animation to the preview
    previewContainer.style.opacity = '0';
    setTimeout(() => {
        previewContainer.style.transition = 'opacity 0.5s ease';
        previewContainer.style.opacity = '1';
    }, 100);
}

function extractDomain(url) {
    try {
        const domain = url.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];
        return domain.split('.')[0]; // Get brand name
    } catch {
        return 'YourBrand';
    }
}

function generateMockAdContent(brandName, category) {
    const brandDisplayName = brandName.charAt(0).toUpperCase() + brandName.slice(1);
    
    const templates = {
        'chatgpt': `
            <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">${brandDisplayName[0]}</span>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2 mb-2">
                            <h4 class="font-semibold text-gray-900">${brandDisplayName}</h4>
                            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Sponsored</span>
                        </div>
                        <p class="text-gray-700 text-sm mb-3">Discover ${brandDisplayName}'s innovative solutions designed for modern businesses. Trusted by thousands of customers worldwide.</p>
                        <div class="flex items-center space-x-4 text-xs text-gray-500">
                            <span>⭐ 4.8/5 rating</span>
                            <span>🚀 Free trial available</span>
                            <span>💳 No credit card required</span>
                        </div>
                        <button class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        `,
        'search': `
            <div class="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div class="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-2 border-b">
                    <div class="flex items-center space-x-2">
                        <span class="text-green-600 text-xs font-medium">Ad</span>
                        <span class="text-gray-600 text-xs">${brandDisplayName.toLowerCase()}.com</span>
                    </div>
                </div>
                <div class="p-4">
                    <h4 class="text-lg font-semibold text-blue-600 mb-1 hover:underline cursor-pointer">${brandDisplayName} - Official Website</h4>
                    <p class="text-green-600 text-sm mb-2">${brandDisplayName.toLowerCase()}.com</p>
                    <p class="text-gray-700 text-sm">Experience the future of productivity with ${brandDisplayName}. Join millions of users who trust our platform for their daily workflows.</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Free Trial</span>
                        <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">24/7 Support</span>
                        <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Enterprise Ready</span>
                    </div>
                </div>
            </div>
        `,
        'shopping': `
            <div class="bg-white rounded-xl border border-gray-200 p-4">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-1">
                        <div class="w-full h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                            <span class="text-2xl font-bold text-gray-600">${brandDisplayName[0]}</span>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-semibold text-gray-900">${brandDisplayName} Products</h4>
                            <span class="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Sponsored</span>
                        </div>
                        <div class="flex items-center space-x-2 mb-2">
                            <div class="flex text-yellow-400">
                                ${'⭐'.repeat(5)}
                            </div>
                            <span class="text-gray-600 text-xs">(1,234 reviews)</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-lg font-bold text-gray-900">$99</span>
                                <span class="text-sm text-gray-500 line-through ml-2">$149</span>
                            </div>
                            <div class="text-xs text-green-600 font-medium">Free shipping</div>
                        </div>
                        <button class="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        `,
        'productivity': `
            <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-5 border border-gray-200">
                <div class="flex items-center space-x-3 mb-3">
                    <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold">${brandDisplayName[0]}</span>
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-900">${brandDisplayName} for Teams</h4>
                        <span class="text-xs text-blue-600 font-medium">Recommended Tool</span>
                    </div>
                </div>
                <p class="text-gray-700 text-sm mb-3">Streamline your workflow with ${brandDisplayName}'s AI-powered productivity suite. Boost team efficiency by 40%.</p>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div class="text-center bg-white rounded-lg p-2">
                        <div class="text-lg font-bold text-blue-600">14</div>
                        <div class="text-xs text-gray-500">Day Trial</div>
                    </div>
                    <div class="text-center bg-white rounded-lg p-2">
                        <div class="text-lg font-bold text-green-600">40%</div>
                        <div class="text-xs text-gray-500">Efficiency Gain</div>
                    </div>
                </div>
                <button class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold">
                    Start Free Trial
                </button>
            </div>
        `,
        'creative': `
            <div class="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
                <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span class="text-white font-bold text-xl">${brandDisplayName[0]}</span>
                    </div>
                    <h4 class="font-bold text-gray-900 text-lg">${brandDisplayName} Creative Suite</h4>
                    <span class="text-pink-600 text-sm font-medium">Featured Creator Tool</span>
                </div>
                <div class="space-y-2 mb-4">
                    <div class="flex items-center text-sm text-gray-700">
                        <i class="fas fa-check text-green-500 mr-2"></i>
                        Professional design templates
                    </div>
                    <div class="flex items-center text-sm text-gray-700">
                        <i class="fas fa-check text-green-500 mr-2"></i>
                        AI-powered creative tools
                    </div>
                    <div class="flex items-center text-sm text-gray-700">
                        <i class="fas fa-check text-green-500 mr-2"></i>
                        Collaborative workspace
                    </div>
                </div>
                <button class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold">
                    Unleash Creativity
                </button>
            </div>
        `,
        'business': `
            <div class="bg-white rounded-xl p-5 border border-gray-200">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold">${brandDisplayName[0]}</span>
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900">${brandDisplayName} Analytics</h4>
                            <span class="text-xs text-gray-600">Business Intelligence Platform</span>
                        </div>
                    </div>
                    <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">Enterprise</span>
                </div>
                <div class="grid grid-cols-3 gap-3 mb-4">
                    <div class="text-center">
                        <div class="text-lg font-bold text-blue-600">99.9%</div>
                        <div class="text-xs text-gray-500">Uptime</div>
                    </div>
                    <div class="text-center">
                        <div class="text-lg font-bold text-green-600">500+</div>
                        <div class="text-xs text-gray-500">Integrations</div>
                    </div>
                    <div class="text-center">
                        <div class="text-lg font-bold text-purple-600">SOC2</div>
                        <div class="text-xs text-gray-500">Certified</div>
                    </div>
                </div>
                <button class="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-semibold">
                    Request Demo
                </button>
            </div>
        `
    };
    
    return templates[category] || templates['chatgpt'];
}

function updatePreviewMetrics(brandName, category) {
    // Generate realistic metrics based on category
    const baseMetrics = {
        'chatgpt': { ctr: 2.8, engagement: 89, relevance: 94 },
        'search': { ctr: 3.2, engagement: 85, relevance: 92 },
        'shopping': { ctr: 4.1, engagement: 91, relevance: 96 },
        'productivity': { ctr: 2.6, engagement: 87, relevance: 90 },
        'creative': { ctr: 3.5, engagement: 93, relevance: 88 },
        'business': { ctr: 2.4, engagement: 84, relevance: 95 }
    };
    
    const metrics = baseMetrics[category] || baseMetrics['chatgpt'];
    
    // Add some randomness to make it feel more realistic
    const variance = 0.1;
    const ctr = (metrics.ctr + (Math.random() - 0.5) * variance).toFixed(1);
    const engagement = Math.round(metrics.engagement + (Math.random() - 0.5) * 10);
    const relevance = Math.round(metrics.relevance + (Math.random() - 0.5) * 8);
    
    // Update the display
    animateMetricUpdate('predicted-ctr', ctr + '%');
    animateMetricUpdate('engagement-score', engagement);
    animateMetricUpdate('relevance-match', relevance + '%');
}

function animateMetricUpdate(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Scale animation
    element.style.transform = 'scale(1.2)';
    element.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        element.textContent = newValue;
        element.style.transform = 'scale(1)';
    }, 150);
}

window.openAdPlexDemo = function() {
    // Open AdPlex demo in new tab
    window.open('https://adplex-demo.com', '_blank');
};

window.sharePreview = function() {
    const url = document.getElementById('brand-url')?.value || 'your website';
    const category = document.getElementById('platform-category')?.value || 'search';
    const brandName = url ? url.replace('https://', '').replace('http://', '').split('.')[0] : 'your brand';
    
    // Generate shareable preview summary
    const previewData = {
        brand: brandName.charAt(0).toUpperCase() + brandName.slice(1),
        platform: category,
        metrics: {
            ctr: document.getElementById('predicted-ctr')?.textContent || '2.8%',
            engagement: document.getElementById('engagement-score')?.textContent || '89',
            relevance: document.getElementById('relevance-match')?.textContent || '94%'
        },
        timestamp: new Date().toLocaleDateString()
    };
    
    // Create shareable content
    const shareContent = `🚀 Earnly AI Ad Preview - ${previewData.brand}\n\n` +
        `📊 Platform: ${category.charAt(0).toUpperCase() + category.slice(1)}\n\n` +
        `📈 Predicted Performance:\n` +
        `• CTR: ${previewData.metrics.ctr}\n` +
        `• Engagement: ${previewData.metrics.engagement}\n` +
        `• Relevance: ${previewData.metrics.relevance}\n\n` +
        `📅 Generated: ${previewData.timestamp}\n\n` +
        `Ready to launch your AI-native campaign? Contact Earnly for setup.`;
    
    // Try to use native share API, fallback to clipboard
    if (navigator.share && navigator.canShare && navigator.canShare({ text: shareContent })) {
        navigator.share({
            title: `Earnly AI Preview - ${previewData.brand}`,
            text: shareContent
        }).catch((err) => {
            console.log('Share failed:', err);
            copyToClipboard(shareContent);
        });
    } else {
        copyToClipboard(shareContent);
    }
};

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showShareSuccess();
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showShareSuccess();
    } catch (err) {
        console.error('Copy failed:', err);
        alert('Preview Details:\n\n' + text);
    }
    
    document.body.removeChild(textarea);
}

function showShareSuccess() {
    // Create and show success notification
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div class="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            Preview details copied to clipboard!
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }
    }, 3000);
}

window.startCampaign = function() {
    const url = document.getElementById('brand-url')?.value || 'your website';
    alert(`Ready to launch your campaign for ${url}?\n\nNext steps:\n• Connect with our campaign specialists\n• Set up tracking and analytics\n• Define targeting parameters\n• Launch with optimized budget allocation\n\nContact our team to get started!`);
};

// Initialize when script loads
document.addEventListener('DOMContentLoaded', function() {
    window.earnlyAdvertisers = new EarnlyAdvertisers();
});

// Also initialize if DOM is already loaded
if (document.readyState !== 'loading') {
    window.earnlyAdvertisers = new EarnlyAdvertisers();
}