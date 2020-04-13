import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainContent from "../components/MainContent";

import CodingBanner from "../images/headerImages/CodingBanner1.png";

const Industrial = props => {
    return (
        <div>
            <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, rgb(42, 181, 227), rgb(11, 146, 191))"
                mainText = "Industrial Robitcs"
            />
            <MainContent
                srcName = "ai2"
                srcType = "svg"
                p = "Commodo ea sit id occaecat dolore ea sit ipsum aliquip reprehenderit id.
                  Magna adipi. Aliquip dolor
                  cupidatat labore exercitation incididunt adipisicing do id irure. fugiat. Occaecat nostrud exercitation 
                  non magna ipsum consequat proident amet exercitation qui i ullamco veniam voluptateadipisicing consectetur 
                  dolor commodo. Enim esse nostrud reprehenderit ad magna deserunt aliqua ex officia exercitation."
            />
            <MainContent
                srcName = "ai3"
                srcType = "svg"
                p = "Commodo ea sit id occaecat dolore ea sit ipsum aliquip reprehenderit id.
                  Magna adipi
                  cupidatat labore exercitrud exercitation 
                  non magna ipsum consequat proidpisicing consectetur 
                  dolor commodo. Enim esse nostrud reprehenderit ad magna deserunt aliqua ex officia exercitation."
            />
        </div>
    )
}

export default Industrial;