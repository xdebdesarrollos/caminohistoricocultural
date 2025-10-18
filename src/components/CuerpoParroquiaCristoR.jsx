import { useState, useEffect } from "react";
import { motion, AnimatePresence} from "framer-motion";
import "../css/styles.css";

export default function Cuerpo() {
  const [activeAudio, setActiveAudio] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "./images/ParroquiaCristoRedentor/cr01.JPG",
    "./images/ParroquiaCristoRedentor/cr02.JPG",
    "./images/ParroquiaCristoRedentor/cr03.JPG",
    "./images/ParroquiaCristoRedentor/img0.jpg",
    "./images/ParroquiaCristoRedentor/img1.jpg",
    "./images/ParroquiaCristoRedentor/img2.jpg",
    "./images/ParroquiaCristoRedentor/img3.jpg",
    "./images/ParroquiaCristoRedentor/img4.jpg",
    "./images/ParroquiaCristoRedentor/img5.jpg",
    "./images/ParroquiaCristoRedentor/img6.jpg",
    "./images/ParroquiaCristoRedentor/img7.jpg",
    "./images/ParroquiaCristoRedentor/img8.jpg",
    "./images/ParroquiaCristoRedentor/img9.JPG",
    "./images/ParroquiaCristoRedentor/img10.JPG",
    "./images/ParroquiaCristoRedentor/img11.JPG",
    "./images/ParroquiaCristoRedentor/img12.JPG",
    "./images/ParroquiaCristoRedentor/img13.jpg",
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
        <h2>Bienvenidos a la Parroquia Cristo Redentor</h2>
        <p style={{ color: "black" }}>
            La Parroquia Cristo Redentor, ubicada en el corazón de Jardín América, Misiones, la Parroquia Cristo Redentor es un símbolo de fe y unión para la comunidad. Su historia se remonta a los primeros años de la ciudad, cuando los fieles sintieron la necesidad de un espacio donde congregarse para la oración y la celebración de la Eucaristía.
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
          <h3 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre la Parroquia Cristo Redentor</h3>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/AvxorDB-7lg" 
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
                src="https://www.youtube.com/embed/e-QmTZxi0l8" 
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
          <h3 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>🎧 Audios de la Parroquia Cristo Redentor</h3>

          <div className="audio-menu">
            {[
              { title: "🎙 Historia", files: ["./audio/PlazaColonHistoria.mp3"] },
              { title: "🎶 Cultura y tradición", files: ["./audio/PlazaColonCultura.mp3"] },
              { title: "👵 Testimonios de vecinos", files: ["./audio/testimonios.mp3"] },
              { title: "🌳 Sonidos Parroquia Cristo Redentor", files: ["./audio/sonidos.mp3"] },
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
