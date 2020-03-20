import React from "react";
import logo from "../images/logo.svg";
import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";
import {Link} from "react-router-dom";

const Home = props => {
    return (
        <div className = "homeContentContainer" style = {{
            width: "90%",
            margin: "0 auto"
        }}>
            <img className = "futureProofLogo" src = {logo} style = {{
                width: "70%",
                marginBottom: "50px"
            }}/>
            <div style = {meaningWrapper}>
                <h4> Adjective </h4>
                <p> (Of a product or system) Unlikely to become obsolete</p>
            </div>
            <div style = {meaningWrapper}>
                <h4> Verb </h4>
                <p> make (a product or system) future proof.
                    "this approach allows you to future-proof your applications"
                </p>
            </div>
            <div style = {{ textAlign: "center", marginTop: "60px"}}>
                <h3 className = "getStarted"> Get started by picking a topic that interests you! </h3>
                <div className = "badgesContainer" style = {badgesContainer}>
                    <Link to = "/coding"><img style = {badgeLinks} src = {BadgeBlue} /></Link>
                    <Link to = "design2d"><img style = {badgeLinks} src = {BadgeRed} /></Link>
                    <Link to = "design3d"><img style = {badgeLinks} src = {BadgeGreen} /></Link>
                    <Link to = "/animation"><img style = {badgeLinks} src = {BadgeOrange} /></Link>
                </div>
            </div>
        </div>
    )
}

const meaningWrapper = {
    width: "80%",
    height: "90px",
}
const badgesContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginTop: "20px",
}
const badgeLinks = {
    width: "60%"
}

export default Home;