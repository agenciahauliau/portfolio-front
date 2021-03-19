import React from "react";
import { Routes, Route } from "react-router-dom";

import Pesquisa from "./Components/Paginas/Pesqusia/Pesquisa";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pesquisa />} />
    </Routes>
  );
}
