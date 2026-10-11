 // नई काम करने वाली पीएनजी इमेजेस के साथ डेटा
const allLaptops = [
    { id: 1, name: "ThinkPad T480s", price: 18500, specs: "i5 8th Gen | 16GB RAM | 512GB SSD", badge: "best", image: "https://officialosim.com", stock: "🔥 Only 2 Left!" },
    { id: 2, name: "Dell Latitude 7490", price: 16500, specs: "i5 8th Gen | 16GB RAM | 256GB SSD", badge: "deal", image: "https://officialosim.com", stock: "⚡ Selling Fast" },
    { id: 3, name: "HP EliteBook 840 G5", price: 22000, specs: "i7 8th Gen | 16GB RAM | 512GB SSD", badge: "best", image: "https://officialosim.com", stock: "🔥 Only 1 Left!" },
    { id: 4, name: "Apple MacBook Air M1", price: 46500, specs: "Apple M1 Chip | 8GB RAM | 256GB SSD Retina", badge: "apple", image: "https://officialosim.com", stock: "🍏 Premium Quality" },
    { id: 5, name: "Apple MacBook Pro M2", price: 68000, specs: "Apple M2 Chip | 16GB RAM | 512GB SSD Touchbar", badge: "apple", image: "https://officialosim.com", stock: "🔥 In High Demand" },
    { id: 6, name: "Lenovo ThinkPad L14", price: 24500, specs: "Ryzen 5 | 8GB RAM | 512GB SSD", badge: "deal", image: "https://officialosim.com", stock: "⚡ 3 Items Left" }
];

// दोनों भाषाओं का डेटाबेस (FAQ Dictionary)
const faqData = {
    hi: {
        title: "❓ About Our Shop & FAQ (अक्सर पूछे जाने वाले सवाल)",
        items: [
            { q: "Q1: क्या ये लैपटॉप बिल्कुल ठीक काम करते हैं?", a: "Ans: जी हाँ! हमारे सभी लैपटॉप्स को इंजीनियर्स द्वारा 25+ क्वालिटी चेक पॉइंट्स पर टेस्ट किया जाता है। स्क्रीन, बैटरी, कीबोर्ड सब कुछ परफेक्ट वर्किंग कंडीशन में होता है।" },
            { q: "Q2: ऑर्डर कैसे बुक करें और डिलीवरी कैसे होगी?", a: "Ans: आपको जो लैपटॉप पसंद आए, उसके 'अभी खरीदें' बटन पर क्लिक करें, अपना नाम-पता भरें। आपकी डिटेल्स सीधे हमारे WhatsApp पर आ जाएंगी और हम आपसे संपर्क करके कैश ऑन डिलीवरी भेज देंगे।" },
            { q: "Q3: अगर लैपटॉप में कोई दिक्कत आई तो?", a: "Ans: हम अपने हर लैपटॉप पर 6 महीने की फुल वारंटी (6-Month Warranty) देते हैं, ताकि आप बिना किसी फिक्र के लैपटॉप इस्तेमाल कर सकें।" }
        ]
    },
    en: {
        title: "❓ About Our Shop & FAQ",
        items: [
            { q: "Q1: Do these laptops work perfectly?", a: "Ans: Yes! All our laptops are tested on 25+ quality check-points by expert engineers. Screen, battery, and keyboard are in 100% working condition." },
            { q: "Q2: How to book an order and get delivery?", a: "Ans: Click the 'Buy Now' button on your favorite laptop, fill in your details. Order details will go directly to our WhatsApp, and we will ship via Cash on Delivery." },
            { q: "Q3: What if I face any issue with the laptop?", a: "Ans: We provide a full 6-Month replacement warranty on all our laptops so you can buy with 100% peace of mind." }
        ]
    }
};

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
        // फॉलबैक इमेज के साथ सेफ इमेज रेंडरिंग
        card.innerHTML = `
            <span class="badge ${laptop.badge}">${badgeText}</span>
            <img src="${laptop.image}" alt="${laptop.name}" class="laptop-img" onerror="this.src='https://officialosim.com'">
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

// भाषा बदलने का डायनामिक फंक्शन
function switchLanguage(lang) {
    document.getElementById('faqTitle').innerText = faqData[lang].title;
    const container = document.getElementById('faqContainer');
    container.innerHTML = "";
    
    faqData[lang].items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `<h4>${item.q}</h4><p>${item.a}</p>`;
        container.appendChild(div);
    });

    // एक्टिव बटन की स्टाइल बदलने के लिए
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// स्पिन लॉजिक
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

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const enteredCode = document.getElementById('custCode').value.trim().toUpperCase();
    const address = document.getElementById('custAddress').value;
    
    const myWhatsAppNumber = "919876543210"; 

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

// पहली बार पेज खुलने पर लैपटॉप्स और डिफ़ॉल्ट हिंदी FAQ सेट करें
displayLaptops(allLaptops);
switchLanguage('hi');
