import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { LoadingButton } from "../../../assets/SVG";

import "./Anuncie.scss";

const Anuncie = () => {

  const [createLeadCont] = useMutation(GQL_CRIAR_LEAD)

	function criarLeadCont() {
		let FNome = document.querySelector("input[name='nome']")?.value
		let FEmail = document.querySelector("input[name='email']")?.value
		let FTel = document.querySelector("input[name='telefone']")?.value
    let FComen = document.querySelector("textarea[name='mensagem']")?.value
		let FTipoN = document.querySelector("select[name='tipoNegociacao']")?.value
		let FCatI = document.querySelector("select[name='categoriaImovel']")?.value


    console.log(FNome, FEmail, FTel, FTipoN, FCatI)

		let buttonEnviar = document.querySelector('button')

		buttonEnviar.classList.remove('enviar')
		buttonEnviar.classList.add('enviando')
		buttonEnviar.disabled = true

		createLeadCont({
			variables: {
				input: {
					tipoLead: "Anunciar meu Imóvel",
					nome: (FNome ? FNome : ""),
					email: (FEmail ? FEmail : ""),
					telefone: (+FTel ? +FTel : 0),
          comentarios: (FComen ? FComen : ""),
					tipoNegociacao: (FTipoN ? FTipoN : ""),
					categoriaImovel: (FCatI ? FCatI : "")
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
    <div className="anuncie">
      <div className="containerParceiro">
        <div className="imagemTexto">
          <div className="imagem">
            <img
              src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Casas em condomínio"
              title="Casas em condomínio"
            />
          </div>
        </div>

        <div className="formularioEmpreendimento">
          <form>
            <div className="coluna">
              <div className="texto">
                <div className="titulo">
                  <h1>Imóvel para vender ou alugar? Deixa com a gente!</h1>
                  <p>
                    Sem tempo para participar das visitas? Não sabe como
                    divulgar o seu imóvel? Não tem problema! Aqui na Portfolio
                    você conta com os melhores Consultores Imobiliários do
                    mercado para cuidar de tudo pra você.
                  </p>
                </div>
                <div>
                  <p>Tem alguma dúvida? Fale com a gente.</p>
                  <p>(62) 3070-0306</p>
                </div>
              </div>
            </div>
            <div className="coluna">
              <input type="text" name="nome" placeholder="Nome completo" />
              <input type="text" name="telefone" placeholder="Telefone / Whatsapp" />
              <input type="text" name="email" placeholder="E-mail" />

              <label htmlFor="tipoNegociacao">Revenda ou aluguel?</label>
              <select name="tipoNegociacao" id="tipoNegociacao">
                <option value="Revenda">Revenda</option>
                <option value="Aluguel">Aluguel</option>
              </select>

              <label htmlFor="categoriaImovel">
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
              </select>

              <label htmlFor="descricaoImovel">
                Conte um pouco sobre seu imóvel
                <textarea
                  name="descricaoImovel"
                  placeholder="Linda e ampla casa para morar com sua família"
                ></textarea>
              </label>
              <button type="button" className="enviar" onClick={criarLeadCont} >
								<p className="enviar">Enviar</p>
								<p className="enviando">{LoadingButton}</p>
								<p className="enviado">Enviado</p>
								<p className="erro">Erro</p>
							</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Anuncie.propTypes = {};

export default Anuncie;
