import React, { useState } from 'react';
import { Link, useLocation, BrowserRouter  } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_POSTS_COM_FILTRO } from '../../graphql/graphql';
import { Facebook, Twitter, WhatsApp } from '../../../assets/SVG';

function BlogTopo() {

	const location = useLocation();
	console.log(<BrowserRouter/>);

	const { loading, data } = useQuery(GQL_BUSCAR_POSTS_COM_FILTRO, {
		variables: {
			quantidade: 3,
		},
		returnPartialData: true,
	});

	if (loading) return <p>...</p>;

		

	return (
		<div className="topo">
			{data.posts.map((post) => (
				<div className="artigo">
					<div className="imagemTitulo">
						<div className="imagem">
							<img src={post.imagemPrincipal} alt={post.titulo} />
						</div>
						<div className="titulo">
							<div className="tag">
								<p>{post.categoria}</p>
							</div>
							<div>
								<Link to={'/artigos/post?titulo=' + post.titulo + '&id=' + post._id}>
									<h3>{post.titulo}</h3>
								</Link>
								<div className="compartilhar">
									<ul>
										<li>
											<a
												href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}/post?id=${post._id}`}
												aria-label="Abrir Facebook Portfolio Imóveis"
												rel="noopener noreferrer nofollow"
												target="_blank"
											>
												{Facebook}
											</a>
										</li>
										<li>
											<a
												href={`https://twitter.com/intent/tweet?url=${window.location.href}/post?id=${post._id}&text=${post.titulo}&hashtags=${post.categoria}`}
												aria-label="Abrir Twitter Portfolio Imóveis"
												rel="noopener noreferrer nofollow me"
												target="_blank"
											>
												{Twitter}
											</a>
										</li>
										<li>
											<a
												href={`whatsapp://send?text=${post.titulo}+-+${window.location.href}/post?id=${post._id}`}
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
				</div>
			))}
		</div>
	);
}

export default BlogTopo;
