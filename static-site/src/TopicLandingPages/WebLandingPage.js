import React, {Component} from "react";
import TopicLandingPage from "./TopicLandingPage";

import apps from "../images/topics/apps.svg";
import games from "../images/topics/games.svg";
import web from "../images/topics/web.svg";

class WebLandingPage extends Component {
    render() {
        return (
            <div>
                <TopicLandingPage
                topic = {apps}
                topic2 = {games}
                topic3 = {web}
                link = "/webBuilder"
                link2 = "/cms"
                link3 = "/vanilla"
                linkName = "web builder"
                linkName2 = "cms"
                linkName3 = "vanilla"
                />
            </div>
        )
    }
}

export default WebLandingPage;