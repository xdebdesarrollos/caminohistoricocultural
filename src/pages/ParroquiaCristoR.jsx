import Cabecera from "../components/CabeceraParroquiaCristoR.jsx";
import Cuerpo from "../components/CuerpoParroquiaCristoR.jsx";
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