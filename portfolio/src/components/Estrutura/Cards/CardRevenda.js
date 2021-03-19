import React from 'react';
import './CardImoveis.scss';
import './CardRevenda.scss';

function CardRevenda() {
    return(
        <>
            <div className='CardImoveis'>
                <div className='TopoCardImoveis'>
                    <img src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
                    <div className='TipoImovel'>
                        <p>Casa em condomínio</p>
                        <img src='' />
                    </div>
                </div>
                <div className='InfoCardimoveis'>
                    <div className='CaractImovel'>
                        <div className='quarto'>
                            <p><b>0</b> Quartos</p>
                        </div>
                        <div className='banheiro'>
                            <p><b>0</b> Banheiros</p>
                        </div>
                        <div className='garagem'>
                            <p><b>0</b> Garagens</p>
                        </div>
                    </div>
                    <div className='PrecoImoveis'> 
                        <h3>R$ 00.000.000,00</h3>
                    </div>
                    <div className='EnderecoImoveis'> 
                        <p>Endereço, rua, num, Bairro do imóvel, cidade do imóvel</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardRevenda;