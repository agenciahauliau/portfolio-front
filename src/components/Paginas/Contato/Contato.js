import React from 'react';
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';
import { Facebook, Instagram, Twitter, WhatsApp } from '../../../assets/SVG';

import './Contato.scss';
import ContatoBack from '../../../assets/Videos/contato.webm';

function Contato() {

	const [createLeadCont] = useMutation(GQL_CRIAR_LEAD)

	function criarLeadCont() {
		let FTipo = document.querySelector("input[name='tipo']")?.value
		let FNome = document.querySelector("input[name='nome']")?.value
		let FEmail = document.querySelector("input[name='email']")?.value
		let FTel = document.querySelector("input[name='telefone']")?.value
		let FComen = document.querySelector("textarea[name='mensagem']")?.value

		console.log(FTipo, FNome, FEmail, FTel, FComen)
		

		createLeadCont({variables: {
			input:  {
				tipoLead: (FTipo ? FTipo : ""),
				nome: (FNome ? FNome : ""),
				email: (FEmail ? FEmail : ""),
				telefone: (+FTel ? +FTel : 0),
				comentarios: (FComen ? FComen : ""),
			}			
		}}).then((res) => {
			if (res.data) window.alert("Deu bom meu chapa!")
		}).catch((err) => {
			console.log(err);
		})
	}
	return (
		<div className="contato">
			<div className="containerContato">
				<div className="bg">
					<video autoPlay loop>
						<source src={ContatoBack} type="video/webm" />
					</video>
				</div>
				<div className="info">
					<div className="textoForm">
						<div className="texto">
							<h1>Fale com a gente.</h1>
							<p>Deixe a sua mensagem ou dúvidas e entraremos em contato.</p>
							<div className="redesSociais">
								<p>
									Nos encontre nas redes sociais <b>@portfolioimb</b>
								</p>
								<ul>
									<li>
										<a
											href="https://www.instagram.com/portfolioimb/"
											aria-label="Abrir instagram Portfolio Imóveis"
											rel="noopener noreferrer"
											target="_blank"
										>
											{Instagram}
										</a>
									</li>
									<li>
										<a
											href="https://www.facebook.com/portfolioimb/"
											aria-label="Abrir Facebook Portfolio Imóveis"
											rel="noopener noreferrer"
											target="_blank"
										>
											{Facebook}
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/portfolioimb/"
											aria-label="Abrir Twitter Portfolio Imóveis"
											rel="noopener noreferrer"
											target="_blank"
										>
											{Twitter}
										</a>
									</li>
									<li>
										<a
											href="https://api.whatsapp.com/send?phone=+556240035444"
											aria-label="Abrir Twitter Portfolio Imóveis"
											rel="noopener noreferrer"
											target="_blank"
										>
											{WhatsApp}
										</a>
									</li>
								</ul>
							</div>
							<div className="postal">
								<p>
									Av Dep. Jamel Cecílio, nº 2.690, Loja 21, Metropolitan Mall, Jardim Goiás, Goiânia - GO CEP 74.810-100
								</p>
								<p>(62) 3070-0306</p>
							</div>
						</div>
						<form>
							<input name="tipo" type="hidden" value="Página de Contato"/>
							<input name="nome" type="text" placeholder="Nome completo" />
							<input name="telefone" type="tel" placeholder="Telefone / WhatsApp" />
							<input name="email" type="text" placeholder="E-mail" />
							<textarea name="mensagem" placeholder="Deixe sua mensagem"></textarea>
							<button type="button" onClick={criarLeadCont} >Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contato;
