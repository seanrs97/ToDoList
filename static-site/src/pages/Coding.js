import React from "react";
import Header from "../headers/Header";
import NavBar from "../components/NavBar";
import CodingLandingPage from "../TopicLandingPages/CodingLandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GreenBadge from "../images/BadgeGreen.svg";
import Web from "../pages-web/Web";

import CodeIcon from "../images/CodeIcon.svg";

import apps from "../images/topics/apps.svg";
import games from "../images/topics/games.svg";
import web from "../images/topics/web.svg";
import robotics from "../images/topics/robotics.svg";
import ai from "../images/topics/ai.svg";
import other from "../images/topics/other.svg";

import ContentPage from "../content-pages/ContentPage";
import IndividualTopic from "../TopicLandingPages/IndividualTopic";

import "./Pages.css";


const Coding = () => {
    return (
        <div>
            <Router>
                <NavBar/>
                <Header
                    headerLogoLeft = {CodeIcon}
                    headerLogoRight = {CodeIcon}
                    headerTitle = "Coding"
                />
                <CodingLandingPage/>
                <IndividualTopic topic = {apps} link = "/apps" linkName = "apps"/>
                <IndividualTopic topic = {games} link = "/games" linkName = "games"/>
                <IndividualTopic topic = {web} link = "/web" linkName = "web"/>
                <IndividualTopic topic = {robotics} link = "/robotics" linkName = "robotics"/>
                <IndividualTopic topic = {ai} link = "/ai" linkName = "ai"/>
                <IndividualTopic topic = {other} link = "/other" linkName = "other"/>
                <Switch>
                    <Route exact path = "/web" component = {Web}/>
                    <Route exact path = "/web" component = {Web}/>
                    <Route exact path = "/web" component = {Web}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Coding;