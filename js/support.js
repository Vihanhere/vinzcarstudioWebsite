// Support page functionality

// Initialize support page
document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    if (supportForm) {
        supportForm.addEventListener('submit', handleSupportForm);
    }
});

// Handle support form submission
function handleSupportForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        product: document.getElementById('product').value,
        serial: document.getElementById('serial').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validate form
    if (!formData.name || !formData.email || !formData.product || !formData.subject || !formData.message) {
        showNotification('Please fill in all required fields.', 'warning');
        return;
    }
    
    // Simulate form submission
    showNotification('Support request submitted successfully! We will get back to you within 24 hours.', 'success');
    
    // Reset form
    document.getElementById('supportForm').reset();
}

// FAQ functionality
function initializeFAQ() {
    // FAQ accordion is handled by Bootstrap, but we can add custom functionality here
    const faqItems = document.querySelectorAll('.accordion-button');
    
    faqItems.forEach(button => {
        button.addEventListener('click', function() {
            // Track FAQ interactions or add custom behavior
            console.log('FAQ item clicked:', this.textContent);
        });
    });
}

// Support resources
const supportResources = {
    manuals: [
        {
            product: "Thesis TH Uno",
            type: "User Manual",
            format: "PDF",
            size: "2.3 MB",
            url: "#"
        },
        {
            product: "Prima AP 4.9 bit",
            type: "Installation Guide",
            format: "PDF",
            size: "1.8 MB",
            url: "#"
        },
        {
            product: "Bit Ten D",
            type: "Software Manual",
            format: "PDF",
            size: "3.1 MB",
            url: "#"
        }
    ],
    software: [
        {
            name: "Audison DRC Software",
            version: "2.1.3",
            compatibility: "Windows 10/11, macOS 10.15+",
            size: "45 MB",
            url: "#"
        },
        {
            name: "Bit Tune Mobile App",
            version: "1.4.2",
            compatibility: "iOS 12+, Android 8+",
            size: "12 MB",
            url: "#"
        }
    ],
    firmware: [
        {
            product: "Bit Ten D",
            version: "1.2.1",
            releaseDate: "2024-03-15",
            size: "2.1 MB",
            url: "#"
        },
        {
            product: "Prima AP 8.9 bit",
            version: "1.1.8",
            releaseDate: "2024-02-28",
            size: "1.9 MB",
            url: "#"
        }
    ]
};

// Load support downloads
function loadSupportDownloads() {
    const downloadsContainer = document.getElementById('downloadsContainer');
    if (!downloadsContainer) return;
    
    let html = '';
    
    // Manuals section
    html += '<h4>User Manuals</h4>';
    html += '<div class="row mb-4">';
    supportResources.manuals.forEach(manual => {
        html += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${manual.product}</h6>
                        <p class="card-text small text-muted">${manual.type} - ${manual.format} (${manual.size})</p>
                        <a href="${manual.url}" class="btn btn-sm btn-primary">
                            <i class="fas fa-download me-1"></i>Download
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    // Software section
    html += '<h4>Software</h4>';
    html += '<div class="row mb-4">';
    supportResources.software.forEach(software => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${software.name}</h6>
                        <p class="card-text small text-muted">Version ${software.version}</p>
                        <p class="card-text small text-muted">${software.compatibility}</p>
                        <p class="card-text small text-muted">${software.size}</p>
                        <a href="${software.url}" class="btn btn-sm btn-primary">
                            <i class="fas fa-download me-1"></i>Download
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    // Firmware section
    html += '<h4>Firmware Updates</h4>';
    html += '<div class="row">';
    supportResources.firmware.forEach(firmware => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-title">${firmware.product}</h6>
                        <p class="card-text small text-muted">Version ${firmware.version}</p>
                        <p class="card-text small text-muted">Released: ${firmware.releaseDate}</p>
                        <p class="card-text small text-muted">${firmware.size}</p>
                        <a href="${firmware.url}" class="btn btn-sm btn-primary">
                            <i class="fas fa-download me-1"></i>Download
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    downloadsContainer.innerHTML = html;
}

// Warranty registration
function showWarrantyRegistration() {
    // This would typically open a modal or redirect to a registration form
    showNotification('Warranty registration form would open here.', 'info');
}

// Technical support chat (placeholder)
function startTechnicalChat() {
    showNotification('Technical support chat would start here. Please use the contact form for now.', 'info');
}

// Initialize FAQ on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeFAQ();
});