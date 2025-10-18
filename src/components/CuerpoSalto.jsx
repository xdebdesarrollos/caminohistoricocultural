import { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import "../css/styles.css";

export default function Cuerpo() {
  const [activeAudio, setActiveAudio] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
        "./images/SaltosTabay/Salto00.jpg",
        "./images/SaltosTabay/Salto1.jpg",
        "./images/SaltosTabay/Salto2.jpg",
        "./images/SaltosTabay/Salto3.jpg",
        "./images/SaltosTabay/Salto4.jpg",
        "./images/SaltosTabay/Salto5.jpg",
        "./images/SaltosTabay/Salto6.jpg",
        "./images/SaltosTabay/salto7.jpg",
        "./images/SaltosTabay/Salto8.jpg",
        "./images/SaltosTabay/Salto9.jpg",
        "./images/SaltosTabay/Salto10.jpg",
        "./images/SaltosTabay/Salto11.jpg",
        "./images/SaltosTabay/Salto12.jpg",
        "./images/SaltosTabay/salto13.jpg",
        "./images/SaltosTabay/salto14.jpg",
        "./images/SaltosTabay/Salto15.jpg",
        "./images/SaltosTabay/Salto16.jpg",
        "./images/SaltosTabay/Salto17.jpg",
        "./images/SaltosTabay/Salto18.JPG",
        "./images/SaltosTabay/Salto19.JPG",
        "./images/SaltosTabay/Salto20.JPG",
        "./images/SaltosTabay/Salto21.JPG",
        "./images/SaltosTabay/Salto22.JPG",
        "./images/SaltosTabay/Salto23.JPG",
        "./images/SaltosTabay/Salto24.JPG",
        "./images/SaltosTabay/Salto25.JPG",
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
        <h2>Bienvenidos a los Saltos del Tabay</h2>
        <p style={{ color: "black" }}>
            Los Saltos del Tabay, ubicado a pocos kilómetros del casco urbano, es un lugar emblemático donde la naturaleza y la cultura se encuentran. Descubrí su imponente cascada, los senderos rodeados de selva y el valor histórico que lo convierte en un orgullo de Jardín América.
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
          <h3 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre Los Saltos del Tabay</h3>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/61ApPg7XdkA" 
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
                src="https://www.youtube.com/embed/MYOQpFL6QLc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 3 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/-qOS4deTN6E" 
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

 {/* Sección de Audio con Menú Moderno */}
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
          <h3 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>🎧 Audios de los Saltos del Tabay</h3>

          <div className="audio-menu">
            {[
              { title: "🎙 Historia", files: ["./audio/PlazaColonHistoria.mp3"] },
              { title: "🎶 Cultura y tradición", files: ["./audio/PlazaColonCultura.mp3"] },
              { title: "👵 Testimonios de vecinos", files: ["./audio/testimonios.mp3"] },
              { title: "🌳 Sonidos de los Saltos del Tabay", files: ["./audio/sonidos.mp3"] },
              { 
                title: "🌟 Curiosidades", 
                files: [
                  "./audio/PlazaColonCuriosidadesCancha.mp3", 
                  "./audio/PlazaColonCuriosidadesCarreraCaballo.mp3"   // 🔹 Nuevo audio agregado
                ] 
              },
              { title: "🎓 Para las escuelas", files: ["./audio/escuelas.mp3"] },
            ].map((audio, index) => (
              <motion.div
                key={index}
                className={`audio-card ${activeAudio === index ? "active" : ""}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <h4>{audio.title}</h4>

                {/* Iteramos cada archivo dentro de la tarjeta */}
                {audio.files.map((file, fileIndex) => (
                  <audio
                    key={fileIndex}
                    controls
                    className="audio-player"
                    onPlay={(e) => {
                      // Detiene los demás audios
                      document.querySelectorAll("audio").forEach((el) => {
                        if (el !== e.target) {
                          el.pause();
                          el.currentTime = 0;
                        }
                      });
                      setActiveAudio(index); // Marca la tarjeta activa
                    }}
                    onPause={() => {
                      setActiveAudio(null);
                    }}
                  >
                    <source src={file} type="audio/mpeg" />
                    Tu navegador no soporta el elemento de audio.
                  </audio>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="btn">
            <button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}