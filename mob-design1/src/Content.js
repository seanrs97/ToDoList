import React from "react";
import styles from "./content.css";

const Content = props => {
    return(
        <div>
            <div className = "contentHeader">
                <div className = "contentTextContainer">
                    <h1 className = "contentH1"> {props.title} </h1>
                </div>
                <div className = "wordsContainer2">
                    <div className = "adjectiveContainer2">
                        <h1> Adjective </h1>
                        <p> This is an Adjectice for coding that I couldn't find 20 seconds to google.</p>
                    </div>
                    <div className = "nounContainer2">
                        <h1> Noun </h1>
                        <p> This is a noun for coding that I couldn't be bothered to google</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;