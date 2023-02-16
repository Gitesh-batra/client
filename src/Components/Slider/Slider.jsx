import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Slider.css';

const Slider = () => {
    const [currSlide, setCurrSlide] = useState(0);

    const data = [
        './img/scrool1.jpg',
        './img/scrool2.jpg',
        './img/scrool3.jpg',
        './img/scrool4.jpg',
        './img/scrool5.jpg',
    ];

    const prevSlide = () => {
        setCurrSlide(currSlide === 0 ? 4 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        // if (currSlide<=4){
        setCurrSlide(currSlide === 4 ? 0 : (prev) => prev + 1);
        // }
        // else{
        //     setCurrSlide=0;
        // }
    };
    // some error in this for auto sliding chack it
    // const autoSlide=()

    return (
        <div className="Slider">
            <div
                className="container"
                style={{ transform: `translateX(-${currSlide * 100}vw)` }}
            >
                <img src={data[0]} alt="scrool1" />
                <img src={data[1]} alt="scrool2" />
                <img src={data[2]} alt="scrool3" />
                <img src={data[3]} alt="scrool4" />
                <img src={data[4]} alt="scrool5" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosIcon className="left" />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon className="right" />
                </div>
            </div>

            <div className="buttons">
                <button>Shop Now</button>
            </div>
        </div>
    );
};

export default Slider;
