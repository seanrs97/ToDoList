import React from "react";
import TopicHeader from "../components/TopicHeader";
import MainContent from "../components/MainContent";

const Industrial = props => {
    return (
        <div>
            <TopicHeader
                headerColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
                title = "Industrial Robotics"
                imageOne = "ai"
                imageTwo = "ai2"
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