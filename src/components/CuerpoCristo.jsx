import { useState } from "react";
import'../css/styles.css'

export default function Cuerpo() {
    const images = [
        "./images/CristoDeLaHermandad/img1.jpg",
        "./images/CristoDeLaHermandad/img2.jpg",
        "./images/CristoDeLaHermandad/img3.jpg",
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
            <h2>Bienvenidos al Cristo de la Hermandad</h2>
            <p style={{ color: 'white' }}>
                El Cristo de la Hermandad, una obra maestra del escultor chileno Luis Javín Sizzara, 
                se yergue imponente en la ciudad de Jardín América, Misiones. Tallada en madera, 
                esta majestuosa escultura representa una figura de Cristo crucificado, símbolo de fe y 
                esperanza para la comunidad.
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
                <h3>Escucha la historia del Cristo de la Hermandad</h3>
                <audio controls>
                    <source src="https://via.placeholder.com/audio.mp3" type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                </audio>
            </div>
        </section>
    );
}
