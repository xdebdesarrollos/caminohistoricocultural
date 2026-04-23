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
        <h1>Bienvenidos a la Parroquia Cristo Redentor</h1>
        <p className="text-info">
          La Parroquia Cristo Redentor, ubicada en el corazón de Jardín América, Misiones, la Parroquia Cristo Redentor es un símbolo de fe y unión para la comunidad. Su historia se remonta a los primeros años de la ciudad, cuando los fieles sintieron la necesidad de un espacio donde congregarse para la oración y la celebración de la Eucaristía.
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
          <h2 style={{ color: "black", textAlign: "center" }}>Disfruta de estos videos sobre la Parroquia Cristo Redentor</h2>
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
                src="https://www.youtube.com/embed/XAmv8utabFY"
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
                src="https://www.youtube.com/embed/cPt7qP9dnMQ"
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
                  <button onClick={() => handlePlayPause("./audio/ParroquiaCristoR/HistoriaParroquiaCR.mp3")}>
                    {isPlaying && currentAudio.includes("Historia") ? "⏸" : "▶"} Historia Parroquia Cristo Redentor.
                  </button>
                )}

                {/* CULTURA */}
                {audioCategory === "cultura" && (
                  <button onClick={() => handlePlayPause("./audio/ParroquiaCristoR/CulturaParroquiaCR.mp3")}>
                    {isPlaying && currentAudio.includes("Cultura") ? "⏸" : "▶"} Cultura y Tradición
                  </button>
                )}

                {/* DESCRIPCIÓN */}
                {audioCategory === "descripcion" && (
                    <button onClick={() => handlePlayPause("./audio/ParroquiaCristoR/DescripcionParroquiaCR.mp3")}>
                    {isPlaying && currentAudio.includes("Descripción") ? "⏸" : "▶"} Descripción de la Parroquia Cristo Redentor.
                    </button>
                )}

                {/* UBICACIÓN */}
                {audioCategory === "ubicacion" && (
                    <button onClick={() => handlePlayPause("./audio/ParroquiaCristoR/UbicacionParroquiaCR.mp3")}>
                      {isPlaying && currentAudio.includes("Ubicación") ? "⏸" : "▶"} Ubicación.
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
