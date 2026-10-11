 // 1. सभी लैपटॉप की सूची (यहाँ आप और भी लैपटॉप जोड़ सकते हैं)
const allLaptops = [
    { id: 1, name: "ThinkPad T480s", price: 18500, specs: "i5 8th Gen | 16GB RAM | 512GB SSD" },
    { id: 2, name: "Dell Latitude 7490", price: 16500, specs: "i5 8th Gen | 16GB RAM | 256GB SSD" },
    { id: 3, name: "HP EliteBook 840 G5", price: 22000, specs: "i7 8th Gen | 16GB RAM | 512GB SSD" },
    { id: 4, name: "Lenovo ThinkPad L14", price: 24500, specs: "Ryzen 5 | 8GB RAM | 512GB SSD" },
    { id: 5, name: "Dell Inspiron 15", price: 29000, specs: "i3 11th Gen | 8GB RAM | 512GB SSD" }
];

let selectedLaptop = null;

// 2. स्क्रीन पर लैपटॉप दिखाने का फंक्शन
function displayLaptops(laptops) {
    const container = document.getElementById('laptopContainer');
    container.innerHTML = ""; // पुराना डेटा साफ करें

    if(laptops.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>कोई लैपटॉप नहीं मिला!</p>";
        return;
    }

    laptops.forEach(laptop => {
        const card = document.createElement('div');
        card.className = 'laptop-card';
        card.innerHTML = `
            <h3>${laptop.name}</h3>
            <p>${laptop.specs}</p>
            <p class="price">₹${laptop.price.toLocaleString('en-IN')}</p>
            <button class="buy-btn" onclick="openModal(${laptop.id})">अभी खरीदें</button>
        `;
        container.appendChild(card);
    });
}

// 3. फिल्टर करने का लॉजिक (सर्च और प्राइस रेंज)
function filterLaptops() {
    const searchTxt = document.getElementById('searchBar').value.toLowerCase();
    const minP = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxP = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    const filtered = allLaptops.filter(laptop => {
        const matchesName = laptop.name.toLowerCase().includes(searchTxt) || laptop.specs.toLowerCase().includes(searchTxt);
        const matchesPrice = laptop.price >= minP && laptop.price <= maxP;
        return matchesName && matchesPrice;
    });

    displayLaptops(filtered);
}

// इनपुट बदलने पर फिल्टर रन करें
document.getElementById('searchBar').addEventListener('input', filterLaptops);
document.getElementById('minPrice').addEventListener('input', filterLaptops);
document.getElementById('maxPrice').addEventListener('input', filterLaptops);

// 4. पॉपअप (Modal) खोलने और बंद करने का लॉजिक
function openModal(id) {
    selectedLaptop = allLaptops.find(l => l.id === id);
    document.getElementById('modalLaptopInfo').innerText = `You are buying: ${selectedLaptop.name} (₹${selectedLaptop.price})`;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// 5. WhatsApp पर ऑर्डर भेजने का लॉजिक
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    
    // यहाँ अपना असली WhatsApp नंबर डालें (बिना + के, जैसे 91XXXXXXXXXX)
    const myWhatsAppNumber = "919999999999"; 

    const message = `नया ऑर्डर आया है!\n\n` +
                    `💻 लैपटॉप: ${selectedLaptop.name}\n` +
                    `💰 कीमत: ₹${selectedLaptop.price}\n` +
                    `👤 नाम: ${name}\n` +
                    `📞 फोन: ${phone}\n` +
                    `📍 पता: ${address}`;

    const whatsappUrl = `https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
});

// पहली बार पेज खुलने पर सभी लैपटॉप दिखाएं
displayLaptops(allLaptops);
