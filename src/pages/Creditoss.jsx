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
      "Apoyo institucional para el desarrollo del circuito histórico cultural en la ciudad.",
  },
  {
    nombre: "Parque Tecnológico",
    rol: "Innovación y desarrollo",
    descripcion:
      "Espacio de articulación tecnológica para el desarrollo de herramientas digitales del proyecto.",
  },
  {
    nombre: "Investigadores locales",
    rol: "Investigación histórica",
    descripcion:
      "Aporte de relatos, documentos y memoria histórica de la ciudad.",
  },
  {
    nombre: "Producción audiovisual",
    rol: "Contenido multimedia",
    descripcion:
      "Creación de videos, fotografías y material sonoro para cada estación cultural.",
  },
  {
    nombre: "Comunidad de Jardín América",
    rol: "Participación ciudadana",
    descripcion:
      "Vecinos que contribuyeron con historias, recuerdos y testimonios.",
  },
];

export default function Creditos() {
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
