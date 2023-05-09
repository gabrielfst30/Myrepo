import React from "react";
import { BrowserRouter, Routes, Route as Rota } from "react-router-dom";

import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Rota path="/" element={<Main />} />
        <Rota path="/repositorio:repositorio" element={<Repositorio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;