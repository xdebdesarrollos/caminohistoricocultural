import { useState } from "react";
import { motion } from "framer-motion";
import "../css/styles.css";

export default function Cuerpo() {
  const images = [
    "./images/CristoDeLaHermandad/img1.jpg",
    "./images/CristoDeLaHermandad/img2.jpg",
    "./images/CristoDeLaHermandad/img3.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(0.6);  // Velocidad de la animación

  // Funciones para el carrusel de imágenes
  function showSlide(index) {
    const totalSlides = images.length;
    setCurrentSlide((index + totalSlides) % totalSlides);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Variantes de animación
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, x: "100%" }, // Para el carrusel (aparece desde la derecha)
    visible: { opacity: 1, y: 0, x: 0 },
    exit: { opacity: 0, y: -50, x: "-100%" }, // Se oculta de la parte superior
  };

  const carouselVariants = {
    hidden: { opacity: 0, x: "-100%" }, // Aparece desde la izquierda
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" }, // Se oculta hacia la izquierda
  };

  const audioVariants = {
    hidden: { opacity: 0, x: "100%" }, // Aparece desde la derecha
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" }, // Se oculta hacia la derecha
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }, // Animación de ocultación
  };

  return (
    <section className="contenedor-principal">
      {/* Íconos de selección */}
      <div className="icon-container">
        <button onClick={() => setActiveSection("carousel")}>
          <img src="./images/icons/carousel.png" alt="Carrusel" />
        </button>
        <button onClick={() => setActiveSection("audio")}>
          <img src="./images/icons/audio.png" alt="Audio" />
        </button>
        <button onClick={() => setActiveSection("video")}>
          <img src="./images/icons/video.png" alt="Videos" />
        </button>
      </div>

      {/* Sección de Información (Fija) */}
      <div className="info">
        <h2>Bienvenidos al Cristo de la Hermandad</h2>
        <p style={{ color: "white" }}>
          El Cristo de la Hermandad, una obra maestra del escultor chileno Luis Javín Sizzara, 
          se yergue imponente en la ciudad de Jardín América, Misiones. Tallada en madera, 
          esta majestuosa escultura representa una figura de Cristo crucificado, símbolo de fe y 
          esperanza para la comunidad.
        </p>
      </div>

      {/* Sección de Videos */}
      {activeSection === "video" && (
        <motion.div
          className="video-section"
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: animationSpeed }}
        >
          <h3>Disfruta de estos videos sobre el Cristo de la Hermandad</h3>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/your_video_id" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 2 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/your_video_id" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button>
        </motion.div>
      )}

      {/* Carrusel de Imágenes */}
      {activeSection === "carousel" && (
        <motion.div
          className="carousel"
          variants={carouselVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: animationSpeed }}
        >
          <button className="carousel-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
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
          <button className="carousel-btn next" onClick={nextSlide}>
            &#10095;
          </button>
          <button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button>
        </motion.div>
      )}

      {/* Sección de Audio */}
      {activeSection === "audio" && (
        <motion.div
          className="audio-section"
          variants={audioVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: animationSpeed }}
        >
          <h3>Escucha la historia del Cristo de la Hermandad</h3>
          <audio controls>
            <source src="https://via.placeholder.com/audio.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button>
        </motion.div>
      )}
    </section>
  );
}
