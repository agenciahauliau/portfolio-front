import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { SetaDireita } from "../../../assets/SVG";

import "./Newsletter.scss";

function Newsletter() {

  const [createLeadNews] = useMutation(GQL_CRIAR_LEAD)

  function criarLeadNews() {
    let FTipoN = document.querySelector("input[name='tipoNews']")?.value
    let FEmailN = document.querySelector("input[name='emailNews']")?.value

    console.log(FTipoN, FEmailN)

    createLeadNews({
      variables: {
        input: {
          tipoLead: (FTipoN ? FTipoN : ""),
          email: (FEmailN ? FEmailN : "")
        }
      }
    }).then((res) => {
      if (res.data) window.alert("Deu bom meu chapa!")
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <section className="news">
      <div className="container">
        <h2>Conheça nossa newsletter</h2>
        <div className="formNews">
          <form>
            <input name="tipoNews" type="hidden" value="Newsletter" />
            <input name="emailNews" type="text" placeholder="E-mail" />
            <button type="button" onClick={criarLeadNews} >
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
