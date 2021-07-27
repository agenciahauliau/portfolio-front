import React from 'react';
import { CameraSeguranca, Chaves, Ponto, RedesSocais } from '../../../../assets/SVG';

import './BlocoCovid.scss';

export default function BlocoCovid() {
	return (
		<div className="BlocoCovid">
			<div className="container">
				<div className="conteudo">
					<div className='titulo'>
						<h3>Nossas medidas em resposta a COVID-19</h3>
					</div>
					<div className='informacoes'>
						<p>
							O cuidado é de cada um e responsabilidade de todos. Mesmo que esteja vacinado, é importante que a mantenha medidas de prevenção e controle orientadas pelo Ministério da Saúde. Veja nossas medidas adotados: 
						</p>
						<ul>
							<li>Use máscara o tempo todo</li>
							<li>Lave as mãos com água e sabão ou use álcool em gel</li>
							<li>Cubra o nariz e a boca ao espirrar</li>
							<li>Mantenha o distanciamento social mínino de 1 metro</li>
							<li>Evite aglomerações</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
