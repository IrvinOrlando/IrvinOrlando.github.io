document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slides img");
    const thumbnails = document.querySelectorAll(".thumbnails img");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            slide.style.opacity = (i === index) ? "1" : "0";
        });
    }

    function startSlideshow() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);
    }

    function stopSlideshow() {
        clearInterval(interval);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            stopSlideshow();
            currentIndex = index;
            showSlide(index);
            startSlideshow();
        });
    });

    showSlide(currentIndex);
    startSlideshow();
});
document.getElementById('conversion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var pesos = parseFloat(document.getElementById('pesos').value);
    var tipoCambio = 17.50; 
    
    var dolares = pesos * tipoCambio;
    
    document.getElementById('resultado').innerText = "Dolares (EU) = " + dolares.toFixed(2);
});

