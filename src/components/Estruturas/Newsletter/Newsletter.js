import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { EnviadoButton, LoadingButton, SetaDireita } from "../../../assets/SVG";

import "./Newsletter.scss";

function Newsletter() {

  const [createLeadNews] = useMutation(GQL_CRIAR_LEAD)

  function criarLeadNews() {
    let FTipoN = document.querySelector("input[name='tipoNews']")?.value
    let FEmailN = document.querySelector("input[name='emailNews']")?.value

    let buttonEnviar = document.querySelector('button.news')

    console.log(buttonEnviar)

		buttonEnviar.classList.remove('enviar')
		buttonEnviar.classList.add('enviando')
		buttonEnviar.disabled = true

    createLeadNews({
      variables: {
        input: {
          tipoLead: (FTipoN ? FTipoN : ""),
          email: (FEmailN ? FEmailN : "")
        }
      }
    }).then((res) => {
			if (res.data) {
				buttonEnviar.classList.remove('enviando')
				buttonEnviar.classList.add('enviado')
				setTimeout(() => {
					buttonEnviar.classList.remove('enviado')
					buttonEnviar.classList.add('enviar')
					buttonEnviar.disabled = false
				}, 3000);
			}
		}).catch((err) => {
			console.log(err)
			buttonEnviar.classList.remove('enviando')
			buttonEnviar.classList.add('erro')
			setTimeout(() => {
				buttonEnviar.classList.remove('erro')
				buttonEnviar.classList.add('enviar')
				buttonEnviar.disabled = false
			}, 3000);
			window.alert("Ocorreu algum erro, ligue para nós, ou mande mensagem no Whatsapp")
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
            <button type="button" className="news enviar" onClick={criarLeadNews} >
              <p className="enviar">{SetaDireita}</p>
              <p className="enviando">{LoadingButton}</p>
              <p className="enviado">{EnviadoButton}</p>
              <p className="erro">erro</p>
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
