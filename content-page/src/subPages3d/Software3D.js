import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Software3D = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "linear-gradient(90deg, #57b28e , #3c9d52)"
            mainText = "3D Software"
            nounText = "Computer programs used for developing a mathematical 
            representation of any three-dimensional surface of objects, also called 3D modeling."
            badgeName = "BadgeGreen"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "cms"
                srcName = "3DSoftware1"
                srcType = "svg"
                contentText = "A good starting place for beginners, Blender is fairly easy to pick up while still delivering quality models"
                shortText = "Blender"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DSoftware2"
                srcType = "svg"
                contentText = "One of the most popular softwares available and for good reason! You'll find out why here!"
                shortText = "Autodesk 3DS Max"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DSoftware3"
                srcType = "svg"
                contentText = "A unique and advanced software used for creating detailed 3D models"
                shortText = "Maya"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DSoftware4"
                srcType = "svg"
                contentText = "One of the most advanced software in the market, this ones really cool!"
                shortText = "Houdini"
            />
            <NextSteps
                link = "design3d"
            />
        </div>
    )
}
export default Software3D