import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Route} from "react-router-dom";

import QuizHome from "./quizComponents/QuizHome";
import Instructions from "./quizComponents/Instructions";



class QuizTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return (
            <Router>
                <QuizHome questions = {this.props.questions} />
            </Router>
        )
    }
}

export default QuizTwo;