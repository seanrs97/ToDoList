import React from "react";
import {Link} from "react-router-dom";
import styles from "./nextSteps.css";


const NextSteps = props => {
    return (
        <div className = "nextStepsContainer">
            <h3 className = "nextStepsHeader"> What now? </h3>
            <div className = "navigationContainer">
            <Link 
                style = {{textDecoration: "none"}}
                to = {linkSource + `${props.link}`}>
                <div className = "prevButton"> 
                    Return to {props.link}
                </div>
            </Link>
            </div>
        </div>
    )  
}

const linkSource = "../";
export default NextSteps;