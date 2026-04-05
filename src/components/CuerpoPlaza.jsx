import { useState, useEffect } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import "../css/styles.css";


export default function Cuerpo() {
  const [audioCategory, setAudioCategory] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
        "./images/PlazaColon/IntendJorgeMachon.jpg",
        "./images/PlazaColon/ConstrucciónPlazacolon.jpg",
        "./images/PlazaColon/PrimeraEtapa.jpg",
        "./images/PlazaColon/SegundaEtapa.jpg",
        "./images/PlazaColon/1966.jpg",
        "./images/PlazaColon/barquito.jpg",
        "./images/PlazaColon/VistaAerea.jpg",
        "./images/PlazaColon/Plaza3.jpg",
        "./images/PlazaColon/Plaza4.jpg",
        "./images/PlazaColon/plaza1996.jpg",
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
        "./images/PlazaColon/img10.jpg",
        "./images/PlazaColon/img11.jpg",
        "./images/PlazaColon/img12.jpg",
        "./images/PlazaColon/img13.jpg",
        "./images/PlazaColon/img14.jpg",
        "./images/PlazaColon/img15.jpg",
        "./images/PlazaColon/img16.jpg",
        
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
        <h1>Bienvenidos a la Plaza Colón</h1>
        <p className="text-info">
            La Plaza Colón ubicada en el centro de la ciudad, es un espacio lleno de historia, naturaleza y cultura. Descubre los eventos, monumentos y la riqueza natural que hacen de este lugar un símbolo de Jardín América.
        </p>
      </div>
      {/* Íconos de selección */}
      <div className="icon-containers">
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
            <h2 style={{ color: "black", textAlign: "center" }}>Galería de imágenes</h2>
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
          <h2 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre la Plaza Colón</h2>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/eAG4K8vlu6Q"
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
                src="https://www.youtube.com/embed/PaK0NF2yeco"
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
                src="https://www.youtube.com/embed/-yurqeZ41ds"  
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 4 */}
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

       <h2 style={{ color: "black", textAlign: "center" }}>🎧 Audios de la Plaza Colón</h2>
        {!audioCategory && (
          <div className="audio-categories">
            <button onClick={() => setAudioCategory("historia")} className="audio-category">
              Historia de la Plaza
            </button>

            <button onClick={() => setAudioCategory("cultura")} className="audio-category">
              Cultura y Tradición
            </button>

            <button onClick={() => setAudioCategory("monumentos")} className="audio-category">
              Monumentos
            </button>

            <button onClick={() => setAudioCategory("curiosidades")} className="audio-category">
              Curiosidades
            </button>

          </div>
        )}
        {audioCategory && (
        <div className="audio-player-area">
            <button className="back-btn" onClick={() => setAudioCategory(null)}>⬅ Volver
            </button>
            {audioCategory === "historia" && (
              <div className="audio-big">
                <h2 style={{ textAlign: "center" }}>Escuchar Historia de la Plaza</h2>
                <div className="museum-audio-player">
                  <button
                  className="play-btn"
                  onClick={() => {
                    const audio = document.getElementById("audio-player");
                    if (audio.paused) {
                      audio.play();
                    } else {
                      audio.pause();
                    }
                  }}
                  >
                   ▶
                  </button>
                  <audio id="audio-player">
                    <source src="./audio/PlazaColon/PlazaColonHistoria.mp3" type="audio/mpeg"/>
                  </audio>
                </div>
              </div>
            )}
            {audioCategory === "cultura" && (
              <div className="audio-big">
                <h2 style={{ textAlign: "center" }}>Escuchar Cultura y Tradición</h2>
                <div className="museum-audio-player">

                  <button
                    className="play-btn"
                    onClick={() => {
                      const audio = document.getElementById("audio-player");
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                      }
                    }}
                  >
                    ▶
                  </button>
                  <audio id="audio-player">
                      <source src="./audio/PlazaColon/PlazaColonCultura.mp3" type="audio/mpeg"/>
                  </audio>
                </div>                
              </div>
            )}
            {audioCategory === "monumentos" && (
              <div className="audio-big">
                <h2 style={{ textAlign: "center" }}>Escuchar sobre sus Monumentos</h2>
                <div className="museum-audio-player">
                  <button
                    className="play-btn"
                    onClick={() => {
                      const audio = document.getElementById("audio-player");
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                      }
                    }}
                  >
                    ▶
                  </button>
                  <audio id="audio-player">
                    <source src="./audio/PlazaColon/monumentos.mp3" type="audio/mpeg"/>
                  </audio>

                </div>                
              </div>
            )}
            {audioCategory === "curiosidades" && (
              <div className="audio-big">
                <h2 style={{ textAlign: "center" }}>Escuchar algunas Curiosidades</h2>
                {/* AUDIO 1 */}
                <div className="museum-audio-player">
                  <button
                    className="play-btn"
                    onClick={() => {
                      const audio = document.getElementById("audio1");
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                      }
                    }}
                  >
                    ▶
                  </button>
                  <audio id="audio1">
                    <source src="./audio/PlazaColon/PlazaColonCuriosidadesCancha.mp3" type="audio/mpeg"/>
                  </audio>
                  <h3 className="audio-label">La cancha de fútbol en la plaza</h3>
                </div>

                {/* AUDIO 2 */}
                <div className="museum-audio-player">
                  <button
                    className="play-btn"
                    onClick={() => {
                      const audio = document.getElementById("audio2");
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                      }
                    }}
                  >
                    ▶
                  </button>
                  <audio id="audio2">
                    <source src="./audio/PlazaColon/PlazaColonCuriosidadesCarreraCaballo.mp3" type="audio/mpeg"/>
                  </audio>
                  <h3 className="audio-label">Las carreras de caballos</h3>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="btn">
          <button className="close-btn" onClick={() => setActiveSection(null)}>
            ❌ Ocultar
          </button>
        </div>

      </motion.div>
)}

      </AnimatePresence>
    </section>
  );
}