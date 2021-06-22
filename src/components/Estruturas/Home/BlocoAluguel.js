import React from 'react';
import { useQuery } from '@apollo/client';
import { QIPesquisa } from '../../Dados/DadosImoveis';
import { Link } from 'react-router-dom';

function BlocoVenda() {
	const { loading, data } = useQuery(QIPesquisa, {
		variables: {
			input: {
				tipoNegociacao: 'Aluguel',
			},
			quantidade: /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion) ? 3 : 6,
		},
		returnPartialData: true,
	});

	if (loading) return 'load';

	return (
		<div className="BlocoAluguel">
			<div className="textoBloco">
				<h2>Imóveis para aluguar</h2>
				<p>Conheças nossos imóveis para aluguar</p>
			</div>
			<div className="Cards">
				{data.imoveis.map((imovel, i) => (
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
								<svg version="1.1" viewBox="0 0 512.011 512.011" xmlns="http://www.w3.org/2000/svg">
									<path d="m205.64 179.14c-0.529 7.945-0.845 16.444-0.845 25.668 0 42.743 12.757 68.267 34.133 68.267 26.94 0 34.133-32.188 34.133-51.2 0-4.719-3.814-8.533-8.533-8.533-4.71 0-8.533 3.814-8.533 8.533 0 0.341-0.734 34.133-17.067 34.133-9.89 0-17.067-21.538-17.067-51.2 0-99.49 34.918-110.82 36.011-111.15 4.506-1.015 7.398-5.444 6.485-10.001-0.922-4.617-5.393-7.62-10.044-6.69-1.707 0.341-7.885 1.971-15.326 8.337 8e-3 -1.459 0.128-2.927 0.521-4.386 1.178-4.403 4.002-8.081 7.953-10.368 3.951-2.27 8.542-2.884 12.945-1.698 4.403 1.178 8.09 4.002 10.359 7.953 4.71 8.141 1.903 18.603-6.246 23.313-4.079 2.355-5.47 7.578-3.115 11.657 1.579 2.739 4.446 4.267 7.398 4.267 1.451 0 2.918-0.367 4.258-1.143 16.29-9.421 21.888-30.336 12.493-46.626-4.565-7.902-11.921-13.542-20.727-15.906-8.832-2.364-18.014-1.143-25.899 3.405-7.902 4.565-13.551 11.921-15.906 20.736-2.21 8.243-1.169 16.794 2.85 24.593-7.322 11.913-14.165 29.653-17.971 56.03-12.783-15.3-20.173-34.782-20.173-54.724 0-47.053 38.281-85.333 85.333-85.333 47.044 0 85.333 38.281 85.333 85.333s-38.289 85.333-85.333 85.333c-9.276 0-18.381-1.476-27.085-4.378-4.463-1.485-9.293 0.913-10.795 5.385-1.493 4.471 0.922 9.301 5.393 10.795 10.445 3.49 21.376 5.265 32.486 5.265 56.465 0 102.4-45.943 102.4-102.4 0-56.465-45.935-102.4-102.4-102.4s-102.4 45.935-102.4 102.4c3e-3 29.097 13.067 57.368 34.981 76.73z" />
									<path d="m110.93 324.27h68.267c9.95 0 26.88 12.698 41.813 23.893 18.722 14.046 36.403 27.307 52.053 27.307h51.2c12.954 0 19.396 5.879 19.567 6.033 1.664 1.664 3.849 2.5 6.033 2.5 2.185 0 4.361-0.836 6.033-2.5 3.328-3.337 3.328-8.738 0-12.066-1.126-1.135-11.614-11.034-31.633-11.034h-51.2c-9.958 0-26.88-12.698-41.813-23.893-18.722-14.046-36.412-27.307-52.053-27.307h-68.267c-4.71 0-8.533 3.814-8.533 8.533 0 4.711 3.823 8.534 8.533 8.534z" />
									<path d="m374.67 173.41l86.127 86.127v30.601h-30.601l-3.533-3.533v-22.067c0-4.719-3.814-8.533-8.533-8.533h-8.533v-8.533c0-4.719-3.814-8.533-8.533-8.533h-22.059l-3.541-3.541v-22.059c0-4.719-3.814-8.533-8.533-8.533h-22.067l-0.828-0.828c-3.328-3.337-8.73-3.337-12.066 0s-3.337 8.73 0 12.066l3.328 3.328c1.596 1.596 3.763 2.5 6.033 2.5h17.066v17.05c0 2.261 0.896 4.429 2.492 6.033l8.533 8.542c1.596 1.604 3.772 2.509 6.042 2.509h17.067v8.533c0 4.71 3.814 8.533 8.533 8.533h8.533v17.067c0 2.261 0.896 4.429 2.5 6.033l8.533 8.533c1.596 1.596 3.763 2.5 6.033 2.5h42.667c4.719 0 8.533-3.823 8.533-8.533v-42.667c0-2.261-0.905-4.437-2.5-6.033l-88.627-88.627c-3.337-3.336-8.73-3.336-12.066 0-3.336 3.335-3.336 8.728 0 12.065z" />
									<path d="m42.667 456.54c0-7.057-5.743-12.8-12.8-12.8s-12.8 5.743-12.8 12.8 5.743 12.8 12.8 12.8 12.8-5.743 12.8-12.8z" />
									<path d="m59.733 273.07h-51.2c-4.71 0-8.533 3.814-8.533 8.533 0 4.71 3.823 8.533 8.533 8.533h51.2c4.702 0 8.533 3.823 8.533 8.533v187.73c0 4.702-3.831 8.533-8.533 8.533h-51.2c-4.71 0-8.533 3.814-8.533 8.533 0 4.71 3.823 8.533 8.533 8.533h51.2c14.114 0 25.6-11.486 25.6-25.6v-187.73c0-14.122-11.486-25.6-25.6-25.6z" />
									<path d="m507.43 358.41c-9.412-16.307-30.362-21.888-46.097-12.774l-98.21 47.804c-15.275 7.637-30.677 7.637-64.452 7.637-33.015 0-83.43-8.337-83.934-8.422-4.685-0.777-9.045 2.372-9.822 7.014-0.768 4.651 2.372 9.045 7.014 9.822 2.125 0.358 52.301 8.653 86.741 8.653 35.43 0 53.214 0 71.996-9.395l98.671-48.051c3.942-2.278 8.542-2.884 12.945-1.707s8.09 4.002 10.359 7.953c2.287 3.951 2.893 8.55 1.707 12.954-1.169 4.395-3.994 8.081-8.192 10.505l-115.37 71.808c-0.239 0.154-24.858 15.667-80.648 15.667-48.375 0-123.11-41.182-124.19-41.771-0.768-0.384-19.277-9.429-55.014-9.429-4.71 0-8.533 3.814-8.533 8.533 0 4.71 3.823 8.533 8.533 8.533 31.036 0 47.027 7.458 47.053 7.458 3.226 1.792 79.343 43.742 132.15 43.742 61.602 0 88.934-17.749 89.839-18.355l114.96-71.552c7.893-4.557 13.542-11.921 15.898-20.727 2.364-8.808 1.152-18.007-3.405-25.9z" />
								</svg>
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
	);
}

export default BlocoVenda;
