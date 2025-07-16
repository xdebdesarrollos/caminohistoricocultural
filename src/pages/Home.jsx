import { motion } from "framer-motion";
import "../css/styles.css";
import Pie from "../components/Pie.jsx";
import Cards from "../components/Cards.jsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 } // Se va hacia arriba al salir
};

export default function Home() {
  return (
    <>
      <header className="hero">
        <video autoPlay loop muted playsInline src="video/VideoLanding.mp4" type="video/mp4">
          Tu navegador no soporta videos en HTML5.
        </video>
        <div className="overlay">
          <p className='TituloHome'>Camino <br/> Histórico/Cultural</p>
          <p className='SubTituloHome'>Descubrí la historia y cultura de Jardín América, Misiones</p>
        </div>
      </header>

      {[
        {
          title: "¿Qué es el Camino Histórico/Cultural?",
          text: "Camino Cultural es un proyecto que busca enriquecer la experiencia turística y cultural de la ciudad de Jardín América."+
          "La iniciativa consiste en la instalación de paneles informativos con códigos QR en diferentes puntos estratégicos de la ciudad. Al escanear estos códigos con un dispositivo móvil, los visitantes acceden a un sitio web con información relevante sobre el lugar donde se encuentran. "+
          "El sitio web asociado a cada panel informativo proporciona datos históricos, culturales y curiosidades sobre el punto en cuestión. Además, para incentivar la exploración, el sistema sugiere otros destino dentro del recorrido, facilitando la navegación mediante Google Maps o GPS."
        },
        {
          title: "¿Por qué se desarrolla este proyecto?",
          text: "Para preservar la identidad cultural, fomentar el turismo y proporcionar una experiencia enriquecedora a residentes y visitantes de Jardín América. Localidad ubicada en la Provincia de Misiones."
          
        }
      ].map((section, index) => (
        <motion.div
          key={index}
          className="content"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 2, delay: index * 0.2 }}
          viewport={{ once: false }}
        >
          <h2>{section.title}</h2>
          <p style={{ color: "black" }}>{section.text}</p>
        </motion.div>
      ))}

      <motion.section
        id="objectives"
        className="objectives"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 2, delay: 0.0 }}
        viewport={{ once: false }}
      >
        <h2>Conocé Jardín América.</h2>
        <Cards />
      </motion.section>

      <motion.section
        id="gallery"
        className="gallery"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 2, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <h2>Descubrí la historia viva en cada rincón.</h2>
        <div className="image-container">
          {["Saltos1.jpg", "municipalidad.jpg", "Jardin-america.jpg", "fuenteagua.jpg", "plazaiglesia.jpg", "cartelnew.jpg"].map((img, index) => (
           <motion.img
           key={index}
           src={`images/JardinAmerica/${img}`}
           alt={`Imagen ${index + 1}`}
           variants={sectionVariants}
           initial="hidden"
           whileInView="visible"
           exit="exit" 
           viewport={{ once: false }}
           whileTap={{ scale: 2 }} // Se agranda un poco al hacer clic
           style={{ cursor: "pointer", borderRadius: "10px", transition: "transform 0.9s ease-in-out" }} // Opcional: mejorar la estética

         />
          ))}
        </div>
      </motion.section>
      <motion.section
        id="mapa"
        className="mapa"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 2, delay: 0.8 }}
        viewport={{ once: false }}
      >
        <h2>Ubicaciones de Paneles informativos en mapa.</h2>
        <div>Las marcas color amarillo son los diferentes paneles de información ubicados en la ciudad.</div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1GswgKngHeyHmrw20zUT9AzN5yIGupVs&ehbc=2E312F"
            width="900"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del Camino Cultural"
          ></iframe>
        </div>
      </motion.section>
      <motion.section
        id="function"
        className="function-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 2, delay: 0.8 }}
        viewport={{ once: false }}
      >
        <h2 className="section-title">¿Cómo funciona?</h2>
        
        <div className="function-container">
          {/* Columna izquierda: texto */}
          <div className="function-text">
            <p><strong>📱 Acceder a la información.</strong></p>
            <ol>
              <li>Abrí la cámara de tu celular o una app lectora de QR.</li>
              <li>Apuntá al código QR que está en el panel informativo.</li>
              <li>Tocá el enlace que aparece en pantalla.</li>
              <li>¡Listo! Vas a acceder a contenido histórico, fotos, videos y el mapa para seguir tu recorrido.</li>
            </ol>
            <p>🔄 En cada estación cultural encontrarás nueva información y el camino hacia el siguiente punto.</p>
          </div>

          {/* Columna derecha: imagen */}
          <div className="function-image">
            <img 
              src="/images/escaneo.png" 
              alt="Persona escaneando el panel informativo" 
            />
          </div>
        </div>
      </motion.section>
      <Pie />
    </>
  );
}
