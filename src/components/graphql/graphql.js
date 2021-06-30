import { gql } from '@apollo/client';

export const GQL_LISTAR_IMOVEIS = gql`
	query imoveis {
		imoveis {
			_id
			nomeImovel
			imagemPrincipal
			categoriaImovel
			jardins
			descricaoImovel
			tipoNegociacao
			statusLancamento
			statusImovel
			aceitaPermuta
			mobiliado
			valorImovel
			valorEntrada
			valorParcela
			valorIPTU
			valorCondominio
			areaTotal
			areaConstruida
			andarImovel
			qtdeQuarto
			qtdeBanheiro
			qtdeSuites
			qtdeVagas
			nomeConstrutora
			nomeProprietario
			telefoneProprietario
			bairro
			logradouro
			numeroLogradouro
			complemento
			cep
			cidade
			uf
			galerias {
				tipoGaleria
				nomeGaleria
				arquivos
				arquivoDestaque
			}
			imgPlantaCondominio
			comodidadesImovel
			comodidadesCondominio
			previsaoLancamento
			tipologias {
				quartos
				suites
				tamanho
				valorEntrada
				valorParcela
			}
			createdAt
			updatedAt
			imovelId
		}
	}
`;

export const GQL_BUSCAR_IMOVEIS_COM_FILTRO = gql`
	query imoveis ($input: SearchImovelInput, $quantidade: Float) {
		imoveis (filtros: $input, quantidade: $quantidade) {
			_id
			nomeImovel
			imagemPrincipal
			categoriaImovel
			jardins
			descricaoImovel
			tipoNegociacao
			statusLancamento
			statusImovel
			aceitaPermuta
			mobiliado
			valorImovel
			valorEntrada
			valorParcela
			valorIPTU
			valorCondominio
			areaTotal
			areaConstruida
			andarImovel
			qtdeQuarto
			qtdeBanheiro
			qtdeSuites
			qtdeVagas
			nomeConstrutora
			nomeProprietario
			telefoneProprietario
			bairro
			logradouro
			numeroLogradouro
			complemento
			cep
			cidade
			uf
			galerias {
				tipoGaleria
				nomeGaleria
				arquivos
				arquivoDestaque
			}
			imgPlantaCondominio
			comodidadesImovel
			comodidadesCondominio
			previsaoLancamento
			tipologias {
				quartos
				suites
				tamanho
				valorEntrada
				valorParcela
			}
			createdAt
			updatedAt
			imovelId
		}
	}
`;

export const GQL_BUSCAR_IMOVEL = gql`
	query imovel($_id: ID!) {
		imovel(dados: { _id: $_id }) {
			_id
			nomeImovel
			imagemPrincipal
			categoriaImovel
			jardins
			descricaoImovel
			tipoNegociacao
			statusLancamento
			statusImovel
			aceitaPermuta
			mobiliado
			valorImovel
			valorEntrada
			valorParcela
			valorIPTU
			valorCondominio
			areaTotal
			areaConstruida
			andarImovel
			qtdeQuarto
			qtdeBanheiro
			qtdeSuites
			qtdeVagas
			nomeConstrutora
			nomeProprietario
			telefoneProprietario
			bairro
			logradouro
			numeroLogradouro
			complemento
			cep
			cidade
			uf
			galerias {
				tipoGaleria
				nomeGaleria
				arquivos
				arquivoDestaque
			}
			imgPlantaCondominio
			comodidadesImovel
			comodidadesCondominio
			previsaoLancamento
			tipologias {
				quartos
				suites
				tamanho
				valorEntrada
				valorParcela
			}
			createdAt
			updatedAt
			imovelId
		}
	}
`;

export const GQL_LISTAR_POSTS = gql`
	query todosPosts {
		posts {
			_id
			postId
			status
			titulo
			descricao
			conteudo
			imagemPrincipal
			categoria
			tags
			createdAt
			updatedAt
		}
	}
`;

export const GQL_BUSCAR_POSTS_COM_FILTRO = gql`
	query filtrarPosts($filtros: SearchPostCondInput, $quantidade: Float) {
		posts(filtros: $filtros, quantidade: $quantidade) {
			_id
			postId
			status
			titulo
			descricao
			conteudo
			imagemPrincipal
			categoria
			tags
			createdAt
			updatedAt
		}
	}
`;

export const GQL_BUSCAR_POST = gql`
	query post($id: String!) {
		post (id: $id) {
			_id
			postId
			status
			titulo
			descricao
			conteudo
			imagemPrincipal
			categoria
			tags
			createdAt
			updatedAt
		}
	}
`;

export const GQL_CRIAR_LEAD = gql`
  mutation createLead($input: CreateLeadInput!) {
    createLead(dados: $input)
  }
`;