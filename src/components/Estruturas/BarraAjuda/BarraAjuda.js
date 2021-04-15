import React from "react";
import "./BarraAjuda.scss";

function BarraAjuda() {
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
            <input tyoe="text" placeholder="Nome Completo" />
            <input tyoe="tel" placeholder="Telefone / WhatsApp" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BarraAjuda;
