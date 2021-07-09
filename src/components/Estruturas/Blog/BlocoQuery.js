import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GQL_BUSCAR_POSTS_COM_FILTRO } from '../../graphql/graphql';
import { Direita, Esquerda, Facebook, Twitter, WhatsApp } from '../../../assets/SVG'
import { MobileDesktop } from '../../Helpers/Helpers';
import ReactPaginate from 'react-paginate';

function BlocoQuery() {
    const { loading, data } = useQuery(GQL_BUSCAR_POSTS_COM_FILTRO, {
        returnPartialData: true,
    });

    const [pageNumber, setPageNumber] = useState(0);

    if (loading) return <p></p>;

    const usersPerPage = 6;
    const pagesVisited = pageNumber * usersPerPage;

    const postsPP = data.posts.slice(pagesVisited, pagesVisited + usersPerPage).map((post, index) => {
        return (
            <div key={index} className="artigo">
                <div className="imagem">
                    <div className="img">
                        <img
                            src={post.imagemPrincipal}
                            alt={post.titulo}
                            title={post.titulo}
                        />
                    </div>
                    <div className="tag">{post.tag}</div>
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
                <Link to={`/artigos/post?id=${post._id}`}>
                    <div className="texto">
                        <div className="titulo">
                            <h4>{post.titulo}</h4>
                        </div>
                        <div className="resumo">
                            <p>
                                {post.descricao}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    });

    const pageCount = Math.ceil(data.posts.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const QuantMD = MobileDesktop ? 1 : 3

    return (
        <>
            {postsPP}
            < div className="paginacao" >
                <ReactPaginate
                    previousLabel={Esquerda}
                    nextLabel={Direita}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={QuantMD}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}
                />
            </div>
        </>
    )

}

export default BlocoQuery