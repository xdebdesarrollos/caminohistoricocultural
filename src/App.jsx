import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import PlazaColon from "./pages/PlazaColon";
import CristoAmistad from "./pages/CristoDeLaAmistad";
import ParroquiaCristoR from "./pages/ParroquiaCristoR";
import NotFound from "./components/NotFound";

//import Cabecera from './components/cabecera'
//import Pie from './components/pie'
//import Cuerpo from './components/cuerpo';


function App() {
  return (
    <>
    <BrowserRouter>
        <div className="container">
            <ToastContainer />
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<Home />} />
                {/* Login 
                <Route path="/login" element={<Login />}></Route>
                */}
                {/* Plaza Colon*/}
                <Route path="/plazacolon" element={<PlazaColon />}></Route>

                <Route path="/cristoamistad" element={<CristoAmistad/>} ></Route>

                <Route path="/parroquiacristoredentor" element={<ParroquiaCristoR/>} ></Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>



</>

  )
}

export default App