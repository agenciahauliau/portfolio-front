import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../graphql/graphql';
import { Link } from 'react-router-dom';
import { MobileDesktop } from '../../Helpers/Helpers'
import { Bairro } from '../../../assets/SVG';

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

			MobileDesktop ? setBairros(result2.slice(0, 6)) : setBairros(result2.slice(0, 12));
		}
	}, [data]);

	if (loading) return <p>Loading Masterpieces...</p>;

	return (
		<div className="bairrosHome">
			<div className="container">
				<div className="listaBairros">
					{stateBairros.map((el) => (
						<div className="listaBairro">
							<Link to={'/imoveis?bairro=' + el[0]}>
								<div className="imagemBairro">{Bairro}</div>
								<div className="textoBairros">
									<p>{el[0]}</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlocoBairros;
