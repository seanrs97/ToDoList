import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const AI = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
            mainText = "Artificial Intelligence (AI)"
            nounText = "the capacity of a computer to perform operations analogous to learning and 
            decision making in humans, as by an expert system, a program for CAD or CAM, or a 
            program for the perception and recognition of shapes in computer vision systems. Abbreviation: AI, A.I."
            badgeName = "BadgeBlue"
            badgeSrc = "svg"/>
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