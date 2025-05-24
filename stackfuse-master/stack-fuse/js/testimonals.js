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
    alert('You will be redirected to our quote form!');
    // Replace with actual form URL
    window.location.href = "contact.html";
});

// Animate stats counting
function animateStats() {
    const stats = document.querySelectorAll('.number');
    const speed = 200;
    
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / speed;
        
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target + (stat.getAttribute('data-count').includes('%') ? '%' : '');
        }
    });
}

// Animate testimonial cards on scroll
function animateTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const windowHeight = window.innerHeight;
    
    testimonialCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const animationPoint = windowHeight - 100;
        
        if (cardPosition < animationPoint) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });
}

// Initialize
window.addEventListener('load', () => {
    animateStats();
    animateTestimonials();
});

window.addEventListener('scroll', animateTestimonials);

// Video iframe responsive
function adjustVideoHeight() {
    const videos = document.querySelectorAll('.video-wrapper');
    videos.forEach(video => {
        const width = video.offsetWidth;
        video.style.height = (width * 0.5625) + 'px'; // 16:9 aspect ratio
    });
}

window.addEventListener('load', adjustVideoHeight);
window.addEventListener('resize', adjustVideoHeight);

// CTA Buttons
document.querySelector('.btn-outline').addEventListener('click', () => {
    window.location.href = "portfolio.html";
});

document.querySelector('.btn-primary').addEventListener('click', () => {
    window.location.href = "contact.html";
});