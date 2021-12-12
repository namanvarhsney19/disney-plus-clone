import React, { useRef } from 'react'
import styled from 'styled-components'

const Viewer = () => {
    const vidRef1 = useRef(null);
    const vidRef2 = useRef(null);
    const vidRef3 = useRef(null);
    const vidRef4 = useRef(null);
    const vidRef5 = useRef(null);

    const handleOnMouseOver = (e) => {
        vidRef1.current.play();
        vidRef2.current.play();
        vidRef3.current.play();
        vidRef4.current.play();
        vidRef5.current.play();
    }
    const handleOnMouseOut = (e) => {
        vidRef1.current.pause();
        vidRef2.current.pause();
        vidRef3.current.pause();
        vidRef4.current.pause();
        vidRef5.current.pause();
    }
    return (
        <Container>
            {/* {viewersImages.map((element) => { */}
            <Wrap onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <img src={"/images/viewers-disney.png"} alt="Viewers" />
                <video loop muted ref={vidRef1} >
                    <source src={'/videos/1564674844-disney.mp4'} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <img src={"/images/viewers-pixar.png"} alt="Viewers" />
                <video loop muted ref={vidRef2} >
                    <source src={'/videos/1564676714-pixar.mp4'} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <img src={"/images/viewers-marvel.png"} alt="Viewers" />
                <video loop muted ref={vidRef3} >
                    <source src={'/videos/1564676115-marvel.mp4'} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <img src={"/images/viewers-starwars.png"} alt="Viewers" />
                <video loop muted ref={vidRef4} >
                    <source src={'/videos/1608229455-star-wars.mp4'} type="video/mp4" />
                </video>
            </Wrap>
            <Wrap onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
                <img src={"/images/viewers-national.png"} alt="Viewers" />
                <video loop muted ref={vidRef5} >
                    <source src={'/videos/1564676296-national-geographic.mp4'} type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewer

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px 0; 
    
    display: grid;
    grid-template-columns: repeat(5, minmax(0,1fr));
    grid-gap: 25px;
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms ease-in-out 0s;

    position: relative;

    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
        video{
            opacity: 100;
        }
    }

    video{
        // position: absolute;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`