import React, { Component } from 'react';
import Select, { Option } from 'rc-select';

import './SelectFiltro.scss';

export default class SelectFiltro extends Component {
    constructor(props) {
        super(props);
        const item = [...new Set(this.props.itens.sort())].filter((x) => x)

        this.state = {
            itens: item,
            mode: this.props.mode,
            values: this.props.queryURL,
            valorOption: ''
        };
    }

    Opcoes() {
        let itens = []
        this.state.itens.forEach((item, i) => {
            itens.push(
                <Option key={`select-${item.replace(' ', '-')}-${i}`} value={item} tipo={this.props.nome} form={this.state.mode} >
                    {item}
                </Option>,
            );
        });
        return itens
    }

    onChange = (e, o) => {
        let value;
        let inputSelect;

        if (e && e.target) {
            ({ value } = e.target);
        } else {
            value = e;
            inputSelect = []

            if (o.form !== "single") {
                for (let option of o) {
                    inputSelect.push(option.value)
                }
            } else {
                inputSelect.push(o.value)
            }
        };

        this.setState({
            values: value,
            valorOption: inputSelect
        });
    }

    test(){

        const formFiltro = document.querySelector('.LinkFiltro')
        const inputExiste = document.querySelector(`.LinkFiltro input[name="${this.props.nome}"]`)

        if (inputExiste) {
            inputExiste.value = this.state.valorOption
        } else if (this.state.valorOption < 1) {
        } else {
            let inputCriado = document.createElement('input')
            inputCriado.setAttribute('type', 'hidden')
            inputCriado.setAttribute('name', this.props.nome)
            inputCriado.setAttribute('value', this.state.valorOption)
            formFiltro.appendChild(inputCriado)
        }

        return this.state.valorOption
    }

    render() {
        this.test()
        return (
            <Select
                className={`${this.props.className} ${this.props.nome}`}
                placeholder={this.props.placeholder}
                mode={this.props.mode}
                maxTagCount={"responsive"}
                maxTagTextLength={12}
                value={this.state.values}
                onChange={this.onChange }
            >
                {this.Opcoes()}
            </Select>
        );
    }
}