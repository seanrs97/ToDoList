import React from "react";
import {Link} from "react-router-dom";
import styles from "./subTopic.css";

const SubTopic = props => {
    return (
        <div className = "subTopicContainer">
            <div className = "subTopicContent">
                <h1> {props.header} </h1>
                <p> {props.subText} </p>
                <img src = {props.image} />
            </div>
        </div>
    )
}

export default SubTopic;