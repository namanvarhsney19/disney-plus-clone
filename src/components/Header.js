import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { signInWithPopup } from 'firebase/auth'
// import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { user, setUser } = props;
    // let router = useHistory();
    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    photoUrl: user.photoURL
                })
            }
            else {
                setUser(null);
                // router.push("/login");
                <Link to='/login' />
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Nav>
            <Link to='/'>
                < Logo src="/images/logo.svg" alt="Disney+ logo" />
            </Link >
            {
                !user ?
                    <LoginContainer>
                        <Login onClick={() => signInWithPopup(auth, provider)}>Login</Login>
                    </LoginContainer> :
                    <>
                        <NavMenu>
                            {/* Make these <a></a> tags to link */}
                            <p>
                                <img src="/images/home-icon.svg" alt='HOME' />
                                <span>HOME</span>
                            </p>
                            <p>
                                <img src="/images/search-icon.svg" alt='SEARCH' />
                                <span>SEARCH</span>
                            </p>
                            <p>
                                <img src="/images/watchlist-icon.svg" alt='WATCHLIST' />
                                <span>WATCHLIST</span>
                            </p>
                            <p>
                                <img src="/images/original-icon.svg" alt='ORIGINALS' />
                                <span>ORIGINALS</span>
                            </p>
                            <p>
                                <img src="/images/movie-icon.svg" alt='MOVIES' />
                                <span>MOVIES</span>
                            </p>
                            <p>
                                <img src="/images/series-icon.svg" alt='SERIES' />
                                <span>SERIES</span>
                            </p>
                        </NavMenu>
                        <UserImg src={user && user.photoUrl} alt="Naman" onClick={() => signOut(auth)} />
                    </>
            }
        </Nav >
    )
}

export default Header

const Nav = styled.nav`
    height : 70px;
    background : #090b13;
    display : flex;
    align-items : center;
    padding : 0 36px;
    overflow: hidden;
`

const Logo = styled.img`
    width : 80px;
`

const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`

const Login = styled.div`
    text-transform: uppercase;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    
    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent; 
        font-weight: bold;
    }
`
const NavMenu = styled.div`
    display : flex;
    flex:1;

    p{
        display : flex;
        align-items : center;
        padding : 0 12px;
        cursor : pointer;

        img{
            height : 20px;
            padding : 0 4px;
        }

        span{
            font-size : 13px;
            letter-spacing : 1.5px;
            position : relative;

            &:after{
                content:"";
                height : 2px;
                background : white;
                position : absolute;
                left : 0;
                right : 0;
                bottom : -6px;
                opacity : 0;       
                transform-origin : left center;
                transition : all 250ms ease-in-out 0s; 
                transform : scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform : scaleX(1);
                opacity : 1;
            }
        }
    }
`
const UserImg = styled.img`
    height : 48px;
    width : 48px;
    border-radius : 50%;
    cursor : pointer;
`