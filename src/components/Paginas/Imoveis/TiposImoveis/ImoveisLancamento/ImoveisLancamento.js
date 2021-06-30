import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_IMOVEL } from '../../../../graphql/graphql';
import { useLocation } from 'react-router-dom';

import './ImoveisLancamento.scss';

function IdImovel() {
	return new URLSearchParams(useLocation().search).get('id');
}

function ImoveisLancamento() {
	const { loading, error, data } = useQuery(GQL_BUSCAR_IMOVEL, {
		variables: { _id: IdImovel() },
	});

	if (loading) return <p>Loading Masterpieces...</p>;
	if (error) return <p>Mas Bah</p>;

	return (
		<div className="conteudoImovel ImovelLancamento">
			<div className="boxImagemImovel">
				<div className="imagemImovel">
					<img src={data.imovel.imagemPrincipal} />
				</div>
			</div>
			<div className="topoLancamentos">
				<div>
					<h1>{data.imovel.nomeImovel}</h1>
					<p>{data.imovel.nomeConstrutora}</p>
					<p className="endrecoImovel">
						{data.imovel.logradouro},{data.imovel.numeroLogradouro}
						{data.imovel.complemento && data.imovel.complemento} -{data.imovel.bairro} — {data.imovel.cidade}
					</p>
				</div>
			</div>
			<div className="descricaoImovel">
				<h2 className="titulodescricaoImovel">Descrição</h2>
				<div className="textoDescricaoImovel">{data.imovel.descricaoImovel}</div>
			</div>
			<div className="informacoesLancamentoImovel">
				<div className="galeriaImovel">
					<div className="blocoGaleriaImovel">
						<h2 className="tituloGaleria">Título Galeria</h2>
						<img />
					</div>
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
						{data.imovel.areaConstruida !== 0 && (
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
						{data.imovel.nomeImovel && (
							<p>
								<b>Nome imóvel / condomínio:</b> {data.nomeImovel}
							</p>
						)}
						{data.imovel.nomeConstrutora && (
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
			</div>
			<div className="formImovel">
				<div className="dentroFormImovel">
					<div className="tituloForm">
						<h4>Quer ter mais informações sobre o imóvel, mande mensagem agora que entramos em contato</h4>
					</div>
					<div>
						<form>
							<input type="text" placeholder="Nome completo" />
							<input type="email" placeholder="E-mail" />
							<input type="tel" placeholder="Telefone / Whatsapp" />
							<div className="checkFormImovel">
								<label>
									<input type="checkbox" /> Telefone
								</label>
								<label>
									<input type="checkbox" /> Email
								</label>
								<label>
									<input type="checkbox" /> Whatsapp
								</label>
							</div>
							<button>Entrar em contato</button>
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

export default ImoveisLancamento;
