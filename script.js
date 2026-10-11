 // 1. सभी लैपटॉप की सूची (इसमें Apple MacBooks भी जोड़ दिए हैं)
const allLaptops = [
    { id: 1, name: "ThinkPad T480s", price: 18500, specs: "i5 8th Gen | 16GB RAM | 512GB SSD", badge: "best" },
    { id: 2, name: "Dell Latitude 7490", price: 16500, specs: "i5 8th Gen | 16GB RAM | 256GB SSD", badge: "deal" },
    { id: 3, name: "HP EliteBook 840 G5", price: 22000, specs: "i7 8th Gen | 16GB RAM | 512GB SSD", badge: "best" },
    { id: 4, name: "Apple MacBook Air M1", price: 46500, specs: "Apple M1 Chip | 8GB RAM | 256GB SSD Retina", badge: "apple" },
    { id: 5, name: "Apple MacBook Pro M2", price: 68000, specs: "Apple M2 Chip | 16GB RAM | 512GB SSD Touchbar", badge: "apple" },
    { id: 6, name: "Lenovo ThinkPad L14", price: 24500, specs: "Ryzen 5 | 8GB RAM | 512GB SSD", badge: "deal" },
    { id: 7, name: "Dell Inspiron 15", price: 29000, specs: "i3 11th Gen | 8GB RAM | 512GB SSD", badge: "best" },
    { id: 8, name: "Apple MacBook Air Intel", price: 28500, specs: "Core i5 | 8GB RAM | 128GB SSD | 2017 Model", badge: "apple" }
];

let selectedLaptop = null;

// 2. स्क्रीन पर शानदार कार्ड्स दिखाने का फंक्शन
function displayLaptops(laptops) {
    const container = document.getElementById('laptopContainer');
    container.innerHTML = ""; 

    if(laptops.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; font-size:18px; color:#888;'>Oops! आपके बजट या सर्च के अनुसार कोई लैपटॉप नहीं मिला।</p>";
        return;
    }

    laptops.forEach(laptop => {
        const card = document.createElement('div');
        card.className = 'laptop-card';
        
        // बैज का नाम सेट करने के लिए लॉजिक
        let badgeText = "Stock";
        if(laptop.badge === 'best') badgeText = "🔥 Best Seller";
        if(laptop.badge === 'deal') badgeText = "⚡ Super Deal";
        if(laptop.badge === 'apple') badgeText = "🍏 Apple Premium";

        card.innerHTML = `
            <span class="badge ${laptop.badge}">${badgeText}</span>
            <h3>${laptop.name}</h3>
            <p class="specs">${laptop.specs}</p>
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

document.getElementById('searchBar').addEventListener('input', filterLaptops);
document.getElementById('minPrice').addEventListener('input', filterLaptops);
document.getElementById('maxPrice').addEventListener('input', filterLaptops);

// 4. पॉपअप (Modal) लॉजिक
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
    
    // अपना 10 अंकों का WhatsApp नंबर यहाँ डालें (91 के बाद)
    const myWhatsAppNumber = "91XXXXXXXXXX"; 

    const message = `🚨 *नया ऑर्डर आया है!* 🚨\n\n` +
                    `💻 *लैपटॉप:* ${selectedLaptop.name}\n` +
                    `💰 *कीमत:* ₹${selectedLaptop.price}\n\n` +
                    `👤 *ग्राहक का नाम:* ${name}\n` +
                    `📞 *WhatsApp नंबर:* ${phone}\n` +
                    `📍 *पता:* ${address}`;

    const whatsappUrl = `https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
});

// पहली बार पेज लोड होने पर रन करें
displayLaptops(allLaptops);
