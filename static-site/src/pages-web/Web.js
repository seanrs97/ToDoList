import React, {Component} from "react";
import TopicLandingPage from "../TopicLandingPages/TopicLandingPage";
import IndividualTopic from "../TopicLandingPages/IndividualTopic";
import NavBar from "../components/NavBar";  
import Header from "../headers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CodeIcon from "../images/CodeIcon.svg";

import CMS from "./CMS";
import WebBuilder from "./WebBuilder";
import Vanilla from "./Vanilla";

import apps from "../images/topics/apps.svg";
import games from "../images/topics/games.svg";
import web from "../images/topics/web.svg";

class Web extends Component {
    render(){
        return(
            <div>
                <Router>
                    <NavBar/>
                    <Header
                        headerLogoLeft = {CodeIcon}
                        headerLogoRight = {CodeIcon}
                        headerTitle = "Web"
                    />
                    <TopicLandingPage/>
                    <IndividualTopic topic = {apps} link = "/cms" linkName = "CMS"/>
                    <IndividualTopic topic = {games} link = "/vanilla" linkName = "Vanilla"/>
                    <IndividualTopic topic = {web} link = "/webBuilder" linkName = "Web Builder"/>
                    <Switch>
                        <Route exact path = "/cms" component = {CMS}/>
                        <Route exact path = "/vanilla" component = {Vanilla}/>
                        <Route exact path = "/webBuilder" component = {WebBuilder}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Web