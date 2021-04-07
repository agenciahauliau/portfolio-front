import React from "react";

import "./Parceiro.scss";

const Parceiro = () => {
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
              <h1>Seja exclusivo junto com a Portfolio</h1>
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
                <p>(62) 0000-0000</p>
              </div>
            </div>
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="Telefone / Whatsapp" />
            <input type="text" placeholder="E-mail" />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parceiro;
