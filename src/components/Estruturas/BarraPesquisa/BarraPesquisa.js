import React, { Component, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { toggleClass, capitalize } from '../../Helpers/Helpers';
import Select from 'react-select';
import Slider, { SliderTooltip } from 'rc-slider';
import { Fechar, Pesquisa, Mais, Menos } from '../../../assets/Imagens/SVG';

import './BarraPesquisa.scss';

const { Range } = Slider;

function log(value) {

	// const RangeSlides = document.querySelectorAll('.rc-slider')
	// for(let RangeSlide of RangeSlides){
	// 	RangeSlide.nextElementSibling.childNodes[0].textContent = value[0]
	// 	RangeSlide.nextElementSibling.childNodes[1].textContent = value[1]
	// }

}

function FormURL() { }

function Selectvalues() {
	const selectBairros = document.querySelectorAll('input[name="bairro"]');
	const formFiltro = document.querySelector('.formFiltro');
	let bairroFiltros = [];
	for (let selectBairro of selectBairros) {
		bairroFiltros.push(selectBairro.value);
	}

	let novoInput = document.createElement('input');
	novoInput.setAttribute('value', bairroFiltros);
	novoInput.setAttribute('type', 'hidden');
	novoInput.setAttribute('name', 'bairro');

	formFiltro.appendChild(novoInput);

	const elements = document.querySelectorAll('form input');
	for (let input of elements) {
		if (!input.value) {
			input.setAttribute('name', '');
		}
	}
}


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

export default function BarraPesquisa() {
	const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
		returnPartialData: true,
	});

	const multiSelects = document.querySelectorAll('.basic-multi-select');

	for (let multiSelect of multiSelects) {
		multiSelect.addEventListener('click', function () {
			console.log(multiSelect);
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

	// nomeImovel - segundo - select - add
	// categoriaImovel - primeiro - select - add
	// tipoNegociacao - primeiro - select - add
	// statusImovel - segundo - select - add
	// aceitaPermuta - segundo - check
	// mobiliado - segundo - check
	// valorImovel - segundo - slider - add
	// areaTotal - segundo - slider - add
	// andarImovel - segundo - text
	// qtdeQuarto - segundo - text
	// qtdeBanheiro - segundo - text
	// qtdeSuites - segundo - text
	// qtdeVagas - segundo - text
	// nomeConstrutora - segundo - select - add
	// cidade - primeiro - select - add
	// bairro - primeiro - select - add
	// comodidadesImovel - segundo - select
	// comodidadesCondominio - segundo - select

	function MakeOption(x) {
		return { value: x, label: x };
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
										placeholder="Imóvel"
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
										placeholder={'Bairro'}
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
									/>
								</div>
							</div>

							<input type="checkbox" className="chaveMFiltro" id="mFiltro" />
							<div className="divChaveMFiltro">
								<label className="chaveMFiltro" htmlFor="mFiltro">
									<p>Mais Filtros</p>
								</label>
							</div>
							<div className="segundoFiltro">
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
									/>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual o valor do imóvel que está procurando?
									</p>
									<Range
										min={0}
										max={30}
										allowCross={false}
										defaultValue={[0, 20]}
										pushable={true}

										onChange={log}
									/>
									<div className="valoresSlide">
										<p className="pValor"></p>
										<p className="sValor"></p>
									</div>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Qual o tamanho do imóvel que está procurando?
									</p>
									<Range
										min={0}
										max={30}
										allowCross={false}
										defaultValue={[0, 20]}
										pushable={true}

										onChange={log}
									/>

									<div className="valoresSlide">
										<p className="pValor"></p>
										<p className="sValor"></p>
									</div>
								</div>

								{/* valor Input  */}

								<div className="areaInput">
									<p className="textoMenuMobile">
										Quantos quartos você quer?
									</p>
									<div className="valorInput">
										<button onClick={buttonClickL}>{Menos}</button>
										<input type="number" id="inc" placeholder="0" min="0" />
										<button onClick={buttonClickM}>{Mais}</button>
									</div>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Quantos banheiros você quer?
									</p>
									<div className="valorInput">
										<button onClick={buttonClickL}>{Menos}</button>
										<input type="number" id="inc" placeholder="0" min="0" />
										<button onClick={buttonClickM}>{Mais}</button>
									</div>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Quantas suítes você quer?
									</p>
									<div className="valorInput">
										<button onClick={buttonClickL}>{Menos}</button>
										<input type="number" id="inc" placeholder="0" min="0" />
										<button onClick={buttonClickM}>{Mais}</button>
									</div>
								</div>
								<div className="areaInput">
									<p className="textoMenuMobile">
										Quantas vagas na garagem você quer?
									</p>
									<div className="valorInput">
										<button onClick={buttonClickL}>{Menos}</button>
										<input type="number" id="inc" placeholder="0" min="0" />
										<button onClick={buttonClickM}>{Mais}</button>
									</div>
								</div>
								<div className="areaInput">
									<Select
										isMulti
										name="colors"
										options={construtoras.map((x) => MakeOption(x))}
										className="segundoSelect"
										classNamePrefix="select"
										closeMenuOnSelect={false}
									/>
								</div>
							</div>
						</div>
					</div>
					<form className="formFiltro">
						<Select
							name="tipoNegociacao"
							defaultValue={tiposNeg[0]}
							options={tiposNeg.map((x) => MakeOption(x))}
							className="tipoSelect"
							classNamePrefix="select"
							closeMenuOnSelect={false}
						/>
						<div className="buttonFiltro">
							<button onClick={Selectvalues}>{Pesquisa}</button>
						</div>
					</form>
				</div>
				<div className="OQFiltros">
					<div className="quantidadeImoveis">

					</div>
					<div className="ordemImoveis"></div>
				</div>
			</div>
		</section>
	);
}