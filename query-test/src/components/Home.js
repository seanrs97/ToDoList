import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import logo from "./images/logo.svg";
import HomeBanner from "./images/headerImages/Banner3.png";
import BadgeBlue from "./images/BadgeBlue.svg";
import BadgeOrange from "./images/BadgeOrange.svg";
import BadgeRed from "./images/BadgeRed.svg";
import BadgeGreen from "./images/BadgeGreen.svg";

class Home extends React.Component{
    render(){
        return (
            <div>
                <HomeContainer>
                    <img src = {logo} alt = {logo} />
                    <MeaningContainer>
                        <H3> Adjective </H3>
                        <p> A product, system or person unlikely to become obsolete.</p>
                    </MeaningContainer>
                    <MeaningContainer>
                        <H3> Verb </H3>
                        <p> To make future proof. "this approach allows you to future-proof yourself" </p>
                    </MeaningContainer>
                </HomeContainer>
                <Banner/>
                <BadgesContainer>
                    <h2> Start by selecting a topic! </h2>
                    <Link to = "/links"><img src = {BadgeBlue} alt = {BadgeBlue}/></Link>
                    <Link to = "/links"><img src = {BadgeRed} alt = {BadgeRed}/></Link>
                    <Link to = "/links"><img src = {BadgeGreen} alt = {BadgeGreen}/></Link>
                    <Link to = "/links"><img src = {BadgeOrange} alt = {BadgeOrange}/></Link>
                </BadgesContainer>
            </div>
        )
    }
}

const HomeContainer = styled.div`
    padding: 10px 40px;
`
const MeaningContainer = styled.div`

`
const H3 = styled.h3`
    font-size: 2em;
    padding: 10px 0;
    margin-top: 20px;
    text-transform: lowercase;
    color:  #474747;
`
const Banner = styled.div`
    margin-top: 40px;
    height: 300px;
    width: 100%;
    background: url(${HomeBanner});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`
const BadgesContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    h2{
        font-size: 2.4em;
        color: #474747;
        margin: 50px 0;
    }
    img{
        width: 15%;
        padding: 30px;
    }
`
export default Home;