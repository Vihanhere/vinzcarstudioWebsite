// Contact page functionality

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Handle contact form submission
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        country: document.getElementById('country').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked
    };
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.subject || !formData.message) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(formData.email)) {
        showNotification('Please enter a valid email address.', 'warning');
        return;
    }
    
    // Simulate form submission
    submitContactForm(formData);
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Submit contact form
function submitContactForm(formData) {
    // Show loading state
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Handle newsletter subscription
        if (formData.newsletter) {
            showNotification('You have been subscribed to our newsletter.', 'info');
        }
    }, 2000);
}

// Office locations data
const officeLocations = [
    {
        name: "Headquarters",
        address: "Via dell'Industria 15, 41126 Modena, Italy",
        phone: "+39 059 123 4567",
        email: "info@audison.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM CET"
    },
    {
        name: "North America Office",
        address: "123 Audio Street, Los Angeles, CA 90210, USA",
        phone: "+1 (555) 123-4567",
        email: "usa@audison.com",
        hours: "Mon-Fri: 9:00 AM - 5:00 PM PST"
    },
    {
        name: "Asia Pacific Office",
        address: "456 Sound Avenue, Tokyo 100-0001, Japan",
        phone: "+81 3 1234 5678",
        email: "asia@audison.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM JST"
    }
];

// Load office locations
function loadOfficeLocations() {
    const locationsContainer = document.getElementById('officeLocations');
    if (!locationsContainer) return;
    
    const html = officeLocations.map(office => `
        <div class="col-lg-4 mb-4">
            <div class="card office-card h-100">
                <div class="card-body">
                    <h5 class="card-title">${office.name}</h5>
                    <div class="office-info">
                        <p class="mb-2">
                            <i class="fas fa-map-marker-alt text-primary me-2"></i>
                            ${office.address}
                        </p>
                        <p class="mb-2">
                            <i class="fas fa-phone text-primary me-2"></i>
                            <a href="tel:${office.phone}">${office.phone}</a>
                        </p>
                        <p class="mb-2">
                            <i class="fas fa-envelope text-primary me-2"></i>
                            <a href="mailto:${office.email}">${office.email}</a>
                        </p>
                        <p class="mb-0">
                            <i class="fas fa-clock text-primary me-2"></i>
                            ${office.hours}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    locationsContainer.innerHTML = html;
}

// Social media links
const socialMediaLinks = {
    facebook: "https://facebook.com/audison",
    instagram: "https://instagram.com/audison",
    youtube: "https://youtube.com/audison",
    twitter: "https://twitter.com/audison",
    linkedin: "https://linkedin.com/company/audison"
};

// Initialize social media links
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        const platform = link.querySelector('i').classList[1].split('-')[1]; // Extract platform from icon class
        if (socialMediaLinks[platform]) {
            link.href = socialMediaLinks[platform];
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
}

// Newsletter subscription
function subscribeToNewsletter(email) {
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'warning');
        return;
    }
    
    // Simulate newsletter subscription
    showNotification('Successfully subscribed to our newsletter!', 'success');
}

// Contact methods
const contactMethods = [
    {
        icon: 'fas fa-phone',
        title: 'Phone Support',
        description: 'Speak directly with our support team',
        action: 'Call +39 059 123 4567',
        link: 'tel:+390591234567'
    },
    {
        icon: 'fas fa-envelope',
        title: 'Email Support',
        description: 'Send us a detailed message',
        action: 'Email info@audison.com',
        link: 'mailto:info@audison.com'
    },
    {
        icon: 'fas fa-comments',
        title: 'Live Chat',
        description: 'Chat with our support team',
        action: 'Start Chat',
        link: '#'
    },
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Visit Us',
        description: 'Come to our headquarters',
        action: 'Get Directions',
        link: 'https://maps.google.com'
    }
];

// Load contact methods
function loadContactMethods() {
    const methodsContainer = document.getElementById('contactMethods');
    if (!methodsContainer) return;
    
    const html = contactMethods.map(method => `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card contact-method-card h-100 text-center">
                <div class="card-body">
                    <i class="${method.icon} fa-3x text-primary mb-3"></i>
                    <h5 class="card-title">${method.title}</h5>
                    <p class="card-text">${method.description}</p>
                    <a href="${method.link}" class="btn btn-primary">${method.action}</a>
                </div>
            </div>
        </div>
    `).join('');
    
    methodsContainer.innerHTML = html;
}

// Initialize contact page features
document.addEventListener('DOMContentLoaded', function() {
    loadOfficeLocations();
    initializeSocialLinks();
    loadContactMethods();
});