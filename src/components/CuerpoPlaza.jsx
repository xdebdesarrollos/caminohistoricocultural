import { useState } from "react";
import'../css/styles.css'

export default function Cuerpo() {
    const images = [
        "./images/PlazaColon/img1.jpg",
        "./images/PlazaColon/img2.jpg",
        "./images/PlazaColon/img3.jpg",
        "./images/PlazaColon/img4.jpg"
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    function showSlide(index) {
        const totalSlides = images.length;
        setCurrentSlide((index + totalSlides) % totalSlides); // Bucle infinito
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    return (
        <section className="info">
            <h2>Bienvenidos a la Plaza Colón</h2>
            <p>
                La Plaza Colón es un espacio lleno de historia, naturaleza y cultura. Descubre los eventos, 
                monumentos y la riqueza natural que hacen de este lugar un símbolo de Jardín América.
            </p>
            <div id="carousel">
                <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
                <div className="carousel-container">
                    <div 
                        className="carousel-slides"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Foto ${index + 1}`} />
                        ))}
                    </div>
                </div>
                <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className="audio-section">
                <h3>Escucha la historia de la Plaza Colón</h3>
                <audio controls>
                    <source src="https://via.placeholder.com/audio.mp3" type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </div>
        </section>
    );
}
