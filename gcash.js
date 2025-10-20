function processPayment() {
  // Simulate payment success
  alert('Payment successful via GCash!');
  // Store the order
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const userData = JSON.parse(localStorage.getItem('userData'));
  const pendingOrder = JSON.parse(localStorage.getItem('pendingOrder'));
  orders.push({ user: userData, items: pendingOrder.items, payment: pendingOrder.payment, status: 'pending' });
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('pendingOrder');
  localStorage.removeItem('cart'); // Clear cart
  
  // Notify admin via SMS (if server is running)
  const message = `New order from ${userData.name}: ${pendingOrder.items.map(i => i.name).join(', ')}. Total: ₱${pendingOrder.items.reduce((sum, i) => sum + i.price * (i.quantity || 1), 0)}`;
  fetch('http://localhost:3000/notify-admin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  }).catch(error => console.error('SMS notification failed:', error));
  
  window.location.href = 'preparing.html'; // Redirect to preparing page
}