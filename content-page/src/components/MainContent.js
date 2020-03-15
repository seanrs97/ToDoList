import React from "react";
import styles from "./mainContent.css";

const MainContent = props => {
    return (
        <div className = "mainContentContainer">
            <img className = "mainContentImg" src = {imageSourceOne + `${props.srcName}` + "." + `${props.srcType}`}/>
            <p className = "mainContentP">{props.p}</p>
        </div>
    );
}


const imageSourceOne = "/images/";

export default MainContent;