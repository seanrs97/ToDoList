import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import Banner from "./images/headerImages/Banner3.png";

class CoreTopicsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links: {}
        }
    }
    render(){
        return(
            <Container>
                <HeaderImage headerImage = {this.props.image}>
                    <ImageTextContainer>
                        <H1> {this.props.name} </H1>
                        <Stripe stripeColour = {this.props.headerColour}/>
                        <P> {this.props.description} </P>
                    </ImageTextContainer>
                </HeaderImage>
                <ButtonsContainer>
                    {!!this.props.buttons && this.props.buttons.map((button) => 
                        <div key = {button.id}>
                            <Link to = {button.id}>
                                <img src = {button.image} alt = {button.text} />
                            </Link>
                            <p> {button.text} </p>
                        </div>
                    )}
                </ButtonsContainer>
            </Container>
        )
    }
}
/* PROP TYPES*/
CoreTopicsCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    headerColour: PropTypes.string,
    description: PropTypes.string,
    buttons: PropTypes.array
}
CoreTopicsCard.defaultProps = {
    image: `${Banner}`,
    name: "Topic Name",
    headerColour: "white",
    description: "A description of the topic belongs here, I wonder where it went..."
}
/* STYLESHEET */
const Container = styled.div`
    padding: 20px;
`
const HeaderImage = styled.div`
    width: 100%;
    height: 350px;
    background: url(${props => props.headerImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
`
const ImageTextContainer = styled.div`
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    text-shadow: 4px 4px 4px black;
    color: white;
`
const H1 = styled.h1`
    font-size: 4em;
`
const Stripe = styled.div`
    height: 14px;
    width: 40%;
    background: ${props => props.stripeColour};
`
const P = styled.p`
    font-size: 2em;
`
const ButtonsContainer = styled.div`
    div{
        border-top: 2px solid darkgrey;
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 40px;
        padding: 40px 0;
        &:nth-child(1){
            border-top: none;
        }
        img{
            width: 80%;
            margin: 0 auto;
        }
    }
`
export default CoreTopicsCard;
