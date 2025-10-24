// Earnly - AI-Native Monetization Platform
// Where Creators & Brands Link Up Through AI

// Global state
let currentUser = null;
let currentView = 'auth';
let activeChart = null;

// Utility functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Make functions globally accessible
window.showSignInForm = showSignInForm;
window.showSignUpForm = showSignUpForm;
window.showAuthForm = showAuthForm;
window.handleSignIn = handleSignIn;
window.handleSignUp = handleSignUp;
window.signOut = signOut;
window.toggleProfileMenu = toggleProfileMenu;
window.showDashboard = showDashboard;
window.showAIIntegrations = showAIIntegrations;
window.showAdvertiserPanel = showAdvertiserPanel;
window.showAnalytics = showAnalytics;
window.createProduct = createProduct;
window.registerAIPlatform = registerAIPlatform;
window.testAIQuery = testAIQuery;

// Toast notification system
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast px-6 py-3 rounded-lg shadow-lg text-white mb-2 max-w-sm transition-all duration-300 transform translate-x-full opacity-0 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' :
    'bg-blue-500'
  }`;
  toast.innerHTML = `
    <div class="flex items-center">
      <i class="fas ${
        type === 'success' ? 'fa-check-circle' :
        type === 'error' ? 'fa-exclamation-circle' :
        type === 'warning' ? 'fa-exclamation-triangle' :
        'fa-info-circle'
      } mr-2"></i>
      <span>${message}</span>
    </div>
  `;
  
  $('#notifications').appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-x-full', 'opacity-0');
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// Authentication functions
function showAuthForm() {
  currentView = 'auth';
  $('#app').innerHTML = `
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-robot text-white text-2xl"></i>
          </div>
          <h1 class="text-3xl font-bold text-gray-800">Earnly</h1>
          <p class="text-gray-600">AI-Native Monetization Platform</p>
        </div>
        
        <div id="auth-forms"></div>
        
        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-purple-600">AI</div>
              <div class="text-xs text-gray-500">Driven</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-600">∞</div>
              <div class="text-xs text-gray-500">Scalable</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-indigo-600">$</div>
              <div class="text-xs text-gray-500">Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  showSignInForm();
}

function showSignInForm() {
  $('#auth-forms').innerHTML = `
    <form onsubmit="handleSignIn(event)" class="space-y-4">
      <div>
        <input type="email" id="signin-email" placeholder="Email" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <div>
        <input type="password" id="signin-password" placeholder="Password" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold">
        <i class="fas fa-sign-in-alt mr-2"></i>Sign In
      </button>
    </form>
    <div class="text-center mt-4">
      <span class="text-gray-600">Don't have an account? </span>
      <button onclick="showSignUpForm()" class="text-purple-600 hover:text-purple-700 font-semibold">Sign Up</button>
    </div>
  `;
}

function showSignUpForm() {
  $('#auth-forms').innerHTML = `
    <form onsubmit="handleSignUp(event)" class="space-y-4">
      <div>
        <input type="text" id="signup-name" placeholder="Full Name" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <div>
        <input type="text" id="signup-username" placeholder="Username" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <div>
        <input type="email" id="signup-email" placeholder="Email" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <div>
        <input type="password" id="signup-password" placeholder="Password" required 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
      </div>
      <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold">
        <i class="fas fa-user-plus mr-2"></i>Create Account
      </button>
    </form>
    <div class="text-center mt-4">
      <span class="text-gray-600">Already have an account? </span>
      <button onclick="showSignInForm()" class="text-purple-600 hover:text-purple-700 font-semibold">Sign In</button>
    </div>
  `;
}

async function handleSignIn(e) {
  e.preventDefault();
  const email = $('#signin-email').value;
  const password = $('#signin-password').value;
  
  try {
    const response = await axios.post('/api/auth/signin', { email, password });
    if (response.data.success) {
      currentUser = response.data.user;
      showDashboard();
      showToast('Welcome back to Earnly!', 'success');
    }
  } catch (error) {
    showToast(error.response?.data?.error || 'Sign in failed', 'error');
  }
}

async function handleSignUp(e) {
  e.preventDefault();
  const name = $('#signup-name').value;
  const username = $('#signup-username').value;
  const email = $('#signup-email').value;
  const password = $('#signup-password').value;
  
  try {
    const response = await axios.post('/api/auth/signup', { email, password, name, username });
    if (response.data.success) {
      showToast('Account created! Please sign in.', 'success');
      showSignInForm();
    }
  } catch (error) {
    showToast(error.response?.data?.error || 'Sign up failed', 'error');
  }
}

