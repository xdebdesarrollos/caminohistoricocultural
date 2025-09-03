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

                <Route path="/saltotabay" element={<SaltoTabay/>} ></Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </HashRouter>



</>

  )
}

export default App