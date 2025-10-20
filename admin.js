// Load orders with error handling
function loadOrders() {
  try {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersDiv = document.getElementById('ordersList');
    if (!ordersDiv) {
      console.error('ordersList element not found');
      return;
    }
    ordersDiv.innerHTML = '';
    if (orders.length === 0) {
      ordersDiv.innerHTML = '<p>No orders yet.</p>';
      return;
    }
    orders.forEach((order, index) => {
      if (!order.user || !order.items) {
        console.warn('Invalid order data at index', index);
        return;
      }
      const mapId = `map-${index}`;
      ordersDiv.innerHTML += `
                <div class="order">
                    <p><strong>Name:</strong> ${order.user.name || 'N/A'}</p>
                    <p><strong>Address:</strong> ${order.user.address || 'N/A'}</p>
                    <p><strong>Items:</strong> ${order.items.map(i => i.name).join(', ') || 'N/A'}</p>
                    <p><strong>Payment:</strong> ${order.payment || 'N/A'}</p>
                    <p><strong>Status:</strong> ${order.status || 'pending'}</p>
                    <div id="${mapId}" class="map"></div>
                    <button onclick="confirmOrder(${index})">Confirm Order</button>
                </div>
            `;
      // Initialize map if Leaflet is loaded and location exists
      if (typeof L !== 'undefined' && order.user.location) {
        const map = L.map(mapId).setView([order.user.location.lat || 14.8436, order.user.location.lng || 120.8114], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        L.marker([order.user.location.lat, order.user.location.lng]).addTo(map);
      } else {
        document.getElementById(mapId).innerHTML = '<p>Map not available.</p>';
      }
    });
  } catch (error) {
    console.error('Error loading orders:', error);
    document.getElementById('ordersList').innerHTML = '<p>Error loading orders.</p>';
  }
}

// Confirm order with auto-remove after 10 seconds
function confirmOrder(index) {
  try {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (orders[index]) {
      orders[index].status = 'confirmed';
      localStorage.setItem('orders', JSON.stringify(orders));
      alert('Order confirmed! It will be removed in 10 seconds.');
      loadOrders();
      // Auto-remove after 10 seconds
      setTimeout(() => {
        const updatedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        updatedOrders.splice(index, 1); // Remove the confirmed order
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        loadOrders(); // Refresh display
        alert('Order removed.');
      }, 10000); // 10 seconds
    } else {
      alert('Order not found.');
    }
  } catch (error) {
    console.error('Error confirming order:', error);
    alert('Error confirming order.');
  }
}

// Simulated notification for new orders (alert when page loads if there are pending orders)
function checkForNewOrders() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const pendingOrders = orders.filter(order => order.status === 'pending');
  if (pendingOrders.length > 0) {
    alert(`You have ${pendingOrders.length} new pending order(s)! Check the admin panel.`);
  }
}

