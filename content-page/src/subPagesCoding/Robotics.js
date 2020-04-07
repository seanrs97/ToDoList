import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

import CodingBanner from "../images/headerImages/CodingBanner2.png";

const Robotics = props => {
    return (
        <div>
            <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Robotics"
            />
            <MainTopicItem
                link = "industrial"
                srcName = "robotics1"
                srcType = "svg"
                contentText = "One of robotics primary uses, learn how large industries utilise robotics"
                shortText = "Industrial Robotics"
            />
            <MainTopicItem
                link = "electricity"
                srcName = "robotics2"
                srcType = "svg"
                contentText = "Learn how robotics and electricity are connected!"
                shortText = "Electricity & Robotics"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default Robotics