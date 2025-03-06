import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import PlazaColon from "./pages/PlazaColon";
import CristoHermandad from "./pages/CristoDeLaHermandad";
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
                <Route path="/crearcuenta" element={<CrearCuenta />}></Route>
                <Route path="/landingpage" element={<LandingPage />}></Route>*/}

                {/* Rutas del MENU 
                <Route path="/materias" element={<Materias />} />
                <Route path="/materias/crear/" element={<CrearMateria />} />
                <Route path="/materias/editar/:nom_materia" element={<EditarMateria />} />
                <Route path="/vehiculo/edit/:matricula" element={<VehiculoEdit />} />*/}
                {/* Plaza Colon*/}
                <Route path="/plazacolon" element={<PlazaColon />}></Route>

                <Route path="/cristohermandad" element={<CristoHermandad/>} ></Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </BrowserRouter>



</>

  )
}

export default App