import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainContent from "../components/MainContent";

import CodingBanner from "../images/headerImages/CodingBanner1.png";

const AiProgramming = () => {
    return (
        <div>
           <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Programming  for AI"
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