import React from "react";
import logo from "../images/logo.svg";
import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";
import HomePage from "../images/homePage.svg";

import {Link} from "react-router-dom";
import styled from "styled-components";

import BannerImage from "../images/headerImages/webHeaderDesktop.jpg"
import BannerImage2 from "../images/headerImages/Banner2.png";
import BannerImage3 from "../images/headerImages/Banner3.png";
import BannerImage4 from "../images/headerImages/Banner4.png";
import BannerImage5 from "../images/headerImages/Banner5.png";
import BannerImage6 from "../images/headerImages/Banner6.png";
import BannerImage7 from "../images/headerImages/Banner7.png";

const imagesArray = [`${BannerImage}`,`${BannerImage2}`,`${BannerImage3}`,`${BannerImage4}`,`${BannerImage5}`,`${BannerImage6}`,`${BannerImage7}`];

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`
const H4 = styled.h4`
    text-transform: lowercase;
    margin-bottom: 10px;
    font-weight: 800;
    color: darkgrey;
`
const H3 = styled.h3`
    color: darkgrey;
    font-weight: 200;
    font-size: 2em;
    padding-bottom: 60px;
    @media only screen and (max-width: 500px){
        display: none;
    }
`
const MeaningWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 25px 0;
    height: 90px;
`
const BadgesContainer = styled.div`
    color: darkgrey;
    font-weight: 100;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    img{
        width: 62%;
    }
    @media only screen and (max-width:500px){
        display: block !important;
        img{
            width: 40% !important;
            padding: 10px;
        }
    }
`
const HomeBanner = styled.div`
    width: 100%;
    height: 300px;
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 50px 0;
`

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            currentImageIndex: null
        }
    }
    componentDidMount(){
        const random = Math.floor(Math.random() * imagesArray.length);
        this.setState({currentImageIndex: random});
    }
    render(){
        return (
            <Container>
                <img className = "futureProofLogo" src = {logo} style = {{
                    width: "70%",
                    marginBottom: "20px",
                    paddingLeft: "20px"
                }}/>
                <img className = "mobileHomeImage" src = {HomePage}/>

                <MeaningWrapper>
                    <H4> Adjective </H4>
                    <p> (Of a product or system) Unlikely to become obsolete</p>
                </MeaningWrapper>
                <MeaningWrapper>
                    <H4> Verb </H4>
                    <p> make (a product or system) future proof.
                        "this approach allows you to future-proof your applications"
                    </p>
                </MeaningWrapper>
                <HomeBanner backgroundImage = {imagesArray[this.state.currentImageIndex]}/>
                <div style = {{ textAlign: "center"}}>
                    <H3> Get started by picking a topic that interests you! </H3>
                    <h3 className = "getStartedMobile"> Pick your topic! </h3>
                    <BadgesContainer>
                        <Link to = "/coding"><img src = {BadgeBlue} /></Link>
                        <Link to = "design2d"><img src = {BadgeRed} /></Link>
                        <Link to = "design3d"><img src = {BadgeGreen} /></Link>
                        <Link to = "/animation"><img src = {BadgeOrange} /></Link>
                    </BadgesContainer>
                </div>
            </Container>
        )
    }
}
export default Home;