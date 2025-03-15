import { motion } from "framer-motion";
import "../css/styles.css";
import Pie from "../components/Pie.jsx";

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
          <h1>Camino Histórico/Cultural</h1>
          <p>Descubrí la historia y cultura de Jardín América, Misiones</p>
        </div>
      </header>

      {[
        {
          title: "¿Qué es el Camino Histórico/Cultural?",
          text: "Es un recorrido interactivo a través de diferentes puntos históricos y culturales de Jardín América, conectados mediante tótems con códigos QR."
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
          <p style={{ color: "white" }}>{section.text}</p>
        </motion.div>
      ))}

      <motion.section
        id="objectives"
        className="objectives"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h2>Conocé Jardín América.</h2>
        <div className="cards-container">
          {[
            { title: "Historia", img: "historia.png", text: "Explora el pasado de Jardín América." },
            { title: "Arte y Cultura", img: "arte.png", text: "Descubre la riqueza cultural y artística." },
            { title: "Geografía", img: "geografia.png", text: "Aprende sobre la biodiversidad local." },
            { title: "Comunidad", img: "comunidad.png", text: "Conectate con las tradiciones locales." }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="card"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img src={`images/icons/${card.img}`} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            />
          ))}
        </div>
      </motion.section>

      <Pie />
    </>
  );
}
