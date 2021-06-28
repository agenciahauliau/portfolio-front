import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../Dados/DadosImoveis';
import { Link } from 'react-router-dom';
import { Venda } from '../../../assets/Imagens/SVG/SVG';

function BlocoVenda() {
	const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		variables: {
			input: {
				tipoNegociacao: { in: 'Venda' },
			},
			quantidade: /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion) ? 3 : 6,
		},
		returnPartialData: true,
	});

	if (loading) return 'load';

	return (
		<div className="BlocoVenda">
			<div className="container">
				<div className="textoBloco">
					<h2>Imóveis a venda</h2>
					<p>Conheças nossos imóveis a venda</p>
				</div>
				<div className="Cards">
					{data.imoveis_condicional.map((imovel, i) => (
						<Link
							to={
								'/imoveis/imovel?titulo=' +
								imovel.categoriaImovel.replaceAll(' ', '+') +
								(imovel.qtdeQuarto === 0
									? ''
									: imovel.qtdeQuarto === 1
									? '+com+' + imovel.qtdeQuarto + '+quarto'
									: '+com+' + imovel.qtdeQuarto + '+quartos') +
								(imovel.qtdeSuites === 0
									? ''
									: imovel.qtdeSuites === 1
									? '+com+' + imovel.qtdeSuites + '+suite'
									: '+com+' + imovel.qtdeSuites + '+suites') +
								(imovel.qtdeBanheiro === 0
									? ''
									: imovel.qtdeBanheiro === 1
									? '+com+' + imovel.qtdeBanheiro + '+banheiro'
									: '+com+' + imovel.qtdeBanheiro + '+banheiros') +
								(imovel.qtdeVagas === 0
									? ''
									: imovel.qtdeVagas === 1
									? '+com+' + imovel.qtdeVagas + '+vaga+na+garagem'
									: '+com+' + imovel.qtdeVagas + '+vagas+na+garagem') +
								'&tipoNegociacao=' +
								imovel.tipoNegociacao +
								'&id=' +
								imovel._id
							}
						>
							<div key={i} className="CardImoveisHome">
								<div className="TopoCardImoveis">
									<img
										src={imovel.imagemPrincipal}
										alt={
											imovel.categoriaImovel +
											(imovel.qtdeQuarto === 0
												? ''
												: imovel.qtdeQuarto === 1
												? ', com ' + imovel.qtdeQuarto + ' quarto'
												: ', com ' + imovel.qtdeQuarto + ' quartos') +
											(imovel.qtdeSuites === 0
												? ''
												: imovel.qtdeSuites === 1
												? ', sendo ' + imovel.qtdeSuites + ' suíte'
												: ', sendo ' + imovel.qtdeSuites + ' suítes') +
											(imovel.qtdeBanheiro === 0
												? ''
												: imovel.qtdeBanheiro === 1
												? ', com ' + imovel.qtdeBanheiro + ' banheiro'
												: ', com ' + imovel.qtdeBanheiro + ' banheiros') +
											(imovel.qtdeVagas === 0
												? ''
												: imovel.qtdeVagas === 1
												? ' e ' + imovel.qtdeVagas + ' vaga na garagem'
												: ' e ' + imovel.qtdeVagas + ' vagas na garagem')
										}
									/>
									{Venda}
								</div>

								<div className="InfoCardImoveis">
									<div className="PCImoveis">
										<h3>
											{imovel.valorImovel.toLocaleString('pt-br', {
												style: 'currency',
												currency: 'BRL',
											})}
										</h3>
										<p>{imovel.categoriaImovel}</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
				<button className="verMais">
					<a href="/imoveis?tipoNegociacao=Venda" title="Imóveis a venda">
						Mais Imóveis
					</a>
				</button>
			</div>
		</div>
	);
}

export default BlocoVenda;
