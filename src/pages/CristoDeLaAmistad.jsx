import Cabecera from "../components/CabeceraCristo.jsx";
import Cuerpo from "../components/CuerpoCristo.jsx";
import Pie from "../components/Pie.jsx";
import "../css/btn-map.css";
import React from 'react';

import { motion } from "framer-motion";

export default function CaminoCultural() {
   const mapUrl = "https://maps.google.com"; // aquí luego pones la dirección real
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