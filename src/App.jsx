// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Inicio from "./pages/Inicio.jsx";
import Exploracion from "./pages/Exploracion.jsx";
import Hotel from "./pages/Hotel.jsx";
import Pago from "./pages/Pago.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/exploracion" element={<Exploracion />} />
      <Route path="/hotel/:id" element={<Hotel />} />
      <Route path="/pago" element={<Pago />} />
    </Routes>
  );
}

export default App;