// Dashboard and main app
function showDashboard() {
  currentView = 'dashboard';
  $('#app').innerHTML = `
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation -->
      <nav class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <i class="fas fa-robot text-white text-sm"></i>
                </div>
                <h1 class="text-xl font-bold text-gray-900">Earnly</h1>
              </div>
              
              <div class="ml-10 flex space-x-8">
                <button onclick="showDashboard()" class="text-purple-600 hover:text-purple-700 px-3 py-2 text-sm font-medium border-b-2 border-purple-600">
                  <i class="fas fa-tachometer-alt mr-1"></i>Dashboard
                </button>
                <button onclick="showAIIntegrations()" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  <i class="fas fa-robot mr-1"></i>AI Platforms
                </button>
                <button onclick="showAdvertiserPanel()" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  <i class="fas fa-bullhorn mr-1"></i>Advertise
                </button>
                <button onclick="showAnalytics()" class="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                  <i class="fas fa-chart-line mr-1"></i>Analytics
                </button>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="relative">
                <button onclick="toggleProfileMenu()" class="flex items-center text-sm rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <div class="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    ${currentUser?.name?.charAt(0) || 'U'}
                  </div>
                  <span class="ml-2 text-gray-700">${currentUser?.name || 'User'}</span>
                  <i class="fas fa-chevron-down ml-2 text-gray-400"></i>
                </button>
                <div id="profile-menu" class="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button onclick="signOut()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                    <i class="fas fa-sign-out-alt mr-2"></i>Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div id="main-content">
          ${getDashboardContent()}
        </div>
      </main>
      
      <!-- Notifications -->
      <div id="notifications" class="fixed top-4 right-4 z-50 space-y-2"></div>
    </div>
  `;
  
  loadDashboardData();
}

function getDashboardContent() {
  return `
    <div class="px-4 py-6 sm:px-0">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">AI-Native Revenue Dashboard</h2>
        <p class="text-gray-600">Connect AI platforms, manage campaigns, and track conversions in real-time</p>
      </div>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="fas fa-robot text-purple-600 text-xl"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">AI Platforms</dt>
                  <dd class="text-lg font-medium text-gray-900" id="stat-platforms">-</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="fas fa-comments text-blue-600 text-xl"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">AI Conversations</dt>
                  <dd class="text-lg font-medium text-gray-900" id="stat-conversations">-</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="fas fa-lightbulb text-green-600 text-xl"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Recommendations</dt>
                  <dd class="text-lg font-medium text-gray-900" id="stat-recommendations">-</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="fas fa-dollar-sign text-indigo-600 text-xl"></i>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">Revenue</dt>
                  <dd class="text-lg font-medium text-gray-900" id="stat-revenue">$0</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Recent Activity -->
      <div class="bg-white shadow overflow-hidden sm:rounded-md mb-8">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Recent AI Interactions</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Latest conversations and recommendations from connected AI platforms</p>
        </div>
        <ul class="divide-y divide-gray-200" id="recent-activity">
          <li class="px-4 py-4 text-center text-gray-500">
            <i class="fas fa-robot text-4xl mb-2 opacity-50"></i>
            <p>No AI interactions yet. Connect your first AI platform to get started!</p>
          </li>
        </ul>
      </div>
      
      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 class="text-lg font-semibold mb-2">Connect AI Platform</h3>
          <p class="text-purple-100 mb-4">Integrate ChatGPT, Claude, or any AI assistant to start monetizing conversations</p>
          <button onclick="showAIIntegrations()" class="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <i class="fas fa-plus mr-2"></i>Add Integration
          </button>
        </div>
        
        <div class="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
          <h3 class="text-lg font-semibold mb-2">Launch Campaign</h3>
          <p class="text-green-100 mb-4">Create targeted ad campaigns that appear contextually in AI conversations</p>
          <button onclick="showAdvertiserPanel()" class="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            <i class="fas fa-rocket mr-2"></i>Start Campaign
          </button>
        </div>
      </div>
    </div>
  `;
}

