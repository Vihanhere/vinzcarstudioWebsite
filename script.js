// Product data
const products = [
    {
        id: 1,
        name: "AudioPro AMP-4000",
        category: "amplifiers",
        price: 899.99,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "High-performance 4-channel amplifier with 1000W total power output. Features advanced thermal management and crystal-clear sound reproduction.",
        specifications: {
            "Power Output": "4 x 250W RMS",
            "Frequency Response": "20Hz - 20kHz",
            "THD": "< 0.1%",
            "Signal-to-Noise Ratio": "> 90dB"
        }
    },
    {
        id: 2,
        name: "AudioPro AMP-2000",
        category: "amplifiers",
        price: 599.99,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Compact 2-channel amplifier perfect for powering front speakers. Delivers exceptional clarity and power efficiency.",
        specifications: {
            "Power Output": "2 x 300W RMS",
            "Frequency Response": "20Hz - 20kHz",
            "THD": "< 0.05%",
            "Signal-to-Noise Ratio": "> 95dB"
        }
    },
    {
        id: 3,
        name: "AudioPro SP-650",
        category: "speakers",
        price: 299.99,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Premium 6.5-inch component speakers with silk dome tweeters. Engineered for superior sound staging and imaging.",
        specifications: {
            "Size": "6.5 inches",
            "Power Handling": "120W RMS",
            "Frequency Response": "45Hz - 22kHz",
            "Sensitivity": "92dB"
        }
    },
    {
        id: 4,
        name: "AudioPro SP-525",
        category: "speakers",
        price: 199.99,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "5.25-inch coaxial speakers with optimized crossover design. Perfect balance of performance and value.",
        specifications: {
            "Size": "5.25 inches",
            "Power Handling": "80W RMS",
            "Frequency Response": "55Hz - 20kHz",
            "Sensitivity": "90dB"
        }
    },
    {
        id: 5,
        name: "AudioPro SUB-12",
        category: "subwoofers",
        price: 449.99,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "12-inch active subwoofer with built-in amplifier. Delivers deep, impactful bass that you can feel.",
        specifications: {
            "Size": "12 inches",
            "Power": "500W RMS",
            "Frequency Response": "20Hz - 200Hz",
            "Enclosure": "Sealed"
        }
    },
    {
        id: 6,
        name: "AudioPro SUB-10",
        category: "subwoofers",
        price: 349.99,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Compact 10-inch subwoofer ideal for smaller vehicles. Tight, controlled bass response with excellent musicality.",
        specifications: {
            "Size": "10 inches",
            "Power": "350W RMS",
            "Frequency Response": "25Hz - 200Hz",
            "Enclosure": "Ported"
        }
    },
    {
        id: 7,
        name: "AudioPro DSP-8",
        category: "processors",
        price: 799.99,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "8-channel digital signal processor with advanced tuning capabilities. Features time alignment, EQ, and crossover controls.",
        specifications: {
            "Channels": "8 Input / 8 Output",
            "Resolution": "24-bit / 96kHz",
            "Delay": "0-20ms per channel",
            "EQ Bands": "31-band per channel"
        }
    },
    {
        id: 8,
        name: "AudioPro DSP-6",
        category: "processors",
        price: 599.99,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6-channel DSP with user-friendly interface. Perfect for upgrading factory systems with advanced sound processing.",
        specifications: {
            "Channels": "6 Input / 6 Output",
            "Resolution": "24-bit / 48kHz",
            "Delay": "0-15ms per channel",
            "EQ Bands": "15-band per channel"
        }
    }
];

// Shopping cart
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initializeEventListeners();
    updateCartUI();
});

// Load products into the grid
function loadProducts(category = 'all') {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Create a product card element
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted flex-grow-1">${product.description.substring(0, 100)}...</p>
                <div class="price mb-3">$${product.price.toFixed(2)}</div>
                <div class="mt-auto">
                    <button class="btn btn-primary me-2" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye me-1"></i>View Details
                    </button>
                    <button class="btn btn-outline-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus me-1"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Initialize event listeners
function initializeEventListeners() {
    // Product category tabs
    const tabButtons = document.querySelectorAll('#productTabs button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.toLowerCase().replace(' products', '').replace(' ', '');
            loadProducts(category === 'all' ? 'all' : category);
        });
    });

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showCart();
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactForm();
    });

    // Smooth scrolling for navigation links
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
}

// View product details
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');
    const addToCartBtn = document.getElementById('addToCartBtn');

    modalTitle.textContent = product.name;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h4 class="text-primary mb-3">$${product.price.toFixed(2)}</h4>
                <p class="mb-4">${product.description}</p>
                <h6>Specifications:</h6>
                <ul class="list-unstyled">
                    ${Object.entries(product.specifications).map(([key, value]) => 
                        `<li><strong>${key}:</strong> ${value}</li>`
                    ).join('')}
                </ul>
            </div>
        </div>
    `;

    addToCartBtn.onclick = () => {
        addToCart(productId);
        bootstrap.Modal.getInstance(modal).hide();
    };

    const productModal = new bootstrap.Modal(modal);
    productModal.show();
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showCart(); // Refresh cart display
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        updateCartUI();
        showCart(); // Refresh cart display
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Show cart modal
function showCart() {
    const modal = document.getElementById('cartModal');
    const modalBody = document.getElementById('cartModalBody');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cart.length === 0) {
        modalBody.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h5>Your cart is empty</h5>
                <p class="text-muted">Add some products to get started!</p>
            </div>
        `;
        checkoutBtn.style.display = 'none';
    } else {
        const cartItems = cart.map(item => `
            <div class="cart-item d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" class="me-3">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">$${item.price.toFixed(2)} each</small>
                </div>
                <div class="quantity-controls me-3">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                           onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="text-end">
                    <div class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="btn btn-sm btn-outline-danger mt-1" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        modalBody.innerHTML = `
            ${cartItems}
            <div class="cart-total text-end">
                <strong>Total: $${total.toFixed(2)}</strong>
            </div>
        `;
        
        checkoutBtn.style.display = 'block';
        checkoutBtn.onclick = checkout;
    }

    const cartModal = new bootstrap.Modal(modal);
    cartModal.show();
}

// Checkout function
function checkout() {
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    showNotification(`Checkout successful! Total: $${total.toFixed(2)}`, 'success');
    cart = [];
    updateCartUI();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}

// Handle contact form submission
function handleContactForm() {
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
    document.getElementById('contactForm').reset();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(52, 58, 64, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '';
        navbar.style.backdropFilter = '';
    }
});

// Search functionality (basic implementation)
function searchProducts(query) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5>No products found</h5>
                <p class="text-muted">Try adjusting your search terms</p>
            </div>
        `;
    } else {
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .feature-icon').forEach(el => {
        observer.observe(el);
    });
}


// Floating Hearts Animation
function initFloatingHearts() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        setInterval(() => {
            createFloatingHeart(heroSection);
        }, 3000);
    }
}

function createFloatingHeart(container) {
    const heart = document.createElement('i');
    heart.className = 'fa-solid fa-car-on floating-heart';
    heart.style.cssText = `
        position: absolute;
        color: #ec4899;
        font-size: ${Math.random() * 20 + 10}px;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: 0.7;
        pointer-events: none;
        z-index: 1;
        animation: floatUp 4s ease-out forwards;
    `;
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 4000);
}

// Add CSS for floating heart animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);