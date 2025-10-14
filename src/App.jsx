import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import PlazaColon from "./pages/PlazaColon";
import CristoAmistad from "./pages/CristoDeLaAmistad";
import ParroquiaCristoR from "./pages/ParroquiaCristoR";
import SaltoTabay from "./pages/SaltoTabay";
import NotFound from "./components/NotFound";



function App() {
  return (
    <>
    <HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/plazacolon" element={<PlazaColon />} />
    <Route path="/cristoamistad" element={<CristoAmistad />} />
    <Route path="/parroquiacristoredentor" element={<ParroquiaCristoR />} />
    <Route path="/saltotabay" element={<SaltoTabay />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>


</>

  )
}

export default App