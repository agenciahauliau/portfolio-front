import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, CriaInputURL, queryURL } from '../../Helpers/HelpersFunction';
import { Fechar, Pesquisa } from '../../../assets/SVG';

import QuantidadeFiltro from './QuantidadeFiltro'
import SelectFiltro from './Inputs/SelectFiltro';
import RangeFiltro from './Inputs/RangeFiltro';

import './BarraPesquisa.scss';

export default function BarraPesquisa({ quant }) {

	const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
		returnPartialData: true,
	});

	if (loading) return <p>Loading Masterpieces...</p>;

	function HTMLOverflow() {
		document.querySelector('html').classList.add('overflow')
		document.querySelector('header').style.zIndex = 0
	}

	function fecharFiltro() {
		document.getElementById('filtro').checked = false;
		document.querySelector('html').classList.remove('overflow')
		document.querySelector('header').style.zIndex = 100
	}

	function fecharSFiltro() {
		document.getElementById('mFiltro').checked = false;
		document.querySelector('html').classList.remove('overflow')
		document.querySelector('header').style.zIndex = 100
	}

	function submitForm() {
		const elements = document.querySelectorAll('.LinkFiltro input');
		for (let input of elements) {
			if (!input.value) {
				input.setAttribute('name', '');
			}
		}
	}

	return (
		<section className="pesquisa">
			<div className="container">
				<input type="checkbox" className="chaveFiltro" id="filtro" />
				<div className="divChaveFiltro">
					<label onClick={HTMLOverflow} className="chaveFiltro" htmlFor="filtro">
						<p>Procurar por:</p>
					</label>
				</div>
				<div className="form">
					<div className="topoMFiltros">
						<p>Filtros</p>
						<div onClick={fecharFiltro} className="secharFiltros">{Fechar}</div>
					</div>
					<div className="filtros">
						<div className="inputFiltros">
							<div className="primeirosFiltros">
								<div className="areaInput">
									<SelectFiltro mode={"single"} nome={"tipoNegociacao"} placeholder={"Você quer"} className={"PSelect"} itens={data.imoveis.map((x) => capitalize(x.tipoNegociacao))} queryURL={queryURL().tipoNegociacao} />
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Escolha agora qual tipo de imóvel que você quer morar
									</p>
									<SelectFiltro mode={"tags"} nome={"categoriaImovel"} placeholder={"Tipo de Imóvel"} className={"PSelect"} itens={data.imoveis.map((x) => capitalize(x.categoriaImovel))} queryURL={queryURL().categoriaImovel} />
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual cidade de preferência?
									</p>
									<SelectFiltro mode={"tags"} nome={"cidade"} placeholder={"Cidade"} className={"PSelect"} itens={data.imoveis.map((x) => capitalize(x.cidade))} queryURL={queryURL().cidade} />
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual bairro de preferência?
									</p>
									<SelectFiltro mode={"tags"} nome={"bairro"} placeholder={"Bairro"} className={"PSelect"} itens={data.imoveis.map((x) => capitalize(x.bairro))} queryURL={queryURL().bairro} />
								</div>
							</div>
							<div className="OQFiltros">
								<QuantidadeFiltro quantBTN={quant}  />
								<div className="ordemImoveis"></div>
							</div>
							<input type="checkbox" className="chaveMFiltro" id="mFiltro" />
							<div className="divChaveMFiltro" onClick={HTMLOverflow}>
								<label className="chaveMFiltro" htmlFor="mFiltro" >
									<p>Mais Filtros</p>
								</label>
							</div>
							<div className="segundoFiltro">
								<div className="overlay">
									<div className="inputButton">
										<div className="confirmarSF">
											<button type="button" onClick={fecharSFiltro}>{Fechar}</button>
										</div>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o nome do condomínio que está procurando?
										</p>
										<SelectFiltro mode={"tags"} nome={"nomeImovel"} placeholder={"Condomínio"} className={"SSelect"} itens={data.imoveis.map((x) => capitalize(x.nomeImovel))} queryURL={queryURL().nomeImovel} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Você está procurando um imóvel em qual etapa?
										</p>
										<SelectFiltro mode={"tags"} nome={"statusImovel"} placeholder={"Status"} className={"SSelect"} itens={data.imoveis.map((x) => capitalize(x.statusImovel))} queryURL={queryURL().statusImovel} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o valor do imóvel que está procurando?
										</p>
										<RangeFiltro nome={"valorImovel"} valores={data.imoveis.map((x) => x.valorImovel)} distancia={1000} queryURL={queryURL().valorImovel} style={"currency"} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o tamanho do imóvel que está procurando?
										</p>
										<RangeFiltro nome={"areaTotal"} valores={data.imoveis.map((x) => x.areaTotal)} distancia={100} queryURL={queryURL().areaTotal} style={"unit"} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos quartos você quer?
										</p>
										<RangeFiltro nome={"qtdeQuarto"} valores={data.imoveis.map((x) => x.qtdeQuarto)} distancia={1} queryURL={queryURL().qtdeQuarto} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos banheiros você quer?
										</p>
										<RangeFiltro nome={"qtdeBanheiro"} valores={data.imoveis.map((x) => x.qtdeBanheiro)} distancia={1} queryURL={queryURL().qtdeBanheiro} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas suítes você quer?
										</p>
										<RangeFiltro nome={"qtdeSuites"} valores={data.imoveis.map((x) => x.qtdeSuites)} distancia={1} queryURL={queryURL().qtdeSuites} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas vagas na garagem você quer?
										</p>
										<RangeFiltro nome={"qtdeVagas"} valores={data.imoveis.map((x) => x.qtdeVagas)} distancia={1} queryURL={queryURL().qtdeVagas} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Escolha a Construtora que você mais confia
										</p>
										<SelectFiltro mode={"tags"} nome={"nomeConstrutora"} placeholder={"Construtora"} className={"SSelect"} itens={data.imoveis.map((x) => capitalize(x.nomeConstrutora))} queryURL={queryURL().nomeConstrutora} />
									</div>
									<div className="areaInput ok" onClick={fecharSFiltro}>
										<p className="textoOk">
											OK
										</p>
										{/* <p>Confirme suas escolhas</p> */}
									</div>
								</div>
							</div>
							<form className="LinkFiltro" onSubmit={submitForm}>
								<button className="buttonFiltro">
									{Pesquisa}
								</button>
								{CriaInputURL().map((input) => (<input type="hidden" name={input.name} value={input.value} />))}
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}