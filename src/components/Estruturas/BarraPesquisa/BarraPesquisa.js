import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { infoImoveis } from "../../Dados/DadosImoveis";
import { toggleClass, capitalize } from "../../Helpers/Functions";

import "./BarraPesquisa.scss";

function filtrarElemento(el) {
  let labels = document.querySelectorAll(
    `.${el.target.parentElement.classList[1]} label`
  );

  labels.forEach((label) => {
    if (new RegExp(el.target.value, "i").test(label.textContent)) {
      label.classList.remove("filtro");
    } else {
      label.classList.add("filtro");
    }
  });
}

const nameAtributte = (str) => {
  return str
    .normalize("NFD")
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/([^\w]+|\s+)/g, "") // Replace space and other characters by hyphen
    .replace(/\-\-+/g, "") // Replaces multiple hyphens by one hyphen
    .replace(/(^-+|-+$)/, ""); // Remove extra hyphens from beginning or end of the string
};

function selectValue(el) {
  document
    .querySelector(`.select${nameAtributte(el.target.textContent)}`)
    .classList.add("selected");

  el.target.classList.add("selected");
}

function removeValue(el) {
  document
    .querySelector(
      `.select${nameAtributte(
        el.target.parentElement.previousSibling.textContent
      )}`
    )
    .classList.remove("selected");

  document
    .querySelector(
      `.label${nameAtributte(
        el.target.parentElement.previousSibling.textContent
      )}`
    )
    .classList.remove("selected");
}

