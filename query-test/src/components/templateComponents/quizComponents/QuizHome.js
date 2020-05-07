import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import styled from "styled-components";

import Instructions from "./Instructions";
import Play from "./Play";


class QuizHome extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false,
            instructionsDisplay: "none",
            homePageDisplay: "block",
            playDisplay: "none",
            showQuiz: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.openInstructions = this.openInstructions.bind(this);
        this.openQuiz = this.openQuiz.bind(this);
    }
    handleClick(){
        this.setState({
            active: !this.state.active
        })
    }
    openInstructions = () => {
        this.setState({
            instructionsDisplay: "block",
            homePageDisplay: "none"
        })
    }
    openQuiz = () => {
        this.setState({
            // playDisplay: "block",
            showQuiz: true,
            instructionsDisplay: "none"
        })
    }
    goBack = () => {
        this.setState({
            instructionsDisplay: "none",
            homePageDisplay: "block"
        })
    }
    render(){
        return (
            <React.Fragment>
                    <Helmet> <title> Quiz App - Home </title></Helmet>
                    <Container>
                        <section style = {{display: this.state.homePageDisplay}}>
                            <h1> Quiz Time </h1>
                            <div className = "play-button-container">
                                <ul>
                                    <li onClick = {this.openInstructions} className = "play-button"><Link to = ""> Play </Link></li>
                                </ul>
                            </div>
                            <h2> Please Login or Register to play this quiz </h2>
                            <div className = "auth-container">
                                <Link id = "login-button" to = "/login">login</Link>
                                <Link id = "sign-up-button"to = "/register">Register</Link>
                            </div>
                        </section>
                        <div className = "instructions-container" style = {{display: this.state.instructionsDisplay}}>
                            <Instructions openQuiz = {this.openQuiz} goBack = {this.goBack} />
                        </div>
                        {this.state.showQuiz ?
                            <Play questions = {this.props.questions} />  :
                            null
                        }


                        {/* <div>
                        {this.state.active && <Instructions/>}
                        <Play 
                            questions  = {this.props.questions}
                        />
                        </div> */}

                    </Container>
                </React.Fragment>
        )
    }
}

const Container = styled.div`
    background: #70e2e6;
    height: 60vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;
    position: relative;
    section{
        margin: 0 auto;
        background: rgba(100, 100, 100, 0.7);
        height: 80%;
        width: 50%;
        padding: 20px 0;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        h1{
            text-align: center;
            color: white;
            font-size: 4.5em;
        }
        @media only screen and (max-width: 900px){
            width: 80%;
        }
        @media only screen and (max-width: 500px){
            width: 100%:
        }
    }
    .play-button-container{
        ul{ list-style: none}
        li{
            margin: 0 auto;
            background: rgba(22, 240, 40, 1);
            width: 75%;
            border-radius: 60px;
            padding: 20px;
            font-size: 1.5em;
            text-align: center;
            margin-top: 6px;
            cursor: pointer;
            transition: .3s all ease-in;
            a{
                color: white;
                text-decoration: none;
            }
            &:nth-child(2){
                background: rgba(22, 240, 40, 0.8);
            }
            &:hover{
                background: rgba(22, 240, 40, 0.5);
            }
        }
    }
    h2{
        margin-top: 40px;
        font-size: 1.5em;
        text-align: center;
        color: white;
        font-weight: 100;
    }
    .auth-container{
        display: flex;
        justify-content: space-between;
        width: 90%;
        color: white;
        margin: 0 auto;
        a{
            display: block;
            margin: 10px 4px;
            cursor: pointer;
            border-radius: 30px;
            background: lightblue;
            padding: 14px;
            text-decoration: none;
            width: 45%;
            font-size: 1.3em;
            text-align: center;
            transition: 0.3s linear all;
            &:hover{
                background: #8dade3;
            }
        }
    }
    .instructions-container{
        height: 100%;
    }
`

export default QuizHome;