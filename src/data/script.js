
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = slides.children.length;
    currentSlide = (index + totalSlides) % totalSlides; // Permite un bucle infinito
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}