// Load menu with error handling
function loadMenu() {
  try {
    const availability = JSON.parse(localStorage.getItem('menuAvailability')) || {};
    const menuDiv = document.getElementById('menuList');
    if (!menuDiv) {
      console.error('menuList element not found');
      return;
    }
    menuDiv.innerHTML = '';
    // Full menu list for editing
    const menuItems = [
      { id: 1, name: 'Crispy Kare Kare Rice', price: 109 },
      { id: 2, name: 'Crispy Pork Binagoongan', price: 109 },
      { id: 3, name: 'Crispy Pork Sinigang', price: 109 },
      { id: 4, name: 'Crispy Dinuguan', price: 109 },
      { id: 5, name: 'Crispy Bicol Express Rice', price: 109 },
      { id: 6, name: 'Chicken Sisig Rice', price: 109 },
      { id: 7, name: 'Pares Retiro Rice', price: 109 },
      { id: 8, name: 'Dinakdakan Rice', price: 109 },
      { id: 9, name: 'Chicken Tonkatsu', price: 109 },
      { id: 10, name: 'Bangus Sisig Rice', price: 109 },
      { id: 11, name: 'Shawarma Rice', price: 109 },
      { id: 12, name: 'Pork Tonkatsu', price: 99 },
      { id: 13, name: 'Liempo BBQ', price: 99 },
      { id: 14, name: 'Chicken BBQ', price: 99 },
      { id: 15, name: 'Pork BBQ', price: 99 },
      { id: 16, name: 'Porkchop BBQ', price: 99 },
      { id: 17, name: 'Breaded Liempo Silog', price: 99 },
      { id: 18, name: 'Longgadog Silog', price: 99 },
      { id: 19, name: 'Longganisa Silog', price: 99 },
      { id: 20, name: 'Calamares Silog', price: 99 },
      { id: 21, name: 'Chicken Fingers Silog', price: 99 },
      { id: 22, name: 'Bagnet Silog', price: 99 },
      { id: 23, name: 'Bangsilog', price: 99 },
      { id: 24, name: 'Chicksilog', price: 99 },
      { id: 25, name: 'Hungarian Silog', price: 99 },
      { id: 26, name: 'Silog', price: 35 },
      { id: 27, name: 'Hotsilog', price: 89 },
      { id: 28, name: 'Porksilog', price: 99 },
      { id: 29, name: 'Tosilog', price: 99 },
      { id: 30, name: 'Tapsilog', price: 109 },
      { id: 31, name: 'Chicken Skin', price: 99 },
      { id: 32, name: 'Lechon Kawali', price: 120 },
      { id: 33, name: 'Chicken Fingers', price: 120 },
      { id: 34, name: 'Tokwa con Litson', price: 110 },
      { id: 35, name: 'Sisig', price: 110 },
      { id: 36, name: 'Sisig Tofu', price: 110 },
      { id: 37, name: 'Dinakdakan', price: 150 },
      { id: 38, name: 'Dinuguan', price: 150 },
      { id: 39, name: 'Crispy Kare Kare', price: 110 },
      { id: 40, name: 'Pares Retiro', price: 110 },
      { id: 41, name: 'Crispy Tokwa’t Baboy', price: 110 },
      { id: 42, name: 'Crispy Binagoongan', price: 110 },
      { id: 43, name: 'Crispy Hipon', price: 120 },
      { id: 44, name: 'Crispy Calamares', price: 120 },
      { id: 45, name: 'Chicken Sisig', price: 120 },
      { id: 46, name: 'Tapa', price: 150 },
      { id: 47, name: '6 pcs (Solo)', price: 150 },
      { id: 48, name: '3 pcs', price: 99 },
      { id: 49, name: 'Fried Egg', price: 20 },
      { id: 50, name: 'Plain Egg', price: 15 },
      { id: 51, name: 'Softdrinks', price: 15 },
      { id: 52, name: 'Kasalo 1.5L', price: 75 }
    ];
    menuItems.forEach(item => {
      const available = availability[item.id] !== false;
      const buttonText = available ? 'Mark Sold Out' : 'Mark Available';
      menuDiv.innerHTML += `
                <div class="menu-item">
                    <span>${item.name} - ₱${item.price}</span>
                    <button onclick="toggleAvailability(${item.id})">${buttonText}</button>
                </div>
            `;
    });
    // Add reset button
    menuDiv.innerHTML += '<button onclick="resetMenu()" style="margin-top: 20px; background: #4CAF50; color: white;">Reset All to Available</button>';
    menuDiv.innerHTML += '<button onclick="refreshMenu()" style="margin-top: 10px; background: #2196F3; color: white;">Refresh Menu</button>';
  } catch (error) {
    console.error('Error loading menu:', error);
    document.getElementById('menuList').innerHTML = '<p>Error loading menu.</p>';
  }
}

// Toggle availability (single button that toggles)
function toggleAvailability(id) {
  try {
    const availability = JSON.parse(localStorage.getItem('menuAvailability')) || {};
    availability[id] = availability[id] === false ? true : false; // Toggle: false means sold out
    localStorage.setItem('menuAvailability', JSON.stringify(availability));
    alert('Menu updated!');
    loadMenu();
  } catch (error) {
    console.error('Error updating menu:', error);
    alert('Error updating menu.');
  }
}

// Reset all menu to available
function resetMenu() {
  try {
    localStorage.removeItem('menuAvailability');
    alert('All menu items reset to available!');
    loadMenu();
  } catch (error) {
    console.error('Error resetting menu:', error);
    alert('Error resetting menu.');
  }
}

// Refresh menu (reloads data)
function refreshMenu() {
  loadMenu();
  alert('Menu refreshed!');
}

// Load on page load
window.addEventListener('load', () => {
  try {
    loadOrders();
    loadMenu();
    checkForNewOrders(); // Simulated notification
  } catch (error) {
    console.error('Error on page load:', error);
  }
});