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

// Team Section Animation
const teamCards = document.querySelectorAll('.team-card');

function animateTeamCards() {
    teamCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize team cards with default styles
teamCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Values Animation
const valueCards = document.querySelectorAll('.value-card');

function animateValues() {
    valueCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize value cards with default styles
valueCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Scroll Animations
function animateOnScroll() {
    const windowHeight = window.innerHeight;
    
    // Team cards
    const teamSection = document.querySelector('.meet-team');
    if (teamSection.getBoundingClientRect().top < windowHeight - 100) {
        animateTeamCards();
    }
    
    // Values
    const valuesSection = document.querySelector('.our-values');
    if (valuesSection.getBoundingClientRect().top < windowHeight - 100) {
        animateValues();
    }
}

// Event Listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Meet Team Button
document.getElementById('meet-team-btn').addEventListener('click', () => {
    document.querySelector('.meet-team').scrollIntoView({
        behavior: 'smooth'
    });
});

// Our Story Button
document.getElementById('our-story-btn').addEventListener('click', () => {
    document.querySelector('.our-story').scrollIntoView({
        behavior: 'smooth'
    });
});

// Work With Us Button
document.querySelector('.team-cta .btn').addEventListener('click', () => {
    window.location.href = 'contact.html';
});