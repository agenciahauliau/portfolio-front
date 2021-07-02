import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_POSTS_COM_FILTRO } from '../../graphql/graphql';
import { Facebook, Twitter, WhatsApp } from '../../../assets/SVG';

function BlogTopo() {
	const { loading, data } = useQuery(GQL_BUSCAR_POSTS_COM_FILTRO, {
		variables: {
			quantidade: 3,
		},
		returnPartialData: true,
	});

	if (loading) return <p>Loading Masterpieces...</p>;

	return (
		<div className="topo">
			{data.posts.map((post) => (
				<div className="artigo">
					<Link to={'/artigos/post?titulo=' + post.titulo + '&id=' + post._id}>
						<div className="imagemTitulo">
							<div className="imagem">
								<img src={post.imagemPrincipal} alt={post.titulo} />
							</div>
							<div className="titulo">
								<div className="tag">
									<p>{post.categoria}</p>
								</div>
								<div>
									<h3>{post.titulo}</h3>
									<div className="compartilhar">
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
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}

export default BlogTopo;
