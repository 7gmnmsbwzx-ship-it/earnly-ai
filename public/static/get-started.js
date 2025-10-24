/**
 * Advanced Get Started Page JavaScript
 * Superior to AdMesh with enhanced UX and conversion optimization
 */

class GetStartedManager {
    constructor() {
        this.selectedAccountType = 'platform'; // Default to AI Platform
        this.revenue = 247892;
        this.init();
    }

    init() {
        this.startLiveRevenueCounter();
        this.setupFormValidation();
        this.setupPasswordStrength();
        this.setupAccountTypeToggle();
        this.setupFormAnimations();
    }

    // Animate live revenue counter
    startLiveRevenueCounter() {
        const revenueElement = document.getElementById('live-revenue');
        if (!revenueElement) return;

        setInterval(() => {
            // Simulate revenue increase
            this.revenue += Math.floor(Math.random() * 50) + 10;
            revenueElement.textContent = '$' + this.formatNumber(this.revenue);
        }, 3000);
    }

    // Format numbers with proper separators
    formatNumber(num) {
        return num.toLocaleString('en-US');
    }

    // Account type selection
    selectAccountType(type) {
        this.selectedAccountType = type;
        
        const advertiserBtn = document.getElementById('advertiser-btn');
        const platformBtn = document.getElementById('platform-btn');
        const companyLabel = document.getElementById('company-label');
        const companyInput = document.getElementById('company-input');

        // Reset button styles - base classes
        const baseClasses = 'account-type-btn w-full p-6 rounded-xl border-2 transition-all text-left group';
        const unselectedClasses = baseClasses + ' border-gray-200 hover:border-blue-500';
        const selectedClasses = baseClasses + ' border-blue-500 bg-blue-50 selected';

        advertiserBtn.className = unselectedClasses;
        platformBtn.className = unselectedClasses;

        // Update selected button
        const selectedBtn = type === 'advertiser' ? advertiserBtn : platformBtn;
        selectedBtn.className = selectedClasses;

        // Update icons for selection state
        const allIcons = document.querySelectorAll('.account-type-btn .fas.fa-check-circle, .account-type-btn .fas.fa-chevron-right');
        allIcons.forEach(icon => {
            if (icon.classList.contains('fa-check-circle')) {
                icon.className = 'fas fa-chevron-right';
            }
        });

        // Add check icon to selected
        const selectedIcon = selectedBtn.querySelector('.fa-chevron-right');
        if (selectedIcon) {
            selectedIcon.className = 'fas fa-check-circle text-blue-500';
        }

        // Update form labels and placeholders based on account type
        if (type === 'advertiser') {
            companyLabel.textContent = 'Company Name';
            if (companyInput) {
                companyInput.placeholder = 'Your company name';
            }
        } else {
            companyLabel.textContent = 'AI Platform Name';
            if (companyInput) {
                companyInput.placeholder = 'Your AI platform name';
            }
        }

        // Add visual feedback
        this.animateSelection(selectedBtn);
    }

    // Animate selection with success checkmark
    animateSelection(element) {
        const checkmark = document.createElement('div');
        checkmark.className = 'absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center success-checkmark';
        checkmark.innerHTML = '<i class="fas fa-check text-white text-xs"></i>';
        
        element.style.position = 'relative';
        element.appendChild(checkmark);
        
        setTimeout(() => {
            checkmark.remove();
        }, 2000);
    }

