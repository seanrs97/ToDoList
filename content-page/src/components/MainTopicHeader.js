import React from "react";
import styles from "./mainTopicHeader.css";

const MainTopicHeader = props => {
    return (
        <div>
            <div className = "headerStripe" 
            style = {{
                height: "24px",
                background: `${props.headerColour}`,
            }}> </div>
            <div className = "mainTopicHeaderContainer">
                <div className = "mainTopicTextContainer">
                    <div className = "smallImageTextContainer">
                        <h1> {props.mainText}</h1>
                        <img className = "headerImageSmall" src = {"../images/" + `${props.badgeName}` + "." + `${props.badgeSrc}`}/>
                    </div>
                    <div className = "nounContainer">
                        <h4> Noun </h4>
                        <p> {props.nounText} </p>
                    </div>
                </div>
                <div className = "mainTopicImageContainer">
                    <img className = "mainTopicImage" src = {"../images/" + `${props.badgeName}` + "." + `${props.badgeSrc}`}/>
                </div>
            </div>
        </div>
    )
}

const imageSourceOne = "/images/";

export default MainTopicHeader;