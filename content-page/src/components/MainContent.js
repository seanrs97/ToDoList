import React, {Component} from "react";
import styles from "./mainContent.css";
import sal from "sal.js";
import '../../node_modules/sal.js/dist/sal.css';

class MainContent extends Component {
    constructor(props){
        super();
        this.setState = {

        }
    }
    componentDidMount(){
        sal({
            once: false
          });
    }
    render(){
        return(
            <div className = "mainContentContainer">
            <img 
                data-sal = "zoom-in"
                data-sal-easing = "ease-out-back"
                data-sal-duration = "1300"
                data-sal-delay = "200"
                className = "mainSubContentImg" 
                src = {imageSourceOne + `${this.props.srcName}` + "." + `${this.props.srcType}`}/>
            <p className = "mainContentP">{this.props.p}</p>
        </div>
        )
    }
}
const imageSourceOne = "/images/mainContentImages/";

export default MainContent;