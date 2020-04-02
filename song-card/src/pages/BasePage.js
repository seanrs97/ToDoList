import React from "react";

import MainHeader from "../components/MainHeader";
import MainContent from "../components/MainContent";
import MainFooter from "../components/MainFooter";

const pageFooterProps = {companyName: "The react company", socialMedia: ["pornhub.com", "brazzers"]}

const BasePage = props => (
    <div>
        <MainHeader headerText = {props.headerText} headerImage = {props.headerImage} />
        <MainContent/>
        <MainFooter {...pageFooterProps}/>
    </div>

);

export default BasePage;