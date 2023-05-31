import React from "react";
import { BrowserRouter, Routes, Route as Rota } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Rota path="/" element={<Main />} />
        {/* A rota repositorio espera o parametro repositorio */}
        <Rota path="/repositorio/:id" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;