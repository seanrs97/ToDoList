import React, {Component} from "react";
import styles from "./mainTopicHeader.css";

class MainTopicHeader extends Component {
    constructor(props){
        super();
        this.state = {
            headerColour: "blue"
        }
    }
    render(){
        return(
            <div>
            <div className = "headerStripe" 
            style = {{
                height: "12px",
                background: `${this.props.headerColour}`,
            }}> </div>
            <div className = "mainTopicHeaderContainer">
                <div className = "mainTopicTextContainer">
                    <div className = "smallImageTextContainer">
                        <h1> {this.props.mainText}</h1>
                        <img className = "headerImageSmall" src = {"../images/" + `${this.props.badgeName}` + "." + `${this.props.badgeSrc}`}/>
                    </div>
                    <div className = "nounContainer">
                        <h4> Noun </h4>
                        <p> {this.props.nounText} </p>
                    </div>
                </div>
                <div className = "mainTopicImageContainer">
                    <img className = "mainTopicImage" src = {"../images/" + `${this.props.badgeName}` + "." + `${this.props.badgeSrc}`}/>
                </div>
            </div>
        </div>
        );
    }
}

const imageSourceOne = "/images/";

export default MainTopicHeader;