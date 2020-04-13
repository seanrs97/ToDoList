import React from "react";
import {Link, Route} from "react-router-dom";
import TopicHeaderCard from "./TopicHeaderCard";
import styled from "styled-components";

const Writer = ({match: {url}, coreTopics}) => {
    return (
        <React.Fragment>
            {/* Put this into a seperate (NAV BAR) Component at some point */}
            <NavContainer>
                <ul> 
                    <li> <Link to = "/core-topics">Home</Link> </li>
                    <li> <Link to = "/core-topics/coding">Coding</Link> </li>
                    <li> <Link to = "/core-topics/2d-design">2D Design</Link> </li>
                    <li> <Link to = "/core-topics/3d-design">3D Design</Link> </li>
                    <li> <Link to = "/core-topics/animation">Animation</Link> </li>
                </ul> 
            </NavContainer>
            <Route path = {`${url}/:topicId`} render = {
                ({ match }) => 
                <TopicHeaderCard {...coreTopics.find(topic => topic.id === match.params.topicId)}

                />}
            />
        </React.Fragment>
    )
}
const NavContainer = styled.div`
    background: black;
    font-size: 1.6em;
    ul {
        list-style: none;
        margin: 0;
        padding: 40px 0;
        li{
            display: inline;
            padding: 30px 20px;
            transition: 0.4s all;
            border-radius: 8px;
            -webkit-transition: 0.4s all;
            :hover{
                background: #474747;
            }
            a {
                text-decoration: none;
                color: white;
            }
        }
    }
`

export default Writer;