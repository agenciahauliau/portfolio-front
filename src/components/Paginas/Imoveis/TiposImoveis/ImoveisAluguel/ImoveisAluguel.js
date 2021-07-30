import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GQL_BUSCAR_IMOVEL, GQL_CRIAR_LEAD } from '../../../../graphql/graphql';
import { useLocation } from 'react-router-dom';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import { LoadingButton } from '../../../../../assets/SVG';

import './ImoveisAluguel.scss';

function IdImovel() {
	return new URLSearchParams(useLocation().search).get('id');
}

function ImoveisAluguel() {

	const [createLead] = useMutation(GQL_CRIAR_LEAD)

	const { loading, error, data } = useQuery(GQL_BUSCAR_IMOVEL, {
		variables: { _id: IdImovel() },
	});

	if (loading) return <p>Loading Masterpieces...</p>;
	if (error) return <p>Mas Bah</p>;

	const options = {
		buttons: {
			showAutoplayButton: false,
			showCloseButton: true,
			showDownloadButton: false,
			showFullscreenButton: false,
			showNextButton: true,
			showPrevButton: true,
			showThumbnailsButton: false,
		}
	};

	const tituloImovel =
		data.imovel.categoriaImovel +
		(data.imovel.qtdeQuarto === 0
			? ''
			: data.imovel.qtdeQuarto === 1
				? ', com ' + data.imovel.qtdeQuarto + ' quarto'
				: ', com ' + data.imovel.qtdeQuarto + ' quartos') +
		(data.imovel.qtdeSuites === 0
			? ''
			: data.imovel.qtdeSuites === 1
				? ', sendo ' + data.imovel.qtdeSuites + ' suíte'
				: ', sendo ' + data.imovel.qtdeSuites + ' suítes') +
		(data.imovel.qtdeBanheiro === 0
			? ''
			: data.imovel.qtdeBanheiro === 1
				? ', com ' + data.imovel.qtdeBanheiro + ' banheiro'
				: ', com ' + data.imovel.qtdeBanheiro + ' banheiros') +
		(data.imovel.qtdeVagas === 0
			? ''
			: data.imovel.qtdeVagas === 1
				? ' e ' + data.imovel.qtdeVagas + ' vaga na garagem'
				: ' e ' + data.imovel.qtdeVagas + ' vagas na garagem');



	function criarLead() {
		let FNome = document.querySelector("input[name='nome']")?.value
		let FEmail = document.querySelector("input[name='email']")?.value
		let FTel = document.querySelector("input[name='telefone']")?.value
		let FPCons = document.querySelector("input[name='pcontato']:checked")?.value

		console.log(FNome, FEmail, FTel, FPCons)

		let buttonEnviar = document.querySelector('button.imovel')

		buttonEnviar.classList.remove('enviar')
		buttonEnviar.classList.add('enviando')
		buttonEnviar.disabled = true

		createLead({
			variables: {
				input: {
					tipoLead: "Imóvel Venda",
					nome: (FNome ? FNome : ""),
					email: (FEmail ? FEmail : ""),
					telefone: (+FTel ? +FTel : 0),
					preferenciaDeContato: FPCons,
					imoveis: [data.imovel._id]
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
		<div className="conteudoImovel ImovelAluguel">
			<div className="topoImovel">
				<div className="tituloImovel">
					<h1>{tituloImovel}</h1>
				</div>
				<div className="informacoesImovel">
					<div className="precosRevenda">
						<div className="valorImovel">
							{data.imovel.valorImovel !== 0 && (
								<h1>
									{data.imovel.valorImovel.toLocaleString('pt-br', {
										style: 'currency',
										currency: 'BRL',
									})}
								</h1>
							)}
							<p>{data.imovel.categoriaImovel}</p>
						</div>
						{data.imovel.valorCondominio !== 0 || data.imovel.valorIPTU !== 0 ? <ValoresAdicionais /> : ''}
					</div>
					<p className="endrecoImovel">
						{data.imovel.categoriaImovel} com {data.imovel.areaTotal + ' m², '}
						localizado na {data.imovel.logradouro},{data.imovel.numeroLogradouro}
						{data.imovel.complemento && data.imovel.complemento} -{data.imovel.bairro} — {data.imovel.cidade}
					</p>
					<div className="comodosImovel">
						<div className="quarto">
							<p>
								<b>{data.imovel.qtdeQuarto}</b> Quartos
							</p>
						</div>
						<div className="banheiro">
							<p>
								<b>{data.imovel.qtdeBanheiro}</b> Banheiros
							</p>
						</div>
						<div className="garagem">
							<p>
								<b>{data.imovel.qtdeVagas}</b> Garagens
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="boxImagemImovel">
				<div className="imagemImovel">
					<img src={data.imovel.imagemPrincipal} alt={tituloImovel} title={tituloImovel} />
				</div>
			</div>
			<div className="descricaoImovel">
				<h2 className="titulodescricaoImovel">Descrição</h2>
				<div className="textoDescricaoImovel">{data.imovel.descricaoImovel}</div>
			</div>
			<div className="formImovel">
				<div className="dentroFormImovel">
					<div className="tituloForm">
						<h4>Quer ter mais informações sobre o imóvel, mande mensagem agora que entramos em contato</h4>
					</div>
					<div>
						<form>
							<input name="tipo" type="hidden" value="Imóvel" />
							<input name="nome" type="text" placeholder="Nome completo" />
							<input name="telefone" type="tel" placeholder="Telefone / Whatsapp" />
							<input name="email" type="email" placeholder="E-mail" />
							<div className="checkFormImovel">
								<label>
									<input name="pcontato" type="radio" value="Telefone" checked /> Telefone
								</label>
								<label>
									<input name="pcontato" type="radio" value="Email" /> Email
								</label>
								<label>
									<input name="pcontato" type="radio" value="Whatsapp" /> Whatsapp
								</label>
							</div>
							<button type="button" className="imovel enviar" onClick={criarLead} >
								<p className="enviar">Entrar em contato</p>
								<p className="enviando">{LoadingButton}</p>
								<p className="enviado">Enviado</p>
								<p className="erro">Erro</p>
							</button>
						</form>
					</div>
					<div className="informacoesCadastro">
						<p className="ligarFormContato">
							Se preferir mande mensagem no WhatsApp ou ligue (00) 0000-0000, estamos esperando seu contato.
						</p>
						<p className="direitosFormContato">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla volutpat congue. Duis tempus lectus
							vitae purus scelerisque, ac lobortis est luctus. Morbi diam metus, aliquet eget sollicitudin id, placerat
							sit amet orci. Sed non ante placerat magna dapibus rutrum tristique semper leo.
						</p>
					</div>
				</div>
			</div>
			<div className="outrosInformacoesImovel">
				<div className="galeriaImovel">
					{data.imovel.galerias.map((galeria) => (
						<div className="blocoGaleriaImovel">
							<h2 className="tituloGaleria">{galeria.tipoGaleria}</h2>
							<SimpleReactLightbox>
								<SRLWrapper options={options}>
									<div className="imagensGaleria">
										{galeria.arquivos.map((arquivo, index) => (
											<div key={index} className="imagens">
												<a href={arquivo}>
													<img src={arquivo} alt={data.imovel.nomeImovel} />
												</a>
											</div>
										))}

									</div>
								</SRLWrapper>
							</SimpleReactLightbox>
						</div>
					))}
				</div>
				<div className="detalhesImoveis">
					<h2 className="titulocaractsImoveis">Detalhes do Imóvel</h2>
					<div className="itens">
						{data.imovel.statusImovel && (
							<p>
								<b> {data.imovel.statusImovel}</b>
							</p>
						)}
						{!data.imovel.aceitaPermuta && (
							<p>
								<b>Aceita permuta:</b> Não
							</p>
						)}
						{data.imovel.aceitaPermuta && (
							<p>
								<b>Aceita permuta: </b>Sim
							</p>
						)}
						{!data.imovel.mobiliado && (
							<p>
								<b>Mobiliado: </b> Não
							</p>
						)}
						{data.imovel.mobiliado && (
							<p>
								<b>Mobiliado: </b>Sim
							</p>
						)}
						{data.imovel.valorImovel !== 0 && (
							<p className="detalhesImoveis">
								<b>Valor: </b>
								{data.imovel.valorImovel.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
						)}
						{data.imovel.valorEntrada !== 0 && (
							<p>
								<b>Entrada:</b>
								{data.imovel.valorEntrada.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
						)}
						{data.imovel.valorParcela !== 0 && (
							<p>
								<b>Parcela:</b>
								{data.imovel.valorParcela.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
						)}
						{data.imovel.valorIPTU !== 0 && (
							<p>
								<b>IPTU:</b>
								{data.imovel.valorIPTU.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
						)}
						{data.imovel.valorCondominio !== 0 && (
							<p>
								<b>Condomínio:</b>
								{data.imovel.valorCondominio.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})}
							</p>
						)}
						{data.imovel.areaTotal !== 0 && (
							<p>
								<b>Área total:</b>
								{data.imovel.areaTotal.toLocaleString('pt-br')}
							</p>
						)}
						{data.imovel.areaConstruida && (
							<p>
								<b>Área construída:</b>
								{data.imovel.areaConstruida.toLocaleString('pt-br')}
							</p>
						)}
						{data.imovel.andarImovel !== 0 && (
							<p>
								<b>Andar:</b> {data.imovel.andarImovel}
							</p>
						)}
						{data.imovel.qtdeQuarto !== 0 && (
							<p>
								<b>Quartos:</b> {data.imovel.qtdeQuarto}
							</p>
						)}
						{data.imovel.qtdeBanheiro !== 0 && (
							<p>
								<b>Banheiros:</b> {data.imovel.qtdeBanheiro}
							</p>
						)}
						{data.imovel.qtdeSuites !== 0 && (
							<p>
								<b>Suítes:</b> {data.imovel.qtdeSuites}
							</p>
						)}
						{data.imovel.qtdeVagas !== 0 && (
							<p>
								<b>Vagas na Garagem:</b> {data.imovel.qtdeVagas}
							</p>
						)}
						{data.nomeImovel && (
							<p>
								<b>Nome imóvel / condomínio:</b> {data.nomeImovel}
							</p>
						)}
						{data.nomeConstrutora && (
							<p>
								<b>Construtora:</b> {data.nomeConstrutora}
							</p>
						)}
						<div className="subitens endereco">
							<p>
								{data.imovel.logradouro}, {data.imovel.numeroLogradouro}
								{data.imovel.complemento && data.imovel.complemento},{data.imovel.bairro} - {data.imovel.cidade} -{' '}
								{data.imovel.cep} - {data.imovel.uf}
							</p>
						</div>
					</div>
				</div>
				{data.imovel.comodidadesCondominio !== 0 && (
					<div className="caractsImoveis">
						<h2 className="titulocaractsImoveis">Características do Imóvel</h2>
						<div className="itens">
							{data.imovel.comodidadesImovel.map((comodidades) => (
								<p>{comodidades}</p>
							))}
						</div>
					</div>
				)}
				{data.imovel.comodidadesCondominio !== 0 && (
					<div className="caractsCondominio">
						<h2 className="titulocaractsCondominio">Características do Condomínio</h2>
						<div className="itens">
							{data.imovel.comodidadesCondominio.map((condominio) => (
								<p>{condominio}</p>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

function ValoresAdicionais() {
	const { loading, error, data } = useQuery(GQL_BUSCAR_IMOVEL, {
		variables: { _id: IdImovel() },
	});

	if (loading) return <p>Loading Masterpieces...</p>;
	if (error) return <p>Mas Bah</p>;
	return (
		<div className="valoresAdicionais">
			{data.imovel.valorCondominio !== 0 && (
				<div>
					<p>Valor do condomínio:</p>
					<p>
						{data.imovel.valorCondominio.toLocaleString('pt-br', {
							style: 'currency',
							currency: 'BRL',
						})}
					</p>
				</div>
			)}
			{data.imovel.valorIPTU !== 0 && (
				<div>
					<p>Valor do IPTU:</p>
					<p>
						{data.imovel.valorIPTU.toLocaleString('pt-br', {
							style: 'currency',
							currency: 'BRL',
						})}
					</p>
				</div>
			)}
		</div>
	);
}

export default ImoveisAluguel;
