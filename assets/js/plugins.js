// Vendor and third-party scripts

// Simple fade-in animation utility
class FadeInAnimation {
    constructor() {
        this.init();
    }
    
    init() {
        // Add CSS for fade-in animation
        const style = document.createElement('style');
        style.textContent = `
            .animate-fade-in {
                opacity: 1;
                transform: translateY(0);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize fade-in animations
new FadeInAnimation();

// Simple typing effect for hero section
class TypingEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }
        
        let typeSpeed = this.speed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500; // Pause before next text
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        new TypingEffect(typingElement, [
            'Scale Your Business',
            'Boost Productivity',
            'Drive Growth'
        ]);
    }
});

// Simple parallax effect for hero background
function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Initialize parallax on load
window.addEventListener('load', initParallax);