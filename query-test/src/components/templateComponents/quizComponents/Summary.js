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
                </ButtonContainer>
            </Container> 
        )
    }
}

const Container = styled.div`
    h1{
        font-size: 4em;
    }
    h2{
        font-size: 2.2em;
        color: white;
        font-weight: 400;
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
    }
`
const SuccessContainer = styled.div`
    text-align: center;
`
export default Summary;