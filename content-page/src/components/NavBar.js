import React, {Component} from "react";
import logo from "../images/logo.svg";
import styles from "./NavBar.css";

import BadgeBlue from "../images/BadgeBlue.svg";
import BadgeGreen from "../images/BadgeGreen.svg";
import BadgeRed from "../images/BadgeRed.svg";
import BadgeOrange from "../images/BadgeOrange.svg";

import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

import {Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleMenuClick(){
        this.setState({menuOpen: !this.state.menuOpen});
      }
    handleLinkClick(){
    this.setState({menuOpen: false});
    }
    render(){
        const menu = ["Home", "Animation", "3D Design", "2D Design", "Coding"];
        const menuItems = menu.map((val, index) => {
        return (
            <MenuItem 
            key = {index} 
            delay = {`${index * 0.1}s`} 
            onClick = {()=>{this.handleLinkClick();}}>{val}</MenuItem>
          )
        });
        return (
            <div>
                <nav className = "menuContainer">
                    <Link to = "/"><img className = "navImg" src = {logo} /></Link>
                    <ul className = "menuList">
                        <Link to = "/coding"><li className = "list-element1 elems"> <img src = {BadgeBlue} /></li></Link>
                        <Link to = "design2d"><li className = "list-element2 elems"> <img src = {BadgeGreen} /></li></Link>
                        <Link to = "design3d"><li className = "list-element3 elems"> <img src = {BadgeRed} /></li></Link>
                        <Link to = "animation"><li className = "list-element4 elems"> <img src = {BadgeOrange} /></li></Link>
                    </ul>
                </nav>
                <div className = "mobileContainer">
                    <MenuButton 
                        open = {this.state.menuOpen}
                        onClick = {() => this.handleMenuClick()}
                        color = "white"/>
                    <Menu open = {this.state.menuOpen}>
                        {menuItems}
                    </Menu>
                </div>
            </div>

        )
    }
}
export default NavBar