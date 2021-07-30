import React, { Component } from 'react'
export default class QuantidadeFiltro extends Component {

    render() {
        return (
            <div className="quantidadeImoveis">
                <p className="tituloQImo">Mostrar: </p>
                <div className="QuantImo12" onClick={this.props.quantBTN}><a>12</a></div>
                <div className="QuantImo24" onClick={this.props.quantBTN}><a>24</a></div>
                <div className="QuantImo36" onClick={this.props.quantBTN}><a>36</a></div>
            </div>
        )
    }
}
