import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../Dados/DadosImoveis';
import { toggleClass, capitalize } from '../../Helpers/Functions';
import Select from 'react-select';

import './BarraPesquisa.scss';

export default function BarraPesquisa() {
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

	// nomeImovel - segundo - select
	// categoriaImovel - primeiro - select
	// tipoNegociacao - primeiro - select
	// statusImovel - segundo - select
	// aceitaPermuta - segundo - check
	// mobiliado - segundo - check
	// valorImovel - segundo - slider
	// areaTotal - segundo - slider
	// andarImovel - segundo - text
	// qtdeQuarto - segundo - text
	// qtdeBanheiro - segundo - text
	// qtdeSuites - segundo - text
	// qtdeVagas - segundo - text
	// nomeConstrutora - segundo - select
	// cidade - primeiro - select
	// bairro - primeiro - select
	// comodidadesImovel - segundo - select
	// comodidadesCondominio - segundo - select

	function MakeOption(x) {
		return { value: x, label: x };
	}

	console.log(bairros);

	return (
		<section className="pesquisa">
			<div className="container">
				<div className="pesquisaContainer">
					{/* <input type="checkbox" className="chaveFiltro" id="filtro" />
					<label className="chaveFiltro" htmlFor="filtro">
						<p>Procurar por:</p>
					</label> */}
					<div className="filtrosPesquisa">
						<form action="/imoveis" method="GET">
							<div className="filtro">
								<Select
									isMulti
									name="bairro"
									options={bairros.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="Bairro"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="cidade"
									options={cidades.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
							</div>
							<div className="segundoFiltro">
								<Select
									isMulti
									name="colors"
									options={nomes.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="colors"
									options={categorias.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="colors"
									options={bairros.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="colors"
									options={tiposNeg.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="colors"
									options={status.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
								<Select
									isMulti
									name="colors"
									options={construtoras.map((x) => MakeOption(x))}
									className="basic-multi-select"
									classNamePrefix="select"
									closeMenuOnSelect={false}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
