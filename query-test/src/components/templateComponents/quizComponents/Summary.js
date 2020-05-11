import React from "react";
import styled from "styled-components";


class Summary extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return (
            <Container>
                <h1> Summary </h1>
                <h2> You scored {this.props.score} out of {this.props.numOfQuestions} </h2>

                <SuccessContainer>
                    <p> You have {this.props.success} </p>
                    <p> {this.props.successMessage} </p>
                </SuccessContainer>

                <ButtonContainer>
                    <button onClick = {this.props.playAgain}> Play again </button>
                    <button onClick = {this.props.homeReturn}> Return </button>
                </ButtonContainer>
            </Container> 
        )
    }
}

const Container = styled.div`
    background: #23758b;
    height: 60vh;
    padding: 14px;
    text-align: center;
    h1{
        font-size: 5em;
        color: white;
    }
    h2{
        font-size: 2.2em;
        color: white;
        font-weight: 400;
    }
    p{
        color: white;
    }
`
const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
    button{
        text-align: center;
        margin: auto;
        padding: 20px;
        border: none;
        background: #8bb7f6;
        color: white;
        border-radius: 10px;
        font-size: 2em;
        width: 30%;
        margin-top: 40px;
        transition: .5s all;
        margin-left: 14px;
        margin-right: 14px;
        &:nth-child(1){
            background: #43f443;
            &:hover{
                background: #3be23b;
            }
        }
        &:nth-child(2){
            &:hover{
                background: #79a1db;
            }
        }
    }
`
const SuccessContainer = styled.div`
    text-align: center;
`
export default Summary;