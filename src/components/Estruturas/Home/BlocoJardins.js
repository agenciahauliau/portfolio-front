import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../graphql/graphql';
import { Link } from 'react-router-dom';
import {MobileDesktop} from '../../Helpers/HelpersFunction'

export const BlocoJardins = () => {
	const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		variables: {
			input: {
				jardins: true,
				categoriaImovel: { in: 'Lote em Condomínio' },
				nomeConstrutora: { in: 'FGR Construtora' },
			},
			quantidade: MobileDesktop ? 3 : 4,
		},
		returnPartialData: true,
	});

	if (loading) return '';

	return (
		<div className="blocoJardins">
			<div className="container">
				{data.imoveis.map((imovel) => (
					<div className="jardins">
						<Link
							to={
								'/imoveis/imovel?jardins=' +
								imovel.nomeImovel +
								'&construtora=' +
								imovel.nomeConstrutora +
								'&id=' +
								imovel._id
							}
						>
							<div className="imagemJardins">
								<img src={imovel.imagemPrincipal} alt={imovel.nomeImovel} title={imovel.nomeImovel} />
							</div>
							<p>{imovel.nomeImovel}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlocoJardins;
