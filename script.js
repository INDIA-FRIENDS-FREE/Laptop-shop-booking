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
let wonGift = ""; // ग्राहक का जीता हुआ गिफ्ट स्टोर करने के लिए

// लैपटॉप डिस्प्ले करने का फंक्शन
function displayLaptops(laptops) {
    const container = document.getElementById('laptopContainer');
    container.innerHTML = ""; 
    if(laptops.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center;'>Oops! कोई लैपटॉप नहीं मिला।</p>";
        return;
    }
    laptops.forEach(laptop => {
        const card = document.createElement('div');
        card.className = 'laptop-card';
        let badgeText = laptop.badge === 'best' ? "🔥 Best Seller" : laptop.badge === 'deal' ? "⚡ Super Deal" : "🍏 Apple Premium";
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

// सर्च और फिल्टर लॉजिक
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

// स्पिन व्हील घुमाने का लॉजिक
let hasSpun = false;
function spinWheel() {
    if (hasSpun) {
        document.getElementById('spinResult').innerText = "❌ आप आज का स्पिन खेल चुके हैं!";
        return;
    }
    hasSpun = true;
    const wheel = document.getElementById('wheel');
    const gifts = ["Free Mouse 🖱️", "₹500 Discount 💰", "Laptop Bag 🎒", "Cleaning Kit 🧼", "₹1000 Discount 💵", "Wireless Keyboard ⌨️"];
    
    // रैंडम स्पिन एंगल (कम से कम 5 बार पूरा घूमेगा)
    const randomDegree = Math.floor(Math.random() * 360) + 1800; 
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // व्हील रुकने के बाद गिफ्ट कैलकुलेट करना (4 सेकंड बाद)
    setTimeout(() => {
        const actualDegree = randomDegree % 360;
        // 360 डिग्री को 6 बराबर हिस्सों (60 डिग्री प्रत्येक) में बांटा गया है
        const index = Math.floor(((360 - actualDegree) % 360) / 60);
        wonGift = gifts[index];
        
        document.getElementById('spinResult').innerHTML = `🎉 बधाई हो! आपने जीता: <strong>${wonGift}</strong><br><small>ऑर्डर करते समय यह गिफ्ट आपके साथ जुड़ जाएगा।</small>`;
        document.getElementById('custGift').value = wonGift; // फॉर्म में गिफ्ट नाम डालना
    }, 4000);
}

// पॉपअप फॉर्म खोलना/बंद करना
function openModal(id) {
    selectedLaptop = allLaptops.find(l => l.id === id);
    document.getElementById('modalLaptopInfo').innerText = `Buying: ${selectedLaptop.name} (₹${selectedLaptop.price})`;
    document.getElementById('orderModal').style.display = 'flex';
}
function closeModal() { document.getElementById('orderModal').style.display = 'none'; }

// WhatsApp आर्डर सबमिशन
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const address = document.getElementById('custAddress').value;
    
    // ⚠️ अपना 10 अंकों का मोबाइल नंबर यहाँ डालें (91 के बाद)
    const myWhatsAppNumber = "919876543210"; 

    const message = `🚨 *नया ऑर्डर आया है!* 🚨\n\n` +
                    `💻 *लैपटॉप:* ${selectedLaptop.name}\n` +
                    `💰 *कीमत:* ₹${selectedLaptop.price}\n` +
                    `🎁 *जीता हुआ गिफ्ट:* ${wonGift || "कोई गिफ्ट नहीं जीता"}\n\n` +
                    `👤 *ग्राहक का नाम:* ${name}\n` +
                    `📞 *WhatsApp नंबर:* ${phone}\n` +
                    `📍 *पता:* ${address}`;

    window.open(`https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
});

// डिफ़ॉल्ट रूप से लैपटॉप लोड करें
displayLaptops(allLaptops);
