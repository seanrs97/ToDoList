import React, {Component} from "react";
import PageLayout from "./PageLayout";

import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeRed from "../images/BadgeRed.svg";

class PageLayouts extends Component {
    render(){
        return(
            <div className = "container-fluid d-flex justify-content-center">
                <div className = "row">
                    <div className = "col-md-4">
                        <PageLayout 
                        imgsrc = {BadgeGreen}
                        title = "Title number one"/>
                    </div>
                    <div className = "col-md-4">
                        <PageLayout 
                        imgsrc = {BadgeRed}
                        title = "Title number two" />
                    </div>
                    <div className = "col-md-4">
                        <PageLayout 
                        imgsrc = {BadgeBlue}
                        title = "Title number three"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageLayouts