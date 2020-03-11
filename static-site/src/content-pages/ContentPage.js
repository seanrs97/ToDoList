import React from "react";
import "./Content-styles.css";

const ContentPage = props => {
    return (
        <div className = "container-of-content">
            <div className = "content-block">
                <p className = "content-para">{props.contentParagraph}</p>
                <img className = "content-image" src = {props.contentImage}/>
            </div>
        </div>
    )
}
export default ContentPage;