import React from 'react'
import { Link } from 'react-router-dom'
import { LogoPortfolio } from '../../../assets/Imagens'
import { Facebook, Instagram, WhatsApp } from '../../../assets/SVG'

import './Rodape.scss'

export default function Rodape() {
    return (
        <div className="Rodape">
            <div className="container-rodape">
                <div className="empresaDireitos">
                    <div className="logo"><Link><img src={LogoPortfolio.imagem.default} alt={LogoPortfolio.alt} title={LogoPortfolio.title} /></Link></div>
                    <div className="redesSociais">
                        <ul>
                            <li><Link>{Facebook}</Link></li>
                            <li><Link>{Instagram}</Link></li>
                            <li><Link>{WhatsApp}</Link></li>
                        </ul>
                    </div>
                    <div className="direitos">Todos direitos e responsabilidade publicados no site, correspondem a Portfolio Imóveis</div>
                </div>
                <div className="linkImoveis">
                    <div className="categoria">
                        <ul>
                            <li><Link>Aluguel</Link></li>
                            <li><Link>Lançamento</Link></li>
                            <li><Link>Venda</Link></li>
                        </ul>
                    </div>
                    <div className="tipo">
                        <ul>
                            <li><Link>Horizontais</Link></li>
                            <li><Link>Apartamento</Link></li>
                            <li><Link>Casas</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="LinkUteis">
                    <div className="links">
                        <ul>
                            <li><Link>Sobre</Link></li>
                            <li><Link>Anuncie</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Parceiro</Link></li>
                            <li><Link>Contato</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="Contato">
                    <div className="endereço">
                        <p>Av Dep. Jamel Cecílio, nº 2.690, Loja 21, Metropolitan Mall, Jardim Goiás, Goiânia - GO CEP 74.810-100</p>
                    </div>
                    <div className="telefone">
                        <p>(62) 0000-0000</p>
                    </div>
                    <div className="desenvolvido">Desenvolvido pela Agência Haul Iau</div>
                </div>
            </div>
        </div>
    )
}

