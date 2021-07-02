import React from "react";
import { Link } from "react-router-dom";
import { LogoPortfolio } from "../../../assets/Imagens";
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
                      {" "}
                      <svg
                        role="img"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"></path>{" "}
                      </svg>{" "}
                    </a>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://www.facebook.com/portfolioimb/"
                      aria-label="Abrir Facebook Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <svg
                        role="img"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"></path>{" "}
                      </svg>{" "}
                    </a>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://twitter.com/portfolioimb/"
                      aria-label="Abrir Twitter Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      <svg
                        role="img"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"></path>{" "}
                      </svg>{" "}
                    </a>
                  </li>
                  <li onClick={this.remove.bind(this)}>
                    <a
                      href="https://api.whatsapp.com/send?phone=+556240035444"
                      aria-label="Abrir Twitter Portfolio Imóveis"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg aria-hidden="true" viewBox="-23 -21 682 682.66669">
                        <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" />
                      </svg>
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
