import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainContent from "../components/MainContent";

import CodingBanner from "../images/headerImages/CodingBanner1.png"

const ProgrammingInIos = () => {
    return (
        <div>
           <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Programming for IOS Devices"
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

export default ProgrammingInIos;