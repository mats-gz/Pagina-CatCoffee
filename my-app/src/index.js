import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./css/index.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Empleo from "./Empleo";
import Productos from "./Productos";
import Contacto from "./Contacto";
import ProdAccesorios from "./categorias/prodAccesorios";
import ProdAlimentos from "./categorias/prodAlimentos";
import ProdCamas from "./categorias/prodCamas";
import ProdComederos from "./categorias/prodComederos";
import ProdEstetica from "./categorias/prodEstetica";
import ProdJuguetes from "./categorias/prodJuguetes";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/empleo" element={<Empleo />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/accesorios" element={<ProdAccesorios />} />
        <Route path="/productos/alimentos" element={<ProdAlimentos />} />
        <Route path="/productos/camas" element={<ProdCamas />} />
        <Route path="/productos/comederos" element={<ProdComederos />} />
        <Route path="/productos/estetica" element={<ProdEstetica />} />
        <Route path="/productos/juguetes" element={<ProdJuguetes />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Si deseas comenzar a medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo, reportWebVitals(console.log))
// o envíalos a un punto final de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals();
