import React from "react";
import styles from "./topicHeader.css";


const TopicHeader = props => {
    return(
        <div className = "headerContainer">
            <div className = "headerStripe" 
            style = {{
                width: "100%",
                height: "20px",
                background: `${props.headerColour}`,
                margin: "20px 0"
            }}> </div>
            <div className = "titleTextContainer">
                <p> An Introduction to </p>
                <h1> {props.title} </h1> 
            </div>
            <div className = "imageOne"
            style = {{
                backgroundImage: "url(/images/" + `${props.imageOne}` + '.svg' + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "50vh"
                }}></div>
            <div className = "imageTwo" 
            style = {{
                backgroundImage: "url(/images/" + `${props.imageTwo}` + '.svg' + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "50vh"
            }}></div>
        </div>
    )
}
export default TopicHeader;