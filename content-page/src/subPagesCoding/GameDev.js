import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

import CodingBanner from "../images/headerImages/CodingBanner4.png"

const GameDev = props => {
    return (
        <div>
          <MainTopicHeader
            headerImageDesk = {CodingBanner}
            stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
            mainText = "Game Development"
          />
            <MainTopicItem
                link = "scratch"
                srcName = "gameDev1"
                srcType = "svg"
                contentText = "Start from scratch! Literally! start learning problem solving skills to become a better programmer"
                shortText = "Scratch"
            />
            <MainTopicItem
                link = "uiForGames"
                srcName = "gameDev2"
                srcType = "svg"
                contentText = "Learn how to build a great interface for your target audience!"
                shortText = "UI for games"
            />
            <MainTopicItem
                link = "storyBoarding"
                srcName = "gameDev3"
                srcType = "svg"
                contentText = "Learn how to tell a great story to get your audience hooked!"
                shortText = "Storyboarding for games"
            />
            <MainTopicItem
                link = "programmingBasics"
                srcName = "gameDev4"
                srcType = "svg"
                contentText = "Learn the basics of programming so you can build your very first game!"
                shortText = "Programming basics"
            />
            <MainTopicItem
                link = "java"
                srcName = "gameDev5"
                srcType = "svg"
                contentText = "Dive into your first programming language. Learn Java and start to develop your programming skills"
                shortText = "Learning Java"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}

export default GameDev;