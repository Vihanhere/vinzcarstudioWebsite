// Common functionality shared across all pages

// Initialize common features
document.addEventListener('DOMContentLoaded', function() {
    initializeNavbar();
    initializeCart();
});

// Navbar functionality
function initializeNavbar() {
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

    // Smooth scrolling for anchor links
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

// Cart initialization
function initializeCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('audisonCart');
    if (savedCart) {
        window.cart = JSON.parse(savedCart);
    } else {
        window.cart = [];
    }
    
    updateCartUI();
    
    // Cart button click handler
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showCart();
        });
    }
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount && window.cart) {
        const totalItems = window.cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('audisonCart', JSON.stringify(window.cart));
}

// // Show notification
// function showNotification(message, type = 'info') {
//     // Create notification element
//     const notification = document.createElement('div');
//     notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
//     notification.style.cssText = `
//         top: 80px;
//         right: 20px;
//         z-index: 9999;
//         min-width: 300px;
//         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//     `;
    
//     notification.innerHTML = `
//         ${message}
//         <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//     `;
    
//     document.body.appendChild(notification);
    
//     // Auto-remove after 5 seconds
//     setTimeout(() => {
//         if (notification.parentNode) {
//             notification.remove();
//         }
//     }, 5000);
// }

// Show cart modal
function showCart() {
    const modal = document.getElementById('cartModal');
    const modalBody = document.getElementById('cartModalBody');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (!modal || !modalBody || !checkoutBtn) return;

    if (!window.cart || window.cart.length === 0) {
        modalBody.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h5>Your cart is empty</h5>
                <p class="text-muted">Add some products to get started!</p>
            </div>
        `;
        checkoutBtn.style.display = 'none';
    } else {
        const cartItems = window.cart.map(item => `
            <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
                <img src="${item.image}" alt="${item.name}" class="me-3" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                <div class="flex-grow-1">
                    <h6 class="mb-1">${item.name}</h6>
                    <small class="text-muted">$${item.price.toFixed(2)} each</small>
                </div>
                <div class="quantity-controls me-3">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="text-end">
                    <div class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="btn btn-sm btn-outline-danger mt-1" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        const total = window.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        modalBody.innerHTML = `
            ${cartItems}
            <div class="cart-total text-end mt-3 pt-3 border-top">
                <h4>Total: $${total.toFixed(2)}</h4>
            </div>
        `;
        
        checkoutBtn.style.display = 'block';
        checkoutBtn.onclick = checkout;
    }

    const cartModal = new bootstrap.Modal(modal);
    cartModal.show();
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    if (!window.cart) return;
    
    const item = window.cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartUI();
            showCart(); // Refresh cart display
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    if (!window.cart) return;
    
    window.cart = window.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showCart(); // Refresh cart display
}

// Checkout function
function checkout() {
    if (!window.cart || window.cart.length === 0) return;
    
    const total = window.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    showNotification(`Checkout successful! Total: $${total.toFixed(2)}`, 'success');
    window.cart = [];
    saveCart();
    updateCartUI();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}