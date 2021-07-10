import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { GQL_LISTAR_IMOVEIS } from '../../graphql/graphql';
import { capitalize, MakeOption, queryURL } from '../../Helpers/HelpersFunction';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Pesquisa} from '../../../assets/SVG';

function PesquisaFiltros() {
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

	if (loading) return (<p></p>);

	let tiposNeg = [];

	tiposNeg = [...new Set(tiposNeg.concat(data.imoveis.map((x) => capitalize(x.tipoNegociacao))).sort())].filter(
		(x) => x
	);

    return (
        <div className="inputFiltros">
            <form className="formFiltro">
                    <Select
                        name="tipoNegociacao"
                        defaultValue={tiposNeg[0]}
                        options={tiposNeg.map((x) => MakeOption(x))}
                        className="tipoSelect"
                        classNamePrefix="select"
                        closeMenuOnSelect={false}
                        defaultValue={queryURL().tipoNegociacao}
                        onBlur={FormURL()}
                    />
                    <div className="buttonFiltro">
                        <Link
                            to={{
                                search: `${FormURL()}&pagina=1`
                            }}
                        >
                            {Pesquisa}
                        </Link>
                    </div>
                </form>
        </div>
    )
}

export default PesquisaFiltros
