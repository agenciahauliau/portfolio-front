import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../Dados/DadosImoveis';
import { Link } from 'react-router-dom';

export const BlocoJardins = (BJardins) => {
	const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		variables: {
			input: {
				jardins: true,
				categoriaImovel: { in: 'Lote em Condomínio' },
				nomeConstrutora: { in: 'FGR Construtora' },
			},
			quantidade: /Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion) ? 4 : 8,
		},
		returnPartialData: true,
	});

	if (loading) return 'loading';

	return (
		<div className="blocoJardins">
			<div className="container">
				{data.imoveis_condicional.map((imovel) => (
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
