import React from 'react';
import AjudaImovel from './Ajuda/Ajuda';
import FGRBanner from './FGRbanner/FGRBanner';
import Imoveis from './Imoveis/Imoveis';
import Newsletter from './Newsletter/Newsletter';
import PesGeral from './PagPesqusia/PesGeral';
import RollLancamento from './RollLancamento/RollLancamento';

function Conteudo() {
    return(
        <>
            <PesGeral />
            <Newsletter />
        </>
    );
}

export default Conteudo;