import React from "react";
import TopicHeader from "../components/TopicHeader";
import MainContent from "../components/MainContent";

const ProgrammingInAndroid = () => {
    return (
        <div>
            <TopicHeader
                headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
                title = "Programming In Android"
                imageOne = "appDev"
                imageTwo = "appDev2"
            />
            <MainContent
                srcName = "appDev1"
                srcType = "svg"
                p = "Ullamco incididunt veni
                am duis dolore exercitation aute cillum vel
                it. Mollit eiusmod ex magna officia mollit aute ad
                magna do. Culpa deserunt consequat mollit dolor minim nostrud in velit mollit do qui dolore tempor."
            />
            <MainContent
                srcName = "appDev2"
                srcType = "svg"
                p = "Ullamco incididunt veni
                am duis dolore exercitation aute cillum vel
                it. Mollit eiusmod ex magna officia mollit aute ad
                magna do. Culpa deserunt consequat mollit dolor minim nostrud in velit mollit do qui dolore tempor."
            />
        </div>
    )
}

export default ProgrammingInAndroid;