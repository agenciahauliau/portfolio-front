import React from "react";
import { Link } from "react-router-dom";
import { LogoPortfolio } from "../../../assets/Imagens";
import { Facebook, Instagram, WhatsApp } from "../../../assets/SVG";
//import SCSS
import "./Topo.scss";


class Topo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  remove() {
    this.setState({ addClass: false });
  }
  render() {
    let menuAtivo = ["icone-collapse"];
    if (this.state.addClass) {
      menuAtivo.push("click");
    }
    return (
      <header>
        <nav className="Navbar">
          <div className="navbar-conteiner">
            <div className="logo-menu" onClick={this.remove.bind(this)}>
              <Link to="/">
                <img
                  src={LogoPortfolio.imagem.default}
                  alt={LogoPortfolio.alt}
                  title={LogoPortfolio.title}
                  width={LogoPortfolio.width}
                  height={LogoPortfolio.height}
                />
              </Link>
            </div>
            <div
              className={this.state.addClass ? "menu-list Ativo" : "menu-list"}
            >
              <div
                className={menuAtivo.join(" ")}
                onClick={this.toggle.bind(this)}
              >
                <svg
                  version="1.1"
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="500 25.71 25.71 500 0 475.12 475.12 0" />
                  <polygon points="500 238.33 500 288.91 288.91 500 238.33 500" />
                  <polygon points="262.5 0 0 262.5 0 211.91 211.91 0" />
                </svg>
              </div>
              <div className="menu-list-imoveis">
                <ul>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/condominio+jardins">Condomínio Jardins</Link>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/imoveis">Imóveis</Link>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/anuncie+seu+imovel">Anuncie</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-list-info">
                <ul>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/artigos">Blog</Link>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/sobre+nos">Sobre</Link>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <Link to="/contato">Contato</Link>
                  </li>
                </ul>
              </div>
              <div className="menu-list-social">
                <ul>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://www.instagram.com/portfolioimb/"
                      aria-label="Abrir instagram Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {Instagram}
                    </a>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://www.facebook.com/portfolioimb/"
                      aria-label="Abrir Facebook Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                     {Facebook}
                    </a>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://api.whatsapp.com/send?phone=+556240035444"
                      aria-label="Abrir Twitter Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {WhatsApp}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-list-endereco">
                <ul>
                  <li>(62) 9999-9999</li>
                  <li>
                    Av Dep. Jamel Cecílio, nº 2.690, Loja 21, Metropolitan Mall,
                    Jardim Goiás, Goiânia-GO CEP 74.810-100
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Topo;