// AI Integrations Panel
function showAIIntegrations() {
  currentView = 'ai-integrations';
  $('#main-content').innerHTML = `
    <div class="px-4 py-6 sm:px-0">
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">AI Platform Integrations</h2>
          <p class="text-gray-600">Connect AI assistants to monetize conversations with contextual product recommendations</p>
        </div>
        <button onclick="registerAIPlatform()" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          <i class="fas fa-plus mr-2"></i>Add Platform
        </button>
      </div>
      
      <!-- Integration Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <i class="fas fa-plus text-purple-600 text-xl"></i>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Add New Platform</h3>
          <p class="text-gray-600 mb-4">Connect ChatGPT, Claude, Gemini, or any AI assistant</p>
          <button onclick="registerAIPlatform()" class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm">
            Get Started
          </button>
        </div>
      </div>
      
      <!-- Connected Platforms -->
      <div id="connected-platforms">
        <div class="text-center py-8">
          <i class="fas fa-robot text-gray-400 text-4xl mb-4"></i>
          <p class="text-gray-500">No AI platforms connected yet. Add your first integration to start earning!</p>
        </div>
      </div>
      
      <!-- API Testing -->
      <div class="bg-white rounded-lg shadow-md p-6 mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Test AI Query API</h3>
        <p class="text-gray-600 mb-4">Test how Earnly matches products to AI conversations</p>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">User Query</label>
            <input type="text" id="test-query" placeholder="I'm looking for a new laptop for gaming" 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">User Intent</label>
            <select id="test-intent" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
              <option value="shopping">Shopping</option>
              <option value="comparison">Comparison</option>
              <option value="research">Research</option>
              <option value="price">Price Inquiry</option>
            </select>
          </div>
          
          <button onclick="testAIQuery()" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <i class="fas fa-flask mr-2"></i>Test Query
          </button>
        </div>
        
        <div id="test-results" class="mt-4 hidden">
          <h4 class="font-semibold text-gray-900 mb-2">Recommended Products:</h4>
          <div id="test-recommendations"></div>
        </div>
      </div>
    </div>
  `;
  
  loadConnectedPlatforms();
}

// Advertiser Panel
function showAdvertiserPanel() {
  currentView = 'advertiser';
  $('#main-content').innerHTML = `
    <div class="px-4 py-6 sm:px-0">
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Advertiser Dashboard</h2>
          <p class="text-gray-600">Create AI-native campaigns that appear contextually in conversations</p>
        </div>
        <button onclick="createProduct()" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <i class="fas fa-plus mr-2"></i>Create Product
        </button>
      </div>
      
      <!-- Campaign Performance -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-eye text-blue-600"></i>
            </div>
            <div>
              <p class="text-sm text-gray-600">Impressions</p>
              <p class="text-2xl font-bold text-gray-900" id="impressions-count">0</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-mouse-pointer text-green-600"></i>
            </div>
            <div>
              <p class="text-sm text-gray-600">Clicks</p>
              <p class="text-2xl font-bold text-gray-900" id="clicks-count">0</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <i class="fas fa-shopping-cart text-purple-600"></i>
            </div>
            <div>
              <p class="text-sm text-gray-600">Conversions</p>
              <p class="text-2xl font-bold text-gray-900" id="conversions-count">0</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Products List -->
      <div class="bg-white rounded-lg shadow-md">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-medium text-gray-900">Your Products</h3>
        </div>
        <div id="products-list" class="divide-y divide-gray-200">
          <div class="p-6 text-center text-gray-500">
            <i class="fas fa-box-open text-4xl mb-2 opacity-50"></i>
            <p>No products yet. Create your first product to start advertising!</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  loadAdvertiserData();
}

// Analytics Panel
function showAnalytics() {
  currentView = 'analytics';
  $('#main-content').innerHTML = `
    <div class="px-4 py-6 sm:px-0">
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Revenue Analytics</h2>
        <p class="text-gray-600">Track AI conversation performance and revenue attribution</p>
      </div>
      
      <!-- Revenue Chart -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Daily Revenue</h3>
        <canvas id="revenue-chart" width="400" height="200"></canvas>
      </div>
      
      <!-- Performance Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Platform Performance</h3>
          <div id="platform-metrics">
            <p class="text-gray-500 text-center py-8">No data available</p>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Top Products</h3>
          <div id="top-products">
            <p class="text-gray-500 text-center py-8">No data available</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  loadAnalyticsData();
}

// Modal functions
async function registerAIPlatform() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Register AI Platform</h3>
      <form onsubmit="handlePlatformRegistration(event)" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
          <input type="text" id="platform-name" required 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Platform Type</label>
          <select id="platform-type" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
            <option value="chatbot">Chatbot</option>
            <option value="assistant">AI Assistant</option>
            <option value="voice">Voice AI</option>
            <option value="search">Search AI</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Webhook URL</label>
          <input type="url" id="webhook-url" 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Expected Monthly Queries</label>
          <input type="number" id="monthly-queries" value="10000"
                 class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
        </div>
        
        <div class="flex justify-end space-x-3 pt-4">
          <button type="button" onclick="this.closest('.fixed').remove()" 
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Register Platform
          </button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

