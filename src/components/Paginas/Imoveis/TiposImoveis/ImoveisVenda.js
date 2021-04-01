import React from "react";
import { useQuery } from "@apollo/client";
import { ImovelQuery } from "../../../Dados/DadosImoveis";
import { useLocation } from "react-router-dom";

import "./ImoveisVenda.scss";

function IdImovel() {
  return new URLSearchParams(useLocation().search).get("id");
}

function ImoveisVenda() {
  const { loading, error, data } = useQuery(ImovelQuery, {
    variables: { _id: IdImovel() },
  });

  if (loading) return <p>Loading Masterpieces...</p>;
  if (error) return <p>Mas Bah</p>;
  return (
    <div className="conteudoImovel ImovelRevenda">
      <div className="topoImovel">
        <div className="tituloImovel">
          <h1>
            {data.imovel.categoriaImovel +
              (data.imovel.qtdeQuarto === 0
                ? ""
                : data.imovel.qtdeQuarto === 1
                ? ", com " + data.imovel.qtdeQuarto + " quarto"
                : ", com " + data.imovel.qtdeQuarto + " quartos") +
              (data.imovel.qtdeSuites === 0
                ? ""
                : data.imovel.qtdeSuites === 1
                ? ", sendo " + data.imovel.qtdeSuites + " suíte"
                : ", sendo " + data.imovel.qtdeSuites + " suítes") +
              (data.imovel.qtdeBanheiro === 0
                ? ""
                : data.imovel.qtdeBanheiro === 1
                ? ", com " + data.imovel.qtdeBanheiro + " banheiro"
                : ", com " + data.imovel.qtdeBanheiro + " banheiros") +
              (data.imovel.qtdeVagas === 0
                ? ""
                : data.imovel.qtdeVagas === 1
                ? " e " + data.imovel.qtdeVagas + " vaga na garagem"
                : " e " + data.imovel.qtdeVagas + " vagas na garagem")}
          </h1>
        </div>
        <div className="informacoesImovel">
          <p className="endrecoImovel">
            {data.imovel.categoriaImovel} com {data.imovel.areaTotal + " m², "}
            localizado na {data.imovel.logradouro},
            {data.imovel.numeroLogradouro}
            {data.imovel.complemento && data.imovel.complemento} -
            {data.imovel.bairro} — {data.imovel.cidade}
          </p>
          <div className="comodosImovel">
            <div className="quarto">
              <p>
                <b>{data.imovel.qtdeQuarto}</b> Quartos
              </p>
            </div>
            <div className="banheiro">
              <p>
                <b>{data.imovel.qtdeBanheiro}</b> Banheiros
              </p>
            </div>
            <div className="garagem">
              <p>
                <b>{data.imovel.qtdeVagas}</b> Garagens
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="boxImagemImovel">
        <div className="imagemImovel">
          <img src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </div>
      <div className="descricaoImovel">
        <h2 className="titulodescricaoImovel">Descrição</h2>
        <div className="textoDescricaoImovel">
          {data.imovel.descricaoImovel}
        </div>
      </div>
      <div className="formImovel">
        <div className="dentroFormImovel">
          <div className="precosRevenda">
            <div className="valorImovel">
              {data.imovel.valorImovel != 0 && (
                <h1>
                  {data.imovel.valorImovel.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h1>
              )}
            </div>
            {data.imovel.valorCondominio != 0 || data.imovel.valorIPTU != 0 ? (
              <ValoresAdicionais />
            ) : (
              ""
            )}
          </div>

          <div className="tituloForm">
            <h3>
              Quer ter mais informações sobre o imóvel, mande mensagem agora que
              entramos em contato
            </h3>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Nome completo"/>
              <input type="email" placeholder="E-mail"/>
              <input type="tel" placeholder="Telefone / Whatsapp"/>
              <div class="checkFormImovel">
                <label>
                  <input type="checkbox" /> Telefone
                </label>
                <label>
                  <input type="checkbox" /> Email
                </label>
                <label>
                  <input type="checkbox" /> Whatsapp
                </label>
              </div>
              <button>Entrar em contato</button>
            </form>
          </div>
          <div className="informacoesCadastro">
            <p className="ligarFormContato">
              Se preferir mande mensagem no WhatsApp ou ligue (00) 0000-0000,
              estamos esperando seu contato.
            </p>
            <p className="direitosFormContato">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              fringilla volutpat congue. Duis tempus lectus vitae purus
              scelerisque, ac lobortis est luctus. Morbi diam metus, aliquet
              eget sollicitudin id, placerat sit amet orci. Sed non ante
              placerat magna dapibus rutrum tristique semper leo.
            </p>
          </div>
        </div>
      </div>
      <div className="outrosInformacoesImovel">
        <div className="galeriaImovel">
          <div className="blocoGaleriaImovel">
            <h2 className="tituloGaleria">Título Galeria</h2>
            <img />
          </div>
        </div>
        <div className="detalhesImoveis">
          <h2 className="titulocaractsImoveis">Detalhes do Imóvel</h2>
          <div className="itens">
            {data.imovel.statusImovel && (
              <p>
                <b> {data.imovel.statusImovel}</b>
              </p>
            )}
            {!data.imovel.aceitaPermuta && (
              <p>
                <b>Aceita permuta:</b> Não
              </p>
            )}
            {data.imovel.aceitaPermuta && (
              <p>
                <b>Aceita permuta: </b>Sim
              </p>
            )}
            {!data.imovel.mobiliado && (
              <p>
                <b>Mobiliado: </b> Não
              </p>
            )}
            {data.imovel.mobiliado && (
              <p>
                <b>Mobiliado: </b>Sim
              </p>
            )}
            {data.imovel.valorImovel != 0 && (
              <p className="detalhesImoveis">
                <b>Valor: </b>
                {data.imovel.valorImovel.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
            {data.imovel.valorEntrada != 0 && (
              <p>
                <b>Entrada:</b>
                {data.imovel.valorEntrada.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
            {data.imovel.valorParcela != 0 && (
              <p>
                <b>Parcela:</b>
                {data.imovel.valorParcela.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
            {data.imovel.valorIPTU != 0 && (
              <p>
                <b>IPTU:</b>
                {data.imovel.valorIPTU.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
            {data.imovel.valorCondominio != 0 && (
              <p>
                <b>Condomínio:</b>
                {data.imovel.valorCondominio.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            )}
            {data.imovel.areaTotal != 0 && (
              <p>
                <b>Área total:</b>
                {data.imovel.areaTotal.toLocaleString("pt-br")}
              </p>
            )}
            {data.imovel.areaConstruida != 0 && (
              <p>
                <b>Área construída:</b>
                {data.imovel.areaConstruida.toLocaleString("pt-br")}
              </p>
            )}
            {data.imovel.andarImovel != 0 && (
              <p>
                <b>Andar:</b> {data.imovel.andarImovel}
              </p>
            )}
            {data.imovel.qtdeQuarto != 0 && (
              <p>
                <b>Quartos:</b> {data.imovel.qtdeQuarto}
              </p>
            )}
            {data.imovel.qtdeBanheiro != 0 && (
              <p>
                <b>Banheiros:</b> {data.imovel.qtdeBanheiro}
              </p>
            )}
            {data.imovel.qtdeSuites != 0 && (
              <p>
                <b>Suítes:</b> {data.imovel.qtdeSuites}
              </p>
            )}
            {data.imovel.qtdeVagas != 0 && (
              <p>
                <b>Vagas na Garagem:</b> {data.imovel.qtdeVagas}
              </p>
            )}
            {data.nomeImovel && (
              <p>
                <b>Nome imóvel / condomínio:</b> {data.nomeImovel}
              </p>
            )}
            {data.nomeConstrutora && (
              <p>
                <b>Construtora:</b> {data.nomeConstrutora}
              </p>
            )}
            <div className="subitens endereco">
              <p>
                {data.imovel.logradouro}, {data.imovel.numeroLogradouro}
                {data.imovel.complemento && data.imovel.complemento},
                {data.imovel.bairro} - {data.imovel.cidade} - {data.imovel.cep} - {data.imovel.uf}
              </p>
            </div>
          </div>
        </div>
        <div className="caractsImoveis">
          <h2 className="titulocaractsImoveis">Características do Imóvel</h2>
          <div className="itens">
            {data.imovel.comodidadesImovel.map((comodidades) => (
              <p>{comodidades}</p>
            ))}
          </div>
        </div>
        <div className="caractsCondominio">
          <h2 className="titulocaractsCondominio">
            Características do Condomínio
          </h2>
          <div className="itens">
            {data.imovel.comodidadesCondominio.map((condominio) => (
              <p>{condominio}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ValoresAdicionais() {
  const { loading, error, data } = useQuery(ImovelQuery, {
    variables: { _id: IdImovel() },
  });

  if (loading) return <p>Loading Masterpieces...</p>;
  if (error) return <p>Mas Bah</p>;
  return (
    <div className="valoresAdicionais">
      {data.imovel.valorCondominio != 0 && (
        <div>
          <p>Valor do condomínio:</p>
          <p>
            {data.imovel.valorCondominio.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      )}
      {data.imovel.valorIPTU != 0 && (
        <div>
          <p>Valor do IPTU:</p>
          <p>
            {data.imovel.valorIPTU.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      )}
    </div>
  );
}

export default ImoveisVenda;
