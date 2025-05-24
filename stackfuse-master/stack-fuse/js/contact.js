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
    window.location.href = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
});

// Form iframe responsive height
function adjustIframeHeight() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        const width = iframe.offsetWidth;
        iframe.style.height = (width * 1.5) + 'px'; // Adjust ratio as needed
    }
}

// Initial adjustment
window.addEventListener('load', adjustIframeHeight);

// Adjust on resize
window.addEventListener('resize', adjustIframeHeight);