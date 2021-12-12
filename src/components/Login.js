import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
    let history = useHistory();
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                history.push("/");
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container>
            <Contents>
                <Logoone src="/images/cta-logo-one.svg" />
                <SignUp onClick={() => signInWithPopup(auth, provider)}>get all there</SignUp>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, odio. Animi, laudantium porro sed iste quos consectetur excepturi quas autem, provident fugit quo ad explicabo nemo rem voluptatum deleniti culpa accusantium, facere fugiat eveniet.
                </Description>
                <Logotwo src="/images/cta-logo-two.png" />
            </Contents>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    justify-content: center;
    align-items: top;
    overflow: hidden;
    opacity: 0.7;

    &:before {
        background-position: :top;
        background-size: cover;
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

const Contents = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logoone = styled.img``
const SignUp = styled.a`
    text-transform: uppercase;
    width: 100%;
    font-weight: bold;
    background-color: #0063e5;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: all 250ms;
    margin: 8px 0px 12px 0px;

    &:hover{
        background: #0483ee;
        color: white;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const Logotwo = styled.img`
    width: 90%;
`