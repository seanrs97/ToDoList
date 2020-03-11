import React from "react";

import BadgeGreen from "../images/BadgeGreen.svg";

const PageLayout = props => {
    return (
        <div className = "card text-center">
            <div className = "overflow">
                <img src = {props.imgsrc} alt = "" className = "card-img-top"/>
            </div>
            <div className = "card-body text-dark">
                <h4 className = "card-title">{props.title} </h4>
                <p className = "card-text text-secondary">
                    Some words some words some words
                </p>
                <a href = "#" className = "btn btn-outline-success">
                    Go
                </a>
            </div>
        </div>
    );
}


export default PageLayout;