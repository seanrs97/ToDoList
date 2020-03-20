import React from "react";
import MainTopicHeader from "../components/MainTopicHeader";
import MainTopicItem from "../components/MainTopicItem";
import NextSteps from "../components/NextSteps";

const Web = props => {
    return (
        <div>
          <MainTopicHeader
            headerColour = "blue"
            mainText = "Web Development"
            nounText = "The work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network)."
            badgeName = "BadgeBlue"
            badgeSrc = "svg"/>
            <MainTopicItem
                link = "cms"
                srcName = "web1"
                srcType = "svg"
                contentText = "Want to build a website, but not sure how to code? This is the right topic for you!"
                shortText = "CMS (Content Management System)"
            />
            <MainTopicItem
                link = "vanilla"
                srcName = "web2"
                srcType = "svg"
                contentText = "Learn the basics of Vanilla programming and code your first site with HTML5, CSS3 and JavaScript"
                shortText = "Vanilla"
            />
            <MainTopicItem
                link = "webBuilder"
                srcName = "web3"
                srcType = "svg"
                contentText = "For people who want a website but don't want to do any of the work!"
                shortText = "Web Builder"
            />
            <NextSteps
                link = "coding"
            />
        </div>
    )
}
export default Web