async function createProduct() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Create Product Campaign</h3>
      <form onsubmit="handleProductCreation(event)" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product Title</label>
            <input type="text" id="product-title" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Brand</label>
            <input type="text" id="product-brand" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea id="product-description" rows="3" required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"></textarea>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select id="product-category" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="health">Health</option>
              <option value="home">Home</option>
              <option value="beauty">Beauty</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
            <input type="number" id="product-price" step="0.01" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)</label>
            <input type="number" id="commission-rate" step="0.1" min="1" max="50" value="5" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Keywords (comma-separated)</label>
          <input type="text" id="product-keywords" placeholder="gaming, laptop, performance, RGB" required 
                 class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Product URL</label>
            <input type="url" id="product-url" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input type="url" id="image-url" 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Daily Budget ($)</label>
            <input type="number" id="daily-budget" step="0.01" min="10" value="50" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Total Budget ($)</label>
            <input type="number" id="total-budget" step="0.01" min="100" value="1000" required 
                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500">
          </div>
        </div>
        
        <div class="flex justify-end space-x-3 pt-4 border-t">
          <button type="button" onclick="this.closest('.fixed').remove()" 
                  class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Create Campaign
          </button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

// Event handlers
window.handlePlatformRegistration = async function(e) {
  e.preventDefault();
  const formData = {
    name: $('#platform-name').value,
    platform_type: $('#platform-type').value,
    webhook_url: $('#webhook-url').value,
    monthly_queries: parseInt($('#monthly-queries').value)
  };
  
  try {
    const response = await axios.post('/api/ai/platforms/register', formData);
    if (response.data.success) {
      showToast('AI Platform registered successfully!', 'success');
      e.target.closest('.fixed').remove();
      if (currentView === 'ai-integrations') {
        loadConnectedPlatforms();
      }
    }
  } catch (error) {
    showToast(error.response?.data?.error || 'Failed to register platform', 'error');
  }
};

window.handleProductCreation = async function(e) {
  e.preventDefault();
  const formData = {
    advertiser_id: currentUser.id,
    title: $('#product-title').value,
    description: $('#product-description').value,
    category: $('#product-category').value,
    subcategory: $('#product-category').value,
    price: parseFloat($('#product-price').value),
    product_url: $('#product-url').value,
    image_url: $('#image-url').value,
    brand: $('#product-brand').value,
    keywords: $('#product-keywords').value,
    target_audience: 'general',
    commission_rate: parseFloat($('#commission-rate').value),
    cpc_rate: 1.0,
    budget_daily: parseFloat($('#daily-budget').value),
    budget_total: parseFloat($('#total-budget').value)
  };
  
  try {
    const response = await axios.post('/api/advertiser/products', formData);
    if (response.data.success) {
      showToast('Product campaign created successfully!', 'success');
      e.target.closest('.fixed').remove();
      if (currentView === 'advertiser') {
        loadAdvertiserData();
      }
    }
  } catch (error) {
    showToast(error.response?.data?.error || 'Failed to create product', 'error');
  }
};

// Data loading functions
async function loadDashboardData() {
  try {
    // Load platform stats would go here
    // For now, show placeholder data
    $('#stat-platforms').textContent = '0';
    $('#stat-conversations').textContent = '0';  
    $('#stat-recommendations').textContent = '0';
    $('#stat-revenue').textContent = '$0';
  } catch (error) {
    console.error('Failed to load dashboard data:', error);
  }
}

async function loadConnectedPlatforms() {
  try {
    const response = await axios.get('/api/ai/platforms');
    const platforms = response.data;
    
    if (platforms.length === 0) return;
    
    const platformsHtml = platforms.map(platform => `
      <div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <i class="fas fa-robot text-purple-600"></i>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">${platform.name}</h3>
              <p class="text-sm text-gray-600">${platform.platform_type}</p>
            </div>
          </div>
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
        </div>
        
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-gray-600">Monthly Queries:</span>
            <span class="font-medium text-gray-900">${platform.monthly_queries.toLocaleString()}</span>
          </div>
          <div>
            <span class="text-gray-600">Conversion Rate:</span>
            <span class="font-medium text-gray-900">${platform.conversion_rate}%</span>
          </div>
        </div>
      </div>
    `).join('');
    
    $('#connected-platforms').innerHTML = platformsHtml;
  } catch (error) {
    console.error('Failed to load platforms:', error);
  }
}

