import React from 'react';
import SlideFGRBanner from './SlideFGRBanner';
import { SlidesFGRBanner } from './SlidesFGRBanner';
import '../../assets/styles/FGRBanner.scss';

function FGRBanner() {
    return(
    <>
        <section className="FGRBanner">
            <div className="container">
                <div className="textoFGRBanner">
                    <h3>Essa é a sua chance de morar em um Condomínio Jardins!</h3>
                    <p>Fique por dentro de todos os Lançamentos da FGR, venda de casas prontas para morar e oportunidades para alugel.</p>
                    <a href="">Ver todos os imóveis FGR</a>
                    <div className="logosFGR">
                    </div>
                </div>
                <div className="slideFGRBanner">
                    <SlideFGRBanner slides={SlidesFGRBanner} />
                </div>
            </div>
        </section>
    </>
    )
}

export default  FGRBanner;