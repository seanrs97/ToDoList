import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Animation3D = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "linear-gradient(90deg, #57b28e , #3c9d52)"
            mainText = "3D Animation"
            nounText = "3D Animation is a method of utilising 
            cutting edge software and computer processing power to produce stunning shots for all types of film and media. "
            badgeName = "BadgeGreen"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "cms"
                srcName = "3DAnimation1"
                srcType = "svg"
                contentText = "Learn the many methods used to create 3D animation in the real world!"
                shortText = "Animation methods"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DAnimation2"
                srcType = "svg"
                contentText = "Learn how to create basic models for your 3D animation"
                shortText = "Basic Modelling"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DAnimation3"
                srcType = "svg"
                contentText = "What equipment is needed to create a 3D model? Find out here"
                shortText = "3D Equipment"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DAnimation4"
                srcType = "svg"
                contentText = "Learn what industries utilise 3D animation"
                shortText = "3D Industries"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default Animation3D