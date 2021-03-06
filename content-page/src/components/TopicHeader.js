import React from "react";
import styles from "./topicHeader.css";


const TopicHeader = props => {
    return(
        <div className = "headerContainer">
            <div className = "headerStripe" 
            style = {{
                width: "100%",
                height: "12px",
                background: `${props.headerColour}`,
                margin: "20px 0"
            }}> </div>
            <div className = "titleTextContainer">
                <p> An Introduction to </p>
                <h3> {props.title} </h3> 
            </div>
            <div className = "imageOne"
            style = {{
                backgroundImage: "url(/images/headerImages/" + `${props.imageOne}` + '.svg' + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "50vh"
                }}></div>
            <div className = "imageTwo" 
            style = {{
                backgroundImage: "url(/images/headerImages/" + `${props.imageTwo}` + '.svg' + ")",
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