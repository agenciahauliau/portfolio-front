import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlideHome } from './components/Slide';
import { GradeBranca } from '../../../../assets/Imagens';
import { Direita, Esquerda } from '../../../../assets/SVG';

import './BlocoTopo.scss';


export default function BlocoTopo() {

	const [slideState, slideSetstate] = useState(0)
	const quantSlide = SlideHome.length

	const cliqueDots = (el) => {
		slideSetstate(el);
	};

	const prevSlide = () => {
		slideSetstate(slideState === 0 ? quantSlide - 1 : slideState - 1);
	}

	const nextSlide = () => {
		slideSetstate(slideState === quantSlide - 1 ? 0 : slideState + 1);
	}

	useEffect(() => {

		const play = () => {
			slideSetstate(slideState === quantSlide - 1 ? 0 : slideState + 1);
		};
		const interval = setInterval(play, 7500);
		return () => clearInterval(interval);
	})

	return (
		<div className="topoHome">
			<div className="topo">
				<div className="imagemGrade">
					<div className="imagem">
						<img src={GradeBranca.imagem.default} alt={GradeBranca.alt} title={GradeBranca.title} width={GradeBranca.width} height={GradeBranca.height} />
					</div>
				</div>
				<div className="textoTopoHome">
					<div className="textoBanner">
						{SlideHome.map((item, index) => (
							<div key={`texto-banner-${index}`} className={index === slideState ? 'texto ativo' : 'texto'}>
								<h1>{item.titulo}</h1>
								<p>{item.texto}</p>
							</div>
						))}
					</div>
					<div className="botaoTipo">
						<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Lançamento&pagina=1"}>Lançamento</Link></div>
						<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Aluguel&pagina=1"}>Aluguel</Link></div>
						<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Venda&pagina=1"}>Revenda</Link></div>
					</div>
					<div className="controleSlide">
						<div className="arrows">
							<div onClick={prevSlide} className="esq">{Esquerda}</div>
						</div>

						<div className="posicaoBanner">
							<p>{slideState + 1} - {SlideHome.length}</p>
						</div>
						<div onClick={nextSlide} className="arrows">
							<div className="dir">{Direita}</div>
						</div>
						{/* <div className="dots">
							{SlideHome.map((item, index) => (
								<div onClick={() => cliqueDots(index)} key={`dot-banner-${index}`} className={index === slideState ? 'dot ativo' : 'dot'} data-index={index}>
									<p></p>
								</div>
							))}
						</div> */}
					</div>
				</div>
				<div className="imagemTopoHome">
					{SlideHome.map((item, index) => (
						<div key={`imagem-banner-${index}`} className={index === slideState ? 'imagem ativo' : 'imagem'}>
							<img src={item.imagem} alt={item.titulo} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