    // Password strength and validation
    setupPasswordStrength() {
        const passwordInput = document.querySelector('input[name="password"]');
        const lengthCheck = document.getElementById('length-check');

        if (!passwordInput) return;

        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            const isLongEnough = password.length >= 8;

            // Update length indicator
            if (isLongEnough) {
                lengthCheck.className = 'w-2 h-2 rounded-full bg-green-500';
            } else {
                lengthCheck.className = 'w-2 h-2 rounded-full bg-gray-300';
            }
        });
    }

    // Toggle password visibility
    togglePassword() {
        const passwordInput = document.querySelector('input[name="password"]');
        const toggleIcon = document.getElementById('password-toggle');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            toggleIcon.className = 'fas fa-eye';
        }
    }

    // Enhanced form validation with real-time feedback
    setupFormValidation() {
        const form = document.querySelector('form');
        if (!form) return;

        // Email validation
        const emailInput = document.querySelector('input[name="email"]');
        emailInput?.addEventListener('blur', (e) => {
            this.validateEmail(e.target);
        });

        // Website validation
        const websiteInput = document.querySelector('input[name="website"]');
        websiteInput?.addEventListener('blur', (e) => {
            this.validateWebsite(e.target);
        });

        // Company name validation
        const companyInput = document.querySelector('input[name="company"]');
        companyInput?.addEventListener('blur', (e) => {
            this.validateCompany(e.target);
        });
    }

    // Email validation with visual feedback
    validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(input.value);
        
        this.updateFieldValidation(input, isValid, isValid ? 'Valid email address' : 'Please enter a valid email');
        return isValid;
    }

    // Website validation
    validateWebsite(input) {
        const urlRegex = /^https?:\/\/.+\..+/;
        const isValid = urlRegex.test(input.value);
        
        this.updateFieldValidation(input, isValid, isValid ? 'Valid website URL' : 'Please enter a valid website URL');
        return isValid;
    }

    // Company name validation
    validateCompany(input) {
        const isValid = input.value.length >= 2;
        
        this.updateFieldValidation(input, isValid, isValid ? 'Valid company name' : 'Company name too short');
        return isValid;
    }

    // Update field validation UI
    updateFieldValidation(input, isValid, message) {
        // Remove existing validation message
        const existingMessage = input.parentNode.querySelector('.validation-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create validation message
        const messageDiv = document.createElement('div');
        messageDiv.className = `validation-message text-xs mt-1 ${isValid ? 'text-green-600' : 'text-red-600'}`;
        messageDiv.innerHTML = `<i class="fas fa-${isValid ? 'check-circle' : 'exclamation-circle'} mr-1"></i>${message}`;

        input.parentNode.appendChild(messageDiv);

        // Update input styling
        input.style.borderColor = isValid ? '#10b981' : '#ef4444';
    }

    // Form animations and micro-interactions
    setupFormAnimations() {
        const inputs = document.querySelectorAll('.form-input');
        
        inputs.forEach(input => {
            input.addEventListener('focus', (e) => {
                e.target.parentNode.style.transform = 'translateY(-2px)';
            });

            input.addEventListener('blur', (e) => {
                e.target.parentNode.style.transform = 'translateY(0)';
            });
        });
    }

    // Handle form submission
    async handleRegistration(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            accountType: this.selectedAccountType,
            email: formData.get('email'),
            company: formData.get('company'),
            website: formData.get('website'),
            password: formData.get('password'),
            terms: formData.get('terms')
        };

        // Show loading state
        const submitButton = event.target.querySelector('button[type="submit"]');
        const originalContent = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Creating Account...';
        submitButton.disabled = true;

        try {
            // Simulate API call
            await this.simulateRegistration(data);
            
            // Show success state
            this.showSuccessState();
            
            // Redirect after success
            setTimeout(() => {
                if (this.selectedAccountType === 'advertiser') {
                    window.location.href = '/for-advertisers?welcome=true';
                } else {
                    window.location.href = '/for-ai-platforms?welcome=true';
                }
            }, 2000);

        } catch (error) {
            // Show error state
            this.showErrorState(error.message);
            
            // Reset button
            submitButton.innerHTML = originalContent;
            submitButton.disabled = false;
        }
    }

    // Simulate registration API call
    async simulateRegistration(data) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Simulate random success/failure for demo
        if (Math.random() > 0.9) {
            throw new Error('Registration failed. Please try again.');
        }
        
        return { success: true, userId: 'user_' + Math.random().toString(36).substr(2, 9) };
    }

    // Show success state
    showSuccessState() {
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Account Created Successfully!';
        submitButton.className = 'w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg';
        
        // Show success animation
        this.showConfetti();
    }

    // Show error state
    showErrorState(message) {
        const form = document.querySelector('form');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>${message}`;
        
        form.insertBefore(errorDiv, form.firstChild);
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }

    // Confetti animation for success
    showConfetti() {
        // Simple confetti effect
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: 10px;
                height: 10px;
                background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)]};
                animation: confetti-fall 3s ease-out forwards;
                pointer-events: none;
                z-index: 1000;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }

        // Add confetti animation CSS
        if (!document.getElementById('confetti-styles')) {
            const style = document.createElement('style');
            style.id = 'confetti-styles';
            style.textContent = `
                @keyframes confetti-fall {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const getStartedManager = new GetStartedManager();
    
    // Make functions available globally
    window.selectAccountType = (type) => getStartedManager.selectAccountType(type);
    window.togglePassword = () => getStartedManager.togglePassword();
    window.handleRegistration = (event) => getStartedManager.handleRegistration(event);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GetStartedManager;
}