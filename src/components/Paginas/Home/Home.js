import React from 'react';
import BlocoTopo from './Blocos/BlocoTopo'
import BlocoCaptacao from './Blocos/BlocoCaptacao'
import BlocoVenda from './Blocos/BlocoVenda'
import BlocoAluguel from './Blocos/BlocoAluguel'
import BlocoBairros from './Blocos/BlocoBairros'
import BlocoLancamento from './Blocos/BlocoLancamento'
import BlocoEstatistica from './Blocos/BlocoEstatistica';
import BlocoCovid from './Blocos/BlocoCovid';

import './Home.scss';

export default function Home() {
	return (
		<div className="Home">
			<BlocoTopo />
			<BlocoCaptacao />
			<BlocoLancamento />
			<BlocoBairros />
			<BlocoVenda />
			<BlocoEstatistica />
			<BlocoAluguel />
			<BlocoCovid />
			<div className="linhasVerticais">
				<div className="linhas">
					<div className="linha"></div>
					<div className="linha"></div>
					<div className="linha"></div>
				</div>
			</div>
		</div>
	);
}
