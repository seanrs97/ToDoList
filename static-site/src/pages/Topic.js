import React from "react";
import NavBar from "../components/NavBar";
import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";
import {Link} from "react-router-dom";
const Topic = () => {
    return (
        <div className = "background">
            <NavBar/>
            <div className = "main-content">
                <h1> Pick a topic that interests you </h1>
                <div className = "topicChoice">
                    <img alt = "cool" className = "blue-badge" src = {BadgeBlue}/>
                    <img alt = "cool" className = "red-badge" src = {BadgeRed}/>
                    <img alt = "cool" className = "green-badge" src = {BadgeGreen}/>
                    <img alt = "cool" className = "orange-badge" src = {BadgeOrange}/>
                </div>
                <div className = "linkContainer">
                    <Link style = {LinkStyle} to = "/coding"> Not sure? Try our quick quiz</Link>
                </div>
            </div>
        </div>
    )
}

const LinkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: "800"
}

export default Topic;