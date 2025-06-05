import Cabecera from "../components/CabeceraSalto.jsx";
import Cuerpo from "../components/CuerpoSalto.jsx";
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