import React from "react";
import styled from "styled-components";
let point = 0;
class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuestion: " ",
            correctAnswers: 1,
            slideOut: " "
        }
    }
    increment() {
        this.setState({
            correctAnswers: this.state.correctAnswers + 1,
            slideOut: "slideOut 3s linear"
        })
        console.log(this.state.correctAnswers);
        console.log(this.state.slideOut);
        if(this.state.correctAnswers === 4){
            console.log("GAME WON");
            this.setState({
                correctAnswers: 1
            })
        }
    }
    render(){
        const {score} = this.state.correctAnswers;
        return (
            <div>
                <QuizContainer>
                {!!this.props.quiz && this.props.quiz.map((question) => {
                    const questionsLength = this.props.quiz.length;
                    console.log(question);
                    return (
                        <div className = {"bodyContainer number_" + question.id} style = {{zIndex: `${question.questionOrder}`}}>   
                            <div style = {{animation: this.state.slideOut}} className = "headerText">
                                <p className = "question_number"> Question {question.id} out of {questionsLength}</p>
                                <p className = "question"> {question.question} </p>
                            </div>
                            <ul>
                                {!!question.answers && question.answers.map((answer) => {
                                    if(answer.correct === true){
                                        return (
                                            <li  onClick={(e) => this.increment(e)}>
                                                <div className = "answer-radio"></div>
                                                <p>{answer.answer}</p>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <li> 
                                                <div className = "answer-radio"></div>
                                                <p>{answer.answer}</p>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                        </div>  
                        )
                    }
                )}
                </QuizContainer>
                <div className = "resultsContainer">
                    <h1> Results </h1>
                    <p className = "outcome"> </p>
                </div>
            </div>
        )
    }
}
const QuizContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    background: #ffbaf6;
    border-radius: 10px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    height: 400px;
    overflow: hidden;
    .bodyContainer{
        position: absolute;
        left: 0;
        top: 0;
        background: #ffbaf6;
        height: 100%;
    }
    .headerText{
        padding: 20px;
    }
    .question_number{
        color: #707070;
    }
    .question{
        font-size: 2em;
    }
    ul{
        list-style: none;
        li{
            position: relative;
            padding: 10px 0;    
            border-bottom: 1px solid grey;
            cursor: pointer;
            transition: 1.2s all;
            -webkit-transition: 1.2s all;
            &:hover{
                background: #fecfff;
            }
            &:last-child{
                border-bottom: none;
            }
        }
        .answer-radio{
            height: 30px;
            width: 30px;
            background: white;
            border: 1px solid #707070;
            border-radius: 100px;
            display: inline-block;
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            transition: 1.2s all;
            -webkit-transition: 1.2s all;
            &:hover{
                background: #707070;
            }
        }
        p{
            display: inline-block;
            margin-left: 65px;
        }
    }
    .aus{
        margin-left: 500px;
    }
    .juju{
        margin-left: 1000px;
    }
`

export default Quiz;