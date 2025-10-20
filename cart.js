function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cartItems');
    let subtotal = 0;

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('subtotal').textContent = '0';
        document.getElementById('deliveryFee').textContent = '0';
        document.getElementById('total').textContent = '0';
        return;
    }

    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1; // Default to 1 if not set
        const itemTotal = item.price * quantity;
        subtotal += itemTotal;
        cartDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
                <span>₱${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    // Calculate delivery fee based on location
    const userData = JSON.parse(localStorage.getItem('userData'));
    let deliveryFee = 5; // Default fee
    if (userData && userData.location) {
        const lat = userData.location.lat;
        const lng = userData.location.lng;
        // Check if within Malolos, Bulacan (approx bounds)
        if (lat >= 14.8 && lat <= 14.9 && lng >= 120.8 && lng <= 120.9) {
            deliveryFee = 2;
        }
    }

    const total = subtotal + deliveryFee;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('deliveryFee').textContent = deliveryFee.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);

    // Auto-fill amount for GCash
    document.getElementById('amount').value = total.toFixed(2);
}

function changeQuantity(index, delta) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1); // Remove item if quantity is 0
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

displayCart();

document.getElementById('paymentMethod').addEventListener('change', function() {
    const method = this.value;
    document.getElementById('gcashFields').style.display = method === 'gcash' ? 'block' : 'none';
});

function confirmOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before placing an order.');
        return;
    }

    const method = document.getElementById('paymentMethod').value;
    if (method === 'gcash') {
        const gcashNumber = document.getElementById('gcashNumber').value;
        if (!gcashNumber) {
            alert('Please enter your GCash number.');
            return;
        }
        // Store cart temporarily for GCash page
        localStorage.setItem('pendingOrder', JSON.stringify({ items: cart, payment: method }));
        window.location.href = 'gcash.html'; // Redirect to GCash simulation
    } else {
        // COD: Process immediately with success notification
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const userData = JSON.parse(localStorage.getItem('userData'));
        orders.push({ user: userData, items: cart, payment: method, status: 'pending' });
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
        alert('Payment successful via Cash on Delivery!');
        window.location.href = 'preparing.html'; // Redirect to preparing page
    }
}

function cancelOrder() {
    if (confirm('Are you sure you want to cancel your order? This will clear your cart.')) {
        localStorage.removeItem('cart');
        displayCart();
        alert('Order cancelled.');
    }
}
