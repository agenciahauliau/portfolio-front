import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../../graphql/graphql';
import { Link } from 'react-router-dom';
import { MobileDesktop } from './../../../Helpers/HelpersFunction'
import { Casal } from '../../../../assets/Imagens';

import './BlocoBairros.scss';

function BlocoBairros() {
	const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		returnPartialData: true,
	});

	const [stateBairros, setBairros] = useState([]);

	useEffect(() => {
		let tempVar = [];
		if (data) {
			data.imoveis?.forEach((i) => tempVar.push(i.bairro && i.bairro.replace(/\s\s/g, ' ')));
			const result = tempVar.reduce((json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }), {});
			const result2 = Object.entries(result).sort((a, b) => b[1] - a[1]);

			MobileDesktop ? setBairros(result2.slice(0, 3)) : setBairros(result2.slice(0, 6));
		}
	}, [data]);

	if (loading) return <p>Loading Masterpieces...</p>;

	return (
		<div className="BlocoBairros">
			<div className="container">
				<div className="listaBairros">
					<div className="imagemBloco">
						<div className="imagem">
							<img src={Casal.imagem.default} alt={Casal.alt} alt={Casal.title} />
						</div>
					</div>
					<div className="textoBloco">
						<div className="texto">
							<h2>Escolha o bairro que irá morar agora</h2>
							<p>Temos opções de moradia em todos os bairros de Goiânia, que tal dar uma olhada agora.</p>
							<ul className="listaBairro">
								{stateBairros.map((el) => (

									<Link to={'/imoveis?tipoNegociacao=Venda&bairro=' + el[0]}>
										<li>{el[0]}</li>
									</Link>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlocoBairros;
