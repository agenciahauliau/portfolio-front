import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'; 

import Rotas from './Rotas';
import Topo from './components/Estruturas/Topo/Topo';

// imports SCSS
import "./assets/Styles/App.scss";


function App() {
  return (
    <Router>
      <Topo />
      <Rotas />
    </Router>
  );
}

export default App;
