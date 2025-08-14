import { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import "../css/styles.css";

export default function Cuerpo() {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
        "./images/PlazaColon/IntendJorgeMachon.jpg",
        "./images/PlazaColon/PrimeraEtapa.jpg",
        "./images/PlazaColon/SegundaEtapa.jpg",
        "./images/PlazaColon/1966.jpg",
        "./images/PlazaColon/Barquito.jpg",
        "./images/PlazaColon/VistaAerea.jpg",
        "./images/PlazaColon/Plaza1.jpg",
        "./images/PlazaColon/Plaza2.jpg",
        "./images/PlazaColon/Plaza3.jpg",
        "./images/PlazaColon/Plaza4.jpg",
        "./images/PlazaColon/Aerea01.jpg",
        "./images/PlazaColon/Aerea02.jpg",
        "./images/PlazaColon/Aerea03.jpg",
        "./images/PlazaColon/Aerea04.jpg",
        "./images/PlazaColon/img1.jpg",
        "./images/PlazaColon/img2.jpg",
        "./images/PlazaColon/img3.jpg",
        "./images/PlazaColon/img4.jpg",
        "./images/PlazaColon/img5.jpg",
        "./images/PlazaColon/img6.jpg",
        "./images/PlazaColon/img7.jpg",
        "./images/PlazaColon/img8.jpg",
        "./images/PlazaColon/img9.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Variantes de animación fade lento
  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="contenedor-principal">
      {/* Sección de Información (Fija) */}
      <div className="info">
        <h2>Bienvenidos a la Plaza Colón</h2>
        <p style={{ color: "black" }}>
            La Plaza Colón ubicada en el centro de la ciudad, es un espacio lleno de historia, naturaleza y cultura. Descubre los eventos, monumentos y la riqueza natural que hacen de este lugar un símbolo de Jardín América.
        </p>
      </div>
      {/* Íconos de selección */}
      <div className="icon-container">
        <button onClick={() => setActiveSection("carousel")}>
          <img src="./images/icons/carpetadeimagenes.png" alt="Carrusel" /><div className="icon-titulo">Imágenes</div>
        </button>
        <button onClick={() => setActiveSection("audio")}>
          <img src="./images/icons/audio.png" alt="Audio" /><div className="icon-titulo">Audio</div>
        </button>
        <button onClick={() => setActiveSection("video")}>
          <img src="./images/icons/videos.png" alt="Videos" /><div className="icon-titulo">Videos</div>
        </button>
      </div>

      {/* Secciones animadas con AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeSection === "carousel" && (
          <motion.div
            key="carousel"
            className="carousel-section"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ color: "black", textAlign: "center" }}>Galería de imágenes</h3>
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={handlePrevImage}>❮</button>
              <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} className="carousel-image" />
              <button className="carousel-btn next" onClick={handleNextImage}>❯</button>
            </div>
            <div className="btn"><button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button></div>
          </motion.div>
        )}

      {/* Sección de Videos */}
      {activeSection === "video" && (
        <motion.div
          key="video"
          className="video-section"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.8 }}
        >
          <h3 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre la Plaza Colón</h3>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/-yurqeZ41ds" 
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
                src="https://www.youtube.com/embed/UVoQE0VIT1k" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="btn"><button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button></div>
          
        </motion.div>
      )}

      {/* Sección de Audio */}
      {activeSection === "audio" && (
        <motion.div
            key="audio"
            className="audio-section"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8 }}
          >
            <h3>Escucha la historia de la Plaza Colón</h3>
            <audio controls>
            <source src="./audio/PlazaColon.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
            </audio>
            <div className="btn"><button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button></div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}