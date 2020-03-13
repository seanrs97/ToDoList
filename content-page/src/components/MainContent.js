import React from "react";
import styles from "./mainContent.css";

const MainContent = props => {
    return (
        <div className = "mainContentContainer">
            <p className = "mainContentP">{props.p}</p>
            <img className = "mainContentImg" src = {imageSourceOne + `${props.srcName}` + "." + `${props.srcType}`}/>
        </div>
    );
}


const imageSourceOne = "/images/";

export default MainContent;