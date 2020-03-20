import React from "react";
import styles from "./mainTopicItem.css";
import {Link} from "react-router-dom";

const MainTopicItem = props => {
    return(
        <div className = "mainTopicItemContainer">
            <Link to = {linkSource + `${props.link}`}>
                <img className = "mainContentImg" src = {imageSourceOne + `${props.srcName}` + "." + `${props.srcType}`}/>
            </Link>
            <p className = "contentText"> {props.contentText} </p>
            <p className = "shortText"> {props.shortText} </p>
        </div>
    )
}

const imageSourceOne = "/images/topics/";
const linkSource = "/";

export default MainTopicItem;