// अपनी दुकान की असली डिटेल्स यहाँ सेट करो भाई
const shopWhatsAppNumber = "919876543210"; // यहाँ 91 के साथ अपना नंबर डालो

let selectedLaptop = "";
let selectedPrice = "";

// 1. पॉप-अप फॉर्म खोलने का फंक्शन
function openOrderModal(laptopName, laptopPrice) {
    selectedLaptop = laptopName;
    selectedPrice = laptopPrice;
    
    // पॉप-अप में लैपटॉप की जानकारी दिखाना
    document.getElementById("modalLaptopInfo").innerText = `Item: ${laptopName} (${laptopPrice})`;
    
    // मॉडल को स्क्रीन पर दिखाना
    document.getElementById("orderModal").style.display = "flex";
}

// 2. पॉप-अप फॉर्म बंद करने का फंक्शन
function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

// 3. व्हाट्सएप पर बुकिंग डेटा भेजने का असली जादू
function submitOrder(event) {
    event.preventDefault(); // पेज रीफ्रेश होने से रोकना
    
    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const address = document.getElementById("custAddress").value;
    
    // व्हाट्सएप मैसेज का टेक्स्ट तैयार करना
    const messageText = `*New Second-Hand Laptop Order* 🛒\n\n` +
                        `💻 *Laptop:* ${selectedLaptop}\n` +
                        `💰 *Price:* ${selectedPrice}\n\n` +
                        `👤 *Customer Name:* ${name}\n` +
                        `📞 *WhatsApp:* ${phone}\n` +
                        `📍 *Address:* ${address}`;
    
    // टेक्स्ट को यूआरएल फॉर्मेट में बदलना
    const encodedMessage = encodeURIComponent(messageText);
    
    // सीधे व्हाट्सएप एपीआई लिंक खोलना
    const whatsappURL = `https://whatsapp.com{shopWhatsAppNumber}&text=${encodedMessage}`;
    
    // नए टैब में व्हाट्सएप खोलना
    window.open(whatsappURL, '_blank');
    
    // फॉर्म बंद करना
    closeOrderModal();
    document.getElementById("bookingForm").reset();
}

// बाहरी जगह पर क्लिक करने से पॉप-अप बंद होना
window.onclick = function(event) {
    const modal = document.getElementById("orderModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
