import React from "react";
import TopicHeader from "../components/TopicHeader";
import MainContent from "../components/MainContent";

const AiProgramming = () => {
    return (
        <div>
            <TopicHeader
                headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
                title = "AI Programming"
                imageOne = "ai"
                imageTwo = "ai2"
            />
            <MainContent
                srcName = "robotics1"
                srcType = "svg"
                p = "In voluptate sit In voluptate sit 
                exercitation Lorem et.exercitaIn voluptate s
                it exercitation Lorem et.tion Lorem etIn voluptate sit exercitation Lorem et.."
            />
        </div>
    )
}

export default AiProgramming;