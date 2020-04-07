import React, {Component} from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";

import {Link} from "react-router-dom";

import Banner2D from "../images/headerImages/Banner6.png"
const Design2D = props => {
    return (
        <div>
            <MainTopicHeader 
                headerImageDesk = {Banner2D}
                stripeColour = "linear-gradient(90deg, rgb(251, 24, 66), rgb(208, 0, 86))"
                mainText = "3D Design"
            />
            <MainTopicItem
             link = "intro2d"
             srcName = "2DIntro"
             srcType = "svg"
             contentText = "The perfect place to start for people with little to no knowledge on 2D design"
             shortText = "Introduction"
             />
             <MainTopicItem
             srcName = "2DAnimation"
             srcType = "svg"
             contentText = "What better place to start than animation? one of the most fun topics of 2D and something that everyone can enjoy"
             shortText = "2D Animation"
             />
            <MainTopicItem
             srcName = "2DSoftware"
             srcType = "svg"
             contentText = "Ready to start your own designs? let's get familiar with the software first!"
             shortText = "2D Software"
             />
            <MainTopicItem
             srcName = "2DPrinciples"
             srcType = "svg"
             contentText = "Think you understand 2D Design? Think again! learn about the principles here!"
             shortText = "2D Principles"
             />
        </div>
    )
}

export default Design2D;