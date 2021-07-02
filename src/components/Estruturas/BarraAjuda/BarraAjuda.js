import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';

import "./BarraAjuda.scss";

function BarraAjuda() {
  const [createLeadAjuda] = useMutation(GQL_CRIAR_LEAD)

  function criarLeadAjuda() {
    
    let FTipoA = document.querySelector("input[name='tipoAjuda']")?.value
    let FNomeA = document.querySelector("input[name='nomeAjuda']")?.value
    let FTelA = document.querySelector("input[name='telefoneAjuda']")?.value

    console.log(FTipoA, FNomeA, FTelA)

    createLeadAjuda({
      variables: {
        input: {
          tipoLead: (FTipoA ? FTipoA : ""),
          nome: (FNomeA ? FNomeA : ""),
          telefone: (+FTelA ? +FTelA : 0)
        }
      }
    }).then((res) => {
      if (res.data) window.alert("Deu bom meu chapa!")
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <section className="AjudaImovel">
      <div className="container">
        <div className="textoAjudaImovel">
          <h1>Não encontrou o imóvel que queria?</h1>
          <p>
            Mande seu contato e entraremos em contato, para te ajudar a achar
            seu imóvel, com nosso atendimento personalizado do jeito que você
            merece.
          </p>
        </div>
        <div className="formAjudaImovel">
          <form>
            <input name="tipoAjuda" type="hidden" value="Ajuda" />
            <input name="nomeAjuda" type="text" placeholder="Nome completo" />
            <input name="telefoneAjuda" type="tel" placeholder="Telefone / WhatsApp" />
            <button type="button" onClick={criarLeadAjuda} >Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BarraAjuda;
