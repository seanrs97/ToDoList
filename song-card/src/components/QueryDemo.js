import React from "react";

import UseQuery from "./UseQuery";

import {Link} from "react-router-dom"
import Child from "./Child";

import GamesDev from "../gamesDev.svg";
import CodeImage from "../codeImage3.svg";

import {useLocation} from "react-router-dom";

class QueryDemo extends React.Component{
    constructor(props){
      super();
      this.state = {}
    }

    render(){

        const query = new URLSearchParams(this.props.search);

      return (
        <div>
          <h1 style = {{color: "black"}}> Links (have a look mate) </h1>
          <ul>
            <li> <Link to = {`/account?name=firstLink&image=${CodeImage}&difficulty=average&popularity=Average&experience=1 Year`}> First Link </Link> </li>
            <li> <Link to = {`/account?name=secondLink&image= ${GamesDev}&difficulty=hard&popularity=Average&experience=5 Months`}> Second Link </Link> </li>
            <li> <Link to = {`/account?name=thirdLink&image= ${GamesDev}&difficulty=easy&popularity=Popular&experience=4 Months`}> Third Link </Link> </li>
          </ul>
          <Child 
            image = {query.get("image")} 
            name = {query.get("name")} 
            difficulty = {query.get("difficulty")}
            popularity = {query.get("popularity")}
            experience = {query.get("experience")}
            />
        </div>
      )
    }
  }

  export default QueryDemo;