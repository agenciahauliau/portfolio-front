import React from "react";
import { useLocation } from "react-router-dom";

import ImoveisVenda from "./TiposImoveis/ImoveisVenda";

import "./Imoveis.scss";


function TipoNegocioImovel() {
  return new URLSearchParams(useLocation().search).get("tipoNegociacao");
}

function JardinsImovel() {
    return new URLSearchParams(useLocation().search).get("jardins");
  }

function Imoveis() {
  return (
    <section className="Imovel">
      <div className="container">
        <ImoveisVenda />
      </div>
    </section>
  );
}

export default Imoveis;
