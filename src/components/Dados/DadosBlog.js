import { gql } from '@apollo/client';

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
	query filtrarPosts($filtros: SearchPostCondInput, $qtde: Float) {
		posts(filtros: $filtros, quantidade: $qtde) {
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
		post(id: $id) {
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
