import React from "react";
import { Switch, Route } from "react-router-dom";

import Pesquisa from "./components/Paginas/Pesquisa/Pesquisa";
import Imoveis from "./components/Paginas/Imoveis/Imoveis";
import Home from "./components/Paginas/Home/Home";
import Jardins from "./components/Paginas/Jardins/Jardins";
import Anuncie from "./components/Paginas/Anuncie/Anuncie";
import Blog from "./components/Paginas/Blog/Blog";
import Post from "./components/Paginas/Blog/Post/Post";
import Sobre from "./components/Paginas/Sobre/Sobre";
import Contato from "./components/Paginas/Contato/Contato";
import Parceiro from "./components/Paginas/Parceiro/Parceiro";

export default function RotasPaginas() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/imoveis" exact component={Pesquisa} />
      <Route path="/imoveis/imovel" exact component={Imoveis} />
      <Route path="/condominio+jardins" exact component={Jardins} />
      <Route path="/anuncie+seu+imovel" exact component={Anuncie} />
      <Route path="/artigos" exact component={Blog} />
      <Route path="/artigos/post" exact component={Post} />
      <Route path="/sobre+nos" exact component={Sobre} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/seja+um+parceiro" exact component={Parceiro} />
    </Switch>
  );
}
