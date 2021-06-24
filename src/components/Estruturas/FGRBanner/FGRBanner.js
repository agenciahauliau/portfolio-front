import React from 'react';
import SlideFGRBanner from './SlideFGRBanner';
import { SlidesFGRBanner } from './SlidesFGRBanner';

import './FGRBanner.scss';

import FGR from '../../../assets/Imagens/logo-fgr-incorporacao.webp';
import Jardins from '../../../assets/Imagens/selo-condominio-jardins-fgr.webp';
import Casas from '../../../assets/Imagens/logo-casas-jardins-fgr.webp';

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
						<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
							<path d="m273.99 306.92l86.04-99.1c0.03-0.04 0.06-0.08 0.09-0.12 0.12-0.14 0.22-0.28 0.33-0.42 0.11-0.15 0.24-0.31 0.36-0.48 0.12-0.16 0.19-0.29 0.29-0.44 0.11-0.17 0.22-0.34 0.31-0.51 0.08-0.15 0.16-0.31 0.24-0.47 0.08-0.15 0.18-0.35 0.26-0.53 0.08-0.17 0.14-0.33 0.21-0.5s0.14-0.36 0.2-0.54 0.12-0.34 0.16-0.52c0.05-0.17 0.1-0.38 0.15-0.57 0.04-0.17 0.08-0.34 0.11-0.52 0.04-0.22 0.07-0.44 0.1-0.67l0.06-0.45c0.04-0.36 0.06-0.73 0.06-1.09v-0.09c0-0.36-0.02-0.73-0.06-1.09-0.01-0.15-0.04-0.3-0.06-0.45-0.03-0.22-0.06-0.45-0.1-0.67-0.03-0.17-0.07-0.34-0.11-0.52-0.05-0.19-0.09-0.38-0.15-0.57s-0.11-0.35-0.16-0.52c-0.06-0.17-0.13-0.36-0.2-0.54s-0.14-0.33-0.21-0.5c-0.07-0.16-0.17-0.36-0.26-0.52-0.08-0.17-0.16-0.31-0.24-0.47-0.1-0.17-0.21-0.34-0.31-0.51-0.09-0.15-0.19-0.3-0.29-0.45-0.1-0.14-0.24-0.32-0.36-0.48s-0.22-0.29-0.33-0.42c-0.03-0.04-0.06-0.08-0.09-0.12l-86.04-99.07c-4.27-5.07-11.84-5.72-16.9-1.45-5.07 4.27-5.72 11.84-1.45 16.9 0.08 0.09 0.16 0.18 0.24 0.28l68.8 79.24h-275.65c-6.62 0-11.99 5.37-11.99 11.99s5.37 11.99 11.99 11.99h275.65l-68.8 79.25c-2.9 3.19-3.87 7.68-2.54 11.78s4.76 7.17 8.98 8.04 8.59-0.59 11.44-3.83c0.07-0.09 0.15-0.17 0.23-0.27z" />
						</svg>
						<p>Ver todos os imóveis FGR</p>
					</a>
					<div className="logosFGR">
						<img src={FGR} alt="FGR Incorporações" />
						<img src={Jardins} alt="Condomínios FGR" />
						<img src={Casas} alt="Casas Jardins" />
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
