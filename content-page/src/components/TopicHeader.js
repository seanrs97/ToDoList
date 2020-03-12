import React from "react";
import styles from "./topicHeader.css";


const TopicHeader = props => {
    return(
        <div className = "container">
            <p> An Introduction to </p>
            <h1> {props.title} </h1> 
            <div className = "imageOne"
            style = {{
                backgroundImage: "url(/images/" + `${props.imageOne}` + '.svg' + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "60vh"
                }}></div>
            <div className = "imageTwo" 
            style = {{
                backgroundImage: "url(/images/" + `${props.imageTwo}` + '.svg' + ")",
                backgroudSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "60vh"
            }}></div>
        </div>
    )
}
export default TopicHeader;