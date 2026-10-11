 // लैपटॉप की फाइनल लिस्ट (हाई-क्वालिटी असली इमेजेस और लिमिटेड स्टॉक टैग के साथ)
const allLaptops = [
    { id: 1, name: "ThinkPad T480s", price: 18500, specs: "i5 8th Gen | 16GB RAM | 512GB SSD", badge: "best", image: "https://unsplash.com", stock: "🔥 Only 2 Left!" },
    { id: 2, name: "Dell Latitude 7490", price: 16500, specs: "i5 8th Gen | 16GB RAM | 256GB SSD", badge: "deal", image: "https://unsplash.com", stock: "⚡ Selling Fast" },
    { id: 3, name: "HP EliteBook 840 G5", price: 22000, specs: "i7 8th Gen | 16GB RAM | 512GB SSD", badge: "best", image: "https://unsplash.com", stock: "🔥 Only 1 Left!" },
    { id: 4, name: "Apple MacBook Air M1", price: 46500, specs: "Apple M1 Chip | 8GB RAM | 256GB SSD Retina", badge: "apple", image: "https://unsplash.com", stock: "🍏 Premium Quality" },
    { id: 5, name: "Apple MacBook Pro M2", price: 68000, specs: "Apple M2 Chip | 16GB RAM | 512GB SSD Touchbar", badge: "apple", image: "https://unsplash.com", stock: "🔥 In High Demand" },
    { id: 6, name: "Lenovo ThinkPad L14", price: 24500, specs: "Ryzen 5 | 8GB RAM | 512GB SSD", badge: "deal", image: "https://unsplash.com", stock: "⚡ 3 Items Left" }
];

let selectedLaptop = null;
let generatedCode = ""; 
let currentRotation = 0; 

function displayLaptops(laptops) {
    const container = document.getElementById('laptopContainer');
    container.innerHTML = ""; 
    if(laptops.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/-1; text-align:center; font-size:18px;'>Oops! कोई लैपटॉप नहीं मिला।</p>";
        return;
    }
    laptops.forEach(laptop => {
        const card = document.createElement('div');
        card.className = 'laptop-card';
        let badgeText = laptop.badge === 'best' ? "🔥 Best Seller" : laptop.badge === 'deal' ? "⚡ Super Deal" : "🍏 Apple Premium";
        card.innerHTML = `
            <span class="badge ${laptop.badge}">${badgeText}</span>
            <img src="${laptop.image}" alt="${laptop.name}" class="laptop-img">
            <h3>${laptop.name}</h3>
            <p class="specs">${laptop.specs}</p>
            <div><span class="stock-alert">${laptop.stock}</span></div>
            <p class="price">₹${laptop.price.toLocaleString('en-IN')}</p>
            <button class="buy-btn" onclick="openModal(${laptop.id})">अभी खरीदें</button>
        `;
        container.appendChild(card);
    });
}

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

// सीक्रेट कोड और स्पिन लॉजिक
let canSpin = true; 
function spinWheel() {
    if (!canSpin) {
        document.getElementById('spinResult').style.color = "#dc3545";
        document.getElementById('spinResult').innerText = "❌ आप अपना फाइनल इनाम और कोड जीत चुके हैं!";
        return;
    }

    const wheel = document.getElementById('wheel');
    const btn = document.getElementById('spinBtn');
    btn.disabled = true; 
    document.getElementById('spinResult').style.color = "#28a745";
    document.getElementById('spinResult').innerText = "🔄 भाग्य का पहिया घूम रहा है...";

    const gifts = ["₹400 Discount 💰", "Mouse 🖱️", "₹600 Discount 💵", "Bag 🎒", "₹550 Discount 💸", "Keyboard ⌨️"];
    const codeMap = { "Key": "LPT4", "Key6": "DSC6", "Key5": "OFF5" };
    
    const randomDegree = Math.floor(Math.random() * 360) + 1800; 
    currentRotation += randomDegree; 
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        btn.disabled = false;
        const actualDegree = currentRotation % 360;
        const index = Math.floor(((360 - actualDegree) % 360) / 60);
        const result = gifts[index];

        if (result.includes("Mouse") || result.includes("Bag") || result.includes("Keyboard")) {
            document.getElementById('spinResult').style.color = "#ff9800";
            document.getElementById('spinResult').innerHTML = `🎁 आपको मिला: <strong>${result}</strong><br>🎉 आपको <strong>1 और फ्री स्पिन करने का मौका</strong> मिलता है! दोबारा ट्राई करें।`;
            generatedCode = "";
            canSpin = true; 
        } else {
            if(index === 0) generatedCode = codeMap["Key"];
            if(index === 2) generatedCode = codeMap["Key6"];
            if(index === 4) generatedCode = codeMap["Key5"];

            document.getElementById('spinResult').innerHTML = `🎉 बधाई हो! आपने जीता: <strong>${result}</strong><br>🔐 आपका सीक्रेट स्पिन कोड है: <strong style='color:#ff5722; font-size:18px;'>${generatedCode}</strong><br><small>ऑर्डर फॉर्म भरते समय इस कोड को अवश्य डालें!</small>`;
            canSpin = false; 
        }
    }, 4000);
}

function openModal(id) {
    selectedLaptop = allLaptops.find(l => l.id === id);
    document.getElementById('modalLaptopInfo').innerText = `Buying: ${selectedLaptop.name} (₹${selectedLaptop.price})`;
    document.getElementById('orderModal').style.display = 'flex';
}
function closeModal() { document.getElementById('orderModal').style.display = 'none'; }

// WhatsApp बुकिंग
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const enteredCode = document.getElementById('custCode').value.trim().toUpperCase();
    const address = document.getElementById('custAddress').value;
    
    const myWhatsAppNumber = "919876543210"; // यहाँ अपना या दुकानदार का नंबर आएगा

    const message = `🚨 *नया ऑर्डर आया है!* 🚨\n\n` +
                    `💻 *लैपटॉप:* ${selectedLaptop.name}\n` +
                    `💰 *कीमत:* ₹${selectedLaptop.price}\n` +
                    `🔐 *कस्टमर का स्पिन कोड:* ${enteredCode || "कोई कोड नहीं डाला"}\n\n` +
                    `👤 *ग्राहक का नाम:* ${name}\n` +
                    `📞 *WhatsApp नंबर:* ${phone}\n` +
                    `📍 *पता:* ${address}`;

    window.open(`https://wa.me{myWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
});

displayLaptops(allLaptops);
