import React from "react";
import TopicHeader from "../components/TopicHeader";
import MainContent from "../components/MainContent";
import NextSteps from "../components/NextSteps";

import {BrowserRouter, Route} from "react-router-dom";

const Coding = () => {
    return( 
        <div>
        <TopicHeader 
        headerColour = "blue"
        title = "Coding & Programming" 
        imageOne = "3d-model" 
        imageTwo = "3d-model-labeled"/>
        <MainContent
         p = "Nostrud ut deserunt nisi est sit do. Nisi labore culpa ad excepteur 
         ipsum qui. Sit quis deserunt sint in aliquip incididunt aliqua
         Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
         Ex pariatur laborum Lorem quis officia aute et. Commodo voluptate laboris nostrud voluptate pariatur
         qui in aute nisi elit ea et. Fugiat enim laborum incididunt aliquip in ea proident exercitation.
         eserunt sint in aliquip incididunt aliqua
         Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
         Ex pariatur laborum Lorem quis ofeserunt sint in aliquip incididunt aliqua
         Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
         Ex pariatur laborum Lorem quis ofeserunt sint in aliquip incididunt aliqua
         Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
         Ex pariatur laborum Lorem quis ofeserunt sint in aliquip incididunt aliqua
         Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
         Ex pariatur laborum Lorem quis of "
        srcName = "BadgeRed"
        srcType = "svg"
        />
        <MainContent
        p = "Nostrud ut deserunt nisi est sit do. Nisi labore culpa ad excepteur 
        ipsum qui. Sit quis deserunt sint in aliquip incididunt aliqua
        Lorem quis Lorem cupidatat incididunt. Irure laborum est consectetur nulla dolore.
        Ex pariatur laborum Lorem quis officia aute et. Commodo voluptate laboris nostrud voluptate pariatur
        qui in aute nisi elit ea et. Fugiat enim laborum incididunt aliquip in ea proident exercitation."
        srcName = "BadgeGreen"
        srcType = "svg"
        />
        <MainContent
        p = "Nostrud ut deserunt nisi est sit do. Nisi labore culpa ad excepteur 
        ipsum qu et. Commodo voluptate laboris nostrud voluptate pariatur
        qui in aute nisi elit ea et. Fugiat enim laborum incididunt aliquip in ea proident exercitation."
        srcName = "BadgeGreen"
        srcType = "svg"
        />
        <NextSteps/>
        </div>
    )
}

export default Coding;