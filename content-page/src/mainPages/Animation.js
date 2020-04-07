import React, {Component} from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";

import AnimationBanner from "../images/headerImages/Banner4.png";

const Animation = props => {
    return (
        <div>
            <MainTopicHeader
                headerImageDesk = {AnimationBanner}
                stripeColour = "linear-gradient(90deg, rgb(255, 211, 43), rgb(243, 146, 0))"
                mainText = "Animation"
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