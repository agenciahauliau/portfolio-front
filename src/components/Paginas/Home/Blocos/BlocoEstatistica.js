import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEIS_COM_FILTRO } from '../../../graphql/graphql';
import { Corretor, PortfolioImoveis, ValorImoveis } from '../../../../assets/SVG';

import './BlocoEstatistica.scss';

export default function BlocoEstatistica() {
	const { loading, data } = useQuery(GQL_BUSCAR_IMOVEIS_COM_FILTRO, {
		returnPartialData: true,
	});

	if (loading) return (<p></p>);

	let soma = 0
	for (let imovel of data.imoveis) {
		soma += imovel.valorImovel
	}

	const now = new Date(); // Data de hoje
	const past = new Date('2006-05-01'); // Outra data no passado
	const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
	const ano = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365.25));

	return (
		<div className="BlocoEstatistica">
			<div className="container">
				<div className="conteudo">
					<div className="caract">
						<div className="primeira">
							<div className="item">
								<div className="imagem">
									{Corretor}
								</div>
								<div className="texto">
									<h3> {ano} anos</h3>
									<p> Mais de {ano} de história e experiência, atendendo a mercado goiano e região</p>
								</div>
							</div>
							<div className="item">
								<div className="imagem">
									{ValorImoveis}
								</div>
								<div className="texto">
									<h3>{ new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", notation: "compact", maximumSignificantDigits: 3}).format(soma)}</h3>
									<p>Confiança é tudo! Administramos mais de { new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL", notation: "compact", maximumSignificantDigits: 3}).format(soma)} para nossos clientes</p>
								</div>
							</div>
							<div className="item">
								<div className="imagem">
									{PortfolioImoveis}
								</div>
								<div className="texto">
									<h3>+ de 1000 imóveis</h3>
									<p>Temos mais de 1000 imóveis pra você, olhe nosso portfolio e veja qual melhor te atende!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
