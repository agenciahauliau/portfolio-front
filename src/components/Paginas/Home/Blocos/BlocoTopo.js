import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../../graphql/graphql';
import FGR from './../../../../assets/Imagens/820_FAS-V1_12-Foto_red24.02.jpg';
import { Link } from 'react-router-dom';

import './BlocoTopo.scss';


export default function BlocoTopo() {
	return (
		<div className="topoHome">
			<div className="topo">
				<div className="container">
					<div className="textoTopoHome">
						<div className="texto">
							<h1>Sua casa Jardins do jeito que sempre quis</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut laoreet tellus. Cras iaculis vehicula
								tortor, cursus placerat lacus dignissim in.
							</p>
						</div>
						<div className="botaoTipo">
							<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Aluguel&pagina=1"}>Aluguel</Link></div>
							<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Lançamento&pagina=1"}>Lançamento</Link></div>
							<div className="botaoTipoImovel"><Link to={"/imoveis?tipoNegociacao=Venda&pagina=1"}>Venda</Link></div>
						</div>
					</div>
					<div className="imagemTopoHome">
						<div className="imagem">
							<img src={FGR} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
