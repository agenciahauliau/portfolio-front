import React from 'react';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_POST } from '../../../graphql/graphql';
import { useLocation } from 'react-router-dom';

import './Post.scss';
import { Facebook, Twitter, WhatsApp } from '../../../../assets/SVG';


function IdBlog() {
	return new URLSearchParams(useLocation().search).get('id');
}

function Post() {
	const { loading, data } = useQuery(GQL_BUSCAR_POST, {
		variables: { id: IdBlog() },
	});

	if (loading) return <p>Loading Masterpieces...</p>;

	function Conteudo() {
		return {
			__html: data.post.conteudo
		}
	}

	return (
		<div className="post">
			<div className="container">
				<div className="artigo">
					<div className="topo">
						<div className="texto">
							<h1>{data.post.titulo}</h1>
							<div className="info">
								<p className="data">publicado em: {data.post.updatedAt}</p>
								<p className="tag">{data.post.categoria.map((cat) => cat)}</p>
							</div>
							<div className="compartilhar">
								<p>compartilhar: </p>
								<ul>
									<li>
										<a
											href="https://www.facebook.com/sharer/sharer.php?u="
											aria-label="Abrir Facebook Portfolio Imóveis"
											rel="noopener noreferrer nofollow"
											target="_blank"
										>
											{Facebook}
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/intent/tweet?url=+url+&text=+titulo"
											aria-label="Abrir Twitter Portfolio Imóveis"
											rel="noopener noreferrer nofollow"
											target="_blank"
										>
											{Twitter}
										</a>
									</li>
									<li>
										<a
											href="whatsapp://send?text=https://dribbble.com/shots/14431436-Startup-Blog-Posts"
											aria-label="Abrir Twitter Portfolio Imóveis"
											rel="noopener noreferrer nofollow"
											target="_blank"
										>
											{WhatsApp}
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="imagemDestacada">
							<div className="imagem">
								<div className="img">
									<img
										src={data.post.imagemPrincipal}
										alt={data.post.titulo}
										title={data.post.titulo}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="conteudo">
						<div className="conteudoArtigo">
							<div className="texto" dangerouslySetInnerHTML={Conteudo()}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
