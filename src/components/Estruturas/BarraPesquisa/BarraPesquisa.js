import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../Dados/DadosImoveis';
import { toggleClass, capitalize } from '../../Helpers/Functions';
import Select from 'react-select';
import Slider, { SliderTooltip } from 'rc-slider';

import { Fechar, Pesquisa } from '../../../assets/Imagens/SVG/SVG';
import './BarraPesquisa.scss';

const { Range } = Slider;


function FormURL() { }

function Selectvalues() {
	const selectBairros = document.querySelectorAll('input[name="bairro"]');
	const formFiltro = document.querySelector('.formFiltro');
	let bairroFiltros = [];
	for (let selectBairro of selectBairros) {
		bairroFiltros.push(selectBairro.value);
	}

	let novoImput = document.createElement('input');
	novoImput.setAttribute('value', bairroFiltros);
	novoImput.setAttribute('type', 'hidden');
	novoImput.setAttribute('name', 'bairro');

	formFiltro.appendChild(novoImput);

	const elements = document.querySelectorAll('form input');
	for (let input of elements) {
		if (!input.value) {
			input.setAttribute('name', '');
		}
	}
}

var valorInput = 0;
function buttonClickM() {
	valorInput++;
	document.getElementById('inc').value = valorInput;
	console.log("mais")
}
function buttonClickL() {
	valorInput--;
	document.getElementById('inc').value = valorInput;
	console.log("menos")
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
						<div className="secharFiltros">{Fechar}</div>
					</div>
					<div className="filtros">
						<div className="areaInput">
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
					<div className="segundoFiltro">
						<div className="areaInput">
							<Select
								isMulti
								name="colors"
								options={nomes.map((x) => MakeOption(x))}
								className="segundoSelect"
								classNamePrefix="select"
								closeMenuOnSelect={false}
							/>
						</div>
						<div className="areaInput">
							<Select
								isMulti
								name="colors"
								options={status.map((x) => MakeOption(x))}
								className="segundoSelect"
								classNamePrefix="select"
								closeMenuOnSelect={false}
							/>
						</div>
						<div className="areaInput">
							<Range 
							min={0}
							max={30}
							allowCross={false} 
							defaultValue={[0, 20]} />
						</div>
						<div className="areaInput">
							<Range 
							min={0}
							max={30}
							allowCross={false} 
							defaultValue={[0, 20]} />
						</div>
						<div className="areaInput">
						<button onClick={buttonClickL}>Click Me</button>
							<input type="number" id="inc" value="0"/>
							<button onClick={buttonClickM}>Click Me</button>
						</div>
						<div className="areaInput">
						<button onClick={buttonClickL}>Click Me</button>
							<input type="number" id="inc" value="0"/>
							<button onClick={buttonClickM}>Click Me</button>
						</div>
						<div className="areaInput">
						<button onClick={buttonClickL}>Click Me</button>
							<input type="number" id="inc" value="0"/>
							<button onClick={buttonClickM}>Click Me</button>
						</div>
						<div className="areaInput">
						<button onClick={buttonClickL}>Click Me</button>
							<input type="number" id="inc" value="0"/>
							<button onClick={buttonClickM}>Click Me</button>
						</div>
						<div className="areaInput">
						<button onClick={buttonClickL}>Click Me</button>
							<input type="number" id="inc" value="0"/>
							<button onClick={buttonClickM}>Click Me</button>
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
			</div>
		</section>
	);
}
