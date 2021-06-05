import React from "react";
import { useQuery } from "@apollo/client";
import { ImoveisPesquisaQuery } from "../../Dados/DadosImoveis";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faSink, faWarehouse } from "@fortawesome/free-solid-svg-icons";

import BarraPesquisa from "../../Estruturas/BarraPesquisa/BarraPesquisa";
import FGRBanner from "../../Estruturas/FGRBanner/FGRBanner";
import BarraAjuda from "../../Estruturas/BarraAjuda/BarraAjuda";
import Newsletter from "../../Estruturas/Newsletter/Newsletter";

//import SCSS
import "./Pesquisa.scss";
import "../../Estruturas/Cards/CardImoveis.scss";

function FilterImovel() {
  const chaves = new URLSearchParams(useLocation().search);

  let resultado = {};

  for (let key of chaves.keys()) {
    const valorChave = chaves.get(key);

    function test() {
      if (valorChave === "true") {
        return true;
      } else if (valorChave === "false") {
        return false;
      } else if (isNaN(valorChave)) {
        return valorChave;
      } else {
        return +valorChave;
      }
    }
    resultado[key] = test();
    resultado.statusLancamento = "aprovado";
  }
  return resultado;
}

function Pesquisa() {
  const { loading, error, data } = useQuery(ImoveisPesquisaQuery, {
    variables: {
      input: FilterImovel(),
    },
    returnPartialData: true
  });

  if (loading) return <p>Loading Masterpieces...</p>;
  if (error) return <p>Mas Bah</p>;

  return (
    <>
    <BarraPesquisa />
      <section className="ConteudoPesquisa">
        <div className="DestaquesPesquisa">
          <div className="container">
            {data.imoveis.map((imovel) => (
              <div className="CardImoveis">
                <div className="TopoCardImoveis">
                  <img src={imovel.imagemPrincipal}  alt=""/>
                  <div className="TipoImovel">
                    <p>{imovel.categoriaImovel}</p>
                    <img src="" />
                  </div>
                </div>
                <Link
                  to={
                    "/imoveis/imovel?titulo=" +
                    imovel.categoriaImovel.replaceAll(" ", "+") +
                    (imovel.qtdeQuarto === 0
                      ? ""
                      : imovel.qtdeQuarto === 1
                      ? "+com+" + imovel.qtdeQuarto + "+quarto"
                      : "+com+" + imovel.qtdeQuarto + "+quartos") +
                    (imovel.qtdeSuites === 0
                      ? ""
                      : imovel.qtdeSuites === 1
                      ? "+com+" + imovel.qtdeSuites + "+suite"
                      : "+com+" + imovel.qtdeSuites + "+suites") +
                    (imovel.qtdeBanheiro === 0
                      ? ""
                      : imovel.qtdeBanheiro === 1
                      ? "+com+" + imovel.qtdeBanheiro + "+banheiro"
                      : "+com+" + imovel.qtdeBanheiro + "+banheiros") +
                    (imovel.qtdeVagas === 0
                      ? ""
                      : imovel.qtdeVagas === 1
                      ? "+com+" + imovel.qtdeVagas + "+vaga+na+garagem"
                      : "+com+" + imovel.qtdeVagas + "+vagas+na+garagem") +
                    "&tipoNegociacao=" +
                    imovel.tipoNegociacao +
                    "&id=" +
                    imovel._id
                  }
                >
                  <div className="InfoCardImoveis">
                    <div className="CaractImovel">
                      <div className="quarto">
                        <p>
                          <b>{imovel.qtdeQuarto}</b>{" "}
                          <FontAwesomeIcon icon={faBed} />
                        </p>
                      </div>
                      <div className="banheiro">
                        <p>
                          <b>{imovel.qtdeBanheiro}</b>{" "}
                          <FontAwesomeIcon icon={faSink} />
                        </p>
                      </div>
                      <div className="garagem">
                        <p>
                          <b>{imovel.qtdeVagas}</b>{" "}
                          <FontAwesomeIcon icon={faWarehouse} />
                        </p>
                      </div>
                    </div>
                    <div className="PrecoImoveis">
                      <h3>
                        {imovel.valorImovel.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </h3>
                    </div>
                    <div className="EnderecoImoveis">
                      <p>
                        {imovel.logradouro}, {imovel.numeroLogradouro},{" "}
                        {imovel.complemento} - {imovel.bairro} — {imovel.cidade}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FGRBanner />
      <BarraAjuda />
      <Newsletter />
    </>
  );
}

export default Pesquisa;
