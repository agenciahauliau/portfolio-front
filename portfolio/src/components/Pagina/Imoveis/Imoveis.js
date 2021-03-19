import React, { useState } from 'react';
import ImoveisRevenda from './ImoveisRevenda';
import './Imoveis.scss';

function Imoveis() {
    return(
        <section className='Imovel'>
            <div className='container'>
                <ImoveisRevenda />
            </div>
        </section>
    );
}

export default Imoveis;