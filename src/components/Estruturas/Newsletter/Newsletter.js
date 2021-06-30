import React from "react";
import { SetaDireita } from "../../../assets/Imagens/SVG";
import "./Newsletter.scss";

function Newsletter() {
  return (
    <section className="news">
      <div className="container">
        <h2>Conheça nossa newsletter</h2>
        <div className="formNews">
          <form>
            <input tyoe="text" />
            <button>
              {SetaDireita}
            </button>
          </form>
        </div>
        <div className="textoNews">
          <p>
            Fique sempre atualizado com o que está acontecendo no mercado
            imobiliário e todos os nosso imóveis
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
