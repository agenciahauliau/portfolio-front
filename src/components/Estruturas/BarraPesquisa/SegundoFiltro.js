import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { buttonClickL, buttonClickM, capitalize, MakeOption, queryURL } from '../../Helpers/HelpersFunction';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Mais, Menos } from '../../../assets/SVG';

const animatedComponents = makeAnimated();



function SegundoFiltro() {
    const { loading, data } = useQuery(GQL_LISTAR_IMOVEIS, {
        returnPartialData: true,
    });

    if (loading) return (<p></p>);

    let nomes = [];
    let status = [];
    let construtoras = [];

    nomes = [...new Set(nomes.concat(data.imoveis.map((x) => capitalize(x.nomeImovel))).sort())].filter((x) => x);
    status = [...new Set(status.concat(data.imoveis.map((x) => capitalize(x.statusImovel))).sort())].filter((x) => x);
    construtoras = [
        ...new Set(construtoras.concat(data.imoveis.map((x) => capitalize(x.nomeConstrutora))).sort()),
    ].filter((x) => x);


    const htmlClass = document.querySelector("html").classList

    function fecharSFiltro() {
        document.getElementById("mFiltro").checked = false;
        htmlClass.remove("overflow")
    }

    return (
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
                    />
                </div>
                <div className="areaInput inputButton">
                    <div className="confirmarSF">
                        <button type="button" onClick={fecharSFiltro}><p>Confirmar</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SegundoFiltro
