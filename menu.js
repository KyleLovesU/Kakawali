// Menu items with availability check
const menuItems = [
    {
        category: 'Rice Meals',
        items: [
            { id: 1, name: 'Crispy Kare Kare Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Crispy kare kare served with rice' },
            { id: 2, name: 'Crispy Pork Binagoongan', price: 109, image: 'https://via.placeholder.com/200', desc: 'Crispy pork in bagoong alamang' },
            { id: 3, name: 'Crispy Pork Sinigang', price: 109, image: 'https://via.placeholder.com/200', desc: 'Crispy pork in sour tamarind soup' },
            { id: 4, name: 'Crispy Dinuguan', price: 109, image: 'https://via.placeholder.com/200', desc: 'Crispy pork blood stew' },
            { id: 5, name: 'Crispy Bicol Express Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Spicy pork dish with rice' },
            { id: 6, name: 'Chicken Sisig Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Sizzling chicken sisig with rice' },
            { id: 7, name: 'Pares Retiro Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Beef pares with rice' },
            { id: 8, name: 'Dinakdakan Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Grilled pork with rice' },
            { id: 9, name: 'Chicken Tonkatsu', price: 109, image: 'https://via.placeholder.com/200', desc: 'Breaded fried chicken' },
            { id: 10, name: 'Bangus Sisig Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Milkfish sisig with rice' },
            { id: 11, name: 'Shawarma Rice', price: 109, image: 'https://via.placeholder.com/200', desc: 'Middle Eastern wrap with rice' },
            { id: 12, name: 'Pork Tonkatsu', price: 99, image: 'https://via.placeholder.com/200', desc: 'Breaded fried pork' },
            { id: 13, name: 'Liempo BBQ', price: 99, image: 'liempo.jpg', desc: 'Grilled pork belly BBQ' },
            { id: 14, name: 'Chicken BBQ', price: 99, image: 'https://via.placeholder.com/200', desc: 'Grilled chicken BBQ' },
            { id: 15, name: 'Pork BBQ', price: 99, image: 'https://via.placeholder.com/200', desc: 'Grilled pork BBQ' },
            { id: 16, name: 'Porkchop BBQ', price: 99, image: 'https://via.placeholder.com/200', desc: 'Grilled porkchop BBQ' }
        ]
    },
    {
        category: 'Silog Meals',
        items: [
            { id: 17, name: 'Breaded Liempo Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Breaded pork belly with egg and rice' },
            { id: 18, name: 'Longgadog Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Hotdog with egg and rice' },
            { id: 19, name: 'Longganisa Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Sausage with egg and rice' },
            { id: 20, name: 'Calamares Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Fried squid with egg and rice' },
            { id: 21, name: 'Chicken Fingers Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Chicken fingers with egg and rice' },
            { id: 22, name: 'Bagnet Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Crispy pork with egg and rice' },
            { id: 23, name: 'Bangsilog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Milkfish with egg and rice' },
            { id: 24, name: 'Chicksilog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Chicken with egg and rice' },
            { id: 25, name: 'Hungarian Silog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Hungarian sausage with egg and rice' },
            { id: 26, name: 'Silog', price: 35, image: 'https://via.placeholder.com/200', desc: 'Egg and garlic rice' },
            { id: 27, name: 'Hotsilog', price: 89, image: 'https://via.placeholder.com/200', desc: 'Hotdog with egg and rice' },
            { id: 28, name: 'Porksilog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Pork with egg and rice' },
            { id: 29, name: 'Tosilog', price: 99, image: 'https://via.placeholder.com/200', desc: 'Tocino with egg and rice' },
            { id: 30, name: 'Tapsilog', price: 109, image: 'https://via.placeholder.com/200', desc: 'Beef tapa with egg and rice' }
        ]
    },
    {
        category: 'Ulam/Pulutan',
        items: [
            { id: 31, name: 'Chicken Skin', price: 99, image: 'https://via.placeholder.com/200', desc: 'Crispy fried chicken skin' },
            { id: 32, name: 'Lechon Kawali', price: 120, image: 'https://via.placeholder.com/200', desc: 'Deep-fried pork belly' },
            { id: 33, name: 'Chicken Fingers', price: 120, image: 'https://via.placeholder.com/200', desc: 'Breaded chicken strips' },
            { id: 34, name: 'Tokwa con Litson', price: 110, image: 'https://via.placeholder.com/200', desc: 'Tofu with pork' },
            { id: 35, name: 'Sisig', price: 110, image: 'https://via.placeholder.com/200', desc: 'Sizzling pork sisig' },
            { id: 36, name: 'Sisig Tofu', price: 110, image: 'https://via.placeholder.com/200', desc: 'Tofu-based sisig' },
            { id: 37, name: 'Dinakdakan', price: 150, image: 'https://via.placeholder.com/200', desc: 'Grilled pork dish' },
            { id: 38, name: 'Dinuguan', price: 150, image: 'https://via.placeholder.com/200', desc: 'Pork blood stew' },
            { id: 39, name: 'Crispy Kare Kare', price: 110, image: 'https://via.placeholder.com/200', desc: 'Crispy vegetable stew' },
            { id: 40, name: 'Pares Retiro', price: 110, image: 'https://via.placeholder.com/200', desc: 'Beef pares' },
            { id: 41, name: 'Crispy Tokwa’t Baboy', price: 110, image: 'https://via.placeholder.com/200', desc: 'Tofu and pork' },
            { id: 42, name: 'Crispy Binagoongan', price: 110, image: 'https://via.placeholder.com/200', desc: 'Crispy pork in bagoong' },
            { id: 43, name: 'Crispy Hipon', price: 120, image: 'https://via.placeholder.com/200', desc: 'Crispy shrimp' },
            { id: 44, name: 'Crispy Calamares', price: 120, image: 'https://via.placeholder.com/200', desc: 'Crispy squid' },
            { id: 45, name: 'Chicken Sisig', price: 120, image: 'https://via.placeholder.com/200', desc: 'Chicken sisig' },
            { id: 46, name: 'Tapa', price: 150, image: 'https://via.placeholder.com/200', desc: 'Marinated beef tapa' }
        ]
    },
    {
        category: 'Chicken Wings',
        items: [
            { id: 47, name: '6 pcs (Solo)', price: 150, image: 'https://via.placeholder.com/200', desc: '6 pieces of chicken wings' },
            { id: 48, name: '3 pcs', price: 99, image: 'https://via.placeholder.com/200', desc: '3 pieces of chicken wings' }
        ]
    },
    {
        category: 'Add Ons',
        items: [
            { id: 49, name: 'Fried Egg', price: 20, image: 'https://via.placeholder.com/200', desc: 'Crispy fried egg' },
            { id: 50, name: 'Plain Egg', price: 15, image: 'https://via.placeholder.com/200', desc: 'Boiled or plain egg' }
        ]
    },
    {
        category: 'Drinks',
        items: [
            { id: 51, name: 'Softdrinks', price: 15, image: 'https://via.placeholder.com/200', desc: 'Assorted soft drinks' },
            { id: 52, name: 'Kasalo 1.5L', price: 75, image: 'https://via.placeholder.com/200', desc: '1.5L Kasalo drink' }
        ]
    }
];

