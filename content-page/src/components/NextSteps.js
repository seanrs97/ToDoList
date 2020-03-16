import React from "react";
import {Link} from "react-router-dom";
import styles from "./nextSteps.css";

const NextSteps = props => {
    return (
        <div className = "nextStepsContainer">
            <h1 className = "nextStepsHeader"> Next Steps </h1>
            <div className = "navigationContainer">
                <div className = "prevButton"> Prev </div>
                <div className = "midButton"> Change </div>
                <div className = "nextButton"> <a href = ""/> </div>
            </div>
        </div>
    )  
}

export default NextSteps;