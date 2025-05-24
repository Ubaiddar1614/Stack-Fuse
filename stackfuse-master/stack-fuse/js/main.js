// Initialize AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Modal functionality
const modal = document.getElementById('quoteModal');
const closeModal = document.querySelector('.close-modal');
const quoteForm = document.getElementById('quoteForm');
const instantQuoteResult = document.getElementById('instant-quote-result');

// Project type base prices and timelines
const projectPrices = {
    student: {
        small: { min: 500, max: 1000, timeline: "1-2" },
        medium: { min: 1000, max: 2000, timeline: "2-3" },
        large: { min: 2000, max: 3000, timeline: "3-4" }
    },
    business: {
        small: { min: 1000, max: 2000, timeline: "2-3" },
        medium: { min: 2000, max: 5000, timeline: "3-4" },
        large: { min: 5000, max: 10000, timeline: "4-6" }
    },
    mobile: {
        small: { min: 2000, max: 5000, timeline: "4-6" },
        medium: { min: 5000, max: 10000, timeline: "6-8" },
        large: { min: 10000, max: 20000, timeline: "8-12" }
    }
};

// Complexity factors
const complexityFactors = {
    database: 1.2,
    authentication: 1.15,
    payment: 1.25,
    realtime: 1.3,
    ai: 1.4,
    blockchain: 1.5
};

function openQuoteModal(serviceType = '') {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Pre-select service if provided
    if (serviceType) {
        const serviceSelect = document.getElementById('service');
        serviceSelect.value = serviceType;
        calculateInstantQuote(); // Calculate quote when service is pre-selected
    }
}

function closeQuoteModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetQuoteForm();
}

function resetQuoteForm() {
    quoteForm.reset();
    instantQuoteResult.style.display = 'none';
}

// Calculate instant quote based on form inputs
function calculateInstantQuote() {
    const service = document.getElementById('service').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value.toLowerCase();

    if (!service || !budget) {
        instantQuoteResult.style.display = 'none';
        return;
    }

    let priceRange = projectPrices[service][budget];
    let minPrice = priceRange.min;
    let maxPrice = priceRange.max;
    let timeline = priceRange.timeline;

    // Apply complexity factors based on project details
    let complexityMultiplier = 1;
    Object.entries(complexityFactors).forEach(([feature, factor]) => {
        if (message.includes(feature)) {
            complexityMultiplier *= factor;
        }
    });

    minPrice = Math.round(minPrice * complexityMultiplier);
    maxPrice = Math.round(maxPrice * complexityMultiplier);

    // Update the quote result display
    const minPriceElement = instantQuoteResult.querySelector('.min-price');
    const maxPriceElement = instantQuoteResult.querySelector('.max-price');
    const timelineElement = instantQuoteResult.querySelector('.timeline-value');

    minPriceElement.textContent = `$${minPrice.toLocaleString()}`;
    maxPriceElement.textContent = `$${maxPrice.toLocaleString()}`;
    timelineElement.textContent = `${timeline} weeks`;

    // Show the quote result with animation
    instantQuoteResult.style.display = 'block';
    instantQuoteResult.style.opacity = '0';
    setTimeout(() => {
        instantQuoteResult.style.opacity = '1';
    }, 100);
}

// Event listeners for quote calculation
document.getElementById('service').addEventListener('change', calculateInstantQuote);
document.getElementById('budget').addEventListener('change', calculateInstantQuote);
document.getElementById('message').addEventListener('input', debounce(calculateInstantQuote, 500));

closeModal.addEventListener('click', closeQuoteModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeQuoteModal();
    }
});

// Handle form submission
quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating Quote...';
    submitButton.disabled = true;
    
    try {
        // Simulate API call (replace with actual API endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message with quote details
        const quoteDetails = instantQuoteResult.innerHTML;
        const successMessage = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <h3>Quote Generated Successfully!</h3>
                <p>We'll send a detailed proposal to your email within 24 hours.</p>
                ${quoteDetails}
            </div>
        `;
        
        // Replace form with success message
        quoteForm.innerHTML = successMessage;
        
        // Auto close after 5 seconds
        setTimeout(closeQuoteModal, 5000);
    } catch (error) {
        alert('Sorry, there was an error. Please try again.');
    } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
});

// Testimonials Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            testimonialCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
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
});

// Contact form file upload preview
const fileInput = document.getElementById('contact-file');
if (fileInput) {
    fileInput.addEventListener('change', function() {
        const fileInfo = this.parentElement.querySelector('.file-info');
        if (this.files.length > 0) {
            const fileList = Array.from(this.files)
                .map(file => `${file.name} (${formatFileSize(file.size)})`)
                .join(', ');
            fileInfo.textContent = `Selected files: ${fileList}`;
        } else {
            fileInfo.textContent = 'Max file size: 10MB';
        }
    });
}

// Utility functions
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Page transition animations
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-loaded');
});

// Handle form validation with better UX
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim()) {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
}); 