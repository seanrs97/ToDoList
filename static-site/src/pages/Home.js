import React from "react";
import NavBar from "../components/NavBar";

import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";

import {Link} from "react-router-dom";


const Home = () => {
    return (
        
        <div className = "background">
            <NavBar/>
            <div className = "main-content">
                <h1> Future Proof </h1>
                <div className = "meaning">
                    <h5> Adjective </h5>
                    <p> (of a product or system) unlikely to become obsolete</p>
                </div>
                <div className = "meaning">
                    <h5> Verb </h5>
                    <p> make (a product or system) future proof.
                        "this approach allows you to future-proof
                        your applications"</p>
                </div>
                <div className = "badgesContainer">
                    <div className = "badges">
                        <img src = {BadgeBlue}/>
                        <img src = {BadgeRed}/>
                        <img src = {BadgeGreen}/>
                        <img src = {BadgeOrange}/>
                    </div>
                    <div className = "gettingStarted">
                        <Link to = "/topic"> Topics </Link>
                        <button> Get started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home