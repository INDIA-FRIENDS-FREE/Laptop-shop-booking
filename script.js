 const allLaptops = [
    { 
        id: 1, 
        name: "ThinkPad T480s", 
        price: 18500, 
        specs: "i5 8th Gen | 16GB RAM | 512GB SSD", 
        badge: "best", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="2" fill="#1a1a1a"/><rect x="23" y="13" width="54" height="32" fill="#000000"/><circle cx="50" cy="29" r="1.5" fill="#d9534f"/><rect x="10" y="48" width="80" height="4" rx="1" fill="#2b2b2b"/><path d="M 40 48 L 43 51 L 57 51 L 60 48 Z" fill="#1a1a1a"/><text x="50" y="32" fill="#555" font-size="4" font-family="sans-serif" text-anchor="middle">ThinkPad</text></svg>', 
        stock: "🔥 Only 2 Left!" 
    },
    { 
        id: 2, 
        name: "Dell Latitude 7490", 
        price: 16500, 
        specs: "i5 8th Gen | 16GB RAM | 256GB SSD", 
        badge: "deal", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="2" fill="#3a3f44"/><rect x="23" y="13" width="54" height="32" fill="#f8f9fa"/><circle cx="50" cy="29" r="6" fill="none" stroke="#007bff" stroke-width="1"/><rect x="10" y="48" width="80" height="4" rx="1" fill="#2b2b2b"/><text x="50" y="31" fill="#007bff" font-size="5" font-family="sans-serif" font-weight="bold" text-anchor="middle">DELL</text></svg>', 
        stock: "⚡ Selling Fast" 
    },
    { 
        id: 3, 
        name: "HP EliteBook 840 G5", 
        price: 22000, 
        specs: "i7 8th Gen | 16GB RAM | 512GB SSD", 
        badge: "best", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="2" fill="#d1d5db"/><rect x="23" y="13" width="54" height="32" fill="#ffffff"/><rect x="10" y="48" width="80" height="4" rx="1" fill="#9ca3af"/><text x="50" y="32" fill="#718096" font-size="7" font-family="sans-serif" font-style="italic" font-weight="bold" text-anchor="middle">hp</text></svg>', 
        stock: "🔥 Only 1 Left!" 
    },
    { 
        id: 4, 
        name: "Apple MacBook Air M1", 
        price: 46500, 
        specs: "Apple M1 Chip | 8GB RAM | 256GB SSD Retina", 
        badge: "apple", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="3" fill="#e2e8f0"/><rect x="22" y="12" width="56" height="34" fill="#ffffff"/><path d="M 50 25 Q 48 25 48 28 Q 48 31 50 31 Q 52 31 52 28 Q 52 25 50 25 Z M 51 23 Q 52 22 51 21 Q 50 22 50 23 Z" fill="#a0aec0"/><rect x="10" y="48" width="80" height="3" rx="1" fill="#cbd5e1"/></svg>', 
        stock: "🍏 Premium Quality" 
    },
    { 
        id: 5, 
        name: "Apple MacBook Pro M2", 
        price: 68000, 
        specs: "Apple M2 Chip | 16GB RAM | 512GB SSD Touchbar", 
        badge: "apple", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="3" fill="#64748b"/><rect x="22" y="12" width="56" height="34" fill="#0f172a"/><path d="M 50 25 Q 48 25 48 28 Q 48 31 50 31 Q 52 31 52 28 Q 52 25 50 25 Z M 51 23 Q 52 22 51 21 Q 50 22 50 23 Z" fill="#94a3b8"/><rect x="10" y="48" width="80" height="3" rx="1" fill="#475569"/></svg>', 
        stock: "🔥 In High Demand" 
    },
    { 
        id: 6, 
        name: "Lenovo ThinkPad L14", 
        price: 24500, 
        specs: "Ryzen 5 | 8GB RAM | 512GB SSD", 
        badge: "deal", 
        imageHtml: '<svg viewBox="0 0 100 60" width="100%" height="160"><rect x="20" y="10" width="60" height="38" rx="2" fill="#262626"/><rect x="23" y="13" width="54" height="32" fill="#0a0a0a"/><circle cx="50" cy="29" r="1.5" fill="#e11d48"/><rect x="10" y="48" width="80" height="4" rx="1" fill="#404040"/><text x="50" y="32" fill="#555" font-size="4" font-family="sans-serif" text-anchor="middle">ThinkPad</text></svg>', 
        stock: "⚡ 3 Items Left" 
    }
];

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
    if (!container) return;
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
            <div class="laptop-img-wrapper">${laptop.imageHtml}</div>
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

if(document.getElementById('searchBar')) document.getElementById('searchBar').addEventListener('input', filterLaptops);
if(document.getElementById('minPrice')) document.getElementById('minPrice').addEventListener('input', filterLaptops);
if(document.getElementById('maxPrice')) document.getElementById('maxPrice').addEventListener('input', filterLaptops);

function switchLanguage(lang) {
    const titleEl = document.getElementById('faqTitle');
    const container = document.getElementById('faqContainer');
    if(!titleEl || !container) return;

    titleEl.innerText = faqData[lang].title;
    container.innerHTML = "";
    
    faqData[lang].items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'faq-item';
        div.innerHTML = `<h4>${item.q}</h4><p>${item.a}</p>`;
        container.appendChild(div);
    });

    const btnHi = document.getElementById('btnHi');
    const btnEn = document.getElementById('btnEn');
    if(btnHi && btnEn) {
        if (lang === 'hi') {
            btnHi.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnHi.classList.remove('active');
        }
    }
}

let canSpin = true; 
function spinWheel() {
    if (!canSpin) {
        document.getElementById('spinResult').style.color = "#dc3545";
        document.getElementById('spinResult').innerText = "❌ आप अपना फाइनल इनाम और कोड जीत चुके हैं!";
        return;
    }
    const wheel = document.getElementById('wheel');
    const btn = document.getElementById('spinBtn');
    if(!wheel || !btn) return;
    
    btn.disabled = true; 
    document.getElementById('spinResult').style.color = "#28a745";
    document.getElementById('spinResult').innerText = "🔄 भाग्य का पहिया घूम रहा है...";

    const gifts = ["Keyboard ⌨️", "₹400 Discount 💰", "Mouse 🖱️", "₹600 Discount 💵", "Bag 🎒", "₹550 Discount 💸"];
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
