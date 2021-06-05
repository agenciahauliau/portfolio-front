import React from 'react';
import './CardImoveis.scss';
import './CardLancamento.scss';

function CardLancamento() {
    return(
        <>
            <div className='CardImoveis Lancamentos'>
                <div className='TopoCardImoveis'>
                    <img src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="iamge" />
                    <div className='TipoImovel'>
                        <p>Casa em condomínio</p>
                        <img src='' />
                    </div>
                </div>
                <div className='InfoCardimoveis'>
                    <div className='NomeImovel'>
                        <h2>Jardins Kazaz Bellagio</h2>
                    </div>
                    <div className='PrecosLancamento'>
                        <div className='EntradaImoveis'> 
                            <p>Entrada a Partir de:</p>
                            <h3>R$ 00.000.000,00</h3>
                        </div>
                        <div className='ParcelasImoveis'> 
                            <p>Entrada a Partir de:</p>
                            <h3>R$ 00.000.000,00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLancamento;