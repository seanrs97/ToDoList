import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Robotics = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
            mainText = "Robotics"
            nounText = "Game Development is the art of creating games 
            and describes the design, development and release of a game.
             It may involve concept generation, design, build, test and release."
            badgeName = "BadgeBlue"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "industrial"
                srcName = "robotics1"
                srcType = "svg"
                contentText = "One of robotics primary uses, learn how large industries utilise robotics"
                shortText = "Industrial Robotics"
            />
            <MainTopicItem
                link = "electricity"
                srcName = "robotics2"
                srcType = "svg"
                contentText = "Learn how robotics and electricity are connected!"
                shortText = "Electricity & Robotics"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default Robotics