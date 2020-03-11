import React, {Component} from "react";
import { Link } from "react-router-dom";
import TopicLandingPage from "./TopicLandingPage";

import apps from "../images/topics/apps.svg";
import games from "../images/topics/games.svg";
import web from "../images/topics/web.svg";
import robotics from "../images/topics/robotics.svg";
import ai from "../images/topics/ai.svg";
import other from "../images/topics/other.svg";

class CodingLandingPage extends Component {
    render() {
        return (
            <div>
                <TopicLandingPage
                topic = {apps}
                topic2 = {games}
                topic3 = {web}
                topic4 = {robotics}
                topic5 = {ai}
                topic6 = {other}
                link = "/apps"
                link2 = "/web"
                link3 = "/web"
                link4 = "/web"
                link5 = "/web"
                link6 = "/web"
                linkName = "apps"
                linkName2 = "games"
                linkName3 = "web"
                linkName4 = "web"
                linkName5 = "web"
                linkName6 = "web"
                />
            </div>
        )
    }
}

export default CodingLandingPage;