export default function BarraPesquisa() {
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
      <div className="container">
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
                        key={`tipo${nameAtributte(tNeg)}`}
                        id={`tipo${nameAtributte(tNeg)}`}
                        name="tNeg"
                        className="chavePesquisa"
                      />
                      <div className="divLabel">
                        <label
                          key={tNeg}
                          htmlFor={`tipo${nameAtributte(tNeg)}`}
                          className="chavePesquisa"
                          onClick={toggleClass}
                        >
                          {capitalize(tNeg)}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="filterElment categoriaImo">
                  <div className="selectValue">
                    {[...new Set(categoriasImoveis)].map((catImo) => (
                      <div
                        key={`select${catImo}`}
                        className={`valueSelected select${nameAtributte(
                          catImo
                        )}`}
                      >
                        <p>{capitalize(catImo)}</p>
                        <svg
                          className="button"
                          onClick={removeValue}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 500"
                        >
                          <path
                            fill="#FFBC00"
                            d="M249.53,0c68.94,0,131.35,27.95,176.53,73.13c45.18,45.18,73.12,107.59,73.12,176.53
                       c0,68.94-27.94,131.35-73.12,176.53c-45.18,45.18-107.59,73.12-176.53,73.12c-68.94,0-131.35-27.94-176.53-73.12
                       C27.82,381.01-0.13,318.59-0.13,249.66c0-68.94,27.94-131.35,73.12-176.53C118.18,27.95,180.59,0,249.53,0L249.53,0z"
                          />
                          <path
                            fill="#000"
                            d="M377.34,153.77c0,8.17-3.12,16.34-9.35,22.58l-73.3,73.3l73.3,73.3c6.24,6.24,9.35,14.41,9.35,22.58
                       c0,8.17-3.12,16.34-9.35,22.57c-6.23,6.24-14.41,9.36-22.57,9.36c-8.17,0-16.35-3.12-22.58-9.36l-73.3-73.3l-73.3,73.3
                       c-6.24,6.24-14.41,9.35-22.58,9.35c-8.17,0-16.34-3.12-22.58-9.35c-6.23-6.23-9.35-14.41-9.35-22.57c0-8.17,3.12-16.35,9.35-22.58
                       l73.3-73.3l-73.3-73.3c-6.23-6.23-9.35-14.41-9.35-22.58c0-8.17,3.12-16.34,9.35-22.58c6.24-6.23,14.41-9.35,22.58-9.35
                       c8.17,0,16.34,3.12,22.58,9.35l73.3,73.3l73.3-73.3c6.23-6.23,14.4-9.35,22.58-9.35c8.17,0,16.34,3.12,22.57,9.35
                       C374.22,137.43,377.34,145.61,377.34,153.77z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="selectFiltro"
                    onKeyUp={filtrarElemento}
                  />
                  <div className="checkboxValues">
                    {[...new Set(categoriasImoveis)].map((catImo) => (
                      <div className="checkboxValue">
                        <input
                          key={`input${nameAtributte(catImo)}`}
                          type="checkbox"
                          id={`cat${nameAtributte(catImo)}`}
                          value={catImo}
                        />
                        <label
                          key={`label${nameAtributte(catImo)}`}
                          htmlFor={`cat${nameAtributte(catImo)}`}
                          className={`label${nameAtributte(catImo)}`}
                          onClick={selectValue}
                        >
                          {capitalize(catImo)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="filterElment bairroImo">
                  <div className="selectValue">
                    {[...new Set(bairros)].map((bairro) => (
                      <div
                        key={`select${bairro}`}
                        className={`valueSelected select${nameAtributte(
                          bairro
                        )}`}
                      >
                        <p>{capitalize(bairro)}</p>
                        <svg
                          className="button"
                          onClick={removeValue}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 500"
                        >
                          <path
                            fill="#FFBC00"
                            d="M249.53,0c68.94,0,131.35,27.95,176.53,73.13c45.18,45.18,73.12,107.59,73.12,176.53
                       c0,68.94-27.94,131.35-73.12,176.53c-45.18,45.18-107.59,73.12-176.53,73.12c-68.94,0-131.35-27.94-176.53-73.12
                       C27.82,381.01-0.13,318.59-0.13,249.66c0-68.94,27.94-131.35,73.12-176.53C118.18,27.95,180.59,0,249.53,0L249.53,0z"
                          />
                          <path
                            fill="#000"
                            d="M377.34,153.77c0,8.17-3.12,16.34-9.35,22.58l-73.3,73.3l73.3,73.3c6.24,6.24,9.35,14.41,9.35,22.58
                       c0,8.17-3.12,16.34-9.35,22.57c-6.23,6.24-14.41,9.36-22.57,9.36c-8.17,0-16.35-3.12-22.58-9.36l-73.3-73.3l-73.3,73.3
                       c-6.24,6.24-14.41,9.35-22.58,9.35c-8.17,0-16.34-3.12-22.58-9.35c-6.23-6.23-9.35-14.41-9.35-22.57c0-8.17,3.12-16.35,9.35-22.58
                       l73.3-73.3l-73.3-73.3c-6.23-6.23-9.35-14.41-9.35-22.58c0-8.17,3.12-16.34,9.35-22.58c6.24-6.23,14.41-9.35,22.58-9.35
                       c8.17,0,16.34,3.12,22.58,9.35l73.3,73.3l73.3-73.3c6.23-6.23,14.4-9.35,22.58-9.35c8.17,0,16.34,3.12,22.57,9.35
                       C374.22,137.43,377.34,145.61,377.34,153.77z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="selectFiltro"
                    onKeyUp={filtrarElemento}
                  />
                  <div className="checkboxValues">
                    {[...new Set(bairros)].map((bairro) => (
                      <div className="checkboxValue">
                        <input
                          key={`input${nameAtributte(bairro)}`}
                          type="checkbox"
                          id={`cat${nameAtributte(bairro)}`}
                          value={bairro}
                        />
                        <label
                          key={`label${nameAtributte(bairro)}`}
                          htmlFor={`cat${nameAtributte(bairro)}`}
                          className={`label${nameAtributte(bairro)}`}
                          onClick={selectValue}
                        >
                          {capitalize(bairro)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="filterElment cidadeImo">
                  <div className="selectValue">
                    {[...new Set(cidades)].map((cidade) => (
                      <div
                        key={`select${cidade}`}
                        className={`valueSelected select${nameAtributte(
                          cidade
                        )}`}
                      >
                        <p>{capitalize(cidade)}</p>
                        <svg
                          className="button"
                          onClick={removeValue}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 500 500"
                        >
                          <path
                            fill="#FFBC00"
                            d="M249.53,0c68.94,0,131.35,27.95,176.53,73.13c45.18,45.18,73.12,107.59,73.12,176.53
                       c0,68.94-27.94,131.35-73.12,176.53c-45.18,45.18-107.59,73.12-176.53,73.12c-68.94,0-131.35-27.94-176.53-73.12
                       C27.82,381.01-0.13,318.59-0.13,249.66c0-68.94,27.94-131.35,73.12-176.53C118.18,27.95,180.59,0,249.53,0L249.53,0z"
                          />
                          <path
                            fill="#000"
                            d="M377.34,153.77c0,8.17-3.12,16.34-9.35,22.58l-73.3,73.3l73.3,73.3c6.24,6.24,9.35,14.41,9.35,22.58
                       c0,8.17-3.12,16.34-9.35,22.57c-6.23,6.24-14.41,9.36-22.57,9.36c-8.17,0-16.35-3.12-22.58-9.36l-73.3-73.3l-73.3,73.3
                       c-6.24,6.24-14.41,9.35-22.58,9.35c-8.17,0-16.34-3.12-22.58-9.35c-6.23-6.23-9.35-14.41-9.35-22.57c0-8.17,3.12-16.35,9.35-22.58
                       l73.3-73.3l-73.3-73.3c-6.23-6.23-9.35-14.41-9.35-22.58c0-8.17,3.12-16.34,9.35-22.58c6.24-6.23,14.41-9.35,22.58-9.35
                       c8.17,0,16.34,3.12,22.58,9.35l73.3,73.3l73.3-73.3c6.23-6.23,14.4-9.35,22.58-9.35c8.17,0,16.34,3.12,22.57,9.35
                       C374.22,137.43,377.34,145.61,377.34,153.77z"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="selectFiltro"
                    onKeyUp={filtrarElemento}
                  />
                  <div className="checkboxValues">
                    {[...new Set(cidades)].map((cidade) => (
                      <div className="checkboxValue">
                        <input
                          key={`input${nameAtributte(cidade)}`}
                          type="checkbox"
                          id={`cat${nameAtributte(cidade)}`}
                          value={cidade}
                        />
                        <label
                          key={`label${nameAtributte(cidade)}`}
                          htmlFor={`cat${nameAtributte(cidade)}`}
                          className={`label${nameAtributte(cidade)}`}
                          onClick={selectValue}
                        >
                          {capitalize(cidade)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
