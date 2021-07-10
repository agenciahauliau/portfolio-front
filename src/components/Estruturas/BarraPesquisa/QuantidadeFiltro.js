import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class QuantidadeFiltro extends Component {

    render() {

        function LinkQuantImoveis() {
            const url = new URL(window.location)
            url.searchParams.delete('quant')
            return url.searchParams.toString()
        }
        
        return (
            <div className="quantidadeImoveis">
                <p className="tituloQImo">Mostrar: </p>
                <div className="QuantImo" ><Link to={{
                    search: `${LinkQuantImoveis()}&quant=12`
                }} >12</Link></div>
                <div className="QuantImo" ><Link to={{
                    search: `${LinkQuantImoveis()}&quant=24`
                }} >24</Link></div>
                <div className="QuantImo" ><Link to={{
                    search: `${LinkQuantImoveis()}&quant=36`
                }} >36</Link></div>
            </div>
        )
    }
}
