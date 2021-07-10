import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, MakeOption, queryURL } from '../../Helpers/HelpersFunction';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function PrimeiroFiltro() {

    

    const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
        returnPartialData: true,
    });

    if (loading) return (<p></p>);

    let categorias = [];
    let bairros = [];
    let cidades = [];

    categorias = [...new Set(categorias.concat(data.imoveis.map((x) => capitalize(x.categoriaImovel))).sort())].filter(
        (x) => x
    );
    bairros = [...new Set(bairros.concat(data.imoveis.map((x) => capitalize(x.bairro))).sort())].filter((x) => x);
    cidades = [...new Set(cidades.concat(data.imoveis.map((x) => capitalize(x.cidade))).sort())].filter((x) => x);

    return (
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
                    onBlur={FormURL()}
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
                    onBlur={FormURL()}
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
                    onBlur={FormURL()}
                />
            </div>
        </div>
    )
}

export default PrimeiroFiltro
