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
let wonGift = ""; 
let currentRotation = 0; // स्पिन डिग्री को ट्रैक करने के लिए

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

// नया अपडेटेड स्पिन व्हील घुमाने का लॉजिक (रिफ्री-स्पिन चांस के साथ)
let canSpin = true; 
function spinWheel() {
    if (!canSpin) {
        document.getElementById('spinResult').style.color = "#dc3545";
        document.getElementById('spinResult').innerText = "❌ आप अपना फाइनल इनाम जीत चुके हैं!";
        return;
    }

    const wheel = document.getElementById('wheel');
    const btn = document.getElementById('spinBtn');
    btn.disabled = true; // स्पिन के दौरान बटन बंद करें
    document.getElementById('spinResult').style.color = "#28a745";
    document.getElementById('spinResult').innerText = "🔄 भाग्य का पहिया घूम रहा है...";

    // नए इनामों की लिस्ट (400, 600, 550 कैश डिस्काउंट्स के साथ)
    const gifts = ["₹400 Discount 💰", "Mouse 🖱️", "₹600 Discount 💵", "Bag 🎒", "₹550 Discount 💸", "Keyboard ⌨️"];
    
    const randomDegree = Math.floor(Math.random() * 360) + 1800; 
    currentRotation += randomDegree; 
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        btn.disabled = false;
        const actualDegree = currentRotation % 360;
        const index = Math.floor(((360 - actualDegree) % 360) / 60);
        const result = gifts[index];

        // अगर Mouse, Bag या Keyboard आता है तो दोबारा मौका दें
        if (result.includes("Mouse") || result.includes("Bag") || result.includes("Keyboard")) {
            document.getElementById('spinResult').style.color = "#ff9800";
            document.getElementById('spinResult').innerHTML = `🎁 आपको मिला: <strong>${result}</strong><br>🎉 अरे वाह! आपको <strong>1 और फ्री स्पिन करने का मौका</strong> मिलता है! दोबारा बटन दबाएं।`;
            wonGift = ""; // अभी फाइनल गिफ्ट सेट नहीं हुआ
            document.getElementById('custGift').value = "";
            canSpin = true; // दोबारा स्पिन कर सकता है
        } else {
            // कैश डिस्काउंट आने पर फाइनल लॉक हो जाएगा
            wonGift = result;
            document.getElementById('spinResult').innerHTML = `🎉 बधाई हो! आपने जीता: <strong>${wonGift}</strong><br><small>WhatsApp ऑर्डर फॉर्म में यह डिस्काउंट जोड़ दिया गया है!</small>`;
            document.getElementById('custGift').value = wonGift; 
            canSpin = false; // अब और स्पिन नहीं होगा
        }
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
                    `🎁 *लकी स्पिन ऑफर:* ${wonGift || "कोई डिस्काउंट नहीं जीता"}\n\n` +
                    `👤 *ग्राहक का नाम:* ${name}\n` +
                    `📞 *WhatsApp नंबर:* ${phone}\n` +
                    `📍 *पता:* ${address}`;

    window.open(`https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
});

displayLaptops(allLaptops);
