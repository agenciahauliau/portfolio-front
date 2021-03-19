import React, { useState } from "react";
import "./BarraPesquisa.scss";

function BarraPesquisa() {
  return (
    <section className="pesquisa">
      <div className="pesquisa-container">
        <div className="barra-pesquisa">
          <form>
            <input className="texto-pesquisa" type="text" />
            <input className="listVenda-pesquisa" list="tipoVenda" />
            <datalist id="tipoVenda">
              <option value="Venda" />
              <option value="Aluguel" />
              <option value="Lançamento" />
            </datalist>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path d="M270.746,117.149c-20.516-20.514-47.79-31.812-76.802-31.811c-12.854,0-23.273,10.42-23.273,23.273    c0.002,12.854,10.42,23.273,23.274,23.273c16.578,0,32.163,6.454,43.886,18.178c11.723,11.723,18.178,27.308,18.178,43.885    c-0.002,12.853,10.418,23.274,23.271,23.274c0.002,0,0.002,0,0.002,0c12.851,0,23.271-10.418,23.273-23.271    C302.556,164.939,291.26,137.663,270.746,117.149z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M505.183,472.272L346.497,313.586c25.921-32.979,41.398-74.536,41.398-119.639C387.894,87.005,300.89,0,193.946,0    c-0.003,0,0,0-0.003,0C142.14,0,93.434,20.175,56.806,56.804C20.173,93.437,0,142.141,0,193.947    C0,300.89,87.004,387.894,193.946,387.894c45.103,0,86.661-15.476,119.639-41.396L472.27,505.184    c4.544,4.544,10.501,6.816,16.457,6.816c5.956,0,11.913-2.271,16.455-6.817C514.273,496.096,514.273,481.359,505.183,472.272z     M193.946,341.349c-81.276,0-147.4-66.124-147.4-147.402c0-39.373,15.332-76.389,43.172-104.229    c27.84-27.842,64.855-43.172,104.228-43.172c81.279,0,147.403,66.124,147.403,147.402S275.225,341.349,193.946,341.349z" />
                  </g>
                </g>
              </svg>
            </button>
          </form>
        </div>
        <div className="filtros-pesquisa">
          <h4>Adicionar filtros</h4>
          <p className="filtros-adicionados">
            3 quartos, 2 garagens, 1 suíte ....
          </p>
        </div>
        <div className="quantidade-pesquisa">
          <ul>
            <li>Mostrar:</li>
            <li>
              <a href="">12</a>
            </li>
            <li>
              <a href="">24</a>
            </li>
            <li>
              <a href="">48</a>
            </li>
          </ul>
        </div>
        <div className="ordem-pesquisa">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 394.971 394.971"
          >
            <g>
              <g>
                <g>
                  <circle cx="56.424" cy="197.486" r="51.2" />
                  <path d="M379.298,187.037H143.151c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h236.147     c5.771,0,10.449-4.678,10.449-10.449S385.069,187.037,379.298,187.037z" />
                  <circle cx="56.424" cy="51.2" r="51.2" />
                  <path d="M143.151,61.649h236.147c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H143.151     c-5.771,0-10.449,4.678-10.449,10.449S137.38,61.649,143.151,61.649z" />
                  <circle cx="56.424" cy="343.771" r="51.2" />
                  <path d="M379.298,333.322H143.151c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h236.147     c5.771,0,10.449-4.678,10.449-10.449S385.069,333.322,379.298,333.322z" />
                </g>
              </g>
            </g>
          </svg>
          <h4>Ordenar por:</h4>
          <ul>
            <li>Maior preço</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BarraPesquisa;
