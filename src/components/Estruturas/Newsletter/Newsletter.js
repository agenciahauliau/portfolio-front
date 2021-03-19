import React from 'react';
import './Newsletter.scss';

function Newsletter() {
    return (
        <section className='news'>
            <div className='container'>
                <div className='formNews'>
                    <h2>Conheça nossa newsletter</h2>
                    <form>
                        <input tyoe="text" />
                        <button></button>
                    </form>
                </div>
                <div className='textoNews'>
                    <p>Fique sempre atualizado com o que está acontecendo no mercado imobiliário e todos os nosso imóveis</p>
                </div>
            </div>
        </section>
    )
}

export default  Newsletter;