// DigiSphere Landing Page JavaScript
// Modern SaaS landing page with dark mode and interactive features

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('active');
}

// Smooth scrolling for navigation links
function smoothScroll(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you ${name}! We'll get back to you at ${email} soon.`);
    event.target.reset();
}

// Plan selection
function selectPlan(planName) {
    alert(`You selected the ${planName} plan! Redirecting to checkout...`);
    // In a real application, this would redirect to a payment processor
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
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Dark mode functionality
function initDarkMode() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Add click event listeners to theme toggle buttons
    const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]');
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
    });
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Pricing toggle functionality
function initPricingToggle() {
    const toggle = document.getElementById('pricing-toggle');
    const slider = document.getElementById('toggle-slider');
    const monthlyLabel = document.getElementById('monthly-label');
    const annualLabel = document.getElementById('annual-label');
    
    let isAnnual = false;
    
    window.togglePricing = function() {
        isAnnual = !isAnnual;
        
        // Update toggle appearance
        if (isAnnual) {
            slider.style.transform = 'translateX(28px)';
            toggle.checked = true;
            monthlyLabel.classList.add('text-gray-400');
            monthlyLabel.classList.remove('text-gray-600', 'dark:text-gray-300');
            annualLabel.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
            annualLabel.classList.remove('text-gray-600', 'dark:text-gray-300');
        } else {
            slider.style.transform = 'translateX(0)';
            toggle.checked = false;
            monthlyLabel.classList.remove('text-gray-400');
            monthlyLabel.classList.add('text-gray-600', 'dark:text-gray-300');
            annualLabel.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-semibold');
            annualLabel.classList.add('text-gray-600', 'dark:text-gray-300');
        }
        
        // Update pricing
        const priceElements = document.querySelectorAll('[data-monthly]');
        priceElements.forEach(element => {
            const monthlyPrice = element.getAttribute('data-monthly');
            const annualPrice = element.getAttribute('data-annual');
            element.textContent = isAnnual ? annualPrice : monthlyPrice;
        });
    };
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'Streamline Your Workflow',
        'Boost Team Productivity', 
        'Automate Repetitive Tasks',
        'Scale Your Business'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before next phrase
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initDarkMode();
    initPricingToggle();
    initTypingAnimation();
});

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});