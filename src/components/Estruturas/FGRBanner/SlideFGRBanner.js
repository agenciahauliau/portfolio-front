import React, { useState, useEffect, useRef } from "react";
import { SlidesFGRBanner } from "./SlidesFGRBanner";
import "./FGRBanner.scss";

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
          <svg
            enable-background="new 0 0 240.823 240.823"
            version="1.1"
            viewBox="0 0 240.823 240.823"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m57.633 129.01l108.3 108.26c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.3 108.26c-4.679 4.691-4.679 12.511 0.012 17.191z" />
          </svg>
        </div>
        <div className="next botao" onClick={nextSlide}>
          <svg
            enable-background="new 0 0 240.823 240.823"
            version="1.1"
            viewBox="0 0 240.823 240.823"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m183.19 111.82l-108.3-108.26c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.3-108.26c4.68-4.691 4.68-12.511-0.012-17.19z" />
          </svg>
        </div>
      </div>
      <div className="boxSlide">
        {SlidesFGRBanner.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="Jardins FGR" />}
            </div>
          );
        })}
      </div>
      <div className="boxPonto">
        {SlidesFGRBanner.map((index) => {
          return (
            <div
              className={index === current ? "pontos active" : "pontos"}
              onClick={() => onClickHandler(index)}
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
