import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/styles.css";

export default function Cuerpo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCategory, setAudioCategory] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(null);

  const audioRef = useRef(null);

  const images = [
    { src: "./images/SaltosTabay/Salto001.jpg", descripcion: "Década del 50" },
    { src: "./images/SaltosTabay/Salto002.jpg", descripcion: "Ingreso Década del 60" },
    { src: "./images/SaltosTabay/Salto003.jpg", descripcion: "Construcción Pileta década del 60" },
    { src: "./images/SaltosTabay/Salto004.jpg", descripcion: "Proveduría Década del 90" },
    { src: "./images/SaltosTabay/Salto005.jpg", descripcion: "Ingreso Década del 90" },
    { src: "./images/SaltosTabay/Salto2.jpg", descripcion: "Arroyo crecido con desborde" },
    { src: "./images/SaltosTabay/Salto3.jpg", descripcion: "Arroyo crecido con desborde" },
    { src: "./images/SaltosTabay/Salto4.jpg", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/Salto5.jpg", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/Salto6.jpg", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/salto7.jpg", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/Salto8.jpg", descripcion: "Mirador Cascadas" }, 
    { src: "./images/SaltosTabay/Salto9.jpg", descripcion: "Mirador Cascadas" }, 
    { src: "./images/SaltosTabay/Salto10.jpg", descripcion: "Mirador Cascadas" }, 
    { src: "./images/SaltosTabay/Salto11.jpg", descripcion: "Cascadas gran caudal" },
    { src: "./images/SaltosTabay/Salto12.jpg", descripcion: "Cascadas gran caudal" },
    { src: "./images/SaltosTabay/salto13.jpg", descripcion: "Sillón Descanso" },
    { src: "./images/SaltosTabay/salto14.jpg", descripcion: "Pileta" },  
    { src: "./images/SaltosTabay/Salto15.jpg", descripcion: "Zona picnic" }, 
    { src: "./images/SaltosTabay/Salto16.jpg", descripcion: "Zona Picnic" },
    { src: "./images/SaltosTabay/Salto17.jpg", descripcion: "Pileta" },  
    { src: "./images/SaltosTabay/Salto18.JPG", descripcion: "Acceso 2025" }, 
    { src: "./images/SaltosTabay/Salto19.JPG", descripcion: "Acceso 2025" }, 
    { src: "./images/SaltosTabay/Salto20.JPG", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/Salto21.JPG", descripcion: "Quinchos" }, 
    { src: "./images/SaltosTabay/Salto22.JPG", descripcion: "Puente Pileta" }, 
    { src: "./images/SaltosTabay/Salto23.JPG", descripcion: "Zona Picnic" }, 
    { src: "./images/SaltosTabay/Salto24.JPG", descripcion: "Ingreso Rta 12" }, 
    { src: "./images/SaltosTabay/Salto25.JPG", descripcion: "Cascadas" }, 
    { src: "./images/SaltosTabay/Turista1997.jpg", descripcion: "Fiesta del Turista 1997" }, 
    { src: "./images/SaltosTabay/Turista1997Mereles.jpg", descripcion: "Fiesta del Turista 1997" },
    { src: "./images/SaltosTabay/Penias2025.jpg", descripcion: "Peña Verano 2025" },
    { src: "./images/SaltosTabay/Penias2026.jpg", descripcion: "Peña Verano 2026" },
    { src: "./images/SaltosTabay/Turista2024.jpg", descripcion: "Fiesta del Turista 2024" },
    { src: "./images/SaltosTabay/Turista2026.jpg", descripcion: "Fiesta del Turista 2026" },
    { src: "./images/SaltosTabay/DeporteSalto01.jpeg", descripcion: "Deportes en el Salto" },
    { src: "./images/SaltosTabay/DeporteSalto02.jpeg", descripcion: "Deportes en el Salto" },
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

  // CONTROL DE AUDIO
  const handlePlayPause = (src) => {
    if (!audioRef.current) return;

    if (currentAudio !== src) {
      audioRef.current.src = src;
      audioRef.current.play();
      setCurrentAudio(src);
      setIsPlaying(true);
    } else {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section className="contenedor-principal">
      <div className="info">
        <h1>Bienvenidos a los Saltos del Tabay</h1>
        <p className="text-info">
          El camping los Saltos del Tabay, ubicado a pocos kilómetros del casco urbano, es un lugar emblemático donde la naturaleza y la cultura se encuentran. Descubrí su imponente cascada, los senderos rodeados de selva y el valor histórico que lo convierte en un orgullo de Jardín América.
        </p>
      </div>

      <div className="icon-containers">
        <button onClick={() => setActiveSection("carousel")}>
          <img src="./images/icons/carpetadeimagenes.png" alt="Carrusel" />
          <div className="icon-titulo">Imágenes</div>
        </button>

        <button onClick={() => setActiveSection("audio")}>
          <img src="./images/icons/audio.png" alt="Audio" />
          <div className="icon-titulo">Audio</div>
        </button>

        <button onClick={() => setActiveSection("video")}>
          <img src="./images/icons/videos.png" alt="Videos" />
          <div className="icon-titulo">Videos</div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* ================== IMÁGENES ================== */}
        {activeSection === "carousel" && (
          <motion.div key="carousel" className="carousel-section" variants={fadeVariants} initial="hidden" animate="visible" exit="exit">
            <h2 style={{ color: "black", textAlign: "center" }}>Galería de imágenes</h2>
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={handlePrevImage}>❮</button>
              <div>
                  <img
                    src={images[currentImage].src}
                    alt={images[currentImage].descripcion}
                    className="carousel-image"
                  />
                  <p className="descripcion-imagen">
                    {images[currentImage].descripcion}
                  </p>
                </div>
              <button className="carousel-btn next" onClick={handleNextImage}>❯</button>
            </div>
                      <div className="btn"><button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button></div>
          </motion.div>
        )}

        {/* ================== VIDEOS ================== */}
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
          <h2 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre Los Saltos del Tabay</h2>
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
            {/* Video 4 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/eO-X9aJaIwU"    
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 5 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/e1_ZJHw9MMg"  
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

        {/* ================== AUDIO ================== */}
        {activeSection === "audio" && (
          <motion.div key="audio" className="audio-section" variants={fadeVariants} initial="hidden" animate="visible" exit="exit">

            <audio ref={audioRef} />

            <h2 style={{ textAlign: "center" }}>Audios</h2>

            {!audioCategory && (
              <div className="audio-categories">
                <button onClick={() => setAudioCategory("historia")}>Historia</button>
                <button onClick={() => setAudioCategory("cultura")}>Cultura</button>
                <button onClick={() => setAudioCategory("descripcion")}>Descripción</button>
                <button onClick={() => setAudioCategory("ubicacion")}>Ubicación</button>
              </div>
            )}

            {audioCategory && (
              <div className="audio-categories">
                <button onClick={() => setAudioCategory(null)}>⬅ Volver</button>&nbsp;

                {/* HISTORIA */}
                {audioCategory === "historia" && (
                  <button onClick={() => handlePlayPause("./audio/SaltoTabay/HistoriaSaltoTabay.mp3")}>
                    {isPlaying && currentAudio.includes("Historia") ? "⏸" : "▶"} Historia Salto Tabay
                  </button>
                )}

                {/* CULTURA */}
                {audioCategory === "cultura" && (
                  <button onClick={() => handlePlayPause("./audio/SaltoTabay/CulturaSaltoTabay.mp3")}>
                    {isPlaying && currentAudio.includes("Cultura") ? "⏸" : "▶"} Cultura, Fiestas y Tradición
                  </button>
                )}

                {/* DESCRIPCIÓN */}
                {audioCategory === "descripcion" && (
                    <button onClick={() => handlePlayPause("./audio/SaltoTabay/DescripcionSaltoTabay.mp3")}>
                    {isPlaying && currentAudio.includes("Descripción") ? "⏸" : "▶"} Descripción del Camping y Atractivos
                    </button>
                )}

                {/* UBICACIÓN */}
                {audioCategory === "ubicacion" && (
                    <button onClick={() => handlePlayPause("./audio/SaltoTabay/UbicacionSaltoTabay.mp3")}>
                      {isPlaying && currentAudio.includes("Ubicación") ? "⏸" : "▶"} Ubicación y Acceso
                    </button>
                )}
              </div>
            )}
          <div className="btn"><button className="close-btn" onClick={() => setActiveSection(null)}>❌ Ocultar</button></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}