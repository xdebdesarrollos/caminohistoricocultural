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
    "./images/CristoDeLaAmistad/img000.jpg",
    "./images/CristoDeLaAmistad/img001.jpg",
    "./images/CristoDeLaAmistad/img002.jpg",    
    "./images/CristoDeLaAmistad/img1.jpg",
    "./images/CristoDeLaAmistad/img2.jpg",
    "./images/CristoDeLaAmistad/img3.jpg",
    "./images/CristoDeLaAmistad/img4.jpg",
    "./images/CristoDeLaAmistad/img5.jpg",
    "./images/CristoDeLaAmistad/img6.jpg",
    "./images/CristoDeLaAmistad/img7.jpg",
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
        <h1>Bienvenidos al Cristo de la Amistad</h1>
        <p className="text-info">
          El Cristo de la Amistad, una obra maestra del escultor chileno Luis Javín Sizzara, 
          se yergue en el ingreso sur la Ciudad. La obra inicial, fue tallada en madera. Esta majestuosa escultura representa una figura de Cristo crucificado, símbolo de fe y esperanza para la comunidad.
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
              <img src={images[currentImage]} alt="" className="carousel-image" />
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
          <h2 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre el Cristo de la Amistad</h2>
          <div className="video-container">
            {/* Video 1 */}
            <div className="video">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/dZMe4K4-gRA"
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
            {/* Video 3 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src=""
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
                src=""    
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
                src=""  
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
                    {isPlaying && currentAudio.includes("Historia") ? "⏸" : "▶"} Historia Cristo de la amistad.
                  </button>
                )}

                {/* CULTURA */}
                {audioCategory === "cultura" && (
                  <button onClick={() => handlePlayPause("./audio/SaltoTabay/CulturaSaltoTabay.mp3")}>
                    {isPlaying && currentAudio.includes("Cultura") ? "⏸" : "▶"} Cultura y Tradición
                  </button>
                )}

                {/* DESCRIPCIÓN */}
                {audioCategory === "descripcion" && (
                    <button onClick={() => handlePlayPause("./audio/SaltoTabay/DescripcionSaltoTabay.mp3")}>
                    {isPlaying && currentAudio.includes("Descripción") ? "⏸" : "▶"} Descripción del Cristo.
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