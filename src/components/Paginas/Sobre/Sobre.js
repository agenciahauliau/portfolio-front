import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { SlideIncorporadora, SlideLoja } from './components/SlideSobre';
import { Alessandro, Cristiane, Diogo, FrenteLoja2, Leonardo, Reginaldo } from './../../../assets/Imagens'

import './Sobre.scss';

export default class Sobre extends React.Component {

  checked(e){
    document.querySelector('.diretores:checked').checked = false;
    document.querySelector(`input#${e.target.parentNode.id}`).checked = true
  }

  render() {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 }
    };

    return (
      <div className="Sobre">
        <div className="container">
          <div className='textoPrincipal'>
            <div className="titulo">
              <h1>Conheça tudo sobre a Portfolio Imóveis</h1>
            </div>
            <p>
              Portfolio imóveis foi criada em maio de 2006 com objetivo de atuar no mercado de alto padrão em condomínios horizontais na região metropolitana de Goiânia. Com uma parceria sólida junto a FGR urbanismo S/A, comercializou todos os empreendimentos da empresa desde então.
            </p>
            <div className="slide Loja">
              <AliceCarousel autoPlay infinite disableButtonsControls disableDotsControls autoPlayInterval={10000}>
                {SlideLoja.map((slide, index) => (
                  <img key={`slideLoja-fgr-${index}`} src={slide.imagem.default} className="sliderimg" alt={slide.alt} title={slide.title} width={slide.width} height={slide.height} onDragStart={handleDragStart} />
                ))}
              </AliceCarousel>

            </div>
            <p>Com o propósito de atuar no segmento de parcelamento urbano, faixas B e C, em 2011 foi criada a Portfolio Desenvolvimento Urbano, com a expertise no segmento de loteamento aberto, fez a gestão e revenda de vários empreendimentos no estado de Goiás.
            </p>
            <div className="slide Incorporadora">
              <AliceCarousel autoPlay infinite disableButtonsControls disableDotsControls responsive={responsive} autoPlayInterval={7500}>
                {SlideIncorporadora.map((slide, index) => (
                  <img key={`slideLoja-fgr-${index}`} src={slide.imagem.default} className="sliderimg" alt={slide.alt} title={slide.title} width={slide.width} height={slide.height} onDragStart={handleDragStart} />
                ))}
              </AliceCarousel>
            </div>
            <p>Em 2013 nasce a Portfolio Participações, criando e desenvolvendo empreendimentos imobiliários no estado de Goiás e Mato Grosso do Sul, como loteamentos abertos e fechados nas cidades de Amambai, Nerópolis e Goianápolis.
            </p>
          </div>
          <div className="diretores">
            <div className="titulo">
              <h2>Nossos Diretores</h2>
            </div>
            <input type="radio" className="diretores" name="dir" id="default" checked/>
            <input type="radio" className="diretores" name="dir" id="leonardo" />
            <input type="radio" className="diretores" name="dir" id="cristiane" />
            <input type="radio" className="diretores" name="dir" id="reginaldo" />
            <input type="radio" className="diretores" name="dir" id="alessandro" />
            <input type="radio" className="diretores" name="dir" id="diogo" />

            <div className="informacoes">
              <div className="default">
                <h3>Por que a Portfolio é a melhor?</h3>
                <p>A Portfolio é a melhor Imobiliária de Goiânia, simplesmente por ter o melhor grupo de diretores que uma imobiliária necessita.</p>
                <p>Seja em qualquer tipo de empreendimento que esteja procurando investir ou morar, nós temos um especialista com vasta experiência no mercado imobiliário, para guiar toda a equipe de parceiros corretores, e te ajudar a fazer a melhor escolha.</p>
                <p>Aproveite a oportunidade e conheça um pouco da história de cada um desses especialistas.</p>
              </div>
              <div className="reginaldo">
                <h3>REGINALDO ABDALA</h3>
                <p>Espírito empreendedor, trabalho duro e um olhar afiado para negócios. Foi assim que o nosso CEO, Reginaldo Abdala, construiu sua história de sucesso. São mais de 20 anos de experiência formando parcerias de peso com grandes nomes do mercado, como FGR e FR. Um reflexo dos valores que atribuem personalidade a Portfolio Imóveis e prometem revolucionar o cenário imobiliário goiano.</p>
                <p>20 anos de experiência no mercado imobiliário</p>
                <p>CEO da Portfolio Imóveis</p>
              </div>
              <div className="leonardo">
                <h3>LEONARDO REBOUÇAS</h3>
                <p>Há 18 anos atuando no mercado imobiliário goiano, o Léo é especialista na compra e revenda de imóveis de alto padrão. Uma peça indispensável no time da Portfolio que está trazendo todo esse know-how para atender nossos clientes.</p>
                <p>Especialista em compra, venda e aluguel de imóveis</p>
                <p>Diretor</p>
              </div>
              <div className="alessandro">
                <h3>ALESSANDRO RANGEL</h3>
                <p>O Alessandro é um dos Sócios Diretores da Portfolio Imóveis. Com foco em Condomínios Fechados e Imóveis de Alto Padrão ele soma mais de duas décadas de atividade no mercado imobiliário, é experiência de fazer inveja. Então agora você já sabe, se você quer acompanhamento da escolha do seu imóvel até a entrega das chaves feito por um dos melhores profissionais do mercado goiano, é só falar com ele.</p>
                <p>Especialista em imóveis de alto padrão</p>
                <p>Diretor</p>
              </div>
              <div className="cristiane">
                <h3>CRISTIANE ABDALA</h3>
                <p>A Cris é uma profissional ímpar no mercado imobiliário. Com 18 anos de atuação em lançamentos e revenda de terrenos e casas em condomínios de alto padrão, ela se destaca por sua abordagem inteligente e assertiva, sempre atendendo os seus clientes de forma personalizada.</p>

                <p>Se você já trabalhou com a Cris, sabe do que estamos falando, se ainda não a conhece, tenha certeza de conversar com ela da próxima vez que precisar de um Consultor Imobiliário.</p>

                <p>Especialista em imóveis de alto padrão</p>
                <p>Diretora</p>
              </div>
              <div className="diogo">
                <h3>DIOGO PORTO</h3>
                <p>Com 12 anos de experiência no Mercado Imobiliário, Diogo Porto atuou na Direção das principais empresas em Goiânia, destacando-se na gestão comercial e estratégias imobiliárias dentro das incorporadoras. Seu trajeto é marcado por grandes premiações e reconhecimento! Um profissional com todo esse talento só poderia estar aqui na Portfolio!</p>
                <p>Especialista em investimentos imobiliários</p>
                <p>Diretor</p>
              </div>
            </div>
            <div className="fotografias">
              <div id="leonardo" className="imagem" onClick={this.checked}>
                <img src={Leonardo.imagem.default} alt={Leonardo.alt} title={Leonardo.title} width={Leonardo.width} height={Leonardo.height} />
              </div>
              <div id="cristiane" className="imagem" onClick={this.checked}>
                <img src={Cristiane.imagem.default} alt={Cristiane.alt} title={Cristiane.title} width={Cristiane.width} height={Cristiane.height} />
              </div>
              <div id="reginaldo" className="imagem" onClick={this.checked}>
                <img src={Reginaldo.imagem.default} alt={Reginaldo.alt} title={Reginaldo.title} width={Reginaldo.width} height={Reginaldo.height} />
              </div>
              <div id="alessandro" className="imagem" onClick={this.checked}>
                <img src={Alessandro.imagem.default} alt={Alessandro.alt} title={Alessandro.title} width={Alessandro.width} height={Alessandro.height} />
              </div>
              <div id="diogo" className="imagem" onClick={this.checked}>
                <img src={Diogo.imagem.default} alt={Diogo.alt} title={Diogo.title} width={Diogo.width} height={Diogo.height} />
              </div>
            </div>
          </div>
        </div>
        <div className="linhasVerticais">
          <div className="linhas">
            <div className="linha"></div>
            <div className="linha"></div>
            <div className="linha"></div>
          </div>
        </div>
      </div>
    )
  }
}