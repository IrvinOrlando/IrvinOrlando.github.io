function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;

    const whatsappMessage = `Nombre: ${name}%0AEmail: ${email}%0ACalificación: ${rating}%0AMensaje: ${message}`;

    const phoneNumber = "+524411079978"; // Reemplaza con el número de WhatsApp destinatario
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
}
