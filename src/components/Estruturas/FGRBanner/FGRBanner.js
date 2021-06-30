import React from 'react';
import SlideFGRBanner from './SlideFGRBanner';
import { SlidesFGRBanner } from './SlidesFGRBanner';
import { CasasFGRlogo, CondominiosFGRlogo, FGRlogo } from '../../../assets/Imagens/Imagens'
import { SetaDireita } from '../../../assets/Imagens/SVG';

import './FGRBanner.scss';

function FGRBanner() {
	return (
		<section className="FGRBanner">
			<div className="container">
				<div className="textoFGRBanner">
					<h1>Essa é a sua chance de morar em um Condomínio Jardins!</h1>
					<p>
						Fique por dentro de todos os Lançamentos da FGR, venda de casas prontas para morar e oportunidades para
						alugel.
					</p>
					<a href="">
						{SetaDireita}
						<p>Ver todos os imóveis FGR</p>
					</a>
					<div className="logosFGR">
						<img src={FGRlogo.imagem.default} alt={FGRlogo.alt} title={FGRlogo.title} width={FGRlogo.width} height={FGRlogo.height} />
						<img src={CasasFGRlogo.imagem.default} alt={CasasFGRlogo.alt} title={CasasFGRlogo.title} width={CasasFGRlogo.width} height={CasasFGRlogo.height} />
						<img src={CondominiosFGRlogo.imagem.default} alt={CondominiosFGRlogo.alt} title={CondominiosFGRlogo.title} width={CondominiosFGRlogo.width} height={CondominiosFGRlogo.height} />
					</div>
				</div>
				<div className="slideFGRBanner">
					<SlideFGRBanner slides={SlidesFGRBanner} />
				</div>
			</div>
		</section>
	);
}

export default FGRBanner;
