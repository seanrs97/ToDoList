import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import sal from "sal.js";

import '../../node_modules/sal.js/dist/sal.css';

import DefaultBanner from "./images/headerImages/Banner3.png";

import Header from "./templateComponents/Header";
import Buttons from "./templateComponents/Buttons";
import MainContent from "./templateComponents/MainContent";
import Banner from "./templateComponents/Banner";
import QuizTwo from "./templateComponents/QuizTwo";
import NextSteps from "./templateComponents/NextSteps";

import Play from "./templateComponents/quizComponents/Play";

class CoreTopicsCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    componentDidUpdate(prevProps, prevState){
        sal({
            once: false,
        });
        if(this.props.questions !== prevProps.questions){
            this.checkQuestions();
        }
    }
    checkQuestions = () => {
        console.log(this.props.questions)
    }
    render(){
        return(
            <Cont style = {{transition: "5s all"}}>
                <Header 
                    image = {this.props.image}
                    imageTab = {this.props.imageTab}
                    imageMob = {this.props.imageMob}
                    headerColour = {this.props.headerColour}
                    name = {this.props.name}
                    description = {this.props.description}
                />
                <Buttons buttons = {this.props.buttons}/>
                <MainContent content = {this.props.content}/>
                <Banner bannerOne = {this.props.bannerOne}/>
                <MainContent content2 = {this.props.content2}/>
                <Banner bannerTwo = {this.props.bannerTwo}/>
                <MainContent content3 = {this.props.content3}/>

                <React.Fragment>
                    <Container style = {{display: this.state.active}}>
                        <Play 
                            questions = {this.props.questions}
                            id = {this.props.id}
                        />
                    </Container>
                </React.Fragment>
                <NextSteps 
                    image = {this.props.image}
                    navigation = {this.props.navigation}
                />
            </Cont>
        )
    }
}
/* PROP TYPES*/
CoreTopicsCard.propTypes = {
    image: PropTypes.string,
    imageTab: PropTypes.string,
    imageMob: PropTypes.string,
    name: PropTypes.string,
    headerColour: PropTypes.string,
    description: PropTypes.string,
    buttons: PropTypes.array,
    navigation: PropTypes.array
}
CoreTopicsCard.defaultProps = {
    image: `${DefaultBanner}`,
    imageTab: `${DefaultBanner}`,
    imageMob: `${DefaultBanner}`,
    name: "Topic Name",
    headerColour: "white",
    description: "A description of the topic belongs here, I wonder where it went...",
}
/* STYLESHEET */
const Cont = styled.div`   
`

const Container = styled.div`
    width: 100%;
    h1{ 
        text-align: center;
        font-weight: 400;
    }
`
const LifelineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    .lifeline{
        position: relative;
        top: -3px;
    }
`
const H5 = styled.h5`
    font-size: 1.5em;
    margin-bottom: 20px;
    line-height: 1.5em;
    text-align: center;
`
const OptionsContainer = styled.div`
    display: inline-block;
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 0 auto;
    .option{
        background: rgba(71, 187, 230, 0.6);
        border-radius: 20px;
        display: inline-block;
        width: 90%;
        text-align: center;
        color: white;
        cursor: pointer;
        margin: 10px;
        padding: 10px;
        transition: .3s linear all;
        &:hover{
            background: rgba(71, 187, 230, 1);
        }
    }
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto 10px auto;
    cursor: pointer;
    padding: 10px;
    width: 80%;
    button{
        border: none;
        color: white;
        cursor: pointer;
        margin-right: 14px;
        padding: 6px 8px;
        transition: .2s linear all;
        &:first-child{
            background: rgba(71, 187, 230, 0.85);
            &:hover{
                background: rgba(71, 187, 230, 1);
            }
        }
        &:nth-child(2){
            background: rgba(59, 255, 95, 0.85);
            &:hover{
                background: rgba(59, 255, 95, 1);
            }
        }
        &:nth-child(3){
            background: rgba(255, 71, 71, 0.85);
            &:hover{
                background: rgba(255, 71, 71, 1)
            }
        }
    }
`
export default CoreTopicsCard;
