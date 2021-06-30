import React, { useEffect, useState } from "react";
import BarraPesquisa from "../../Estruturas/BarraPesquisa/BarraPesquisa";
import Video from "./Casas_Jardins.webm";
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from "../../graphql/graphql"
import { useLocation } from 'react-router-dom';

import "./Jardins.scss";
import { CasasFGRlogo, CondominiosFGRlogo, FGRlogo } from "../../../assets/Imagens/Imagens";

function JardinsBlocos() {
  const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
    variables: {
      input: {
        jardins: true,
        nomeConstrutora: { in: 'FGR Construtora' },
      },
      quantidade: /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion) ? 3 : 6,
    },
    returnPartialData: true,
  });

  if (loading) return "...."

  return (

    <div className="imoveisLancamentoPJ">
      {data.imoveis.map((imovel) => (
        <div className="imoveisPJ">
          <div className="dataLancImovel">
            <h4>{imovel.previsaoLancamento}</h4>
            <p>data provável de lançamento</p>
          </div>
          <div className="imgPJ">
            <img
              src={imovel.imagemPrincipal}
              alt="iamgem"
            />
          </div>
          <div className="textoLancImovel">
            {imovel.categoriaImovel === "Casa em Condomínio" ?
              <img src={CasasFGRlogo.imagem.default} alt={CasasFGRlogo.alt} title={CasasFGRlogo.title} width={CasasFGRlogo.width} height={CasasFGRlogo.height} />
              :
              <img src={CondominiosFGRlogo.imagem.default} alt={CondominiosFGRlogo.alt} title={CondominiosFGRlogo.title} width={CondominiosFGRlogo.width} height={CondominiosFGRlogo.height} />
            }
            <div>
              <h3>{imovel.nomeImovel}</h3>
              <h4>{imovel.cidade}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

function JardinsCondominios() {
  const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
    returnPartialData: true,
  });

  const [stateJCondominios, setJCondominios] = useState([]);

  useEffect(() => {
    let tempVar = [];
    if (data) {
      data.imoveis?.forEach((i) => tempVar.push(i.bairro && i.bairro.replace(/\s\s/g, ' ')));
      const result = tempVar.reduce((json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }), {});
      const result2 = Object.entries(result).sort((a, b) => b[1] - a[1]);

      /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion)
        ? setJCondominios(result2.slice(0, 6))
        : setJCondominios(result2.slice(0, 12));
    }
  }, [data]);

  if (loading) return <p>Loading Masterpieces...</p>;
  return (
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
  )
}


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
              <img src={FGRlogo.imagem.default} alt={FGRlogo.alt} title={FGRlogo.title} width={FGRlogo.width} height={FGRlogo.height} />
              <img src={CasasFGRlogo.imagem.default} alt={CasasFGRlogo.alt} title={CasasFGRlogo.title} width={CasasFGRlogo.width} height={CasasFGRlogo.height} />
              <img src={CondominiosFGRlogo.imagem.default} alt={CondominiosFGRlogo.alt} title={CondominiosFGRlogo.title} width={CondominiosFGRlogo.width} height={CondominiosFGRlogo.height} />
            </div>
          </div>
          <div className="lancamentosPJ">
            <div className="titulo">
              <h2>Conheça os últimos e próximos lançamentos</h2>
            </div>
            <JardinsBlocos />
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
                  <div className="scroll">
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
              <JardinsCondominios />s
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jardins;
