import React from "react";
import logo from "../images/logo.svg";

import RedBadge from "../images/BadgeRed.svg";
import GreenBadge from "../images/BadgeGreen.svg";
import BlueBadge from "../images/BadgeBlue.svg";
import OrangeBadge from "../images/BadgeOrange.svg";

const NavBar = () => {
    return (
        <header>
            <div className = "header-content">
                <img className = "left-nav" src = {logo}/>
                <div className = "right-nav">
                    <img src = {RedBadge}/>
                    <img src = {BlueBadge}/>
                    <img src = {GreenBadge}/>
                    <img src = {OrangeBadge}/>
                </div>
            </div>
        </header>
    )   
}

export default NavBar