// Advanced Enterprise Dashboard for Earnly AI
// Real-time analytics, predictive insights, and interactive features

class AdvancedDashboard {
    constructor() {
        this.realTimeData = {};
        this.charts = new Map();
        this.updateInterval = null;
        this.isConnected = false;
        
        this.init();
    }
    
    init() {
        this.initRealTimeUpdates();
        this.initAdvancedCharts();
        this.initPredictiveAnalytics();
        this.initSmartNotifications();
        this.initInteractiveElements();
        
        console.log('🚀 Advanced Dashboard initialized');
    }
    
    // Real-time Data Updates
    initRealTimeUpdates() {
        this.startRealTimeUpdates();
    }
    
    async startRealTimeUpdates() {
        const updateRealTimeData = async () => {
            try {
                const response = await axios.get('/api/analytics/realtime');
                this.realTimeData = response.data;
                this.updateDashboardMetrics();
                this.updateCharts();
                this.checkForAlerts();
            } catch (error) {
                console.error('Failed to fetch real-time data:', error);
            }
        };
        
        // Initial load
        await updateRealTimeData();
        
        // Update every 5 seconds
        this.updateInterval = setInterval(updateRealTimeData, 5000);
        this.isConnected = true;
        
        console.log('✅ Real-time updates started');
    }
    
    updateDashboardMetrics() {
        const data = this.realTimeData;
        
        // Update key metrics with animations
        this.updateMetricCard('active-conversations', data.active_conversations?.toLocaleString() || '0');
        this.updateMetricCard('conversions-hour', data.conversions_last_hour || '0');
        this.updateMetricCard('revenue-hour', `$${parseFloat(data.revenue_last_hour || 0).toLocaleString()}`);
        
        // Update geographic distribution
        this.updateGeographicData(data.geographic_activity || {});
        
        // Update top products
        this.updateTopProducts(data.top_products_now || []);
    }
    
    updateMetricCard(id, value) {
        const element = document.getElementById(id);
        if (element) {
            const currentValue = element.textContent;
            if (currentValue !== value) {
                element.classList.add('counter-animate');
                element.textContent = value;
                setTimeout(() => element.classList.remove('counter-animate'), 500);
            }
        }
    }
    
    // Advanced Chart System
    initAdvancedCharts() {
        this.createConversionTrendChart();
        this.createRevenueAnalyticsChart();
        this.createPerformanceHeatmap();
        this.createPredictiveChart();
    }
    
