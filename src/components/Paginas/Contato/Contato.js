import React from 'react';
import { useMutation } from '@apollo/client';
import { GQL_CRIAR_LEAD } from '../../graphql/graphql';

import './Contato.scss';
import ContatoBack from '../../../assets/Videos/contato.webm';
import { Facebook, Instagram, Twitter, WhatsApp } from '../../../assets/Imagens/SVG';

function Contato() {

	const [createLead] = useMutation(GQL_CRIAR_LEAD)

	function criarLead() {
		const FTipo = document.querySelector("input[name='tipo']")
		const FNome = document.querySelector("input[name='nome']")
		const FEmail = document.querySelector("input[name='email']")
		const FTel = document.querySelector("input[name='telefone']")
		const FCom = document.querySelector("textarea[name='mensagem']")
		const FPCont = document.querySelector("input[name='pcontato']")

		console.log(FNome.value, FEmail.value, FTel.value, FCom.value  )

		// {
		// 	variables: dados {
		// 		tipoLead: FTipo.value,
		// 		nome:FNome.value,
		// 		email:FEmail.value,
		// 		telefone:FTel.value,,
		// 		comentarios:FCom.value,
		// 		preferenciaDeContato:FPCont.value
		// 	}
		// }

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
								<p>(62) 0000-0000</p>
							</div>
						</div>
						<form>
							<input name="nome" type="text" placeholder="Nome completo" />
							<input name="telefone" type="text" placeholder="Telefone / Whatsapp" />
							<input name="email" type="text" placeholder="E-mail" />
							<textarea name="mensagem" placeholder="Deixe sua mensagem"></textarea>
							<button type="button" onClick={criarLead} >Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contato;
