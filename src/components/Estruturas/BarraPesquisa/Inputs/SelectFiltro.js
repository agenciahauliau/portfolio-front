import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { FormURL } from '../../../Helpers/HelpersFunction';

export default class SelectFiltro extends Component {
    constructor(props) {
        super(props);
        const item = [...new Set(this.props.itens.sort())].filter((x) => x)

        this.state = {
            itens: item
        };
    }

    MakeOption() {
        let itens = []
        for (let item of this.state.itens) {
            itens.push({ value: item, label: item })
        };
        return itens
    }

render() {
    const animatedComponents = makeAnimated();

    return (
        <Select
            isMulti={this.props.isMulti}
            name={this.props.nome}
            options={this.MakeOption()}
            className={this.props.className}
            classNamePrefix="select"
            closeMenuOnSelect={false}
            components={animatedComponents}
            placeholder={this.props.placeholder}
            defaultValue={this.props.queryURL}
            onBlur={this.props.FormURL}
        />
    )
}
}