import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Movies = () => {
    let movieImages = [
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9286/1079286-h-b7b1a7152997", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9274/1079274-h-417f0c4edbfe", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9275/1079275-h-7e6494efdb4f", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9299/1079299-h-25e2757ad71f", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9287/1079287-h-f29d30b43504", "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9277/1079277-h-a0bd887693ef"
    ];
    let trendingImages = [
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3468/1013468-v-ee805c735f22", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/219/860219-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6879/1036879-v-0c7332475e07", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3017/1083017-v-4ab3c2456f2a", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8095/1058095-v-2eae09cc4597", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2949/1052949-v-f2364f3b06ab", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5085/875085-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3145/813145-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/669/760669-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/525/820525-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1249/871249-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4286/1084286-v-6b9096be53b3", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5436/1045436-v-a93d13af70b5", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3960/1063960-v-b4b59f7b4ae0", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3076/183076-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4669/674669-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7844/997844-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8038/1078038-v-6ddea8964bee", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8916/1078916-v-834b2130bad2", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/260/650260-v", "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4616/674616-v"
    ];
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
                {movieImages.map((element) => {
                    return <Wrap>
                        <Link to='/detail'>
                            <img src={element} alt="Movie" />
                        </Link>
                    </Wrap>
                })}
            </Content>
            <h4>Recommeded for you</h4>
            <Content>
                {trendingImages.map((element) => {
                    return <Wrap>
                        <Link to='/detail'>
                            <img src={element} alt="Movie" />
                        </Link>
                    </Wrap>
                })}
            </Content>
            <Footer src="/images/footer.png" alt="" />
        </Container>
    )
}

export default Movies

const Container = styled.div`
    margin-bottom:20px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(6, minmax(0,1fr));
`

const Wrap = styled.div`
    cursor: pointer;
    border: 3px solid rgba(249,249,249,0.1);
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms ease-in-out 0s;
    overflow: hidden;

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

const Footer = styled.img`
    width: 100%;
`