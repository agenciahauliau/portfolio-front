import React from "react";
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { LoadingButton } from "../../../assets/SVG";

import "./BarraAjuda.scss";

function BarraAjuda() {
	const [createLeadAjuda] = useMutation(GQL_CRIAR_LEAD)

	function criarLeadCont() {
		let FTipo = document.querySelector("input[name='tipo']")?.value
		let FNome = document.querySelector("input[name='nome']")?.value
		let FEmail = document.querySelector("input[name='email']")?.value
		let FTel = document.querySelector("input[name='telefone']")?.value

		let buttonEnviar = document.querySelector('button.ajuda')

		buttonEnviar.classList.remove('enviar')
		buttonEnviar.classList.add('enviando')
		buttonEnviar.disabled = true

		createLeadAjuda({
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
						<input name="tipo" type="hidden" value="Ajuda" />
						<input name="nomeAjuda" type="text" placeholder="Nome completo" />
						<input name="telefoneAjuda" type="tel" placeholder="Telefone / WhatsApp" />
						<input name="email" type="text" placeholder="E-mail" />
						<button type="button" className="ajuda enviar" onClick={criarLeadCont} >
							<p className="enviar">Enviar</p>
							<p className="enviando">{LoadingButton}</p>
							<p className="enviado">Enviado</p>
							<p className="erro">Erro</p>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default BarraAjuda;
