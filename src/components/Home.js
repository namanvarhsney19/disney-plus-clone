import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies';
import Viewer from './Viewer';

const Home = () => {
    let sliderImages = ["/images/slider-badag.jpg", "/images/slider-badging.jpg", "/images/slider-scale.jpg", "/images/slider-badging.jpg", "/images/slider-badag.jpg", "/images/slider-scales.jpg"];
    let viewersImages = ["/images/viewers-disney.png", "/images/viewers-pixar.png", "/images/viewers-marvel.png", "/images/viewers-starwars.png", "/images/viewers-national.png"];
    let movieImages = ["/images/viewers-disney.png", "/images/viewers-pixar.png", "/images/viewers-marvel.png", "/images/viewers-starwars.png", "/images/viewers-national.png"];

    return (
        <Container>
            <ImageSlider sliderImages={sliderImages} />
            <Viewer viewersImages={viewersImages} />
            <Movies movieImages={movieImages} />
        </Container>
    )
}

export default Home

// main (is a div) : represents the dominant content of the <body>. HTML5. SEO friendly
// vh - vertical height, 70px : height of header.

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
