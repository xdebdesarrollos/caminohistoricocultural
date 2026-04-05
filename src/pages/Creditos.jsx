import React from "react";
import Pie from "../components/Pie.jsx";
import "../css/creditos.css";

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
          <span className="creditos-hero-label">Proyecto · Jardín América</span>
          <h1>Créditos y <em>Agradecimientos</em></h1>
          <div className="creditos-hero-divider" />
          <p>Camino Histórico Cultural · Quienes hicieron posible este proyecto</p>
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
