import React, {Component} from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";

const Animation = props => {
    return (
        <div>
            <MainTopicHeader
             headerColour = "linear-gradient(90deg, #ffd32b , #f39200)"
             mainText = "Animation"
             nounText = "The process of making films, videos and computer games in which drawings, models or images of people and animals seem to move"
             badgeName = "BadgeOrange"
             badgeSrc = "svg"
            />
            <MainTopicItem
             link = "introAnimation"
             srcName = "animationIntro"
             srcType = "svg"
             contentText = "There's a whole world of animation, we think this is a good place to start"
             shortText = "Web Animations"
             />
            <MainTopicItem
             srcName = "animationWeb"
             srcType = "svg"
             contentText = "There's a whole world of animation, we think this is a good place to start"
             shortText = "Web Animations"
             />
            <MainTopicItem
             srcName = "animationManipulation"
             srcType = "svg"
             contentText = "Ready to Manipulate some animation? Lets start here!"
             shortText = "Animation Manipulation"
             />
        </div>
    )
}

export default Animation;