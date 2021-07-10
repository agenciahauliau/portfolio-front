import React, { useState, useEffect, useRef } from "react";
import { SlidesFGRBanner } from "./SlidesFGRBanner";
import "./FGRBanner.scss";
import { Direita, Esquerda } from "../../../assets/SVG";

const SlideFGRBanner = (props) => {
  const { slides } = props;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const onClickHandler = (el) => {
    setCurrent(el);
  };

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="boxBotoes">
        <div className="prev botao" onClick={prevSlide}>
          {Esquerda}
        </div>
        <div className="next botao" onClick={nextSlide}>
          {Direita}
        </div>
      </div>
      <div className="boxSlide">
        {SlidesFGRBanner.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={`imagens${index}`}
            >
              {index === current && <img key={index} src={slide.image} alt="Jardins FGR" />}
            </div>
          );
        })}
      </div>
      <div className="boxPonto">
        {SlidesFGRBanner.map((index) => {
          return (
            <div
              className={index === current ? "pontos active" : "pontos"}
              onClick={() => onClickHandler(index) }
            >
              <div className="dentro"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SlideFGRBanner;
