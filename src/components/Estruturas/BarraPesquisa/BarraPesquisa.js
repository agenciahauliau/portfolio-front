import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, queryURL } from '../../Helpers/HelpersFunction';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import makeAnimated from 'react-select/animated';
import Slider, { SliderTooltip } from 'rc-slider';
import { Fechar, Pesquisa, Mais, Menos, Venda } from '../../../assets/SVG';
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

	const [stateURL, setStateURL] = useState('')

    function FormURL() {
        //   this.setState({ search: event.target.value })
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

	const VImovelMin = VImovel.shift()
	const VImovelMax = VImovel.pop()

	const TImovelMin = TImovel.shift()
	const TImovelMax = TImovel.pop()

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
									{/* <div className="areaInput">
										<p className="textoMenuMobile">
											Qual o valor do imóvel que está procurando?
										</p>
										<Range
											min={VImovelMin}
											max={VImovelMax}
											defaultValue={[VImovelMin, VImovelMax]}
											handle={handleP}
											step={100}
											allowCross={false}
											onChange={handleChange}
										/>
									</div>
									<div className="areaInput">
										<p className="textoMenuMobile">
											Qual o tamanho do imóvel que está procurando?
										</p>
										<Range
											min={TImovelMin}
											max={TImovelMax}
											defaultValue={[TImovelMin, TImovelMax]}
											handle={handleP}
											step={100}
											allowCross={false}
											onChange={handleChange}
										/>
									</div> */}
									<div className="areaInput">
										<p className="textoMenuMobile">
											Quantos quartos você quer?
										</p>
										<div className="valorInput">
											<button onClick={buttonClickL}>{Menos}</button>
											<input name="qtdeQuarto" type="number" id="inc" placeholder="0" min="0" value={queryURL().qtdeQuarto} />
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