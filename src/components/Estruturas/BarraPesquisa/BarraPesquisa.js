import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, queryURL } from '../../Helpers/HelpersFunction';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import makeAnimated from 'react-select/animated';
import Slider, { SliderTooltip } from 'rc-slider';
import { Fechar, Pesquisa, Mais, Menos } from '../../../assets/SVG';
import QuantidadeFiltro from './QuantidadeFiltro'

import './BarraPesquisa.scss';

const animatedComponents = makeAnimated();

/// valor Input 
function buttonClickM(el) {
	let valor = +el.target.closest(".valorInput").children[1].value;
	valor++;
	el.target.closest(".valorInput").children[1].value = valor;
}
function buttonClickL(el) {
	let valor = +el.target.closest(".valorInput").children[1].value;
	if (valor > 0) valor--;
	el.target.closest(".valorInput").children[1].value = valor;
}

export default function BarraPesquisa() {

	const { Range } = Slider;

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

	const [stateRange, setStateRange] = useState({
		valorImovel: ["", ""],
		areaTotal: ["", ""],
		qtdeBanheiro: ["", ""],
		qtdeQuarto: ["", ""],
		qtdeSuites: ["", ""],
		qtdeVagas: ["", ""]
	})


	const handleChange = () => {

		const rcSliders = document.querySelectorAll(".rc-slider")

		let targetSlider = []
		for (let rcSlider of rcSliders) {
			targetSlider[rcSlider.classList[1]] = [rcSlider.childNodes[3].getAttribute("aria-valuenow"), rcSlider.childNodes[4].getAttribute("aria-valuenow")]
		}
		setStateRange(targetSlider)
	};

	console.log(stateRange)

	const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
		returnPartialData: true,
	});

	if (loading) return <p>Loading Masterpieces...</p>;

	let nomes = [];
	let categorias = [];
	let tiposNeg = [];
	let status = [];
	let construtoras = [];
	let bairros = [];
	let cidades = [];

	nomes = [...new Set(nomes.concat(data.imoveis.map((x) => capitalize(x.nomeImovel))).sort())].filter((x) => x);
	categorias = [...new Set(categorias.concat(data.imoveis.map((x) => capitalize(x.categoriaImovel))).sort())].filter(
		(x) => x
	);
	tiposNeg = [...new Set(tiposNeg.concat(data.imoveis.map((x) => capitalize(x.tipoNegociacao))).sort())].filter(
		(x) => x
	);
	status = [...new Set(status.concat(data.imoveis.map((x) => capitalize(x.statusImovel))).sort())].filter((x) => x);
	construtoras = [
		...new Set(construtoras.concat(data.imoveis.map((x) => capitalize(x.nomeConstrutora))).sort()),
	].filter((x) => x);
	bairros = [...new Set(bairros.concat(data.imoveis.map((x) => capitalize(x.bairro))).sort())].filter((x) => x);
	cidades = [...new Set(cidades.concat(data.imoveis.map((x) => capitalize(x.cidade))).sort())].filter((x) => x);

	function MakeOption(x) {
		return { value: x, label: x };
	}

	const VImovel = [...new Set(data.imoveis.map((imovel) => imovel.valorImovel).sort(function (a, b) { return a - b }))]
	const TImovel = [...new Set(data.imoveis.map((imovel) => imovel.areaTotal).sort(function (a, b) { return a - b }))]
	const Quartos = [...new Set(data.imoveis.map((imovel) => imovel.qtdeQuarto).sort(function (a, b) { return a - b }))]
	const Suites = [...new Set(data.imoveis.map((imovel) => imovel.qtdeSuite).sort(function (a, b) { return a - b }))]
	const Banheiros = [...new Set(data.imoveis.map((imovel) => imovel.qtdeBanheiro).sort(function (a, b) { return a - b }))]
	const Garagem = [...new Set(data.imoveis.map((imovel) => imovel.qtdeVagas).sort(function (a, b) { return a - b }))]

	const intlNumber = Intl.NumberFormat("pt-br", { notation: "compact" });

	function fecharFiltro() {
		document.getElementById("filtro").checked = false;
	}

	const htmlClass = document.querySelector("html").classList
	const RCValores = document.querySelectorAll(".rc-slider-tooltip")
	function HTMLOverflow() {
		htmlClass.add("overflow")
		RCValores.forEach(RCValor => {
			console.log(RCValor)
		});
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
									<Select
										isMulti
										name="categoriaImovel"
										options={categorias.map((x) => MakeOption(x))}
										className="primeiroSelect"
										classNamePrefix="select"
										closeMenuOnSelect={false}
										components={animatedComponents}
										placeholder="Imóvel"
										defaultValue={queryURL().categoriaImovel}
										onBlur={FormURL}
									/>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual bairro de preferência?
									</p>
									<Select
										isMulti
										name="bairro"
										options={bairros.map((x) => MakeOption(x))}
										className="primeiroSelect"
										classNamePrefix="select"
										closeMenuOnSelect={false}
										components={animatedComponents}
										placeholder="Bairro"
										defaultValue={queryURL().bairro}
										onBlur={FormURL}
									/>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual cidade de preferência?
									</p>
									<Select
										isMulti
										name="cidade"
										options={cidades.map((x) => MakeOption(x))}
										className="primeiroSelect"
										classNamePrefix="select"
										closeMenuOnSelect={false}
										placeholder={'Cidade'}
										defaultValue={queryURL().cidade}
										onBlur={FormURL}
									/>
								</div>
								<form className="formFiltro">
									<Select
										name="tipoNegociacao"
										defaultValue={tiposNeg[0]}
										options={tiposNeg.map((x) => MakeOption(x))}
										className="tipoSelect"
										classNamePrefix="select"
										closeMenuOnSelect={false}
										defaultValue={queryURL().tipoNegociacao}
										onBlur={FormURL}
									/>
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
										<Select
											isMulti
											name="nomeImovel"
											options={nomes.map((x) => MakeOption(x))}
											className="segundoSelect"
											classNamePrefix="select"
											closeMenuOnSelect={false}
											defaultValue={queryURL().nomeImovel}
											onBlur={FormURL}
										/>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Você está procurando um imóvel em qual etapa?
										</p>
										<Select
											isMulti
											name="statusImovel"
											options={status.map((x) => MakeOption(x))}
											className="segundoSelect"
											classNamePrefix="select"
											closeMenuOnSelect={false}
											defaultValue={queryURL().statusImovel}
											onBlur={FormURL}
										/>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o valor do imóvel que está procurando?
										</p>
										<Range
											className='valorImovel'
											min={VImovel.shift()}
											max={VImovel.pop()}
											defaultValue={[VImovel.shift(), VImovel.pop()]}
											step={100}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.valorImovel[0])}</p>
										<p>{intlNumber.format(stateRange.valorImovel[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o tamanho do imóvel que está procurando?
										</p>
										<Range
											className="areaTotal"
											min={TImovel.shift()}
											max={TImovel.pop()}
											defaultValue={[TImovel.shift(), TImovel.pop()]}
											step={100}
											allowCross={false}
											allowCross={false}
											allowCross={false}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.areaTotal[0])}</p>
										<p>{intlNumber.format(stateRange.areaTotal[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos quartos você quer?
										</p>
										<Range
											className="qtdeQuarto"
											min={Quartos.shift()}
											max={Quartos.pop()}
											defaultValue={[Quartos.shift(), Quartos.pop()]}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.qtdeQuarto[0])}</p>
										<p>{intlNumber.format(stateRange.qtdeQuarto[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos banheiros você quer?
										</p>
										<Range
											className="qtdeBanheiro"
											min={Banheiros.shift()}
											max={Banheiros.pop()}
											defaultValue={[Banheiros.shift(), Banheiros.pop()]}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.qtdeBanheiro[0])}</p>
										<p>{intlNumber.format(stateRange.qtdeBanheiro[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas suítes você quer?
										</p>
										<Range
											className="qtdeSuites"
											min={Suites.shift()}
											max={Suites.pop()}
											defaultValue={[Suites.shift(), Suites.pop()]}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.qtdeSuites[0])}</p>
										<p>{intlNumber.format(stateRange.qtdeSuites[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas vagas na garagem você quer?
										</p>
										<Range
											className="qtdeVagas"
											min={Garagem.shift()}
											max={Garagem.pop()}
											defaultValue={[Garagem.shift(), Garagem.pop()]}
											allowCross={false}
											onChange={handleChange}
										/>
										<p>{intlNumber.format(stateRange.qtdeVagas[0])}</p>
										<p>{intlNumber.format(stateRange.qtdeVagas[1])}</p>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Escolha a Construtora que você mais confia
										</p>
										<Select
											isMulti
											name="nomeConstrutora"
											options={construtoras.map((x) => MakeOption(x))}
											className="segundoSelect"
											classNamePrefix="select"
											closeMenuOnSelect={false}
											defaultValue={queryURL().nomeConstrutora}
											onBlur={FormURL}
										/>
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