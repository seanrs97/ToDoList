import React from "react";
import logo from "../images/logo.svg";

const Header = props => {
    return (
        <div className = "headerContainer">
            <img className = "headerImageLeft" src = {props.headerLogoLeft}/>
            <img className = "headerImageRight" src = {props.headerLogoRight}/>
            <h3 className = "header-title"> {props.headerTitle} </h3>
        </div>
    );
}

export default Header;