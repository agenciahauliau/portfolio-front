import React from "react";
import BarraPesquisa from "../../Estruturas/BarraPesquisa/BarraPesquisa";
import Video from "./Casas_Jardins.webm";

import "./Jardins.scss";

function Jardins() {
  return (
    <>
      <div className="paginaJardins">
        <div className="container">
          <div className="topoPJ">
            <div className="bgTopo">
              <video autoPlay muted loop>
                <source src={Video} type="video/webm" />
              </video>
            </div>
            <div className="tituloTopo">
              <h1>Jardins FGR</h1>
              <h2>O melhor lugar para viver</h2>
              <p>Conheça todos os Jardins</p>
            </div>
          </div>
          <div className="frasePJ">
            <div className="titulos">
              <h1>
                Somos parceiros oficiais com exclusividade em lotes Jardins FGR
              </h1>
            </div>
            <div className="logos">
              <img
                src="https://portfolio.imb.br/assets/img/logo-fgr-incorporacao.webp"
                alt="FGR Incorporações"
              />
              <img
                src="https://portfolio.imb.br/assets/img/selo-condominio-jardins-fgr.webp"
                alt="Condomínio Jardins - FGR Incorporações"
              />
              <img
                src="https://portfolio.imb.br/assets/img/logo-casas-jardins-fgr.webp"
                alt="Casas Jardins - FGR Incorporações"
              />
            </div>
          </div>
          <div className="lancamentosPJ">
            <div className="titulo">
              <h2>Conheça os últimos e próximos lançamentos</h2>
            </div>
            <div className="imoveisLancamentoPJ">
              <div className="imoveisPJ">
                <div className="dataLancImovel">
                  <h4>Setembro 2021</h4>
                  <p>data provável de lançamento</p>
                </div>
                <div className="imgPJ">
                  <img
                    src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="iamgem"
                  />
                </div>
                <div className="textoLancImovel">
                  <img
                    className="logo"
                    src="https://portfolio.imb.br/assets/img/logo-casas-jardins-fgr.webp"
                  />
                  <div>
                    <h3>Jardins Barcelona</h3>
                    <h4>Aparecida de Goiânia</h4>
                  </div>
                </div>
              </div>
              <div className="imoveisPJ">
                <div className="dataLancImovel">
                  <h4>Setembro 2021</h4>
                  <p>data provável de lançamento</p>
                </div>
                <div className="imgPJ">
                  <img
                    src="https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="iamgem"
                  />
                </div>
                <div className="textoLancImovel">
                  <img
                    className="logo condominio"
                    src="https://portfolio.imb.br/assets/img/selo-condominio-jardins-fgr.webp"
                  />
                  <div>
                    <h3>Jardins Barcelona</h3>
                    <h4>Aparecida de Goiânia</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="casasJardinsPJ">
            <div className="container">
              <div className="texto">
                <h1>Conheça as Casas Jardins FGR</h1>
                <h3>
                  Uma solução completa da FGR para você ter sua CASA + LOTE no
                  seu Condomínio Jardins
                </h3>
                <p>
                  Já imaginou você e sua família na casa que sempre sonharam,
                  com um projeto moderno, com total integração dos ambientes,
                  construído sob o mais alto padrão de qualidade, tudo isso
                  cercado de toda segurança, lazer, natureza e qualidade de vida
                  que só um Condomínio Horizontal Jardins pode oferecer? Então
                  pode parar de imaginar e comece a realizar!
                </p>
              </div>
              <div className="casas">
                <div className="listaCasas">
                  <div className="casa">
                    <img
                      src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="iamgem"
                    />
                    <h4>Casas Jardins França e Itália</h4>
                  </div>
                  <div className="casa">
                    <img
                      src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="iamgem"
                    />
                    <h4>Casas Jardins França e Itália</h4>
                  </div>
                  <div className="casa">
                    <img
                      src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="iamgem"
                    />
                    <h4>Casas Jardins França e Itália</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="valorizacaoPJ">
            <div className="titulo">
              <h1>Valorização dos Condomínios Jardins</h1>
              <h2>O melhor lugar para viver e investir</h2>
            </div>
            <div className="tabela"></div>
          </div>
          <div className="todosPJ">
            <div className="container">
              <h1>Saiba quais são todos os Jardins da Região de Goiânia</h1>
              <h2>
                Clique no qual você mais gostou e veja se sua casa dos sonhos
                está nele
              </h2>
              <div className="condominios">
                <div
                  className="condominio"
                  style={{
                    background:
                      "linear-gradient(35deg, #27272755, #272727bb), url(" +
                      "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center / cover",
                  }}
                >
                  <div className="informacoes">
                    <div className="topo">
                      <h6>Condomínio Horizontal</h6>
                      <h3>Jardins Barcelona</h3>
                      <p>Aparecida de Goiânia</p>
                    </div>
                    <div className="bottom">
                      <p>
                        501 lotes a partir de 300m². Acesso pela GO-403 e futura
                        nova BR-153.
                      </p>
                      <img src="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jardins;
