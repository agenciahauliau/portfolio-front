import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { infoImoveis } from "../../Dados/DadosImoveis";
import { toggleClass, capitalize } from "../../Helpers/Functions";

import "./BarraPesquisa.scss";

function BarraPesquisa() {
  const { loading, data } = useQuery(infoImoveis, {
    returnPartialData: true,
  });

  if (loading) return <p>Loading Masterpieces...</p>;

  let bairros = [];
  let nomeConstrutoras = [];
  let cidades = [];
  let tiposNegociacao = [];
  let categoriasImoveis = [];
  let statusImoveis = [];

  for (let imovel of data.imoveis) {
    imovel.bairro && bairros.push(imovel.bairro.trim().toLowerCase());
    imovel.nomeConstrutora &&
      nomeConstrutoras.push(imovel.nomeConstrutora.trim().toLowerCase());
    imovel.cidade && cidades.push(imovel.cidade.trim().toLowerCase());
    imovel.tipoNegociacao &&
      tiposNegociacao.push(imovel.tipoNegociacao.trim().toLowerCase());
    imovel.categoriaImovel &&
      categoriasImoveis.push(imovel.categoriaImovel.trim().toLowerCase());
    imovel.statusImovel &&
      statusImoveis.push(imovel.statusImovel.trim().toLowerCase());
  }

  return (
    <section className="pesquisa">
      <div className="pesquisaContainer">
        <input type="checkbox" className="chaveFiltro" id="filtro" />
        <label className="chaveFiltro" htmlFor="filtro">
          <p>Procurar por:</p>
        </label>
        <div className="filtrosPesquisa">
          <form action="/imoveis" method="GET">
            <div className="filtrosPrincipais">
              <div className="tipoNeg">
                {[...new Set(tiposNegociacao)].map((tNeg) => (
                  <div className="divInput">
                    <input
                      type="radio"
                      key={tNeg}
                      id={tNeg}
                      name="tNeg"
                      className="chavePesquisa"
                    />
                    <div className="divLabel">
                      <label
                        key={tNeg}
                        htmlFor={tNeg}
                        className="chavePesquisa"
                        onClick={toggleClass}
                      >
                        {capitalize(tNeg)}
                      </label>
                    </div>
                  </div>
                ))}
                {[...new Set(categoriasImoveis)].map((catImo) => (
                  <div></div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BarraPesquisa;
