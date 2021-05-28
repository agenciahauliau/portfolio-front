import React from "react";

import "./Anuncie.scss";

const Anuncie = (props) => {
  return (
    <div className="parceiro">
      <div className="containerParceiro">
        <div className="imagemTexto">
          <div className="imagem">
            <img src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="imagem" />
          </div>
        </div>

        <div className="formularioEmpreendimento">
          <form>
            <div className="coluna">
              <div className="texto">
              <div className="titulo">
                  <h1>Imóvel para vender ou alugar? Deixa com a gente!</h1>
                  <p>
                    Sem tempo para participar das visitas? Não sabe como divulgar o seu imóvel? Não tem problema! 
                    Aqui na Portfolio você conta com os melhores Consultores Imobiliários do mercado para cuidar de tudo pra você.
                  </p>
                </div>
                <div>
                  <p>Tem alguma dúvida? Fale com a gente.</p>
                  <p>(62) 0000-0000</p>
                </div>
              </div>
            </div>
            <div className="coluna">
              <input type="text" placeholder="Nome completo" />
              <input type="text" placeholder="Telefone / Whatsapp" />
              <input type="text" placeholder="E-mail" />

              <label for="tipoNegociacao">Venda ou aluguel?</label>
              <select name="tipoNegociacao" id="tipoNegociacao">
                <option value="Venda">Venda</option>
                <option value="Aluguel">Aluguel</option>
              </select>

              <label for="categoriaImovel">
                Em qual dessas categoria seu imóvel se encaixa?
              </label>
              <select name="categoriaImovel" id="categoriaImovel">
                <option value="Sala Comercial">Sala Comercial</option>
                <option value="Área Comercial">Área Comercial</option>
                <option value="Cobertura">Cobertura</option>
                <option value="Apartamento Padrão">Apartamento Padrão</option>
                <option value="Chácaras">Chácaras</option>
                <option value="Casa Residencial">Casa Residencial</option>
                <option value="Lote urbano">Lote urbano</option>
                <option value="Casa em Condomínio">Casa em Condomínio</option>
                <option value="Lote em Condomínio">Lote em Condomínio</option>
                <option value="Venda">Venda</option>
                <option value="Aluguel">Aluguel</option>
              </select>

              <label for="descricaoImovel">
                Conte um pouco sobre seu imóvel
                <textarea
                  name="descricaoImovel"
                  placeholder="Linda e ampla casa para morar com sua família"
                ></textarea>
              </label>
              <button>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Anuncie.propTypes = {};

export default Anuncie;