async function loadAdvertiserData() {
  try {
    const response = await axios.get(`/api/advertiser/${currentUser.id}/products`);
    const products = response.data;
    
    if (products.length === 0) return;
    
    const productsHtml = products.map(product => `
      <div class="p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            ${product.image_url ? `<img src="${product.image_url}" alt="${product.title}" class="w-16 h-16 object-cover rounded-lg mr-4">` : 
              `<div class="w-16 h-16 bg-gray-200 rounded-lg mr-4 flex items-center justify-center">
                <i class="fas fa-box text-gray-400"></i>
              </div>`}
            <div>
              <h3 class="text-lg font-semibold text-gray-900">${product.title}</h3>
              <p class="text-sm text-gray-600">${product.brand} • $${product.price}</p>
            </div>
          </div>
          
          <div class="text-right">
            <div class="text-sm text-gray-600">Revenue</div>
            <div class="text-lg font-semibold text-green-600">$${product.total_revenue || 0}</div>
          </div>
        </div>
        
        <div class="mt-4 grid grid-cols-3 gap-4 text-sm">
          <div>
            <span class="text-gray-600">Recommendations:</span>
            <span class="font-medium text-gray-900">${product.recommendation_count || 0}</span>
          </div>
          <div>
            <span class="text-gray-600">Commission:</span>
            <span class="font-medium text-gray-900">${product.commission_rate}%</span>
          </div>
          <div>
            <span class="text-gray-600">Daily Budget:</span>
            <span class="font-medium text-gray-900">$${product.budget_daily}</span>
          </div>
        </div>
      </div>
    `).join('');
    
    $('#products-list').innerHTML = productsHtml;
  } catch (error) {
    console.error('Failed to load advertiser data:', error);
  }
}

async function loadAnalyticsData() {
  try {
    const response = await axios.get(`/api/analytics/advertiser/${currentUser.id}/revenue`);
    const revenueData = response.data;
    
    if (revenueData.length === 0) return;
    
    // Create revenue chart
    const ctx = $('#revenue-chart').getContext('2d');
    if (activeChart) {
      activeChart.destroy();
    }
    
    activeChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: revenueData.map(d => d.date),
        datasets: [{
          label: 'Daily Revenue',
          data: revenueData.map(d => d.daily_revenue),
          borderColor: 'rgb(147, 51, 234)',
          backgroundColor: 'rgba(147, 51, 234, 0.1)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '$' + value;
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Failed to load analytics data:', error);
  }
}

async function testAIQuery() {
  const query = $('#test-query').value;
  const intent = $('#test-intent').value;
  
  if (!query) {
    showToast('Please enter a query to test', 'warning');
    return;
  }
  
  try {
    const response = await axios.post('/api/ai/query', {
      user_query: query,
      user_intent: intent,
      conversation_context: 'Testing AI query functionality',
      conversation_id: 'test_' + Date.now()
    }, {
      headers: {
        'Authorization': 'Bearer test_api_key'
      }
    });
    
    const recommendations = response.data.recommendations;
    
    if (recommendations && recommendations.length > 0) {
      const resultsHtml = recommendations.map(rec => `
        <div class="border border-gray-200 rounded-lg p-4 mb-3">
          <div class="flex items-start">
            ${rec.product.image_url ? 
              `<img src="${rec.product.image_url}" alt="${rec.product.title}" class="w-16 h-16 object-cover rounded-lg mr-3">` :
              `<div class="w-16 h-16 bg-gray-200 rounded-lg mr-3 flex items-center justify-center">
                <i class="fas fa-box text-gray-400"></i>
              </div>`
            }
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900">${rec.product.title}</h4>
              <p class="text-sm text-gray-600 mb-2">${rec.product.brand} • $${rec.product.price}</p>
              <p class="text-xs text-gray-500">${rec.recommendation_reason || 'Contextually relevant product'}</p>
              <div class="mt-2 text-xs">
                <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Score: ${rec.matching_score || 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
      
      $('#test-recommendations').innerHTML = resultsHtml;
      $('#test-results').classList.remove('hidden');
      showToast('AI query processed successfully!', 'success');
    } else {
      $('#test-results').classList.add('hidden');
      showToast('No product matches found for this query', 'warning');
    }
  } catch (error) {
    showToast(error.response?.data?.error || 'AI query test failed', 'error');
    console.error('AI query test failed:', error);
  }
}

// Utility functions
function toggleProfileMenu() {
  const menu = $('#profile-menu');
  menu.classList.toggle('hidden');
}

function signOut() {
  currentUser = null;
  showAuthForm();
  showToast('Signed out successfully', 'success');
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  // Add notifications container
  document.body.insertAdjacentHTML('beforeend', '<div id="notifications" class="fixed top-4 right-4 z-50 space-y-2"></div>');
  
  // Start with auth form
  showAuthForm();
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#profile-menu') && !e.target.closest('button[onclick="toggleProfileMenu()"]')) {
      const menu = $('#profile-menu');
      if (menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
      }
    }
  });
});