import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QIPesquisa } from '../../Dados/DadosImoveis';
import { Link } from 'react-router-dom';

function BlocoBairros() {
	const { loading, data } = useQuery(QIPesquisa, {
		returnPartialData: true,
	});

	const [state, setImoveis] = useState([]);

	useEffect(() => {
		let tempVar = [];
		if (data) {
			data.imoveis?.forEach((i) => tempVar.push(i.bairro && i.bairro.replace(/\s\s/g, ' ')));
			const result = tempVar.reduce((json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }), {});
			const result2 = Object.entries(result).sort((a, b) => b[1] - a[1]);

			/Android (\d+.*)|iPhone OS|iPhoneOS (\d+(?:\_+\d+)+)/.test(navigator.appVersion)
				? setImoveis(result2.slice(0, 6))
				: setImoveis(result2.slice(0, 12));
		}
	}, [data]);

	if (loading) return <p>Loading Masterpieces...</p>;

	return (
		<div className="bairrosHome">
			<div className="container">
				<div className="listaBairros">
					{state.map((el) => (
						<div className="listaBairro">
							<Link to={'/imoveis?bairro=' + el[0]}>
								<div className="imagemBairro">
									<svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512">
										<g fill="#272727">
											<rect x="12.475" y="66.586" width="208.62" height="434.9" />
											<rect x="290.92" y="66.586" width="208.62" height="434.9" />
										</g>
										<rect fill="#272727" x="83.965" y="10.514" width="344.08" height="435.24" />
										<g fill="#272727">
											<polygon points="83.965 445.76 221.6 501.49 221.6 445.76" />
											<polygon points="428.04 445.76 290.4 501.49 290.4 445.76" />
										</g>
										<g fill="#fff">
											<path d="m499.52 55.736h-60.975v-45.222c0-5.807-4.706-10.514-10.513-10.514h-344.07c-5.806 0-10.514 4.707-10.514 10.514v45.223h-60.976c-5.806 0-10.514 4.707-10.514 10.514v435.24c0 5.806 4.707 10.514 10.514 10.514h209.12c5.806 0 10.514-4.707 10.514-10.514v-45.217h47.774v45.217c0 5.806 4.706 10.514 10.514 10.514h209.12c5.808 0 10.514-4.707 10.514-10.514v-435.24c-2e-3 -5.806-4.708-10.514-10.516-10.514zm-405.05 181.86h32.585v152.79c0 5.806 4.707 10.514 10.514 10.514h113.77c5.808 0 10.514-4.707 10.514-10.514v-27.334c0-5.806-4.706-10.514-10.514-10.514-5.806 0-10.514 4.707-10.514 10.514v16.82h-92.739v-86.206h131.42c5.808 0 10.514-4.707 10.514-10.514s-4.706-10.514-10.514-10.514h-17.653v-58.874c0-5.806-4.706-10.514-10.514-10.514-5.806 0-10.514 4.707-10.514 10.514v58.874h-92.739v-70.788c0-5.806-4.707-10.514-10.514-10.514-5.806 0-10.514 4.707-10.514 10.514v14.719h-32.583v-96.72h32.585v14.718c0 5.806 4.707 10.514 10.514 10.514 5.806 0 10.514-4.707 10.514-10.514v-57.471h92.739v48.359c0 5.806 4.707 10.514 10.514 10.514 5.808 0 10.514-4.707 10.514-10.514v-48.359h95.842v195.54h-17.214c-5.808 0-10.514 4.707-10.514 10.514s4.706 10.514 10.514 10.514h17.214v96.721c0 5.806 4.706 10.514 10.514 10.514h49.312v34.342h-323.05v-197.65zm323.04-216.57v358.85h-38.798v-313.29c0-5.806-4.706-10.514-10.514-10.514h-230.64c-5.806 0-10.514 4.707-10.514 10.514v32.24h-32.584v-77.797h323.04zm-394.54 55.737h50.463v368.99c0 4.41 2.718 8.181 6.569 9.741l-1e-3 3e-3 87.604 35.472h-144.64v-414.21zm188.1 409.12l-73.144-29.618h73.144v29.618zm162.97-29.616l-73.144 29.618v-29.618h73.144zm114.95 34.702h-144.63l87.604-35.472-1e-3 -3e-3c3.851-1.56 6.57-5.331 6.57-9.741v-368.99h50.461v414.21h-1e-3z" />
											<path d="m320.58 326.32c-4.107-4.106-10.763-4.106-14.869 0l-24.179 24.179c-4.106 4.106-4.106 10.763 0 14.868 4.107 4.106 10.763 4.106 14.869 0l6.23-6.231v31.112c0 5.806 4.706 10.514 10.514 10.514s10.514-4.707 10.514-10.514v-31.112l6.23 6.231c2.054 2.052 4.745 3.08 7.435 3.08s5.382-1.026 7.435-3.08c4.106-4.106 4.106-10.763 0-14.868l-24.179-24.179z" />
										</g>
									</svg>
								</div>
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
