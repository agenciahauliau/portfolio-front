import React from "react";
import { useQuery } from "@apollo/client";
import { infoImoveis } from "../../Dados/DadosImoveis";

import "./BarraPesquisa.scss";
import { render } from "@testing-library/react";

function BarraPesquisa() {
  const { loading, data } = useQuery(infoImoveis, {
    returnPartialData: true
  });
  if (loading) return <p>Loading Masterpieces...</p>;

  const imoveis = data.imoveis;

  let bairros = [];
  let nomeConstrutoras = [];
  let cidades = [];
  let tiposNegociacao = [];
  let categoriasImoveis = [];
  let statusImoveis = [];

  for (let imovel of imoveis) {
    imovel.bairro && bairros.push(imovel.bairro);
    imovel.nomeConstrutora && nomeConstrutoras.push(imovel.nomeConstrutora);
    imovel.cidade && cidades.push(imovel.cidade);
    imovel.tipoNegociacao && tiposNegociacao.push(imovel.tipoNegociacao);
    imovel.categoriaImovel && categoriasImoveis.push(imovel.categoriaImovel);
    imovel.statusImovel && statusImoveis.push(imovel.statusImovel);
  }

  return(
    <section className="pesquisa">
      <div className="pesquisaContainer">
        <input type="checkbox" className="chaveFiltro" id="filtro" />
        <label className="chaveFiltro" htmlFor="filtro">
          <p>Procurar por:</p>
        </label>
        <div className="filtrosPesquisa">
          <form action="/imoveis" method="GET">
            <div className="filtrosPrincipais">
              {[...new Set(cidades)].map((tes) => 
                <div className="tresa" onClick={ () => console.log(tes) } >{tes}</div>
              )}
              </div>
          </form>
        </div>
      </div>
    </section>
  )  
}

export default BarraPesquisa;