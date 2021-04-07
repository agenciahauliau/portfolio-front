import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pesquisa from './components/Paginas/Pesquisa/Pesquisa' 
import Imoveis from './components/Paginas/Imoveis/Imoveis' 
import Home from './components/Paginas/Home/Home';
import Jardins from './components/Paginas/Jardins/Jardins';

export default function RotasPaginas () {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/imoveis" exact component={Pesquisa} />
            <Route path="/imovel" exact component={Imoveis} />
            <Route path="/condominio-jardins" exact component={Jardins} />
        </Switch>
    )
}
