import React from 'react'
import styled from 'styled-components';

// Installation
// npm : npm install react-slick --save
// Also install slick-carousel for css and font
// npm install slick-carousel

import Slider from 'react-slick'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    let sliderImages = props.sliderImages;
    return (
        <Carousel {...settings}>
            {sliderImages.map((element) => {
                return <Wrap><img src={element} alt="Slider" /></Wrap>
            })}
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button::before{
        color:white;
    }

    .slick-list{
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent; 
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover{
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`