import React, {Component} from "react";
import styles from "./mainTopicHeader.css";
import styled from 'styled-components';
import PropTypes from "prop-types";

import HeaderImageDesktop from "../images/headerImages/webHeaderDesktop.jpg";
import HeaderImageTablet from "../images/headerImages/webHeaderTablet.jpg"
import HeaderImageMobile from "../images/headerImages/webHeaderMobile.jpg";
 
const Container = styled.div`
    overflow: hidden;
    color: white;
    position: relative;
    min-height: 70vh;
    max-height: 90vh;
    background: url(${props => props.headerImageDesk});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    @media only screen and (max-width: 760px){
        background: url(${props => props.headerImageTab});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    @media only screen and (max-width: 500px){
        background: url(${props => props.headerImageMob});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
`
const SmallImageTextContainer = styled.div`
    animation: slideIn 3s;
    -webkit-animation: slideIn 3s;
    text-shadow: 5px 5px 5px black;
    color: white;
    width: 50%;
    position: absolute;
    left: 5%;
    bottom: 3%;
    h1{
        font-size: 3.4em;
        text-transform: uppercase;
    }
    p {
        color: white;
        font-weight: 400;
    }
    @media only screen and (max-width: 760px){
        width: 65%;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
        h1{
            font-size: 2.6em;
        }
        p{
            font-size: 1.05em;
        }
    }
`
const Stripe = styled.div`
    width: 115%;
    height: 12px;
    margin: 10px 0;
    margin-left: -15%;
    background: ${props => props.stripeColour};
`
class MainTopicHeader extends Component {
    constructor(props){
        super();
    }
    render(){
        return(
            <Container 
                headerImageDesk = {this.props.headerImageDesk}
                headerImageTab = {this.props.headerImageTab}
                headerImageMob = {this.props.headerImageMob}
                headerImageSrc = {this.props.headerImageSrc}
                >
                <SmallImageTextContainer>
                    <h1> {this.props.mainText}</h1>
                    <Stripe stripeColour = {this.props.stripeColour}></Stripe>
                    <p> {this.props.smallText}</p>
                </SmallImageTextContainer>
            </Container>
        );
    }
}
MainTopicHeader.propTypes = {
    headerImageDesk: PropTypes.string,
    headerImageTab: PropTypes.string,
    headerImageMob: PropTypes.string,
    stripeColour: PropTypes.string,
    mainText: PropTypes.string,
    smallText: PropTypes.string
}
MainTopicHeader.defaultProps = {
    headerImageDesk: `${HeaderImageDesktop}`,
    headerImageTab:`${HeaderImageTablet}`,
    headerImageMob: `${HeaderImageMobile}`,
    mainText: "Future Learner",
    smallText: "A future learner is you! Someone who wants to learn about the future!",
    stripeColour: "linear-gradient(90deg, rgba(255,77,123,1) 0%, rgba(255,60,91,1) 100%)"
}

export default MainTopicHeader;