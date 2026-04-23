import Cabecera from "../components/CabeceraParroquiaCristoR.jsx";
import Cuerpo from "../components/CuerpoParroquiaCristoR.jsx";
import Pie from "../components/Pie.jsx";
import "../css/btn-map.css";
import React from 'react';

import { motion } from "framer-motion";

export default function CaminoCultural() {
   const mapUrl = "https://maps.app.goo.gl/TN6RGWvMtEVmsRyeA"; //dirección real
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