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
{ src: "./images/PlazaColon/IntendJorgeMachon.jpg", descripcion: "Intendente Jorge Machón construcción Plaza Colón" },
    { src: "./images/PlazaColon/ConstrucciónPlazacolon.jpg", descripcion: "Construcción de la Plaza Colón" },
    { src: "./images/PlazaColon/PrimeraEtapa.jpg", descripcion: "Primera etapa de la plaza" },
    { src: "./images/PlazaColon/SegundaEtapa.jpg", descripcion: "Segunda etapa de construcción" },
    { src: "./images/PlazaColon/1966.jpg", descripcion: "Vista histórica 1966" },
    { src: "./images/PlazaColon/PlazaColonLugo1.jpg", descripcion: "Músico Sr Lugo y banda, Anfiteatro" },
    { src: "./images/PlazaColon/PlazaColonLugo2.jpg", descripcion: "Músico Sr Lugo y banda, Anfiteatro" },
    { src: "./images/PlazaColon/barquito.jpg", descripcion: "Tradicional barquito de la plaza" },
    { src: "./images/PlazaColon/VistaAerea.jpg", descripcion: "Vista aérea de la Plaza Colón" },
    { src: "./images/PlazaColon/Plaza3.jpg", descripcion: "Vista general de la plaza" },
    { src: "./images/PlazaColon/Plaza4.jpg", descripcion: "Otra perspectiva de la plaza" },
    { src: "./images/PlazaColon/Aerea01.jpg", descripcion: "Vista aérea 01" },
    { src: "./images/PlazaColon/Aerea02.jpg", descripcion: "Vista aérea 02" },
    { src: "./images/PlazaColon/Aerea03.jpg", descripcion: "Vista aérea 03" },
    { src: "./images/PlazaColon/Aerea04.jpg", descripcion: "Vista aérea Nocturna" },
    { src: "./images/PlazaColon/img1.jpg", descripcion: "Vista al Este" },
    { src: "./images/PlazaColon/img2.jpg", descripcion: "Fuente por la noche" },
    { src: "./images/PlazaColon/img3.jpg", descripcion: "Vista al Este Parroquia Cristo Redentor" },
    { src: "./images/PlazaColon/img4.jpg", descripcion: "Letras Corpóreas" },
    { src: "./images/PlazaColon/img5.jpg", descripcion: "Vista al Sur" },
    { src: "./images/PlazaColon/img6.jpg", descripcion: "Atardecer Anfiteatro" },
    { src: "./images/PlazaColon/img7.jpg", descripcion: "Vista al centro" },
    { src: "./images/PlazaColon/img8.jpg", descripcion: "Atardecer" },
    { src: "./images/PlazaColon/img9.jpg", descripcion: "Domingo Cultural en Anfiteatro" },
    { src: "./images/PlazaColon/img10.jpg", descripcion: "El Futuro" },
    { src: "./images/PlazaColon/img11.jpg", descripcion: "Descubrimiento América" },
    { src: "./images/PlazaColon/img12.jpg", descripcion: "Colonización Jesuita" },
    { src: "./images/PlazaColon/img13.jpg", descripcion: "Independencia Argentina" },
    { src: "./images/PlazaColon/img14.jpg", descripcion: "Busto San Martín" },
    { src: "./images/PlazaColon/img15.jpg", descripcion: "Monumento Biblia" },
    { src: "./images/PlazaColon/img16.jpg", descripcion: "Monumento a la Madre" },
    { src: "./images/PlazaColon/img17.jpg", descripcion: "Acto central 2025" },
    { src: "./images/PlazaColon/2025DomingoCultural.jpg", descripcion: "Domingo Cultural 2025" },
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
        <h1>Bienvenidos a la Plaza Colón</h1>
        <p className="text-info">
          La Plaza Colón ubicada en el centro de la ciudad, es un espacio lleno de historia, naturaleza y cultura.
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
                src="https://www.youtube.com/embed/XAL4L3GllhE"
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
                src="https://www.youtube.com/embed/-yurqeZ41ds"    
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
                src="https://www.youtube.com/embed/UVoQE0VIT1k"  
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
             {/* Video 6 */}
            <div className="video">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/vhjnKoyVc10"  
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
                <button onClick={() => setAudioCategory("monumentos")}>Monumentos</button>
                <button onClick={() => setAudioCategory("curiosidades")}>Curiosidades</button>
              </div>
            )}

            {audioCategory && (
              <div className="audio-categories">
                <button onClick={() => setAudioCategory(null)}>⬅ Volver</button>&nbsp;

                {/* HISTORIA */}
                {audioCategory === "historia" && (
                  <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonHistoria.mp3")}>
                    {isPlaying && currentAudio.includes("Historia") ? "⏸" : "▶"} Historia
                  </button>
                )}

                {/* CULTURA */}
                {audioCategory === "cultura" && (
                  <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonCultura.mp3")}>
                    {isPlaying && currentAudio.includes("Cultura") ? "⏸" : "▶"} Cultura y Tradición
                  </button>
                )}

                {/* MONUMENTOS */}
                {audioCategory === "monumentos" && (
                  <>
                    <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonPiramides.mp3")}>
                      ▶ Las Pirámides
                    </button>&nbsp;
                    <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonMonumentoMadres.mp3")}>
                      ▶ Monumento a las Madres
                    </button>&nbsp;
                    <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonMonolitoyBustoSanMartin.mp3")}>
                      ▶ Monolito y Busto San Martín
                    </button>
                  </>
                )}

                {/* CURIOSIDADES */}
                {audioCategory === "curiosidades" && (
                  <>
                    <h3 style={{ textAlign: "center" }}>Curiosidades</h3>
                    <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonCuriosidadesCancha.mp3")}>
                      ▶ La Cancha de futbol
                    </button>&nbsp;
                    <button onClick={() => handlePlayPause("./audio/PlazaColon/PlazaColonCuriosidadesCarreraCaballo.mp3")}>
                      ▶ Carrera de Caballos
                    </button>
                  </>
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