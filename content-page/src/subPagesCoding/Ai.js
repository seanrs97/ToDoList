import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

import CodingBanner from "../images/headerImages/CodingBanner3.png";

const AI = props => {
    return (
        <div>
            <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Artificial Intelligence"
            />
            <MainTopicItem
                link = "speechRecognition"
                srcName = "ai1"
                srcType = "svg"
                contentText = "One of the most widely used aspects of AI, learn how speech recogntion works!"
                shortText = "Speech recognition"
            />
            <MainTopicItem
                link = "problemSolving"
                srcName = "ai2"
                srcType = "svg"
                contentText = "How do computers solve problems? Find out here"
                shortText = "Problem Solving"
            />
            <MainTopicItem
                link = "aiProgramming"
                srcName = "ai3"
                srcType = "svg"
                contentText = "Learn how to program your own AI program in this section!"
                shortText = "AI Programming"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default AI