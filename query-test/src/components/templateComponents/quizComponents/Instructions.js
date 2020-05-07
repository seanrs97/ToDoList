import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import Play from "./Play";

class Instructions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            active: !this.state.active
        })
    }
    render(){
        return (
            <React.Fragment>
                <Helmet> <title> Quiz Instructions </title></Helmet>
                <Container>
                    <h1> How to Play the Game </h1>
                    <ul> 
                        <li> You will be provided with a set of multiple choice questions </li>
                        <li> Each question must be answered </li>
                        <li> You may only have one attempt at each question </li>
                        <li> You must score 100% to progress</li>
                        <li> You may attempt the quiz again if you do not succeed</li>
                    </ul>
                    <ButtonsContainer>
                        <Link onClick = {this.props.openQuiz} to = ""> Start quiz </Link>
                        <Link onClick = {this.props.goBack} to = ""> Go back </Link>
                    </ButtonsContainer>
                    {this.state.active && <Play/>}
                </Container>
            </React.Fragment>
        )
    }
}
const Container = styled.div`
    width: 80%;
    height: 95%;
    margin: 0 auto;
    border-radius: 10px;
    background: rgba(100,100,100,0.7);
    margin-top: 10px;
    h1{
        font-size: 2.8em;
        color: #dbdbdb;
        text-decoration: underline;
    }
    ul{
        width: 90%;
        font-size: 1.1em;
        margin: 0 auto;
        li {
            border-bottom: 2px solid white;
            padding-top: 10px;
            padding-bottom: 8px;
            color: white;
            text-align: left;
        }
    }
    a{
        padding: 14px 20px;
        background: #8dade3;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        margin: 10px;
        transition: .5s all;
        &:nth-child(1){
            background: rgba(22,240,40,1);
            &:hover{
                background: rgba(22,240,40,0.5);
            }
        }
        &:nth-child(2){
            &:hover{
                opacity: 0.7;
            }
        }
    }
`
const ButtonsContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    text-align: center;
}    
`
export default Instructions;