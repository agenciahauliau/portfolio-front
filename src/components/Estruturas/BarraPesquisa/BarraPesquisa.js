import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, queryURL } from '../../Helpers/HelpersFunction';
import { Fechar, Pesquisa } from '../../../assets/SVG';
import QuantidadeFiltro from './QuantidadeFiltro'
import SelectFiltro from './Inputs/SelectFiltro';
import RangeFiltro from './Inputs/RangeFiltro';

import './BarraPesquisa.scss';
import ButtonLink from './Inputs/ButtonLink';
import { Link } from 'react-router-dom';

export default function BarraPesquisa() {


	const [stateURL, setStateURL] = useState('')

	function FormURL() {
		const FormsInputs = document.querySelectorAll('.form input');

		let resultadoObjeto = {}
		for (let input of FormsInputs) {
			if (input.name != "" && input.value != "") {
				resultadoObjeto[input.name] += `${input.value},`
			}
		}
		let queryURL = []
		for (var [key, value] of Object.entries(resultadoObjeto)) {
			queryURL.push(key + '=' + value.replaceAll('undefined', '').replace(/,\s*$/, ""))
		}

		setStateURL(queryURL.join('&'))
	}

	console.log(stateURL)

	const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
		returnPartialData: true,
	});

	if (loading) return <p>Loading Masterpieces...</p>;

	function fecharFiltro() {
		document.getElementById("filtro").checked = false;
	}

	const htmlClass = document.querySelector("html").classList
	function HTMLOverflow() {
		htmlClass.add("overflow")
	}
	function fecharSFiltro() {
		document.getElementById("mFiltro").checked = false;
		htmlClass.remove("overflow")
	}

	return (
		<section className="pesquisa">
			<div className="container">
				<input type="checkbox" className="chaveFiltro" id="filtro" />
				<div className="divChaveFiltro">
					<label className="chaveFiltro" htmlFor="filtro">
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
									<p className="textoMenuMobile">
										Escolha agora qual tipo de imóvel que você quer morar
									</p>
									<SelectFiltro isMulti={"isMulti"} nome={"categoriaImovel"} placeholder={"Tipo de Imóvel"} className={"primeiroSelect"} itens={data.imoveis.map((x) => capitalize(x.categoriaImovel))} queryURL={queryURL().categoriaImovel} FormURL={FormURL.bind()} />
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual cidade de preferência?
									</p>
									<SelectFiltro isMulti={"isMulti"} nome={"cidade"} placeholder={"Cidade"} className={"primeiroSelect"} itens={data.imoveis.map((x) => capitalize(x.cidade))} queryURL={queryURL().cidade} FormURL={FormURL.bind()} />
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual bairro de preferência?
									</p>
									<SelectFiltro isMulti={"isMulti"} nome={"bairro"} placeholder={"Bairro"} className={"primeiroSelect"} itens={data.imoveis.map((x) => capitalize(x.bairro))} queryURL={queryURL().bairro} FormURL={FormURL.bind()} />
								</div>
								<form className="formFiltro">
									<SelectFiltro nome={"tipoNegociacao"} placeholder={"Você quer"} className={"tipoSelect"} itens={data.imoveis.map((x) => capitalize(x.tipoNegociacao))} queryURL={queryURL().tipoNegociacao} FormURL={FormURL.bind()} />
									<div className="buttonFiltro">
										<Link
											to={{
												search: `${stateURL}&pagina=1`
											}}
										>
											{Pesquisa}
										</Link>
									</div>
								</form>
							</div>

							<input type="checkbox" className="chaveMFiltro" id="mFiltro" />
							<div className="divChaveMFiltro" onClick={HTMLOverflow}>
								<label className="chaveMFiltro" htmlFor="mFiltro" >
									<p>Mais Filtros</p>
								</label>
							</div>
							<div className="segundoFiltro">
								<div className="overlay">
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o nome do condomínio que está procurando?
										</p>
										<SelectFiltro isMulti={"isMulti"} nome={"nomeImovel"} placeholder={"Condomínio"} className={"segundoSelect"} itens={data.imoveis.map((x) => capitalize(x.nomeImovel))} queryURL={queryURL().nomeImovel} FormURL={FormURL.bind()} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Você está procurando um imóvel em qual etapa?
										</p>
										<SelectFiltro isMulti={"isMulti"} nome={"statusImovel"} placeholder={"Status"} className={"segundoSelect"} itens={data.imoveis.map((x) => capitalize(x.statusImovel))} queryURL={queryURL().statusImovel} FormURL={FormURL.bind()} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o valor do imóvel que está procurando?
										</p>
										<RangeFiltro nome={"valorImovel"} valores={data.imoveis.map((x) => x.valorImovel)} distancia={1000} queryURL={queryURL().valorImovel} />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o tamanho do imóvel que está procurando?
										</p>
										<RangeFiltro nome={"areaTotal"} valores={data.imoveis.map((x) => x.areaTotal)} distancia={100} queryURL={queryURL().areaTotal} />
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
										<SelectFiltro isMulti={"isMulti"} nome={"nomeConstrutora"} placeholder={"Construtora"} className={"segundoSelect"} itens={data.imoveis.map((x) => capitalize(x.nomeConstrutora))} queryURL={queryURL().nomeConstrutora} FormURL={FormURL.bind()} />
									</div>
									<div className="areaInput inputButton">
										<div className="confirmarSF">
											<button type="button" onClick={fecharSFiltro}><p>Confirmar</p></button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="OQFiltros">
					<QuantidadeFiltro />
					<div className="ordemImoveis"></div>
				</div>
			</div>
		</section>
	);
}