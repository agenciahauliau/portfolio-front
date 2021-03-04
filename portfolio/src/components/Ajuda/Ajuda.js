import React from 'react';
import '../../assets/styles/AjudaImovel.scss'

function AjudaImovel() {
    return(
        <section className="AjudaImovel">
            <div className="container"> 
                <div className="textoAjudaImovel">
                    <h2>Não encontrou o imóvel que queria?</h2>
                    <p>Mande seu contato e entraremos em contato, para te ajudar a achar seu imóvel, com nosso atendimento personalizado do jeito que você merece.</p>
                </div>
                <div className="formAjudaImovel">
                    <form>
                        <input tyoe="text" />
                        <input tyoe="tel" />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default  AjudaImovel;