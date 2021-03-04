import React from 'react';
import CardAluguel from '../CardImoveis/CardAluguel';
import CardLancamento from '../CardImoveis/CardLancamento';
import CardRevenda from '../CardImoveis/CardRevenda';
import FGRBanner from '../FGRbanner/FGRBanner.js';
import '../../assets/styles/PaginaPesquisa.scss';

function PesGeral () {
    return(
        <>
        <section className='ConteudoPesquisa'>
            <div className='container'>
                <div className='DestaquesPesquisa'>
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento />    
                </div>

                <div className='LancamentoPesquisa'>
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento />    
                </div>

                <div className='ImoveisPesquisa'>
                    <CardRevenda />
                    <CardAluguel />
                    <CardLancamento />    
                </div>

                <FGRBanner />

                <div className='NumeroPagina'>
                    <div></div>
                </div>
            </div>
        </section>    
        </>
    );
}

export default PesGeral ;