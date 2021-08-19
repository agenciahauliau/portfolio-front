import React from 'react'
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../../graphql/graphql';
import { Link } from 'react-router-dom';

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
    return (<div className="BlocoLancamento">
        <div className="container">
            <div className="Lancamento">
                <div className="textoBloco">
                    <h2>Conheça o novo</h2>
                    <p>mais novos lançamentos de Goiânia e Região</p>
                </div>
                <div className='imoveisLacamento'>
                    {(data.imoveis.map((imovel) =>
                        <Lancamentos
                            entrada={imovel.tipologias.map((tipologia) => tipologia.valorEntrada)}
                            parcela={imovel.tipologias.map((tipologia) => tipologia.valorParcela)}
                            imovel={imovel}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}

class Lancamentos extends React.Component {
    constructor(props) {
        super(props);

        let parcelas = this.props.parcela.sort(function (a, b) { return a - b })
        let entradas = this.props.entrada.sort(function (a, b) { return a - b })
        this.state = {
            entrada: entradas[0],
            parcela: parcelas[0]
        };
    }

    informacoes(e) {
        e.nativeEvent.path[2].classList.toggle('ativo')
    }

    render() {

        const valores = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })

        return (
            <div className="imoveis">
                <div className="textoBloco">
                    <div className="texto">
                        <h3>{this.props.imovel.nomeImovel}</h3>
                        <div className="descricao" dangerouslySetInnerHTML={{ __html: `${this.props.imovel.descricaoImovel}` }}></div>
                    </div>
                </div>
                <div onClick={this.informacoes} className="imagemBloco">
                    <div className="imagem">
                        <img src={this.props.imovel.imagemPrincipal} alt={this.props.imovel.nomeImovel} />
                    </div>
                </div>
                <div className="textoBloco">
                    <div className="texto">
                        <p>
                            {this.state.entrada ? "Parcela a partir de " + valores.format(this.state.entrada) : ""}
                        </p>
                        <p>
                            {this.state.parcela ? "Parcela a partir de " + valores.format(this.state.parcela) : ""}
                        </p>
                        <p className="construtora">{this.props.imovel.nomeConstrutora}</p>
                        <Link
                            to={
                                '/imoveis/imovel?titulo=' +
                                '&categoriaImovel=' + this.props.imovel.categoriaImovel +
                                '&tipoNegociacao=' + this.props.imovel.tipoNegociacao +
                                '&id=' + this.props.imovel._id
                            }>
                            <p className="verMais">Ver mais informações</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlocoLancamento
