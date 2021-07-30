import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { LoadingButton } from "../../../assets/SVG";

import "./Parceiro.scss";

const Parceiro = () => {
  const [createLeadCont] = useMutation(GQL_CRIAR_LEAD)

  function criarLeadCont() {
    let FTipo = document.querySelector("input[name='tipo']")?.value
    let FNome = document.querySelector("input[name='nome']")?.value
    let FEmail = document.querySelector("input[name='email']")?.value
    let FTel = document.querySelector("input[name='telefone']")?.value

    let buttonEnviar = document.querySelector('button')

    buttonEnviar.classList.remove('enviar')
    buttonEnviar.classList.add('enviando')
    buttonEnviar.disabled = true

    createLeadCont({
      variables: {
        input: {
          tipoLead: (FTipo ? FTipo : ""),
          nome: (FNome ? FNome : ""),
          email: (FEmail ? FEmail : ""),
          telefone: (+FTel ? +FTel : 0),
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
        }, 5000);
      }
    }).catch((err) => {
      console.log(err)
      buttonEnviar.classList.remove('enviando')
      buttonEnviar.classList.add('erro')
      setTimeout(() => {
        buttonEnviar.classList.remove('erro')
        buttonEnviar.classList.add('enviar')
        buttonEnviar.disabled = false
      }, 5000);
      window.alert("Ocorreu algum erro, ligue para nós, ou mande mensagem no Whatsapp")
    })
  }
  return (
    <div className="parceiro">
      <div className="containerParceiro">
        <div className="imagemTexto">
          <div className="imagem">
            <img src="https://images.pexels.com/photos/4342498/pexels-photo-4342498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
        </div>

        <div className="formularioCorretor">
          <form>
            <div className="texto">
              <h1>Seja um profissional exclusivo Portfolio</h1>
              <p>
                Quer ser mais um especialista do mercado imobiliário? Mande seus
                dados agora. Estamos em busca de novos parceiros e
                especialistas.
              </p>
              <p>
                Porque você tem que ser um dos especialstas da Portfolio? Por
                que temos os melhores produtos do mercado e vários diferenciais
                para você vender melhor.
              </p>
              <div>
                <p>Tem alguma dúvida? Fale com a gente.</p>
                <p>(62) 3070-0306</p>
              </div>
            </div>
            <input name="tipo" type="hidden" value="Parceiro" />
            <input type="text" name="nome" placeholder="Nome completo" />
            <input type="text" name="telefone" placeholder="Telefone / Whatsapp" />
            <input type="text" name="email" placeholder="E-mail" />
            <button type="button" className="enviar" onClick={criarLeadCont} >
              <p className="enviar">Enviar</p>
              <p className="enviando">{LoadingButton}</p>
              <p className="enviado">Enviado</p>
              <p className="erro">Erro</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parceiro;
