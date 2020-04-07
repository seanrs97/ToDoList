import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";

import badge from "../images/BadgeOrange.svg";

import {BrowserRouter, Route, Link} from "react-router-dom";
import MainTopicItem from "../components/MainTopicItem";

import CodingBanner from "../images/headerImages/CodingBanner1.png";


const Coding = () => {
    return( 
        <div>
            <MainTopicHeader 
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Coding"
            />

            <MainTopicItem
            link = "codeIntro"
            srcName = "intro"
            srcType = "svg"
            contentText = "An Introduction to what code is, what it can be 
            used for and why it's an important skill for the future"
            shortText = "Introduction to Coding"
            />
            <MainTopicItem
            link = "robotics"
            srcName = "robotics"
            srcType = "svg"
            contentText = "Dive into the world of robotics and learn the science behind what makes some of the worlds most powerful robots"
            shortText = "Introduction"
            />
            <MainTopicItem
            link = "ai"
            srcName = "ai"
            srcType = "svg"
            contentText = "AI! Something most of us encounter everyday but do you know how any of it works? Find out here!"
            shortText = "Robotics"
            />
            <MainTopicItem
            link = "web"
            srcName = "web"
            srcType = "svg"
            contentText = "You've used them hundreds of time, now it's time to learn how websites are built!"
            shortText = "Web"
            />
            <MainTopicItem
            link = "gameDev"
            srcName = "games"
            srcType = "svg"
            contentText = "Ever played a video game and wondered exactly what is going on behind the screen? well now you can!"
            shortText = "Game Development"
            />
            <MainTopicItem
            link = "appDev"
            srcName = "apps"
            srcType = "svg"
            contentText = "Facebook, Twitter, Instagram and Uber! if you've used these, then you've already got an idea of what app dev is!"
            shortText = "App Development"
            />
        </div>
    )
}

export default Coding;