import React from "react";
import { useQuery } from "@apollo/client";
import { infoImoveis } from "../../Dados/DadosImoveis";

import "./BarraPesquisa.scss";

const BarraPesquisa = (props) => {
  const { loading, data } = useQuery(infoImoveis);
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
  
  const typ = document.querySelectorAll('.tresa')

  typ.forEach(function(ty){
    ty.addEventListener('click', function(){
      console.log(ty)
    })
  })

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
                <p key={tes} className="tresa">{tes}</p>
              )}
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BarraPesquisa;