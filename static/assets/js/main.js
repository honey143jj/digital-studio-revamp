
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize all functionality
    initializeSlider();
    initializeNavigation();
    initializeServices();
    initializeGallery();
    initializeAnimations();
    initializeScrollEffects();
});

// Hero Image Slider
let currentSlide = 0;
let slideInterval;
let isVisible = false;

const heroData = [
    {
        title: "Family Photography",
        subtitle: "Capturing precious family moments"
    },
    {
        title: "Fashion Photography", 
        subtitle: "Professional fashion and portrait shoots"
    },
    {
        title: "Kids Photography",
        subtitle: "Creative and fun children photography"
    },
    {
        title: "Professional Portraits",
        subtitle: "Artistic portrait photography with professional lighting"
    }
];

function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    if (!slides.length) return;

    // Auto-slide functionality
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    // Manual navigation
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Indicator navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    function goToSlide(index) {
        // Hide current slide
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('opacity-0');
        indicators[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.add('bg-white/50');
        indicators[currentSlide].classList.remove('bg-white');

        // Update current slide
        currentSlide = index;

        // Show new slide
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.remove('opacity-0');
        indicators[currentSlide].classList.add('active');
        indicators[currentSlide].classList.remove('bg-white/50');
        indicators[currentSlide].classList.add('bg-white');

        // Update text content
        if (heroTitle && heroSubtitle && heroData[currentSlide]) {
            heroTitle.textContent = heroData[currentSlide].title;
            heroSubtitle.innerHTML = `${heroData[currentSlide].subtitle} - From concept to creation, we deliver exceptional digital solutions that elevate your brand.`;
        }
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    // Initialize visibility animation
    setTimeout(() => {
        isVisible = true;
        const heroContent = document.querySelector('.animate-fade-in-up');
        if (heroContent) {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }
    }, 100);
}

// Navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Services animation
let currentService = 0;
function initializeServices() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (serviceCards.length) {
        setInterval(() => {
            // Remove highlight from current service
            serviceCards[currentService].classList.remove('ring-4', 'ring-white/50', 'scale-105');
            
            // Move to next service
            currentService = (currentService + 1) % serviceCards.length;
            
            // Highlight new service
            serviceCards[currentService].classList.add('ring-4', 'ring-white/50', 'scale-105');
        }, 4000);
    }
}

// Gallery functionality
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });
}

let currentLightboxIndex = 0;
let lightboxImages = [];

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (lightbox && lightboxImg) {
        lightboxImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);
        lightboxImg.src = lightboxImages[index];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.src = lightboxImages[currentLightboxIndex];
    }
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) {
        lightboxImg.src = lightboxImages[currentLightboxIndex];
    }
}

// Animation initialization
function initializeAnimations() {
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Smooth scroll to services section
    window.scrollToServices = function() {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
}

// Contact form handling
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual implementation)
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white transform translate-x-full transition-transform duration-300 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 
        'bg-blue-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
window.addEventListener('load', () => {
    // Remove loading class if exists
    document.body.classList.remove('loading');
});

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Reinitialize components that need resize handling
    lucide.createIcons();
}, 250));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.classList.contains('active')) {
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevLightboxImage();
                break;
            case 'ArrowRight':
                nextLightboxImage();
                break;
        }
    }
});

// Handle page visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    } else {
        // Resume animations when page becomes visible
        if (typeof initializeSlider === 'function') {
            initializeSlider();
        }
    }
});
