import React from "react";
import { useLocation } from "react-router-dom";

import ImoveisVenda from "./TiposImoveis/ImoveisVenda/ImoveisVenda";
import ImoveisAluguel from "./TiposImoveis/ImoveisAluguel/ImoveisAluguel";
import ImoveisLancamento from "./TiposImoveis/ImoveisLancamento/ImoveisLancamento";
import ImoveisJardins from "./TiposImoveis/ImoveisJardins/ImoveisJardins";

import "./Imoveis.scss";

function Negocio() {
  return new URLSearchParams(useLocation().search).get("tipoNegociacao");
}

// function JardinsImovel() {
//   return new URLSearchParams(useLocation().search).get("jardins");
// }

function Imoveis() {
  return (
    <section className="Imovel">
      <div className="container">
        {Negocio() === "Venda" ? (
          <ImoveisVenda />
        ) : Negocio() === "Lancamento" ? (
          <ImoveisLancamento />
        ) : (
          <ImoveisAluguel />
        )}
      </div>
    </section>
  );
}

export default Imoveis;
