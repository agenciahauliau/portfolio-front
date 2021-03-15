import React, { useState } from 'react';
import { SlidesFGRBanner } from './SlidesFGRBanner';
import '../../assets/styles/FGRBanner.scss'

const SlideFGRBanner = ({ slides }) => {
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

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    return (
        <>
            <div className='prev botao' onClick={ prevSlide }></div>
            <div className='next botao' onClick={ nextSlide }></div>
            {SlidesFGRBanner.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={ index }>
                        { index === current && (<img className="image" src={slide.image} alt='travel imagens'/>)}
                    </div>
                )
            })}
            <div className='positionSlide'>
                {SlidesFGRBanner.map((slide, index) => {
                    return <span className={index === current ? 'dots active' : ' dots'} onClick={() => onClickHandler(index)} ></span>
                })}
            </div>
        </>
    );
};

export default  SlideFGRBanner;