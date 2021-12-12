import React from 'react'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="Background" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="Title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="PLAY" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="TRAILER" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="WATCH" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 -  7m - Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magni a dolor provident iste, quaerat numquam, error, sequi ab nam at beatae voluptatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, repellat ratione?
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8; 
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    display: flex;
    padding: 24px;
    margin-right: 22px;
    font-size: 15px;
    align-items: center;
    height: 36px;
    background: rgb(249,249,249);
    border: none;
    border-radius: 4px;
    letter-spacing: 1.6px;
    cursor: pointer;

    &:hover{
        background: rgb(198,198,198);
        font-weight: bold;
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    color: white;
    border: 1px solid rgb(249,249,249);
    text-transform: uppercase;
    
    &:hover{
        background: #181818;
    }
`
const AddButton = styled.button`
    height: 44px;
    width: 44px;
    margin-right: 22px;
    border: 2px solid white;
    border-radius: 50%;
    background: rgba(0,0,0,0.6);
    cursor: pointer;
    
    span{
        font-size: 30px;
        color: white;
    }
    `
const GroupWatchButton = styled(AddButton)`
    display: flex;
    justify-content: center;
    background: rgba(0,0,0,0.8);
`


const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 700px;
`