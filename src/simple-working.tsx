// Simple Working Version - No External Dependencies
export const SimpleWorkingPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Earnly AI - Interactive Brand Demo</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
            color: white;
            line-height: 1.6;
          }
          .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; padding: 60px 0; }
          .header h1 { 
            font-size: 3rem; 
            font-weight: bold; 
            margin-bottom: 20px;
            background: linear-gradient(45deg, #8b5cf6, #3b82f6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .header p { font-size: 1.2rem; color: #94a3b8; margin-bottom: 40px; }
          
          .demo-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 40px;
            margin: 40px 0;
            color: #1e293b;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          
          .demo-title {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .demo-title h2 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #1e293b;
          }
          
          .demo-form {
            max-width: 600px;
            margin: 0 auto;
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
          }
          
          .form-group input, .form-group select {
            width: 100%;
            padding: 15px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 16px;
            transition: border-color 0.3s;
          }
          
          .form-group input:focus, .form-group select:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }
          
          .example-buttons {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin: 10px 0;
          }
          
          .example-btn {
            padding: 8px 16px;
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
          }
          
          .example-btn:hover {
            background: #e5e7eb;
            transform: translateY(-1px);
          }
          
          .preview-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.3s;
          }
          
          .preview-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
          }
          
          .preview-results {
            margin-top: 30px;
            padding: 20px;
            background: #f9fafb;
            border-radius: 12px;
            border: 2px dashed #d1d5db;
            text-align: center;
            display: none;
          }
          
          .preview-results.show { display: block; }
          
          .ad-preview {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            margin: 20px 0;
          }
          
          .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
          }
          
          .metric {
            text-align: center;
            padding: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .metric-value {
            font-size: 1.5rem;
            font-weight: bold;
            color: #059669;
          }
          
          .metric-label {
            font-size: 0.8rem;
            color: #6b7280;
            margin-top: 5px;
          }
          
          .success { color: #059669; }
          .loading { color: #3b82f6; }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .fade-in { animation: fadeIn 0.6s ease-out; }
          
          .nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(30, 41, 59, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            z-index: 1000;
          }
          
          .nav-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          }
          
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
          }
          
          .nav-links {
            display: flex;
            gap: 30px;
          }
          
          .nav-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s;
          }
          
          .nav-links a:hover {
            color: white;
          }
          
          .cta-btn {
            padding: 10px 20px;
            background: linear-gradient(45deg, #8b5cf6, #3b82f6);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.3s;
          }
          
          .cta-btn:hover {
            transform: translateY(-1px);
          }
          
          body { padding-top: 80px; }
          
          @media (max-width: 768px) {
            .header h1 { font-size: 2rem; }
            .nav-links { display: none; }
            .example-buttons { justify-content: center; }
          }
        </style>
    </head>
    <body>
        <nav class="nav">
            <div class="nav-content">
                <div class="logo">Earnly AI</div>
                <div class="nav-links">
                    <a href="/">Home</a>
                    <a href="/for-advertisers">For Advertisers</a>
                    <a href="/for-ai-platforms">For AI Platforms</a>
                </div>
                <a href="/for-advertisers" class="cta-btn">Get Started</a>
            </div>
        </nav>

        <div class="container">
            <div class="header">
                <h1>Interactive Brand Demo</h1>
                <p>See how your brand appears in AI-powered advertising across different platforms</p>
            </div>

            <div class="demo-section">
                <div class="demo-title">
                    <h2>🚀 Brand Preview Generator</h2>
                    <p>Enter your website URL and select a platform to see realistic ad previews</p>
                </div>

                <div class="demo-form">
                    <div class="form-group">
                        <label for="brandUrl">Website URL</label>
                        <input type="url" id="brandUrl" placeholder="https://yourbrand.com" />
                        <div class="example-buttons">
                            <button class="example-btn" onclick="setURL('shopify.com')">shopify.com</button>
                            <button class="example-btn" onclick="setURL('notion.so')">notion.so</button>
                            <button class="example-btn" onclick="setURL('stripe.com')">stripe.com</button>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="platform">Platform Category</label>
                        <select id="platform">
                            <option value="chatgpt">ChatGPT & AI Assistants</option>
                            <option value="search">AI Search Engines</option>
                            <option value="shopping">AI Shopping Platforms</option>
                            <option value="productivity">Productivity Tools</option>
                            <option value="creative">Creative Platforms</option>
                            <option value="business">Business Intelligence</option>
                        </select>
                    </div>

                    <button class="preview-btn" onclick="generatePreview()">
                        ✨ Generate Preview
                    </button>

                    <div class="preview-results" id="results">
                        <div id="loading" style="display: none;">
                            <div class="loading">🔄 Generating realistic ad preview...</div>
                        </div>
                        
                        <div id="preview-content">
                            <!-- Preview will be generated here -->
                        </div>

                        <div class="metrics">
                            <div class="metric">
                                <div class="metric-value" id="ctr">3.2%</div>
                                <div class="metric-label">Predicted CTR</div>
                            </div>
                            <div class="metric">
                                <div class="metric-value" id="engagement">87</div>
                                <div class="metric-label">Engagement Score</div>
                            </div>
                            <div class="metric">
                                <div class="metric-value" id="relevance">94%</div>
                                <div class="metric-label">Relevance Match</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align: center; padding: 60px 0;">
                <h2 style="color: white; margin-bottom: 20px;">Ready to Launch Your Campaign?</h2>
                <p style="color: #94a3b8; margin-bottom: 30px;">Join 500+ brands using AI-native advertising</p>
                <a href="/for-advertisers" class="cta-btn" style="font-size: 1.1rem; padding: 15px 30px;">
                    Start Your Campaign 🚀
                </a>
            </div>
        </div>

        <script>
            function setURL(url) {
                document.getElementById('brandUrl').value = 'https://' + url;
            }

            function generatePreview() {
                const url = document.getElementById('brandUrl').value;
                const platform = document.getElementById('platform').value;
                
                if (!url || url.length < 5) {
                    alert('Please enter a valid website URL');
                    return;
                }

                const results = document.getElementById('results');
                const loading = document.getElementById('loading');
                const content = document.getElementById('preview-content');
                
                // Show results container
                results.classList.add('show');
                
                // Show loading
                loading.style.display = 'block';
                content.innerHTML = '';
                
                // Simulate processing
                setTimeout(() => {
                    loading.style.display = 'none';
                    showPreview(url, platform);
                    updateMetrics(platform);
                }, 2000);
            }

            function showPreview(url, platform) {
                const content = document.getElementById('preview-content');
                const brandName = extractBrand(url);
                
                const previews = {
                    'chatgpt': \`
                        <div class="ad-preview fade-in">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                <div style="width: 50px; height: 50px; background: linear-gradient(45deg, #3b82f6, #8b5cf6); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 20px;">
                                    \${brandName[0]}
                                </div>
                                <div>
                                    <div style="font-weight: bold; font-size: 18px;">\${brandName}</div>
                                    <div style="color: #3b82f6; font-size: 12px;">Sponsored</div>
                                </div>
                            </div>
                            <p style="color: #374151; margin-bottom: 15px;">Discover \${brandName}'s innovative solutions designed for modern businesses. Trusted by thousands of customers worldwide.</p>
                            <div style="display: flex; gap: 15px; font-size: 12px; color: #6b7280; margin-bottom: 15px;">
                                <span>⭐ 4.8/5 rating</span>
                                <span>🚀 Free trial</span>
                                <span>💳 No credit card</span>
                            </div>
                            <button style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 8px; font-weight: 600;">Learn More</button>
                        </div>
                    \`,
                    'search': \`
                        <div class="ad-preview fade-in">
                            <div style="background: linear-gradient(90deg, #dcfce7, #dbeafe); padding: 8px 15px; border-radius: 8px 8px 0 0; font-size: 12px; color: #059669;">
                                Ad • \${brandName.toLowerCase()}.com
                            </div>
                            <div style="padding: 15px;">
                                <h3 style="color: #2563eb; font-size: 18px; margin-bottom: 5px;">\${brandName} - Official Website</h3>
                                <p style="color: #059669; font-size: 14px; margin-bottom: 10px;">\${brandName.toLowerCase()}.com</p>
                                <p style="color: #374151;">Experience the future of productivity with \${brandName}. Join millions of users worldwide.</p>
                                <div style="margin-top: 10px; display: flex; gap: 8px;">
                                    <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 12px; font-size: 11px;">Free Trial</span>
                                    <span style="background: #f3f4f6; padding: 4px 8px; border-radius: 12px; font-size: 11px;">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    \`,
                    'shopping': \`
                        <div class="ad-preview fade-in">
                            <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 15px;">
                                <div style="aspect-ratio: 1; background: linear-gradient(45deg, #f3e8ff, #dbeafe); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; color: #6b7280;">
                                    \${brandName[0]}
                                </div>
                                <div>
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                                        <h3 style="font-weight: bold;">\${brandName} Products</h3>
                                        <span style="background: #fed7aa; color: #c2410c; padding: 2px 8px; border-radius: 12px; font-size: 11px;">Sponsored</span>
                                    </div>
                                    <div style="margin-bottom: 8px;">⭐⭐⭐⭐⭐ <span style="color: #6b7280; font-size: 12px;">(1,234 reviews)</span></div>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <div>
                                            <span style="font-size: 20px; font-weight: bold;">$99</span>
                                            <span style="color: #6b7280; text-decoration: line-through; font-size: 14px;">$149</span>
                                        </div>
                                        <span style="color: #059669; font-size: 12px;">Free shipping</span>
                                    </div>
                                    <button style="width: 100%; background: #8b5cf6; color: white; padding: 8px; border: none; border-radius: 8px; font-weight: 600; margin-top: 10px;">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    \`,
                    'productivity': \`
                        <div class="ad-preview fade-in" style="background: linear-gradient(45deg, #f9fafb, #dbeafe);">
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                                <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                    \${brandName[0]}
                                </div>
                                <div>
                                    <div style="font-weight: bold;">\${brandName} for Teams</div>
                                    <div style="color: #3b82f6; font-size: 12px;">Recommended Tool</div>
                                </div>
                            </div>
                            <p style="margin-bottom: 15px;">Streamline your workflow with \${brandName}'s AI-powered suite. Boost efficiency by 40%.</p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div style="text-align: center; background: white; padding: 10px; border-radius: 8px;">
                                    <div style="font-size: 20px; font-weight: bold; color: #3b82f6;">14</div>
                                    <div style="font-size: 12px; color: #6b7280;">Day Trial</div>
                                </div>
                                <div style="text-align: center; background: white; padding: 10px; border-radius: 8px;">
                                    <div style="font-size: 20px; font-weight: bold; color: #059669;">40%</div>
                                    <div style="font-size: 12px; color: #6b7280;">Efficiency</div>
                                </div>
                            </div>
                            <button style="width: 100%; background: #3b82f6; color: white; padding: 10px; border: none; border-radius: 8px; font-weight: 600;">Start Free Trial</button>
                        </div>
                    \`,
                    'creative': \`
                        <div class="ad-preview fade-in" style="text-align: center;">
                            <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #ec4899, #8b5cf6); border-radius: 50%; margin: 0 auto 15px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 24px;">
                                \${brandName[0]}
                            </div>
                            <h3 style="margin-bottom: 5px;">\${brandName} Creative Suite</h3>
                            <div style="color: #ec4899; font-size: 12px; margin-bottom: 15px;">Featured Creator Tool</div>
                            <div style="text-align: left; margin-bottom: 15px;">
                                <div style="margin: 5px 0;">✅ Professional templates</div>
                                <div style="margin: 5px 0;">✅ AI-powered tools</div>
                                <div style="margin: 5px 0;">✅ Collaborative workspace</div>
                            </div>
                            <button style="width: 100%; background: linear-gradient(45deg, #ec4899, #8b5cf6); color: white; padding: 12px; border: none; border-radius: 12px; font-weight: 600;">Unleash Creativity</button>
                        </div>
                    \`,
                    'business': \`
                        <div class="ad-preview fade-in">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <div style="width: 40px; height: 40px; background: #1f2937; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                                        \${brandName[0]}
                                    </div>
                                    <div>
                                        <div style="font-weight: bold;">\${brandName} Analytics</div>
                                        <div style="color: #6b7280; font-size: 12px;">Business Intelligence</div>
                                    </div>
                                </div>
                                <span style="background: #f3f4f6; color: #374151; padding: 4px 12px; border-radius: 12px; font-size: 11px;">Enterprise</span>
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
                                <div style="text-align: center;">
                                    <div style="font-weight: bold; color: #3b82f6;">99.9%</div>
                                    <div style="font-size: 11px; color: #6b7280;">Uptime</div>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-weight: bold; color: #059669;">500+</div>
                                    <div style="font-size: 11px; color: #6b7280;">Integrations</div>
                                </div>
                                <div style="text-align: center;">
                                    <div style="font-weight: bold; color: #8b5cf6;">SOC2</div>
                                    <div style="font-size: 11px; color: #6b7280;">Certified</div>
                                </div>
                            </div>
                            <button style="width: 100%; background: #1f2937; color: white; padding: 10px; border: none; border-radius: 8px; font-weight: 600;">Request Demo</button>
                        </div>
                    \`
                };

                content.innerHTML = previews[platform] || previews['chatgpt'];
            }

            function extractBrand(url) {
                try {
                    const domain = url.replace(/https?:\\/\\//, '').replace(/www\\./, '').split('/')[0];
                    const name = domain.split('.')[0];
                    return name.charAt(0).toUpperCase() + name.slice(1);
                } catch {
                    return 'YourBrand';
                }
            }

            function updateMetrics(platform) {
                const metrics = {
                    'chatgpt': { ctr: '2.8%', engagement: 89, relevance: '94%' },
                    'search': { ctr: '3.2%', engagement: 85, relevance: '92%' },
                    'shopping': { ctr: '4.1%', engagement: 91, relevance: '96%' },
                    'productivity': { ctr: '2.6%', engagement: 87, relevance: '90%' },
                    'creative': { ctr: '3.5%', engagement: 93, relevance: '88%' },
                    'business': { ctr: '2.4%', engagement: 84, relevance: '95%' }
                };

                const data = metrics[platform] || metrics['chatgpt'];
                
                document.getElementById('ctr').textContent = data.ctr;
                document.getElementById('engagement').textContent = data.engagement;
                document.getElementById('relevance').textContent = data.relevance;
                
                // Add animation effect
                ['ctr', 'engagement', 'relevance'].forEach(id => {
                    const el = document.getElementById(id);
                    el.style.transform = 'scale(1.2)';
                    setTimeout(() => { el.style.transform = 'scale(1)'; }, 300);
                });
            }

            // Auto-demo on page load
            setTimeout(() => {
                document.getElementById('brandUrl').value = 'https://shopify.com';
                generatePreview();
            }, 1000);
        </script>
    </body>
    </html>
  `;
};