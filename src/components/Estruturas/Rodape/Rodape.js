import React from 'react'
import { Link } from 'react-router-dom'
import { LogoPortfolio } from '../../../assets/Imagens'
import { Facebook, Instagram, Linkedin, WhatsApp } from '../../../assets/SVG'

import './Rodape.scss'

export default function Rodape() {
    return (
        <div className="Rodape">
            <div className="container-rodape">
                <div className="empresaDireitos">
                    <div className="logo"><Link
                        to="/"
                    ><img src={LogoPortfolio.imagem.default} alt={LogoPortfolio.alt} title={LogoPortfolio.title} /></Link></div>
                    <div className="redesSociais">
                        <ul>
                            <li><a href="https://www.facebook.com/portfolioimb" aria-label="Facebook Portfólio Imóveis" target="_blank" rel="nofollow, noopener, noreferrer">{Facebook}</a></li>
                            <li><a href="https://www.instagram.com/portfolioimb" aria-label="Facebook Portfólio Imóveis" target="_blank" rel="nofollow, noopener, noreferrer">{Instagram}</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+556240035444" aria-label="Linkedin Portfólio Imóveis" target="_blank" rel="nofollow, noopener, noreferrer">{Linkedin}</a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+556240035444" aria-label="WhatsApp Portfólio Imóveis" target="_blank" rel="nofollow, noopener, noreferrer">{WhatsApp}</a></li>
                        </ul>
                    </div>
                    <div className="direitos">Todos direitos e responsabilidade publicados no site, correspondem a Portfolio Imóveis</div>
                </div>
                <div className="linkImoveis">
                    <div className="categoria">
                        <ul>
                            <li><Link to="/imoveis?tipoNegociacao=Aluguel&pagina=1">Aluguel</Link></li>
                            <li><Link to="/imoveis?tipoNegociacao=Lançamento&pagina=1">Lançamento</Link></li>
                            <li><Link to="/imoveis?tipoNegociacao=Venda&pagina=1">Revenda</Link></li>
                        </ul>
                    </div>
                    <div className="tipo">
                        <ul>
                            <li><Link to="/imoveis?categoriaImovel=Casa em Condomínio,Lote+em Condomínio&tipoNegociacao=Venda&pagina=1">Condomínios Horizontais</Link></li>
                            <li><Link to="/imoveis?categoriaImovel=Apartamento Padrão,Cobertura&tipoNegociacao=Venda&pagina=1">Apartamentos</Link></li>
                            <li><Link to="/imoveis?categoriaImovel=Casa Residencial,Casa em Condomínio&tipoNegociacao=Venda&pagina=1">Casas</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="LinkUteis">
                    <div className="links">
                        <ul>
                            <li><Link to="/sobre+nos">Sobre</Link></li>
                            <li><Link to="/anuncie+seu+imovel">Anuncie</Link></li>
                            <li><Link to="/artigos">Blog</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                            <li><Link to="/condominio+jardins">Condomínio Jardins</Link></li>
                        </ul>
                    </div>
                    <div className="parceiro">
                        <ul>
                            <li><Link to="/seja+um+parceiro">Parceiro</Link></li>
                            <li><a href="http://crm.simbo.com.br/login/auth;jsessionid=EE27F505178143B330F71D48748E0AA7"
                            aria-label="Área do corretor"
                            rel="noopener noreferrer"
                            target="_blank">Área do Corretor</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Contato">
                    <div className="endereço">
                        <p>Av Dep. Jamel Cecílio, nº 2.690, Loja 21, Metropolitan Mall, Jardim Goiás, Goiânia - GO CEP 74.810-100</p>
                    </div>
                    <div className="telefone">
                        <p>(62) 3070-0306</p>
                    </div>
                    <div className="desenvolvido">Desenvolvido pela Agência Haul Iau</div>
                </div>
            </div>
        </div>
    )
}

