import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

import CodingBanner from "../images/headerImages/CodingBanner6.png"

const AppDev = props => {
    return (
        <div>
           <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Application Development"
           />
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