import React from "react";
import BlocoCasaJardins from "../../Estruturas/Home/BlocoCasaJardins"
import BlocoJardins from "../../Estruturas/Home/BlocoJardins"
import BlocoInfo from "../../Estruturas/Home/BlocoInfo"
import BlocoBairros from "../../Estruturas/Home/BlocoBairros"

import "./Home.scss"

export default function Home() {

  return (
    <>
    <BlocoCasaJardins />
    <BlocoJardins />
    <BlocoInfo />
    <BlocoBairros />

    
    <div className="vendaHome">
      <div className="verMais">
        <a>Ver mais imóveis</a>
      </div>
    </div>
    <div className="aluguelHome"></div>
    <div className="bairrosHome"></div>
    </>
  );
}
