import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Modelling3D = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "green"
            mainText = "3D Modelling"
            nounText = "3D modeling is a technique in computer graphics for producing 
            a 3D digital representation of any object or surface."
            badgeName = "BadgeGreen"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "cms"
                srcName = "3DModelling1"
                srcType = "svg"
                contentText = "Learn about the different types of representations of 3D models"
                shortText = "Representations"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DModelling2"
                srcType = "svg"
                contentText = "Creating a 3D model is a long process, this section breaks it down for you!"
                shortText = "Modelling process"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DModelling3"
                srcType = "svg"
                contentText = "Understand what 3D modelling is? Now it's time to learn how to make a 3D model"
                shortText = "3D Software"
            />
            <NextSteps
                link = "design3d"
            />
        </div>
    )
}
export default Modelling3D