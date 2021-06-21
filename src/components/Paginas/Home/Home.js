import React from 'react';
import BlocoTopo from '../../Estruturas/Home/BlocoTopo';
import BlocoJardins from '../../Estruturas/Home/BlocoJardins';
import BlocoInfo from '../../Estruturas/Home/BlocoInfo';
import BlocoVenda from '../../Estruturas/Home/BlocoVenda';
import BlocoAluguel from '../../Estruturas/Home/BlocoAluguel';
import BlocoBairros from '../../Estruturas/Home/BlocoBairros';

import './Home.scss';

export default function Home() {
	return (
		<div className="Home">
			<BlocoTopo />
			<BlocoJardins />
			<BlocoInfo />
			<BlocoVenda />
			<BlocoAluguel />
			<BlocoBairros />
		</div>
	);
}
