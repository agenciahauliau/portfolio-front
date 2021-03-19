import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

// imports SCSS
import "./assets/styles/Fonts.scss";
import "./assets/styles/App.scss";

// imports components
import Conteudo from "./Components/Conteudo";
import Pesquisa from './Components/Paginas/Pesqusia/Pesquisa'

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
