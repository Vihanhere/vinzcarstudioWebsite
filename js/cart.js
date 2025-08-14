// Cart functionality

// Initialize cart if not already done
if (typeof window.cart === 'undefined') {
    window.cart = [];
}

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('audisonCart');
    if (savedCart) {
        window.cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('audisonCart', JSON.stringify(window.cart));
}

// Add item to cart
function addItemToCart(product) {
    if (!window.cart) window.cart = [];
    
    const existingItem = window.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        window.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
}

// Remove item from cart
function removeItemFromCart(productId) {
    if (!window.cart) return;
    
    window.cart = window.cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// Update item quantity in cart
function updateItemQuantity(productId, quantity) {
    if (!window.cart) return;
    
    const item = window.cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeItemFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCartToStorage();
            updateCartUI();
        }
    }
}

// Get cart total
function getCartTotal() {
    if (!window.cart) return 0;
    return window.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartItemCount() {
    if (!window.cart) return 0;
    return window.cart.reduce((total, item) => total + item.quantity, 0);
}

// Clear cart
function clearCart() {
    window.cart = [];
    saveCartToStorage();
    updateCartUI();
}

// Update cart UI elements
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = getCartItemCount();
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Show cart modal with current items
function displayCart() {
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
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="text-end">
                    <div class="fw-bold">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="btn btn-sm btn-outline-danger mt-1" onclick="removeItemFromCart(${item.id}); displayCart();">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');

        const total = getCartTotal();

        modalBody.innerHTML = `
            ${cartItems}
            <div class="cart-total text-end mt-3 pt-3 border-top">
                <h4>Total: $${total.toFixed(2)}</h4>
            </div>
        `;
        
        checkoutBtn.style.display = 'block';
        checkoutBtn.onclick = processCheckout;
    }

    const cartModal = new bootstrap.Modal(modal);
    cartModal.show();
}

// Process checkout
function processCheckout() {
    if (!window.cart || window.cart.length === 0) return;
    
    const total = getCartTotal();
    
    // Simulate checkout process
    showNotification(`Checkout successful! Total: $${total.toFixed(2)}`, 'success');
    
    // Clear cart
    clearCart();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (modal) {
        modal.hide();
    }
}

// Export functions for global use
window.addItemToCart = addItemToCart;
window.removeItemFromCart = removeItemFromCart;
window.updateItemQuantity = updateItemQuantity;
window.displayCart = displayCart;
window.clearCart = clearCart;
window.processCheckout = processCheckout;