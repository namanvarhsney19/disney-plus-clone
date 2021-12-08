import React from 'react'
import styled from 'styled-components'

const Viewer = (props) => {
    let viewersImages = props.viewersImages;
    return (
        <Container>
            {viewersImages.map((element) => {
                return element ? <Wrap><img src={element} alt="Viewers Image" /></Wrap> : <h2>Images not found</h2>
            })}
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

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`