 const shopWhatsAppNumber = "919876543210"; // यहाँ अपना व्हाट्सएप नंबर बदल सकते हो

let selectedLaptop = "";
let selectedPrice = "";

function openOrderModal(laptopName, laptopPrice) {
    selectedLaptop = laptopName;
    selectedPrice = laptopPrice;
    document.getElementById("modalLaptopInfo").innerText = `Item: ${laptopName} (${laptopPrice})`;
    document.getElementById("orderModal").style.display = "flex";
}

function closeOrderModal() {
    document.getElementById("orderModal").style.display = "none";
}

function submitOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById("custName").value;
    const phone = document.getElementById("custPhone").value;
    const address = document.getElementById("custAddress").value;
    
    const messageText = `*New Second-Hand Laptop Order* 🛒\n\n` +
                        `💻 *Laptop:* ${selectedLaptop}\n` +
                        `💰 *Price:* ${selectedPrice}\n\n` +
                        `👤 *Customer Name:* ${name}\n` +
                        `📞 *WhatsApp:* ${phone}\n` +
                        `📍 *Address:* ${address}`;
    
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappURL = `https://whatsapp.com{shopWhatsAppNumber}&text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    closeOrderModal();
    document.getElementById("bookingForm").reset();
}

window.onclick = function(event) {
    const modal = document.getElementById("orderModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
