import Cabecera from "../components/CabeceraPlaza.jsx";
import Cuerpo from "../components/CuerpoPlaza.jsx";
import Pie from "../components/Pie.jsx";
import React from 'react';

import { motion } from "framer-motion";

export default function CaminoCultural() {
  return (
    <>    
          <Cabecera/>  
          <Cuerpo/>
          <Pie/>
    </>

  );
}