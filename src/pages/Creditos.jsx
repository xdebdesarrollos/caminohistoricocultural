import { useEffect } from "react";
import Pie from "../components/Pie.jsx";
import "../css/creditos.css";
import { Link } from "react-router-dom";

const creditosData = [
  {
    nombre: "Prof. Tecnólogo Benitez Marco Antonio",
    rol: "Coordinación del proyecto",
    descripcion:
      "Impulsor del proyecto Camino Histórico Cultural y desarrollo de la plataforma tecnológica.",
  },
  {
    nombre: "Municipalidad de Jardín América",
    rol: "Acompañamiento institucional",
    descripcion:
      "Apoyo institucional, Sr. Intendente Araujo Cesar Daniel, Dir. de Cultura Gonzalez Arnaldo, Miembros del Consejo Deliberante, Dir. de Dirección de Turismo, Dir. de Dirección de Prensa.",
  },
  {
    nombre: "Parque Tecnológico",
    rol: "Innovación y desarrollo",
    descripcion:
      "Espacio de articulación tecnológica para el desarrollo de herramientas digitales del proyecto. Miembros tecnólogos.",
  },
  {
    nombre: "Investigadores locales",
    rol: "Investigación histórica",
    descripcion:
      "Aporte de relatos, documentos y memoria histórica de la ciudad. Sr. Cuenca José María",
  },
  {
    nombre: "Contenido y Producción Multimedial",
    rol: "Diseño en Gral.",
    descripcion:
      "Producción de Textos, Creación de videos, fotografías y material sonoro para cada estación cultural. Videos Youtube canal Sr. Cuenca José María, Estudiante de Diseño Gráfico Benitez Fiorela Alejandra, Prof. Nivel inicial Maidana Araujo Jesica Alejandra. Sr. Arrieta Arnaldo Ariel, brindando material fotográfico e informacion de la web www.alboradadeunpueblo.com.ar",
  },
  {
    nombre: "Comunidad de Jardín América",
    rol: "Participación ciudadana",
    descripcion:
      "Vecinos que contribuyeron con historias, recuerdos y testimonios. Hijos y nietos de Pioneros, Flia. Benitez Antonio Eleodoro y Sra. Silveira Teresa Beatriz, Directora/Docente Moraiz Graciela.",
  },
];

export default function Creditos() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <div className="creditos-container">

        <div className="creditos-hero">
          <span className="creditos-hero-label">Proyecto · Camino histórico Cultural - Jardín América</span>
          <Link to="/" className="creditos-link">
                <span className="creditos-link-line" />
                Vovler Inicio
        </Link>
          <h1>Créditos y <em>Agradecimientos</em></h1>
          <div className="creditos-hero-divider" />
          <p>Quienes hicieron posible este proyecto.</p>
          <p>El Camino Histórico Cultural de Jardín América es un proyecto construido de manera colaborativa, donde la tecnología se une con la historia y la cultura de nuestra comunidad.
          Detrás de cada estación cultural hay personas, instituciones y vecinos que aportaron su conocimiento, materiales históricos, registros audiovisuales y acompañamiento para que esta iniciativa pueda hacerse realidad.

          A todos ellos, nuestro más sincero agradecimiento por ayudar a preservar y compartir la memoria de nuestra ciudad.</p>
        </div>

        <div className="creditos-grid">
          {creditosData.map((item, index) => (
            <div
              className="creditos-card"
              key={index}
              data-index={String(index + 1).padStart(2, "0")}
            >
              <h3>{item.nombre}</h3>
              <span>{item.rol}</span>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>

      </div>
      <Pie />
    </>
  );
}
