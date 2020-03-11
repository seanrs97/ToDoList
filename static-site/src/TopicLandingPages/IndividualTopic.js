import React from "react";
import { Link } from "react-router-dom";

const IndividualTopic = props => {
    return (
        <div className = "sub-topics">
            <img src = {props.topic}/> <Link to = {props.link}> {props.linkName} </Link>
        </div>
    )
}
export default IndividualTopic;