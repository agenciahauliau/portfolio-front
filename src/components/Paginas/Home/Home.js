import React from 'react';
import BlocoCasaJardins from '../../Estruturas/Home/BlocoCasaJardins';
import BlocoJardins from '../../Estruturas/Home/BlocoJardins';
import BlocoInfo from '../../Estruturas/Home/BlocoInfo';
import BlocoVenda from '../../Estruturas/Home/BlocoVenda';
import BlocoAluguel from '../../Estruturas/Home/BlocoAluguel';
import BlocoBairros from '../../Estruturas/Home/BlocoBairros';

import './Home.scss';

export default function Home() {
	return (
		<div className="Home">
			<BlocoCasaJardins />
			<BlocoJardins />
			<BlocoInfo />
			<BlocoVenda />
			<BlocoAluguel />
			<BlocoBairros />
		</div>
	);
}
