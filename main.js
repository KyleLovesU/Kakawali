// Initialize map (centered on Malolos, Bulacan, Philippines)
const map = L.map('map').setView([14.8436, 120.8114], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;
map.on('click', function(e) {
    if (marker) map.removeLayer(marker);
    marker = L.marker(e.latlng).addTo(map);
});

// Handle form submission and store in localStorage
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const street = document.getElementById('street').value;
    const latlng = marker ? marker.getLatLng() : null;
    
    const userData = { name, phone, address, street, location: latlng };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'menu.html';
});