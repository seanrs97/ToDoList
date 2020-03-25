import React, {Component} from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";

const Design3D = props => {
    return (
        <div>
            <MainTopicHeader
             headerColour = "linear-gradient(90deg, #57b28e , #3c9d52)"
             mainText = "3D Design"
             nounText = "The creation of a three-dimensional object from a digital file using a device 
             that adds successive layers of material to make the object"
             badgeName = "BadgeGreen"
             badgeSrc = "svg"
            />
            <MainTopicItem
             link = "intro3d"
             srcName = "3DIntro"
             srcType = "svg"
             contentText = "What is 3D design? what can we do with it? find out here with our great introduction!"
             shortText = "Introduction to 3D design"
             />
            <MainTopicItem
             link = "animation3d"
             srcName = "3DAnimation"
             srcType = "svg"
             contentText = "Learn about one of the fastest growing industies in computing, the magic of 3D animation!"
             shortText = "Animation in 3D"
             />
            <MainTopicItem
             link = "modelling3d"
             srcName = "3DModelling"
             srcType = "svg"
             contentText = "A subject that is still new but has come so far in recent years, how useful will this be in the future?"
             shortText = "3D Modelling"
             />
            <MainTopicItem
             link = "software3d"
             srcName = "3DSoftware"
             srcType = "svg"
             contentText = "Ready to start building your own designs? you'll need to get familiar with the software first!"
             shortText = "3D Software"
             />
            <MainTopicItem
             link = "careers3d"
             srcName = "3DCareers"
             srcType = "svg"
             contentText = "Still interested in 3D? why not see what careers you could pursue in the future!"
             shortText = "Careers in 3D"
             />
             
        </div>
    )
}

export default Design3D;