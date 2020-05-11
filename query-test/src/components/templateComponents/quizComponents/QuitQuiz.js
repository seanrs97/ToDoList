import React from "react";
import QuizHome from "./QuizHome";
import Play from "./Play";

class QuitQuiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            goHome: false
        }
    }
    returnHome = () => {
        console.log("returned home");
        this.setState({
            goHome: true
        })
    }
    render(){
        return (
            <div>
                <button onClick = {this.returnHome}> Click here to quit the quiz </button>
                {this.state.goHome && <QuizHome/>}
            </div>
        )
    }
}

export default QuitQuiz;