import React from "react";
import Content from "./Content";
import SubTopic from "./SubTopic";
import AiImage from "./images/ai2.svg";
import RoboticsImage from "./images/robotics2.svg";
import AppDevImage from "./images/appDev1.svg";

const Coding = () => {
    return (
        <div> 
           <Content
            title = "Programming"
           />
           <SubTopic
            header = "Web Development"
            image = {AppDevImage}
            subText = "Ever wanted to learn about web development? Well 
            fuck off somewhere else cause this aint the place"
           />
           <SubTopic
            header = "Robotics & AI"
            image = {RoboticsImage}
            subText = "What can we say about Robotics and AI except fuck all
            because we don't know anything so you've wasted your time coming here, congratulations!"
           />
        </div>
    )
}

export default Coding;