import React from 'react';
import '../../assets/styles/RollLancamento.scss';
import '../../assets/styles/CardImoveis.scss';
import CardLancamento from '../CardImoveis/CardLancamento';

function RollLancamento() {
    return(
        <section className="RollLancamento">
            <div className='container'>
            <div className='tituloRoll'>
                
                    <h1>Lançamentos</h1>
                
            </div>
            <div className="cardsRoll">
                <div className='smallCards'>
                    <CardLancamento />
                </div>
                <div className='smallCards'>
                    <CardLancamento />
                </div>
                <div className='smallCards'> 
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
                <div className='smallCards'>
                    <CardLancamento /> 
                </div>
            </div>
            </div>
        </section>
    )
}

export default  RollLancamento;