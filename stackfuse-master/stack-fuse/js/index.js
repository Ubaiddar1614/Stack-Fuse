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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.service-card, .section-title, .section-subtitle');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with default styles
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

document.querySelector('.section-title').style.opacity = '0';
document.querySelector('.section-title').style.transform = 'translateY(20px)';
document.querySelector('.section-title').style.transition = 'all 0.5s ease';

document.querySelector('.section-subtitle').style.opacity = '0';
document.querySelector('.section-subtitle').style.transform = 'translateY(20px)';
document.querySelector('.section-subtitle').style.transition = 'all 0.5s ease';