import Cabecera from "../components/CabeceraPlaza.jsx";
import Cuerpo from "../components/CuerpoPlaza.jsx";
import Pie from "../components/Pie.jsx";
import "../css/btn-map.css";
import React from 'react';

import { motion } from "framer-motion";

export default function CaminoCultural() {
   const mapUrl = "https://maps.app.goo.gl/uAg8ngwwG9cB9MbA7"; // dirección real
  return (
    <>    
          <Cabecera/>  
          <Cuerpo/>
          <div className="btn-map">
            <a 
              href={mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-button"
              >
              Ver ubicación en el mapa
            </a>
          </div>
          <Pie/>
    </>

  );
}