import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../graphql/graphql';
import { Link } from 'react-router-dom';
import { PagImovel, QParamsPesquisa } from '../../Helpers/HelpersFunction';
import ReactPaginate from 'react-paginate';
import { Quarto, Banheiro, Garagem, Esquerda, Direita } from '../../../assets/SVG';

import BarraPesquisa from '../../Estruturas/BarraPesquisa/BarraPesquisa';
import FGRBanner from '../../Estruturas/FGRBanner/FGRBanner';
import BarraAjuda from '../../Estruturas/BarraAjuda/BarraAjuda';
import Newsletter from '../../Estruturas/Newsletter/Newsletter';
import { MarcaDaAguaPequena } from '../../../assets/Imagens';

//import SCSS
import './Pesquisa.scss';
import '../../Estruturas/Cards/CardImoveis.scss';

function Pesquisa() {

	const quantImovel = localStorage.getItem("quantImoveis")
	const [quantState, quantSetstate] = useState(quantImovel ? quantImovel : 12)

	function LinkQuantImoveis(el) {
		localStorage.setItem("quantImoveis", el.target.textContent)
		quantSetstate(document.querySelector(`.QuantImo${localStorage.getItem("quantImoveis")}`).textContent)
	}

	const { loading, error, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		variables: {
			input: QParamsPesquisa(),
		},
		returnPartialData: true,
	});

	const [pageNumber, setPageNumber] = useState(0);

	const usersPerPage = +quantState;
	const pagesVisited = PagImovel() * usersPerPage;

	if (loading) return <p></p>;
	if (error) return <p></p>;


	const imoveisPP = data.imoveis.slice(pagesVisited, pagesVisited + usersPerPage).map((imovel, index) => {

		const tituloImovel = imovel.categoriaImovel +
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
					: ' e ' + imovel.qtdeVagas + ' vagas na garagem');

		return (
			<div key={index} className="CardImoveis">
				<div className="TopoCardImoveis">
					<img
						onContextMenu={(e) => { e.preventDefault() }}
						src={MarcaDaAguaPequena.imagem.default}
						style={{ backgroundImage: `url("${imovel.imagemPrincipal}")`, backgroundSize: 'cover' }}
						alt={tituloImovel}
					/>
					<div className="TipoImovel">

					</div>
				</div>
				<Link
					to={
						'/imoveis/imovel?titulo=' +
						imovel.categoriaImovel +
						tituloImovel +
						'&tipoNegociacao=' +
						imovel.tipoNegociacao +
						'&id=' +
						imovel._id
					}
				>
					<div className="InfoCardImoveis">
						<div className="CaractImovel">
							<div className="quarto">
								<p>{imovel.qtdeQuarto}</p>
								{Quarto}
							</div>
							<div className="banheiro">
								<p>{imovel.qtdeBanheiro}</p>
								{Banheiro}
							</div>
							<div className="garagem">
								<p>{imovel.qtdeVagas}</p>
								{Garagem}
							</div>
						</div>
						<div className="PrecoCat">
							<div className="PrecoImoveis">
								<h4>
									{imovel.valorImovel.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}
								</h4>
							</div>
							<div className="CategoriaImoveis">
								<p>{imovel.categoriaImovel}</p>
							</div>
						</div>
						<div className="EnderecoImoveis">
							<p>
								{imovel.logradouro}, {imovel.numeroLogradouro}, {imovel.complemento} - {imovel.bairro} — {imovel.cidade}
							</p>
						</div>
					</div>
				</Link>
			</div>
		);
	});

	const pageCount = Math.ceil(data.imoveis.length / usersPerPage);

	const changePage = ({ selected }) => {

		setPageNumber(selected);

		const elementScroll = document.querySelector('.DestaquesPesquisa .container').offsetTop

		window.scroll({
			top: elementScroll - 89,
			behavior: "smooth"
		  })

		console.log( elementScroll )

		const url = new URL(window.location)
		url.searchParams.set('pagina', selected + 1);
		window.history.pushState({}, '', url)

		
	};

	return (
		<>
			<BarraPesquisa quant={LinkQuantImoveis.bind()} />
			<section className="ConteudoPesquisa">
				<div className="DestaquesPesquisa">
					<div className="container">
						{imoveisPP}
						<div className="paginacao">
							<ReactPaginate
								previousLabel={Esquerda}
								nextLabel={Direita}
								pageCount={pageCount}
								onPageChange={changePage}
								initialPage={PagImovel()}
								pageRangeDisplayed={2}
								marginPagesDisplayed={1}
								containerClassName={'paginationBttns'}
								previousLinkClassName={'previousBttn'}
								nextLinkClassName={'nextBttn'}
								disabledClassName={'paginationDisabled'}
								activeClassName={'paginationActive'}
							/>
						</div>
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
