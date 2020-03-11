import React from "react";
import {Link} from "react-router-dom";

import intro from "../images/topics/intro.svg";

import "./TopicLand.css";


 /* these will all later be props but as these are the only resources i have at the moment, they will be the default for all topics */

 const TopicLandingPage  = props => {
    return(
        <div className = "content-container">
            <img className = "intro" src = {intro}/>
            <div className = "arrow"></div>
        </div>
    )
}

export default TopicLandingPage