import React from "react";
import {Link} from "react-router-dom";

import Logo from "./images/logo.svg";
import HomeImage from "./images/homeImage.svg";
import TopicAnimation from "./images/topicAnimation.svg";
import Topic2D from "./images/topic2d.svg";
import TopicCoding from "./images/topicCoding.svg";
import Topic3D from "./images/topic3d.svg";

import styles from "./home.css";

const Home = () => {
    return (
        <div className = "homeContainer">
            <div className = "welcomeImageContainer">
            <img alt = "alt" className = "welcomeImage" src = {Logo} />
            </div>
            <div className = "wordsContainer">
            <div className = "nounContainer">
                <h1> Noun </h1>
                <p> (Of a product or system) unlikely to become obsolete </p>
            </div>
            <div className = "adjectiveContainer">
                <h1> Adjective </h1>
                <p> Make (a product or system) future proof. "this approach allows to future proof your applications" </p>
            </div>
            </div>
            <div className = "topicChoice">
            <div className = "selectTopicTextContainer">
                <h1> Select a topic </h1>
            </div>
            <Link to = "/animation">
                <div className = "topicImageContainer">
                    <img alt = "alt" src ={TopicAnimation}/>
                </div>
            </Link>
            <Link to = "/topic2d">
                <div className = "topicImageContainer">
                    <img alt = "alt" src ={Topic2D}/>
                </div>
            </Link>
            <Link to = "/coding">
                <div className = "topicImageContainer">
                    <img alt = "alt" src ={TopicCoding}/>
                </div>
            </Link>
            <Link to = "/topic3d">
                <div className = "topicImageContainer">
                    <img alt = "alt" src ={Topic3D}/>
                </div>
            </Link>
        </div>
      </div>
    )
}

export default Home;