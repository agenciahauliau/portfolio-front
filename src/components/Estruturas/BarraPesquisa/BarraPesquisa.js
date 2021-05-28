import React from "react";
import { useQuery } from "@apollo/client";
import { infoImoveis } from "../../Dados/DadosImoveis";

import "./BarraPesquisa.scss";

function BarraPesquisa() {
  const { loading, data } = useQuery(infoImoveis);
  if (loading) return <p>Loading Masterpieces...</p>;

  let bairros = [];
  let nomeConstrutoras = [];
  let cidades = [];
  let ufs = [];

  for (let imovel of data.imoveis) {
    imovel.bairro && bairros.push(imovel.bairro);
    imovel.nomeConstrutora && nomeConstrutoras.push(imovel.nomeConstrutora);
    imovel.cidade && cidades.push(imovel.cidade);
    imovel.uf && ufs.push(imovel.uf);
  }

  return (
    <section className="pesquisa">
      <div className="pesquisa-container">
        {/* <div className="barra-pesquisa">
          <form>
            <input className="texto-pesquisa" type="text" />
            <select className="listVenda-pesquisa" list="tipoVenda">
              <option value="Venda">Venda</option>
              <option value="Aluguel">Aluguel</option>
              <option value="Lançamento">Lançamento</option>
            </select>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -9 486.26344 486"
              >
                <path
                  d="m41 185.636719c0-91.351563 73.535156-166.519531 166.777344-173.863281-4.949219-.390626-9.949219-.601563-15-.601563-100.230469 0-181.777344 78.265625-181.777344 174.464844s81.546875 174.460937 181.777344 174.460937c5.050781 0 10.050781-.207031 15-.597656-93.246094-7.34375-166.777344-82.511719-166.777344-173.863281zm0 0"
                  fill="#fff5"
                />
                <path
                  d="m474.832031 404.0625-81.636719-78.457031c-2.320312-2.230469-5.992187-2.230469-8.3125 0l-18.902343 18.164062-30.914063-29.710937c32.527344-33.367188 52.484375-78.210938 52.484375-127.464844.003907-102.816406-86.925781-186.460938-193.773437-186.460938s-193.777344 83.644532-193.777344 186.460938 86.933594 186.464844 193.777344 186.464844c48.972656.167968 96.253906-17.894532 132.644531-50.667969l30.898437 29.699219-18.769531 18.042968c-1.175781 1.128907-1.84375 2.691407-1.84375 4.324219 0 1.632813.667969 3.195313 1.84375 4.328125l81.671875 78.484375c15.320313 14.472657 39.273438 14.460938 54.578125-.027343.503907-.476563.992188-.96875 1.472657-1.472657 13.863281-14.683593 13.21875-37.820312-1.441407-51.707031zm-281.054687-43c-100.234375 0-181.777344-78.265625-181.777344-174.460938 0-96.199218 81.546875-174.46875 181.777344-174.46875 100.230468 0 181.777344 78.261719 181.777344 174.460938s-81.546876 174.464844-181.777344 174.464844zm273.769531 86.46875c-.320313.339844-.652344.671875-1.023437 1.023438-10.660157 10.085937-27.339844 10.101562-38.019532.03125l-77.136718-74.125 37.671874-36.207032 77.515626 74.5c9.878906 9.332032 10.324218 24.90625.992187 34.785156zm0 0"
                  fill="#fff"
                />
                <g fill="#fff">
                  <path d="m282.832031 298.71875v-132.734375h28.402344c2.597656.003906 4.90625-1.667969 5.710937-4.140625.804688-2.472656-.074218-5.183594-2.179687-6.710938l-30.257813-22.03125v-34.558593c0-3.316407-2.6875-6-6-6s-6 2.683593-6 6v25.824219l-75.199218-54.746094c-2.105469-1.53125-4.957032-1.53125-7.0625 0l-117.460938 85.511718c-2.097656 1.527344-2.976562 4.234376-2.171875 6.707032.804688 2.472656 3.105469 4.144531 5.707031 4.144531h28.398438v132.734375c0 3.3125 2.6875 6 6 6h166.113281c3.316407 0 6-2.6875 6-6zm-12-138.734375v132.734375h-154.109375v-132.734375c0-3.3125-2.6875-6-6-6h-15.96875l99.023438-72.089844 99.023437 72.089844h-15.96875c-3.3125 0-6 2.6875-6 6zm0 0" />
                  <path d="m193.777344 126.566406c-19.882813 0-36 16.117188-36 36 0 19.878906 16.117187 36 36 36 19.882812 0 36-16.121094 36-36-.023438-19.875-16.128906-35.980468-36-36zm0 60c-13.253906 0-24-10.746094-24-24 0-13.257812 10.746094-24 24-24s24 10.742188 24 24c-.015625 13.246094-10.75 23.984375-24 24zm0 0" />
                </g>
              </svg>
            </button>
          </form>
        </div> */}
        <div className="filtros-pesquisa">
          <p>Filtros</p>

          <div className="PainelFiltros">
            <form action="/imoveis" method="GET">
              <div className="categoriaImovelDiv">
                <label>
                  <p>Sala Comercial</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Sala+Comercial"
                  />
                </label>
                <label>
                  <p>Área Comercial</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Área+Comercial"
                  />
                </label>
                <label>
                  <p>Cobertura</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Cobertura"
                  />
                </label>
                <label>
                  <p>Apartamento Padrão</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Apartamento+Padrão"
                  />
                </label>
                <label>
                  <p>Chácaras</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Chácaras"
                  />
                </label>
                <label>
                  <p>Casa Residencial</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Casa+Residencial"
                  />
                </label>
                <label>
                  <p>Lote urbano</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Lote+urbano"
                  />
                </label>
                <label>
                  <p>Casa em Condomínio</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Casa+em+Condomínio"
                  />
                </label>
                <label>
                  <p>Lote em Condomínio</p>
                  <input
                    type="radio"
                    name="categoriaImovel"
                    value="Lote+em+Condomínio"
                  />
                </label>
              </div>
              <div className="tipoNegociacaolDiv">
                <label>
                  <p>Para Alugar</p>
                  <input type="radio" name="tipoNegociacao" value="Alugar" />
                </label>
                <label>
                  <p>Para Vender</p>
                  <input type="radio" name="tipoNegociacao" value="Venda" />
                </label>
                <label>
                  <p>Lançamento Imobiliário</p>
                  <input
                    type="radio"
                    name="tipoNegociacao"
                    value="Lançamento"
                  />
                </label>
              </div>
              <div className="statusImovelDiv">
                <label>
                  <p>Pronto para Morar</p>
                  <input
                    type="radio"
                    name="statusImovel"
                    value="Pronto para Morar"
                  />
                </label>
                <label>
                  <p>Entrega em Breve</p>
                  <input
                    type="radio"
                    name="statusImovel"
                    value="Entrega em Breve"
                  />
                </label>
                <label>
                  <p>Pronto para Construir</p>
                  <input
                    type="radio"
                    name="statusImovel"
                    value="Pronto para Construir"
                  />
                </label>
                <label>
                  <p>Lançamento</p>
                  <input
                    type="radio"
                    vname="statusImovel"
                    alue="Lançamento"
                  />
                </label>
                <label>
                  <p>Entregue</p>
                  <input type="radio" name="statusImovel" value="Entregue" />
                </label>
              </div>
              <div className="aceitaPermutaDiv">
                <label>
                  <p>Sim</p>
                  <input type="radio" name="aceitaPermuta" value="true" />
                </label>
                <label>
                  <p>Não</p>
                  <input type="radio" name="aceitaPermuta" value="false" />
                </label>
              </div>
              <div className="mobiliadoDiv">
                <label>
                  <p>Sim</p>
                  <input type="radio" name="mobiliado" value="true" />
                </label>
                <label>
                  <p>Não</p>
                  <input type="radio" name="mobiliado" value="false" />
                </label>
              </div>
              <select name="nomeConstrutora" id="nomeConstrutora">
                {[...new Set(nomeConstrutoras)].map((construtoraOptions) => (
                  <option value={construtoraOptions}>
                    {construtoraOptions}
                  </option>
                ))}
              </select>
              <select name="bairro" id="bairro">
                {[...new Set(bairros)].map((bairroOptions) => (
                  <option value={bairroOptions}>{bairroOptions}</option>
                ))}
              </select>
              <select name="cidade" id="cidade">
                {[...new Set(cidades)].map((cidadeOptions) => (
                  <option value={cidadeOptions}>{cidadeOptions}</option>
                ))}
              </select>
              <select name="uf" id="uf">
                {[...new Set(ufs)].map((ufOptions) => (
                  <option value={ufOptions}>{ufOptions}</option>
                ))}
              </select>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BarraPesquisa;