    createConversionTrendChart() {
        const ctx = document.getElementById('conversion-trend-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Conversion Rate (%)',
                    data: [8.2, 8.5, 8.7, 8.4, 8.9, 8.6, 8.8],
                    borderColor: 'rgb(147, 51, 234)',
                    backgroundColor: 'rgba(147, 51, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 7,
                        max: 10,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 8
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutCubic'
                }
            }
        });
        
        this.charts.set('conversion-trend', chart);
    }
    
    createRevenueAnalyticsChart() {
        const ctx = document.getElementById('revenue-analytics-chart');
        if (!ctx) return;
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Electronics', 'Gaming', 'Fashion', 'Home', 'Beauty', 'Sports'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [45230, 38940, 28750, 22340, 18920, 15680],
                    backgroundColor: [
                        'rgba(147, 51, 234, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderColor: [
                        'rgb(147, 51, 234)',
                        'rgb(59, 130, 246)',
                        'rgb(16, 185, 129)',
                        'rgb(245, 158, 11)',
                        'rgb(239, 68, 68)',
                        'rgb(139, 92, 246)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000) + 'K';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });
        
        this.charts.set('revenue-analytics', chart);
    }
    
    createPredictiveChart() {
        const ctx = document.getElementById('predictive-chart');
        if (!ctx) return;
        
        const historicalData = [8.2, 8.5, 8.7, 8.4, 8.9, 8.6, 8.8, 8.9, 9.1, 8.7];
        const predictedData = [8.8, 9.0, 9.2, 9.4, 9.3, 9.5, 9.7];
        
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
                datasets: [{
                    label: 'Historical Performance',
                    data: [...historicalData, null, null, null, null, null, null, null],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: false
                }, {
                    label: 'AI Prediction',
                    data: [null, null, null, null, null, null, null, null, null, 8.7, ...predictedData],
                    borderColor: 'rgb(16, 185, 129)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderDash: [5, 5],
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 7,
                        max: 11,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                },
                animation: {
                    duration: 3000,
                    easing: 'easeOutCubic'
                }
            }
        });
        
        this.charts.set('predictive', chart);
    }
    
    updateCharts() {
        if (this.realTimeData.conversion_rate_trend) {
            const conversionChart = this.charts.get('conversion-trend');
            if (conversionChart) {
                conversionChart.data.datasets[0].data = this.realTimeData.conversion_rate_trend;
                conversionChart.update('none'); // No animation for real-time updates
            }
        }
    }
    
    // Predictive Analytics
    async initPredictiveAnalytics() {
        try {
            const response = await axios.get('/api/analytics/predictions/1');
            this.displayPredictiveInsights(response.data);
        } catch (error) {
            console.error('Failed to load predictive analytics:', error);
        }
    }
    
    displayPredictiveInsights(predictions) {
        const container = document.getElementById('predictive-insights');
        if (!container) return;
        
        container.innerHTML = `
            <div class="grid md:grid-cols-2 gap-6">
                <div class="glass-card p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i class="fas fa-crystal-ball text-purple-600 mr-3"></i>
                        Next 7 Days Forecast
                    </h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Estimated Revenue</span>
                            <span class="font-bold text-green-600">$${predictions.next_7_days.estimated_revenue.toLocaleString()}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Conversions</span>
                            <span class="font-bold text-blue-600">${predictions.next_7_days.estimated_conversions}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Confidence Score</span>
                            <span class="font-bold text-purple-600">${predictions.next_7_days.confidence_score}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="glass-card p-6">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <i class="fas fa-chart-line text-green-600 mr-3"></i>
                        Campaign Optimization
                    </h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Recommended Budget Increase</span>
                            <span class="font-bold text-green-600">+${(predictions.campaign_optimization.recommended_budget_increase * 100)}%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">ROI Improvement</span>
                            <span class="font-bold text-blue-600">+${predictions.campaign_optimization.expected_roi_improvement}%</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-gray-600">Opportunities</span>
                            <span class="font-bold text-purple-600">${predictions.campaign_optimization.optimization_opportunities}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-6 glass-card p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <i class="fas fa-lightbulb text-yellow-600 mr-3"></i>
                    Market Insights
                </h3>
                <div class="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 class="font-medium text-gray-700 mb-2">Trending Keywords</h4>
                        <div class="space-y-1">
                            ${predictions.market_insights.trending_keywords.map(keyword => 
                                `<span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm mr-1 mb-1">${keyword}</span>`
                            ).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-700 mb-2">Seasonal Factors</h4>
                        <p class="text-sm text-gray-600">${predictions.market_insights.seasonal_factors}</p>
                    </div>
                    <div>
                        <h4 class="font-medium text-gray-700 mb-2">User Behavior Shifts</h4>
                        <div class="space-y-1">
                            ${predictions.market_insights.user_behavior_shifts.map(shift => 
                                `<span class="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-lg text-sm mr-1 mb-1">${shift}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Geographic Data Visualization
    updateGeographicData(data) {
        const container = document.getElementById('geographic-data');
        if (!container) return;
        
        container.innerHTML = `
            <div class="space-y-3">
                ${Object.entries(data).map(([region, percentage]) => `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                            <span class="text-sm font-medium text-gray-700">${region}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <div class="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000" 
                                     style="width: ${percentage}%"></div>
                            </div>
                            <span class="text-sm font-bold text-gray-900 w-10">${percentage}%</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Top Products Update
    updateTopProducts(products) {
        const container = document.getElementById('top-products-now');
        if (!container) return;
        
        container.innerHTML = products.map((product, index) => `
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover-lift">
                <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        ${index + 1}
                    </div>
                    <div>
                        <div class="font-medium text-gray-900">${product.name}</div>
                        <div class="text-sm text-gray-600">${product.conversions} conversions</div>
                    </div>
                </div>
                <div class="text-right">
                    <div class="text-lg font-bold text-green-600">$${product.revenue.toLocaleString()}</div>
                </div>
            </div>
        `).join('');
    }
    
    // Smart Notifications
    initSmartNotifications() {
        this.notificationQueue = [];
        this.setupSmartAlerts();
    }
    
    setupSmartAlerts() {
        // Check for performance anomalies
        setInterval(() => {
            this.checkPerformanceAnomalies();
        }, 30000); // Every 30 seconds
        
        // Check for optimization opportunities
        setInterval(() => {
            this.checkOptimizationOpportunities();
        }, 300000); // Every 5 minutes
    }
    
    checkPerformanceAnomalies() {
        if (this.realTimeData.conversion_rate_trend) {
            const recent = this.realTimeData.conversion_rate_trend.slice(-3);
            const average = recent.reduce((a, b) => a + b, 0) / recent.length;
            
            if (average > 9.5) {
                this.showSmartNotification(
                    'Performance Alert',
                    'Conversion rate is performing exceptionally well (+15% above baseline)',
                    'success',
                    'performance'
                );
            } else if (average < 7.5) {
                this.showSmartNotification(
                    'Performance Warning', 
                    'Conversion rate has dropped below optimal range. Consider campaign optimization.',
                    'warning',
                    'performance'
                );
            }
        }
    }
    
    checkOptimizationOpportunities() {
        // Simulate AI-driven optimization suggestions
        const opportunities = [
            {
                type: 'budget',
                message: 'AI detected 23% budget efficiency improvement opportunity in Electronics category',
                action: 'Optimize Budget'
            },
            {
                type: 'audience',
                message: 'New high-converting audience segment identified in Gaming vertical',
                action: 'Expand Targeting'
            },
            {
                type: 'timing',
                message: 'Peak conversion hours shifted. Recommend bid schedule adjustment.',
                action: 'Update Schedule'
            }
        ];
        
        if (Math.random() > 0.7) {
            const opportunity = opportunities[Math.floor(Math.random() * opportunities.length)];
            this.showSmartNotification(
                'AI Optimization',
                opportunity.message,
                'info',
                opportunity.type,
                opportunity.action
            );
        }
    }
    
    showSmartNotification(title, message, type = 'info', category = 'general', actionText = null) {
        const notification = document.createElement('div');
        notification.className = `notification-modern fixed top-4 right-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 ${
            type === 'success' ? 'border-l-4 border-l-green-500' :
            type === 'warning' ? 'border-l-4 border-l-yellow-500' :
            type === 'error' ? 'border-l-4 border-l-red-500' :
            'border-l-4 border-l-blue-500'
        }`;
        
        notification.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <i class="fas ${
                        type === 'success' ? 'fa-check-circle text-green-500' :
                        type === 'warning' ? 'fa-exclamation-triangle text-yellow-500' :
                        type === 'error' ? 'fa-exclamation-circle text-red-500' :
                        'fa-info-circle text-blue-500'
                    }"></i>
                </div>
                <div class="ml-3 flex-1">
                    <div class="text-sm font-medium text-gray-900">${title}</div>
                    <div class="text-sm text-gray-600 mt-1">${message}</div>
                    ${actionText ? `
                        <div class="mt-3">
                            <button class="btn-interactive bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                                ${actionText}
                            </button>
                        </div>
                    ` : ''}
                </div>
                <button onclick="this.closest('.notification-modern').remove()" 
                        class="ml-3 text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-sm"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 10000);
    }
    
    // Interactive Elements
    initInteractiveElements() {
        this.setupHoverEffects();
        this.setupClickHandlers();
        this.setupKeyboardShortcuts();
    }
    
    setupHoverEffects() {
        // Add hover effects to cards
        document.querySelectorAll('.glass-card, .card-interactive').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '';
            });
        });
    }
    
    setupClickHandlers() {
        // Chart interaction handlers
        this.charts.forEach((chart, key) => {
            chart.options.onClick = (event, elements) => {
                if (elements.length > 0) {
                    const element = elements[0];
                    console.log(`Chart ${key} clicked:`, element);
                    this.showSmartNotification(
                        'Chart Interaction',
                        `Clicked on data point in ${key} chart`,
                        'info'
                    );
                }
            };
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + R: Refresh data
            if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
                e.preventDefault();
                this.refreshAllData();
            }
            
            // Ctrl/Cmd + D: Toggle dark mode
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleDarkMode();
            }
        });
    }
    
    async refreshAllData() {
        this.showSmartNotification('Data Refresh', 'Refreshing all dashboard data...', 'info');
        
        try {
            // Refresh real-time data
            const response = await axios.get('/api/analytics/realtime');
            this.realTimeData = response.data;
            this.updateDashboardMetrics();
            this.updateCharts();
            
            // Refresh predictive analytics
            const predictions = await axios.get('/api/analytics/predictions/1');
            this.displayPredictiveInsights(predictions.data);
            
            this.showSmartNotification('Data Refresh', 'All data updated successfully', 'success');
        } catch (error) {
            this.showSmartNotification('Data Refresh', 'Failed to refresh data', 'error');
        }
    }
    
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        this.showSmartNotification('Theme', 'Dark mode toggled', 'info');
    }
    
    // Cleanup
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        this.charts.forEach(chart => {
            chart.destroy();
        });
        
        console.log('🧹 Advanced Dashboard destroyed');
    }
}

// Initialize Advanced Dashboard
let advancedDashboard;

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/dashboard' || document.getElementById('advanced-dashboard')) {
        advancedDashboard = new AdvancedDashboard();
    }
});

// Global access
window.advancedDashboard = advancedDashboard;

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AdvancedDashboard };
}