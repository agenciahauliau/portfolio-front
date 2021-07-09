import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, LinkQuantImoveis } from '../../Helpers/Helpers';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import makeAnimated from 'react-select/animated';
import Slider, { SliderTooltip } from 'rc-slider';
import { Fechar, Pesquisa, Mais, Menos, Venda } from '../../../assets/SVG';

import './BarraPesquisa.scss';

function queryURL() {
	let url = new URL(window.location);
	const resultadoUrl = []
	for (let keys of url.searchParams.entries()) {
		let valoresURL = []
		for(let key of  keys[1].split(',')){
			valoresURL.push({value: key, label: key})
		}
		resultadoUrl[keys[0]] = valoresURL
	}
	return resultadoUrl
}

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

function fecharFiltro() {
	document.getElementById("filtro").checked = false;
}

function fecharSFiltro() {
	document.getElementById("mFiltro").checked = false;
}

export default function BarraPesquisa() {
	const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
		returnPartialData: true,
	});

	const multiSelects = document.querySelectorAll('.basic-multi-select');

	for (let multiSelect of multiSelects) {
		multiSelect.addEventListener('click', function () {
		});
	}

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
	const VImovelMin = VImovel.shift()
	const VImovelMax = VImovel.pop()

	const { Range, Handle } = Slider;
	const intlNumber = Intl.NumberFormat("pt-br", { notation: "compact" });

	const handleP = (props) => {
		const { value, dragging, index, ...restProps } = props;
		return (
			<SliderTooltip
				prefixCls="rc-slider-tooltip"
				overlayInnerStyle={{
					backgroundColor: "transparent",
					boxShadow: "none",
					color: "#fff"
				}}
				overlay={`R$ ${intlNumber.format(value)}`}
				visible
				placement="top"
				key={index}
			>
				<Handle value={value} {...restProps} />
			</SliderTooltip>
		);
	};

	const handleChange = (value) => {
		console.log(value);
	};

	const marks = {
		0: VImovelMin,
		10000000: VImovelMax
	};

	const RangeValor = () => (
		<div>
			<Range
				min={VImovelMin}
				max={VImovelMax}
				defaultValue={[VImovelMin, VImovelMax]}
				handle={handleP}
				marks={marks}
				step={100}
				allowCross={false}
				onChange={handleChange}
			/>
		</div>
	);

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

		console.log(queryURL.join('&'))
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
							<div onClick={FormURL}>adfasdf</div>
			<p>{console.log(FormURL())}</p>
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
										<button type="button" >{Pesquisa}</button>
									</div>
								</form>
							</div>

							<input type="checkbox" className="chaveMFiltro" id="mFiltro" />
							<div className="divChaveMFiltro">
								<label className="chaveMFiltro" htmlFor="mFiltro">
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
										/>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o valor do imóvel que está procurando?
										</p>
										<RangeValor />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o tamanho do imóvel que está procurando?
										</p>
										<RangeValor />
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos quartos você quer?
										</p>
										<div className="valorInput">
											<button onClick={buttonClickL}>{Menos}</button>
											<input name="qtdeQuarto" type="number" id="inc" placeholder="0" min="0" />
											<button onClick={buttonClickM}>{Mais}</button>
										</div>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos banheiros você quer?
										</p>
										<div className="valorInput">
											<button onClick={buttonClickL}>{Menos}</button>
											<input name="qtdeBanheiro" type="number" id="inc" placeholder="0" min="0" />
											<button onClick={buttonClickM}>{Mais}</button>
										</div>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas suítes você quer?
										</p>
										<div className="valorInput">
											<button onClick={buttonClickL}>{Menos}</button>
											<input name="qtdeSuites" type="number" id="inc" placeholder="0" min="0" />
											<button onClick={buttonClickM}>{Mais}</button>
										</div>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantas vagas na garagem você quer?
										</p>
										<div className="valorInput">
											<button onClick={buttonClickL}>{Menos}</button>
											<input name="qtdeVagas" type="number" id="inc" placeholder="0" min="0" />
											<button onClick={buttonClickM}>{Mais}</button>
										</div>
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
					<div className="quantidadeImoveis">
						<p className="tituloQImo" onClick={FormURL}>Mostrar: </p>
						<div className="QuantImo" ><Link to={{
							search: `${LinkQuantImoveis()}&quant=12`
						}} >12</Link></div>
						<div className="QuantImo" ><Link to={{
							search: `${LinkQuantImoveis()}&quant=24`
						}} >24</Link></div>
						<div className="QuantImo" ><Link to={{
							search: `${LinkQuantImoveis()}&quant=36`
						}} >36</Link></div>
					</div>
					<div className="ordemImoveis"></div>
				</div>
			</div>
		</section>
	);
}