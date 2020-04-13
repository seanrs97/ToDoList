import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainContent from "../components/MainContent";
import NextSteps from "../components/NextSteps";
import CodingBanner from "../images/headerImages/CodingBanner6.png"

const CodeIntro = props => {
    return (
        <div>
            <MainTopicHeader
                headerImageDesk = {CodingBanner}
                stripeColour = "linear-gradient(90deg, #2ab5e3 , #0b92bf)"
                mainText = "Introduction to Coding"
            />
            <MainContent
                srcName = "codingImage1"
                srcType = "png"
                p = "Coding is all around us! It’s the way we 
                interact with technology, and the results are everywhere to see!"
            />
            <MainContent
                srcName = "codingImage2"
                srcType = "png"
                p = "Nowadays, almost everything that is powered by electricity uses code."
            />
            <MainContent
                srcName = "codingImage3"
                srcType = "png"
                p = "Personal items like:
                Smart Phones
                Smart Watches
                Smart Speakers
                "
            />
            <MainContent
                srcName = "codingImage4"
                srcType = "png"
                p = "Things around the home like:
                Microwaves
                Fridges
                Washing machines
                "
            />
            <MainContent
                srcName = "codingImage5"
                srcType = "png"
                p = "Even big things like:
                Cars
                Trains
                Planes
                ...and rockets!
                
                "
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default CodeIntro