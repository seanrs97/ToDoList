import React from "react";

import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Careers3D = props => {
    return (
        <div>
            <MainTopicHeader
            headerColour = "green"
            mainText = "Careers in 3D"
            nounText = "An occupation or profession, especially one requiring special training, followed as one's lifework"
            badgeName = "BadgeGreen"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "cms"
                srcName = "3DCareers1"
                srcType = "svg"
                contentText = "The First steps to a career is learning the subject, get a fundamental knowledge of 3D modelling here"
                shortText = "First Steps"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DCareers2"
                srcType = "svg"
                contentText = "Done some Digging? Maybe its time to pursue the subject at a higher level?"
                shortText = "Education"
            />
            <MainTopicItem
                link = "cms"
                srcName = "3DCareers3"
                srcType = "svg"
                contentText = "Think you've got enough knowledge to purue a job? we're here to help you decide"
                shortText = "The real world"
            />
            <NextSteps
                link = "design3d"
            />
        </div>
    )
}
export default Careers3D