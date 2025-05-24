// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Quote Button
document.getElementById('quote-btn').addEventListener('click', () => {
    alert('Quote request feature will be implemented soon!');
});

// Service Category Filtering
const tabBtns = document.querySelectorAll('.tab-btn');
const serviceCards = document.querySelectorAll('.service-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active tab
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.tab;
        
        // Filter services
        serviceCards.forEach(card => {
            if (filter === 'all' || card.dataset.service === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animated Circles Interaction
const circles = document.querySelectorAll('.circle');
const mainCircle = document.querySelector('.circle-main');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const service = circle.dataset.service;
        
        // Filter services when circle is clicked
        tabBtns.forEach(btn => {
            if (btn.dataset.tab === service) {
                btn.click();
            }
        });
        
        // Animate main circle
        mainCircle.innerHTML = circle.innerHTML;
        mainCircle.style.background = window.getComputedStyle(circle).background;
        
        // Pulse animation
        mainCircle.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            mainCircle.style.animation = '';
        }, 500);
    });
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Pause on hover
const slider = document.querySelector('.testimonial-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

slider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
    });
});

// Service Card Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .process-step, .faq-item');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements with default styles
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

document.querySelectorAll('.process-step').forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'all 0.5s ease';
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
});

// Event Listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Explore Button Smooth Scroll
document.getElementById('explore-btn').addEventListener('click', () => {
    document.querySelector('.service-categories').scrollIntoView({
        behavior: 'smooth'
    });
});

// Consultation Button
document.getElementById('consult-btn').addEventListener('click', () => {
    alert('Free consultation feature will be implemented soon!');
});

// Service Card Buttons
document.querySelectorAll('.btn-service').forEach(btn => {
    btn.addEventListener('click', function() {
        const serviceTitle = this.closest('.service-card').querySelector('h3').textContent;
        alert(`You've selected: ${serviceTitle}\nThis feature will be implemented soon!`);
    });
});