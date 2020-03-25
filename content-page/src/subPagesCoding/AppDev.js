import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const AppDev = props => {
    return (
        <div>
           <MainTopicHeader
            headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
            mainText = "Application Development"
            nounText = "Mobile app development is the act or process by which a 
            mobile app is developed for mobile devices, such as personal digital assistants, 
            enterprise digital assistants or mobile phones."
            badgeName = "BadgeBlue"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "scratch"
                srcName = "gameDev1"
                srcType = "svg"
                contentText = "Start from scratch! Literally! start learning problem solving skills to become a better programmer"
                shortText = "Scratch"
            />
            <MainTopicItem
                link = "appDevFundamentals"
                srcName = "appDev2"
                srcType = "svg"
                contentText = "Learn the fundamentals of Application development along with it's purpose in the computing world"
                shortText = "App development fundamentals"
            />
            <MainTopicItem
                link = "programmingInIos"
                srcName = "appDev3"
                srcType = "svg"
                contentText = "Learn how to develop applications for IOS devices"
                shortText = "Programming in IOS"
            />
            <MainTopicItem
                link = "programmingInAndroid"
                srcName = "appDev4"
                srcType = "svg"
                contentText = "Learn how to develop applications for android devices"
                shortText = "Programming in Android"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}

export default AppDev;