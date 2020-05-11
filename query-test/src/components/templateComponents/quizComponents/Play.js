import React from "react";
import {Helmet} from "react-helmet";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IsEmpty from "./IsEmpty";
import M from "materialize-css";

import correctSound from "../../sounds/correct.mp3";
import incorrectSound from "../../sounds/incorrect.mp3";

import Summary from "./Summary";

class Play extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions:  [],
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: "",
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            nextButtonDisabled: false, 
            previousButtonDisabled: true,
            previousRandomNumber: [],
            disableButtons: false,
            time: {},
            initComplete: false,

            showQuestions: "block",
            showSummary: "none",
            showDialog: "none",
            showOverlay: "none",

            returnHome: false,
            showContainer: "block",

            displaySummary: false,
            displayQuiz: "none",
            displayHome: "block",
        }
        this.interval = null;
        this.correctSound = React.createRef();
        this.wrongSound = React.createRef();
    }
    startGame = () => {
        let {currentQuestionIndex} = this.state;
        let questions;
        let currentQuestion;
        let nextQuestion;
        let previousQuestion;
        let answer;


        if(this.props.questions === undefined || this.props.questions === ""){
            questions = [
                {
                    "default question": "default answer", 
                    "default question 2": "default answer"
                }
            ];
            currentQuestion = {"default question": "default question 2"};
            nextQuestion = {"default question": "default question 2"};
            previousQuestion = {"default question": "default question 2"};
            answer = "default answer";
        } else {
            questions = this.props.questions;
            currentQuestion = this.props.questions[currentQuestionIndex];
            nextQuestion = this.props.questions[currentQuestionIndex + 1];
            previousQuestion = this.props.questions[currentQuestionIndex - 1];
            answer = this.props.questions[currentQuestionIndex].answer;
        }

        if(questions.length === 0 || questions === undefined || currentQuestion.length === 0 || currentQuestion === undefined){
            console.log("somethings gone wrong here")
        } else {
            this.setState({
                questions: questions,
                currentQuestion:currentQuestion,
                nextQuestion: nextQuestion,
                previousQuestion: previousQuestion, 
                numberOfQuestions: questions.length,
                answer:  answer
            });
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.id !== this.props.id){
            this.checkIfQuizExists();
            this.exitQuiz();
            clearInterval(this.interval);
            this.setState({
                questions: this.props.questions
            })
            if(this.state.currentQuestionIndex !== 0){
                this.setState({
                    currentQuestionIndex: 0,
                    score: 0
                });
                this.showOptions();
            }
            if(this.state.showSummary !== "none"){
                this.setState({
                    showSummary: "none"
                })
            }
        }
    }
    checkIfQuizExists = () => {
        // METHOD APPEARS TO WORK BUT PROBABLY DOES NOT < WILL LIKELY REQUIRE FURTHER TESTING!!!!
        if(this.props.questions === undefined){
            setTimeout(() => {
                this.setState({
                    displayHome: "none"
                });
            },100)
         } else {
            this.setState({
                displayHome: "block"
            });
         }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;

        if(!IsEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion =  questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({ 
                currentQuestion, 
                nextQuestion,
                previousQuestion,
                answer,
                previousRandomNumber: [],
            }, () => {
                this.showOptions();
            });
        }
    }
    handleOptionClick = (e) => {
        if(e.target.innerHTML.toLowerCase() === this.state.answer){
            setTimeout(() => {
                this.correctSound.current.play();
            }, 300);
            this.correctAnswer();
        } else {
            setTimeout(() => {
                this.wrongSound.current.play();
            }, 300);
            this.incorrectAnswer();
        }
    }
    correctAnswer = () => {
        M.toast({
            html: "Correct answer!",
            classes: "toast-valid",
            displayLength: 1500
        });
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if(this.state.nextQuestion === undefined){
                this.end();
            } else {
                this.displayQuestions(
                    this.state.questions, 
                    this.state.currentQuestion, 
                    this.state.nextQuestion, 
                    this.state.previousQuestion);
            }
        })
    }
    incorrectAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: "Incorrect answer!",
            classes: "toast-invalid",
            displayLength: 1500
        });
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if(this.state.nextQuestion === undefined){
                this.end();
            } else {
                this.displayQuestions(
                    this.state.questions, 
                    this.state.currentQuestion, 
                    this.state.nextQuestion, 
                    this.state.previousQuestion);
            }
        })
    }
    showOptions = () => {
        const options = Array.from(document.querySelectorAll(".option"));
        options.forEach(option => {
            option.style.visibility = "visible";
        });
        this.setState({
            usedFiftyFifty: false
        })
    }
    handleHints = () => {
        if(this.state.hints > 0){
            const options = Array.from(document.querySelectorAll(".option"));
            let indexOfAnswer;
            options.forEach((option, index) => {
                if(option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                    indexOfAnswer = index;
                }
            });
            while (true) {
                const randomNumber = Math.round(Math.random() * 3);
                if(randomNumber !== indexOfAnswer && !this.state.previousRandomNumber.includes(randomNumber)){
                    options.forEach((option, index) => {
                        /* Sorts bug that removes option even though its already removed */
                        if(option.style.visibility != "hidden"){
                            if(index === randomNumber){
                                option.style.visibility = "hidden";
                                this.setState((prevState) => ({
                                    hints: prevState.hints  - 1,
                                    previousRandomNumber: prevState.previousRandomNumber.concat(randomNumber)
                                }));    
                            }
                        }
                    });
                    break;
                }
                if(this.state.previousRandomNumber.length >= 3) break;
            } 
        }
    }
    startTimer = () => {
        const countdownTime = Date.now() + 60000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.end();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    handleFiftyFifty = () => {
        if(this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false){
            const options = document.querySelectorAll(".option");
            const randomNumbers = [];
            let indexOfAnswer;

            options.forEach((option, index) => {
                if(option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
                    indexOfAnswer = index;
                }
            });
            let count = 0;
            do {
                const randomNumber = Math.round(Math.random() * 3);
                console.log(randomNumber);
                if(randomNumber !== indexOfAnswer){
                    console.log("random number: ", randomNumber, " index: ", indexOfAnswer);

                    if(randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)){
                        randomNumbers.push(randomNumber);
                        count ++;
                    }
                }
            } while (count < 2);
            options.forEach((option, index) => {
                if(randomNumbers.includes(index)){
                    option.style.visibility = "hidden";
                }
            });
            this.setState(prevState => ({
                fiftyFifty: prevState.fiftyFifty - 1,
                usedFiftyFifty: true
            }))
        }
    }
    end  = () => {
        const { state } = this;
        let playerResult = "failed";
        let successMessage = "Please try again!";

        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            fiftyFiftyUsed: 2 - state.fiftyFifty,
            hintsUsed: 5 - state.hints
        };
        if(playerStats.score === playerStats.numberOfQuestions){
            playerResult = "passed"
            successMessage = "Well done, you can now move on!"
        }
        this.setState({
            endScore: playerStats.score,
            endNumOfQuestions: playerStats.numberOfQuestions,
            endNumOfAnsweredQuestions: playerStats.numberOfAnsweredQuestions,
            endNumberOfCorrectAnswers: playerStats.correctAnswers,
            endNumberOfWrongAnswers: playerStats.wrongAnswers,
            success: playerResult,
            successMessage: successMessage,

        });
        setTimeout(() => {
            console.log("player stats", this.state.endScore);
            this.setState({
                showQuestions: "none",
                numberOfAnsweredQuestions: 0,
                currentQuestionIndex: playerStats.numberOfQuestions - 1,
                time: {
                    minutes: 0,
                    seconds: 0
                },
                hints: 0,
                fiftyFifty: 0,

                showSummary: "block",
                displayQuiz: "none"
            });
            clearInterval(this.interval);
            console.log(this.state);
        }, 1000)
    }
    resetQuiz = () => {
        clearInterval(this.interval);
        this.showOptions();
        this.setState({
            showQuestions: "block",
            currentQuestionIndex: 0,
            hints: 5,
            fiftyFifty: 2,
            wrongAnswers: 0,
            correctAnswers: 0,

            currentQuestion: this.state.questions[0],
            nextQuestion: this.state.questions[0 + 1],
            answer: this.state.questions[0].answer,
            previousQuestion: undefined,

            endNumOfQuestions: 0,
            endNumOfAnsweredQuestions: 0,
            success: "",
            successMessage: "",
            score: 0,
            endScore: 0,

            showSummary: "none",
            displayQuiz: "block"
        });
        this.startTimer();
        setTimeout(() => {
            console.log("new state", this.state)
        }, 200)
    }


    quitQuiz = () => {
        console.log("are you sure you want to quit this quiz?");
        this.setState({
            showDialog: "block",
            showOverlay: "block",
        });
        clearInterval(this.interval);
    }
    exitQuiz = () => {
        this.setState({
            showDialog: "none",
            showOverlay: "none",
            displayHome: "block",
            displayQuiz: "none"
        });
        // this.setState({
        //     showDialog: this.props.showDialog,
        //     showOverlay: this.props.showOverlay,
        //     displayHome: this.props.showHome,
        //     displayQuiz: this.props.showQuiz
        // })
    }
    resumeQuiz = () => {
        console.log("pause state", this.state.time.seconds)
        this.setState({
            showDialog: "none",
            showOverlay: "none"
        });
        const currentTime = this.state.time.seconds + "000";
        const resumeTime = parseInt(currentTime) ;
        console.log(resumeTime)

        const countdownTime = Date.now() + resumeTime;

        console.log("countdown time", countdownTime)
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.end();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    goBack = () => {
        console.log("GONE BACK")
        this.setState({
            showContainer: "none"
        });

        // NEED SOMETHING HERE THAT ENDS THE QUIZ SO IT CAN BE RESTARTED FROM HOME
    }
    startQuiz = () => {
        setTimeout(() => {
            this.setState({
                displayQuiz: "block",
                displayHome: "none"
            }); 
        }, 800);
        this.startGame();
        this.startTimer();
        this.setState({
            hints: 5,
            fiftyFifty: 2
        });
        console.log("fuck this", this.state);
        if(this.state.currentQuestionIndex !== 0){
            this.resetQuiz();
        }
    }
    returnHome = () => {
        this.setState({
            showSummary: "none",
            displayHome: "block"
        })
    }
    render(){
        const {
            currentQuestion, 
            currentQuestionIndex, 
            numberOfQuestions, 
            hints, 
            fiftyFifty,
            time,

            endScore,
            endNumOfQuestions,
            success,
            successMessage
        } = this.state;
        return (
        <React.Fragment>
            <audio ref = {this.correctSound} src = {correctSound}></audio>
            <audio ref = {this.wrongSound} src = {incorrectSound}></audio>
            <Helmet> <title> Quiz Page </title></Helmet>

                    <Home style = {{display: this.state.displayHome}}>
                        <h1> Welcome to the quiz </h1>
                        <button onClick = {this.startQuiz}>Play</button> 
                    </Home>



                    <div style = {{display: this.state.displayQuiz, position: "relative"}}>

                        <DialogContainer style = {{display: this.state.showDialog}}>
                            <h1> Are you sure you want to quit the quiz? </h1>
                            <button onClick = {this.exitQuiz}> Yes </button>
                            <button onClick = {this.resumeQuiz}> No </button>
                        </DialogContainer>

                        <OverlayContainer style = {{display: this.state.showOverlay }}/>
                        <Container style = {{display: this.state.showContainer}}>
                            <span onClick = {this.quitQuiz} className = "quitQuiz" > X </span>
                            <h1> Quiz Mode </h1>
                            <LifelineContainer>
                                <p>
                                    <span onClick = {this.handleHints} className = "lifeline help-icon">
                                        <FontAwesomeIcon icon = "lightbulb"/>
                                    </span>
                                    <span className = "lifelineNum">{hints}</span>
                                </p>
                                <p>
                                    <span onClick = {this.handleFiftyFifty} className = "5050 help-icon">
                                        <FontAwesomeIcon icon = "heart"/>
                                    </span>
                                    <span className = "lifelineNum">{fiftyFifty}</span>
                                </p>
                            </LifelineContainer>
                            <LifelineContainer>
                                <p>
                                    <span style = {{float: "left"}} className = "qNumber">{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                                </p>
                                <p>
                                    <span className = "timer help-icon"><FontAwesomeIcon icon="hourglass" /></span>
                                    <span className = "">{time.minutes}:{time.seconds}</span>
                                </p>
                            </LifelineContainer>
                            <H5> {currentQuestion.question} </H5>
                            <OptionsContainer>
                                <p style = {{visibility: this.state.optionsShow }} onClick = {this.handleOptionClick} className = "option">{currentQuestion.optionA}</p>
                                <p style = {{visibility: this.state.optionsShow }} onClick = {this.handleOptionClick} className = "option">{currentQuestion.optionB}</p>
                                <p style = {{visibility: this.state.optionsShow }} onClick = {this.handleOptionClick} className = "option">{currentQuestion.optionC}</p>
                                <p style = {{visibility: this.state.optionsShow }} onClick = {this.handleOptionClick} className = "option">{currentQuestion.optionD}</p>
                            </OptionsContainer>
                        </Container>
                    </div>
                    <div style = {{display: this.state.showSummary}}>
                        <Summary
                                score = {endScore}
                                numOfQuestions = {endNumOfQuestions}
                                success = {success}
                                successMessage = {successMessage}
                                playAgain = {this.resetQuiz}
                                homeReturn = {this.returnHome}
                            />
                    </div>
                </React.Fragment>
            )
        }
    }

const Home = styled.div`
    background: #23758b;
    height: 60vh;
    padding: 14px;
    color: white;
    position: relative;
    h1{
        font-size: 4.5em;
    }
    button{
        border: none;
        border-radius: 14px;
        background: #43f443;
        font-size: 2.4em;
        padding: 20px 50px;
        color: white;
        transition: .4s all;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        &:hover{
            background: #3be23b;
        }
    }
`
const Container = styled.div`
    width: 97.15%;
    padding: 14px;
    transition: .7s all;
    background: #23758b;
    color: white;
    height: 60vh;
    .quitQuiz{
        font-weight: 800;
        color: white;
        position: absolute;
        font-size: 2.5em;
        cursor: pointer;
    }
    h1{ 
        text-align: center;
        font-weight: 400;
        font-size: 6em;
        color: white;
    }
`
const OverlayContainer = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.2;
    background: black;
    display: none;
`
const DialogContainer = styled.div`
    transform: translate(-50%,-50%);
    position: absolute;
    width: 30%;
    height: 30%;
    background: white;
    color: black;
    top: 50%;
    left: 50%;
    text-align: center;
    z-index: 6666;
    border-radius: 10px;
    padding: 10px;
    h1{
        font-size: 1.2em;
        color: black;
    }
    button{
        width: 35%;
        margin: 10px;
        border-radius: 5px;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
`
const LifelineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    color: white;
    p{
        span{
            color: white;
        }
        .help-icon{
            cursor: pointer;
            color: rgba(71,187,230,1);
            transition: .4s all;
            &:hover{
                color: rgba(185, 236, 255, 1)
            }
        }
    }
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
    color: white;
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
        transition: .3s all;
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
export default Play;