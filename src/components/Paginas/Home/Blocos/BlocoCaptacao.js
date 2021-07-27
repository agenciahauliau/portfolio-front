import React from 'react';
import { CameraSeguranca, Chaves, Ponto, RedesSocais } from '../../../../assets/SVG';

import './BlocoCaptacao.scss';

export default function BlocoCaptacao() {
	return (
		<div className="infoImo">
			<div className="container">
				<div className="conteudo">
					<div className="caract">
						<div className="primeira">
							<div className="item">
								{RedesSocais}								
								<p> Divulgação do seu imóvel nos nossos portais e redes sociais. </p>
							</div>
							<div className="item">
								{CameraSeguranca}								
								<p>Acompanhamento de clientes durante visitas ao imóvel.</p>
							</div>
						</div>
						<div className="segunda">
							<div className="item">
								{Chaves}								
								<p> Consultoria imobiliária durante o processo de revenda e aluguel. </p>
							</div>
							<div className="item">
								{Ponto}								
								<p>A garantia de que uma equipe com foco em resultados está cuidando dos seus interesses.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