function displayItems(items) {
    const sectionsDiv = document.getElementById('menuSections');
    sectionsDiv.innerHTML = '';
    const availability = JSON.parse(localStorage.getItem('menuAvailability')) || {};
    items.forEach(category => {
        const availableItems = category.items.filter(item => availability[item.id] !== false);
        const soldOutItems = category.items.filter(item => availability[item.id] === false);
        if (availableItems.length > 0 || soldOutItems.length > 0) {
            sectionsDiv.innerHTML += `
                <div class="category">
                    <h2>${category.category}</h2>
                    <div class="divider"></div>
                    <div class="menu">
                        ${availableItems.map(item => `
                            <div class="item" onclick="viewProduct(${item.id})">
                                <img src="${item.image}" alt="${item.name}">
                                <h3>${item.name}</h3>
                                <p>₱${item.price}</p>
                            </div>
                        `).join('')}
                        ${soldOutItems.map(item => `
                            <div class="item sold-out">
                                <img src="${item.image}" alt="${item.name}" style="opacity: 0.5;">
                                <h3 style="text-decoration: line-through;">${item.name} - Sold Out</h3>
                                <p>₱${item.price}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    });
}

displayItems(menuItems);

// Listen for localStorage changes (e.g., from admin page) to update menu automatically
window.addEventListener('storage', function(e) {
    if (e.key === 'menuAvailability') {
        displayItems(menuItems);
    }
});

// Search functionality (filters across all categories)
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const availability = JSON.parse(localStorage.getItem('menuAvailability')) || {};
    const filtered = menuItems.map(category => ({
        category: category.category,
        items: category.items.filter(item => item.name.toLowerCase().includes(query))
    })).filter(category => category.items.length > 0);
    displayItems(filtered);
});

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}
updateCartCount();

// Show notifications on page load if user just registered
window.addEventListener('load', function() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.name) {
        alert('You have successfully registered!');
        const notificationBar = document.getElementById('notificationBar');
        notificationBar.textContent = `Welcome, ${userData.name}!`;
        notificationBar.style.display = 'block';
    }
});

function viewProduct(id) {
    localStorage.setItem('currentProduct', id);
    window.location.href = 'product.html';
}