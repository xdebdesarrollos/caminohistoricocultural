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
        <video autoPlay loop muted playsInline src="video/jardin.mp4" type="video/mp4">
          Tu navegador no soporta videos en HTML5.
        </video>
        <div className="overlay">
          <p className='TituloHome'>Camino Histórico/Cultural</p>
          <p className='SubTituloHome'>Descubrí la historia y cultura de Jardín América, Misiones</p>
        </div>
      </header>

      {[
        {
          title: "¿Qué es el Camino Histórico/Cultural?",
          text: "Camino Cultural es un proyecto que busca enriquecer la experiencia turística y cultural de la ciudad de Jardín América, en la provincia de Misiones, Argentina. La iniciativa consiste en la instalación de tótems con códigos QR en diferentes puntos estratégicos de la ciudad. Al escanear estos códigos con un dispositivo móvil, los visitantes acceden a un sitio web con información relevante sobre el lugar donde se encuentran."+
          "El sitio web asociado a cada tótem proporciona datos históricos, culturales y curiosidades sobre el punto en cuestión. Además, para incentivar la exploración, el sistema sugiere el siguiente destino dentro del recorrido, facilitando la navegación mediante Google Maps."
        },
        {
          title: "¿Por qué se desarrolla este proyecto?",
          text: "Para preservar la identidad cultural, fomentar el turismo y proporcionar una experiencia enriquecedora a residentes y visitantes."
          
        }
      ].map((section, index) => (
        <motion.div
          key={index}
          className="content"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.6, delay: index * 0.2 }}
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
        transition={{ duration: 0.6, delay: 0.0 }}
        viewport={{ once: false }}
      >
        <h2>Conocé Jardín América.</h2>
        <div className="cards-container">
        <Cards />
        </div>
      </motion.section>

      <motion.section
        id="gallery"
        className="gallery"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <h2>Viví Jardín América!!!</h2>
        <div className="image-container">
          {["01.jpg", "municipalidad.jpg", "Jardin-america.jpg", "fuenteagua.jpg", "plazaiglesia.jpg"].map((img, index) => (
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

      <Pie />
    </>
  );
}
