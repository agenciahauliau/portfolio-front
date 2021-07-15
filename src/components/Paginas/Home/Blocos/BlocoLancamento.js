import React from 'react'
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../../graphql/graphql';
import './BlocoLancamento.scss';

function BlocoLancamento() {
    const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
        variables: {
            input: {
                tipoNegociacao: { in: 'Lançamento' },
            },
            quantidade: 3
        },
        returnPartialData: true,
    });

    if (loading) return <p></p>;
    return (
        <div className="BlocoLancamento">
            <div className="container">
                <div className="Lancamento">
                    <div className="textoBloco">
                        <h2>Conheça o novo</h2>
                        <p>mais novos lançamentos de Goiânia e Região</p>
                    </div>
                    <div className='imoveisLacamento'>
                        {data.imoveis.map((imovel) => (
                            <div className="imoveis">
                                <div className="imagemBloco">
                                    <div className="imagem">
                                        <img src={imovel.imagemPrincipal} alt={imovel.nomeImovel} title={imovel.nomeImovel} />
                                    </div>
                                </div>
                                <div className="textoBloco">
                                        <div className="texto">
                                            <h3>{imovel.nomeImovel}</h3>
                                            <p className="descricao">{imovel.descricaoImovel}</p>
                                            <p className="construtora">{imovel.nomeConstrutora}</p>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocoLancamento
