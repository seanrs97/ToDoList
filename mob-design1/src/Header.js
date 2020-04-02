import React, {Component} from "react";
import styles from "./header.css";
import {Link} from "react-router-dom";


class Header extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div className = "headerContainer">
                <header>
                    <div className = "contentContainer">
                        <Link style = {{ textDecoration: "none", color: "white"}} to = "/home"><h1> Home page </h1></Link>
                        <div className = "hamburgerContainer">
                            <div className = "line"></div>
                            <div className = "line"></div>
                            <div className = "line"></div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

const leftArrow = "<";
export default Header;