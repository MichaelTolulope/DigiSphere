// Main JavaScript file for custom functionality

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('open');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Pricing plan selection
function selectPlan(planName) {
    alert(`You selected the ${planName} plan. Redirecting to checkout...`);
    // In a real implementation, this would redirect to a payment processor
}

// Pricing toggle functionality
function togglePricing() {
    const toggle = document.getElementById('pricing-toggle');
    const toggleSlider = document.getElementById('toggle-slider');
    const monthlyLabel = document.getElementById('monthly-label');
    const annualLabel = document.getElementById('annual-label');
    const isAnnual = toggle.checked;
    
    // Toggle the checkbox state
    toggle.checked = !isAnnual;
    
    // Move the slider
    if (!isAnnual) {
        toggleSlider.style.transform = 'translateX(100%)';
        monthlyLabel.classList.remove('font-semibold');
        annualLabel.classList.add('font-semibold');
    } else {
        toggleSlider.style.transform = 'translateX(0)';
        monthlyLabel.classList.add('font-semibold');
        annualLabel.classList.remove('font-semibold');
    }
    
    // Update pricing
    document.querySelectorAll('[data-monthly]').forEach(el => {
        const price = !isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
        el.textContent = price;
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Force visibility for all sections after a delay (fallback)
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (!el.classList.contains('animate-fade-in')) {
                el.classList.add('animate-fade-in');
            }
        });
    }, 2000);
}

// Dark mode toggle functionality
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    
    // Check for saved theme preference or system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
    
    // Apply the current theme on initial load
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    
    // Update icon visibility based on current theme
    function updateIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        
        // Update desktop icon
        if (themeIcon) {
            themeIcon.classList.toggle('hidden', isDark);
            themeIcon.nextElementSibling.classList.toggle('hidden', !isDark);
        }
        
        // Update mobile icon
        if (themeIconMobile) {
            themeIconMobile.classList.toggle('hidden', isDark);
            themeIconMobile.nextElementSibling.classList.toggle('hidden', !isDark);
        }
    }
    
    // Call once to set initial state
    updateIcons();
    
    // Toggle theme function
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');
        
        // Update icons
        updateIcons();
        
        // Save preference to localStorage
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    // Add event listeners to both toggle buttons
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            updateIcons();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initDarkMode();
    
    // Initialize pricing toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        // Set initial state
        const toggleSlider = document.getElementById('toggle-slider');
        const monthlyLabel = document.getElementById('monthly-label');
        const annualLabel = document.getElementById('annual-label');
        
        // Update pricing display based on toggle state
        document.querySelectorAll('[data-monthly]').forEach(el => {
            const price = pricingToggle.checked ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
            el.textContent = price;
        });
    }
});