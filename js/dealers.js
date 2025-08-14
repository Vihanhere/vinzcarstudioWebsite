// Dealer locator functionality

// Sample dealer data
const dealers = [
    {
        id: 1,
        name: "Premium Audio Solutions",
        type: "premium",
        address: "123 Main Street, New York, NY 10001",
        phone: "+1 (555) 123-4567",
        email: "info@premiumaudio.com",
        website: "www.premiumaudio.com",
        country: "us",
        city: "New York",
        services: ["Installation", "Consultation", "Repair"]
    },
    {
        id: 2,
        name: "Car Audio Experts",
        type: "authorized",
        address: "456 Oak Avenue, Los Angeles, CA 90210",
        phone: "+1 (555) 987-6543",
        email: "contact@caraudioexperts.com",
        website: "www.caraudioexperts.com",
        country: "us",
        city: "Los Angeles",
        services: ["Installation", "Consultation"]
    },
    {
        id: 3,
        name: "Sound Specialists",
        type: "installer",
        address: "789 Pine Road, Chicago, IL 60601",
        phone: "+1 (555) 456-7890",
        email: "info@soundspecialists.com",
        website: "www.soundspecialists.com",
        country: "us",
        city: "Chicago",
        services: ["Installation", "Repair", "Tuning"]
    },
    {
        id: 4,
        name: "Audio Excellence Ltd",
        type: "premium",
        address: "321 High Street, London, UK SW1A 1AA",
        phone: "+44 20 7123 4567",
        email: "info@audioexcellence.co.uk",
        website: "www.audioexcellence.co.uk",
        country: "uk",
        city: "London",
        services: ["Installation", "Consultation", "Repair", "Tuning"]
    },
    {
        id: 5,
        name: "Klang Meister",
        type: "authorized",
        address: "Hauptstraße 123, 10115 Berlin, Germany",
        phone: "+49 30 12345678",
        email: "info@klangmeister.de",
        website: "www.klangmeister.de",
        country: "de",
        city: "Berlin",
        services: ["Installation", "Consultation"]
    },
    {
        id: 6,
        name: "Audio Perfection",
        type: "premium",
        address: "Via Roma 456, 20121 Milano, Italy",
        phone: "+39 02 1234567",
        email: "info@audioperfection.it",
        website: "www.audioperfection.it",
        country: "it",
        city: "Milano",
        services: ["Installation", "Consultation", "Repair", "Tuning"]
    }
];

// Initialize dealer search
document.addEventListener('DOMContentLoaded', function() {
    const dealerSearchForm = document.getElementById('dealerSearchForm');
    if (dealerSearchForm) {
        dealerSearchForm.addEventListener('submit', handleDealerSearch);
    }
});

// Handle dealer search form submission
function handleDealerSearch(event) {
    event.preventDefault();
    
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const radius = document.getElementById('radius').value;
    const dealerType = document.getElementById('dealerType').value;
    
    if (!country || !city) {
        showNotification('Please select a country and enter a city or ZIP code.', 'warning');
        return;
    }
    
    // Filter dealers based on search criteria
    let filteredDealers = dealers.filter(dealer => {
        let matches = true;
        
        if (country && dealer.country !== country) {
            matches = false;
        }
        
        if (city && !dealer.city.toLowerCase().includes(city.toLowerCase())) {
            matches = false;
        }
        
        if (dealerType && dealer.type !== dealerType) {
            matches = false;
        }
        
        return matches;
    });
    
    displayDealerResults(filteredDealers);
}

// Display dealer search results
function displayDealerResults(dealers) {
    const searchResults = document.getElementById('searchResults');
    const dealerList = document.getElementById('dealerList');
    
    if (!searchResults || !dealerList) return;
    
    if (dealers.length === 0) {
        dealerList.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5>No dealers found</h5>
                <p class="text-muted">Try adjusting your search criteria or expanding your search radius.</p>
            </div>
        `;
    } else {
        dealerList.innerHTML = dealers.map(dealer => createDealerCard(dealer)).join('');
    }
    
    searchResults.style.display = 'block';
    
    // Scroll to results
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

// Create dealer card HTML
function createDealerCard(dealer) {
    const typeLabels = {
        'premium': 'Premium Dealer',
        'authorized': 'Authorized Dealer',
        'installer': 'Installation Specialist'
    };
    
    const typeBadges = {
        'premium': 'bg-primary',
        'authorized': 'bg-success',
        'installer': 'bg-info'
    };
    
    return `
        <div class="col-lg-6 mb-4">
            <div class="card dealer-card h-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h5 class="card-title">${dealer.name}</h5>
                        <span class="badge ${typeBadges[dealer.type]}">${typeLabels[dealer.type]}</span>
                    </div>
                    <div class="dealer-info">
                        <p class="mb-2">
                            <i class="fas fa-map-marker-alt text-primary me-2"></i>
                            ${dealer.address}
                        </p>
                        <p class="mb-2">
                            <i class="fas fa-phone text-primary me-2"></i>
                            <a href="tel:${dealer.phone}">${dealer.phone}</a>
                        </p>
                        <p class="mb-2">
                            <i class="fas fa-envelope text-primary me-2"></i>
                            <a href="mailto:${dealer.email}">${dealer.email}</a>
                        </p>
                        <p class="mb-3">
                            <i class="fas fa-globe text-primary me-2"></i>
                            <a href="http://${dealer.website}" target="_blank">${dealer.website}</a>
                        </p>
                        <div class="services">
                            <h6>Services:</h6>
                            <div class="d-flex flex-wrap gap-1">
                                ${dealer.services.map(service => 
                                    `<span class="badge bg-light text-dark">${service}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-primary me-2" onclick="contactDealer(${dealer.id})">
                            <i class="fas fa-phone me-1"></i>Contact
                        </button>
                        <button class="btn btn-outline-primary" onclick="getDirections('${dealer.address}')">
                            <i class="fas fa-directions me-1"></i>Directions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Contact dealer
function contactDealer(dealerId) {
    const dealer = dealers.find(d => d.id === dealerId);
    if (!dealer) return;
    
    // Create contact modal or redirect to phone
    const confirmed = confirm(`Contact ${dealer.name}?\n\nPhone: ${dealer.phone}\nEmail: ${dealer.email}`);
    
    if (confirmed) {
        window.location.href = `tel:${dealer.phone}`;
    }
}

// Get directions to dealer
function getDirections(address) {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
}

// Show dealer application form
function showDealerApplication() {
    // This would typically open a modal or redirect to an application form
    showNotification('Dealer application form would open here. Please contact us for more information.', 'info');
}