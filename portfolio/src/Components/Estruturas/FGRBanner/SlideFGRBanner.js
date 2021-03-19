import React, { useState, useEffect, useRef } from 'react';
import { SlidesFGRBanner } from './SlidesFGRBanner';
import '../../assets/styles/FGRBanner.scss'

const SlideFGRBanner = props => {

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

    // const autoPlayRef = useRef()

    // useEffect(() => {
    //     autoPlayRef.current = nextSlide
    // })

    // useEffect(() => {
    //     const play = () => {
    //         autoPlayRef.current()
    //     }

    //     const interval = setInterval(play, 5000)
    //     return () => clearInterval(interval)
    // }, [])

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    return (
        <>
            <div className="boxBotoes" >
                {/* <div className='prev botao' onClick={ prevSlide }></div>
                <div className='next botao' onClick={ nextSlide }></div> */}
            </div>
            <div className="boxSlide">
            {SlidesFGRBanner.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={ index }>
                        { index === current && (<img src={slide.image} alt='travel imagens'/>)}
                    </div>
                )
            })}
            </div>
            <div className='boxPonto'>
                {SlidesFGRBanner.map((slide, index) => {
                    return <div className={index === current ? 'pontos active' : 'pontos'} onClick={() => onClickHandler(index)} >
                        <div className="dentro"></div>
                    </div>
                })}
            </div>
        </>
    );
};

export default  SlideFGRBanner;