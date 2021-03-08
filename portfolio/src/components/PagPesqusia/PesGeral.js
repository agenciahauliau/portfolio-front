import React from 'react';
import CardAluguel from '../CardImoveis/CardAluguel';
import CardLancamento from '../CardImoveis/CardLancamento';
import CardRevenda from '../CardImoveis/CardRevenda';
import FGRBanner from '../FGRbanner/FGRBanner.js';
import '../../assets/styles/PaginaPesquisa.scss';
import RollLancamento from '../RollLancamento/RollLancamento';

function PesGeral () {
    return(
        <>
        <section className='ConteudoPesquisa'>
            <div className='DestaquesPesquisa'>
                <div className='container'>
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento />    
                </div>
            </div>

            <RollLancamento />   

            <div className='ImoveisPesquisa'>
                <div className='container'>
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento /> 
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento />
                </div> 
            </div>

            <FGRBanner />

            <div className='NumeroPagina'>
                <div></div>
            </div>
        </section>    
        </>
    );
}

export default PesGeral ;