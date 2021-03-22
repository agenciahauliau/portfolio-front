import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ImovelQuery } from '../../Dados/DadosImoveis';
import {  useLocation } from "react-router-dom";

import "./Imoveis.scss";


function IdImovel()  {
    return new URLSearchParams(useLocation().search);
}

function Imoveis() {
  
    const { loading, data } = useQuery(ImovelQuery, {
        variables: {_id: IdImovel()}
    });

    if (loading) return <p>Loading Masterpieces...</p>;

  return (
    <section className="Imovel">

      <div className="container">
        <div className='conteudoImovel ImovelRevenda'>
            <div className='esquerdo topoImovel'>
                <div className='tituloImovel'>
                    <h1>{data.imovel.categoriaImovel +
                        (data.imovel.qtdeQuarto === 0 ? "" : (data.imovel.qtdeQuarto === 1 ?  ", com "+data.imovel.qtdeQuarto+" quarto" : ", com "+ data.imovel.qtdeQuarto +" quartos")) +
                        (data.imovel.qtdeSuites === 0 ? "" : (data.imovel.qtdeSuites === 1 ?  ", sendo "+data.imovel.qtdeSuites+" suíte" : ", sendo "+data.imovel.qtdeSuites+" suítes")) +
                        (data.imovel.qtdeBanheiro === 0 ? "" : (data.imovel.qtdeBanheiro === 1 ?  ", com "+data.imovel.qtdeBanheiro+" banheiro" : ", com "+data.imovel.qtdeBanheiro+" banheiros")) +
                        (data.imovel.qtdeVagas === 0 ? "" : (data.imovel.qtdeVagas === 1 ?  " e "+data.imovel.qtdeVagas+" vaga na garagem" : " e "+data.imovel.qtdeVagas+" vagas na garagem"))}
                    </h1>
                </div>
                <div className='infomacoesImovel'>
                    <p className='endrecoImovel'>{data.imovel.categoriaImovel +
                                                (data.imovel.qtdeQuarto === 0 ? "" : " de "+ data.imovel.areaTotal +" m², ") + "localizado na " +  data.imovel.logradouro}, {data.imovel.numeroLogradouro}, {data.imovel.complemento} - {data.imovel.bairro} — {data.imovel.cidade}</p>
                    <div className='comodosImovel'>
                        <div className='quarto'>
                            <p><b>{ data.imovel.qtdeQuarto }</b> Quartos</p>
                        </div>
                        <div className='banheiro'>
                            <p><b>{ data.imovel.qtdeBanheiro }</b> Banheiros</p>
                        </div>
                        <div className='garagem'>
                            <p><b>{ data.imovel.qtdeVagas }</b> Garagens</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='direito boxImagemImovel'>
                <div className='imagemImovel'>
                    <img src='https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </div>
            </div>
            <div className='esquerdo descricaoImovel'>
                <h2 className='titulodescricaoImovel'>Descrição</h2>
                <div className='textoDescricaoImovel'>
                    { data.imovel.descricaoImovel }
                 </div>
            </div>
            <div className='direito formImovel'>
                <div className='dentroFormImovel'>
                    <div className='tituloForm'>
                        <h3>Quer ter mais informações sobre o imóvel, mande mensagem agora que entramos em contato</h3>
                    </div>
                    <div>
                        <form>
                            <input type='text' />
                            <input type='email' />
                            <input type='tel' />
                            <div class='checkFormImovel'>
                                <label><input type='checkbox' /> Telefone </label>
                                <label><input type='checkbox' /> Email</label>
                                <label><input type='checkbox' /> Whatsapp</label>
                            </div>
                            <button>Entrar em contato</button>
                        </form>
                    </div>
                    <div className='informacoesCadastro'>
                        <p className='ligarFormContato'>Se preferir mande mensagem no WhatsApp ou ligue (00) 0000-0000, estamos esperando seu contato.</p>
                        <p className='direitosFormContato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla volutpat congue. Duis tempus lectus vitae purus scelerisque, ac lobortis est luctus. Morbi diam metus, aliquet eget sollicitudin id, placerat sit amet orci. Sed non ante placerat magna dapibus rutrum tristique semper leo.</p>
                    </div>
                </div>
            </div>
            <div className='outrosInformacoesImovel'>
                <div className='galeriaImovel'>
                    <div className='blocoGaleriaImovel'>
                        <h2 className='tituloGaleria'>Título Galeria</h2>
                        <img />
                    </div>
                </div>
                <div className='detalhesImoveis'>
                    <h2 className='titulocaractsImoveis'>Detalhes do Imóvel</h2>
                    <div className='itens'>
                        <p className='detalhesImoveis'></p>
                    </div>
                </div>
                <div className='caractsImoveis'>
                    <h2 className='titulocaractsImoveis'>Características do Imóvel</h2>
                    <div className='itens'>
                        <p className='caractImoveis'></p>
                    </div>
                </div>
                <div className='caractsCondominio'>
                    <h2 className='titulocaractsCondominio'>Características do Condomínio</h2>
                    <div className='itens'>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1 + Características 2</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                        <p className='caractCondominio'>Características 1</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Imoveis;
