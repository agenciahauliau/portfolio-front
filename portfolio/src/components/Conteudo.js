import React from 'react';
import AjudaImovel from './Ajuda/Ajuda';
import Newsletter from './Newsletter/Newsletter';
import PesGeral from './PagPesqusia/PesGeral';

function Conteudo() {
    return(
        <>  
            <PesGeral />
            <AjudaImovel />
            <Newsletter />
        </>
    );
}

export default Conteudo;