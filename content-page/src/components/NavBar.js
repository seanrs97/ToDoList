import React, {Component} from "react";
import logo from "../images/logo.svg";
import styles from "./NavBar.css";

import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";

import {Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    showMenu(event) {
        event.preventDefault();
        this.setState({showMenu: true}, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }
    closeMenu(event){
        if(!this.dropdownMenu.contains(event.target)){
            this.setState({ showMenu: false},  () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }
    render(){
        return (
            <div>
                <div className = "menuContainer">
                    <nav className = "contentContainer">
                        <div className = "navImgContainer">
                            <Link to = "/"><img className = "navImg" src = {logo} /></Link>
                        </div>
                        <ul className = "menuList">
                            <Link to = "/coding"><li className = "list-element1 elems"> <img src = {BadgeBlue} /></li></Link>
                            <Link to = "design2d"><li className = "list-element3 elems"> <img src = {BadgeRed} /></li></Link>
                            <Link to = "design3d"><li className = "list-element2 elems"> <img src = {BadgeGreen} /></li></Link>
                            <Link to = "animation"><li className = "list-element4 elems"> <img src = {BadgeOrange} /></li></Link>
                        </ul>
                        <div className = "hamburger" onClick = {this.showMenu}>
                            <div className = "bar1"></div>
                            <div className = "bar2"></div>
                            <div className = "bar3"></div>
                        </div>
                        { 
                            this.state.showMenu 
                            ? (
                                <div
                                    className = "theMenu"
                                    ref = {(element) => {
                                        this.dropdownMenu = element;
                                    }}
                                >
                                <ul className = "menuListText">
                                    <Link to = "/coding"><li className = "listElementText"> Coding </li></Link>
                                    <Link to = "/design2d"><li className = "listElementText"> 2D Design </li></Link>
                                    <Link to = "/design3d"><li className = "listElementText"> 3D Design </li></Link>
                                    <Link to = "/animation"><li className = "listElementText"> Animation </li></Link>
                                </ul>
                                </div>
                            ) 
                            : ( 
                                null 
                            )
                        }
                    </nav>
                </div>
            </div>

        )
    }
}
export default NavBar