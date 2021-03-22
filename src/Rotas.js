import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pesquisa from './components/Paginas/Pesquisa/Pesquisa' 
import Imoveis from './components/Paginas/Imoveis/Imoveis' 
import Home from './components/Paginas/Home/Home';

export default function RotasPaginas () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/imoveis" exact component={Pesquisa} />
            <Route path="/imovel" exact component={Imoveis} />
        </Switch>
    )
}
