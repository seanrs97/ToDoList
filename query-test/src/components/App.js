import React from 'react';

import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import axios from "axios";
import Writers from "./Writers";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      writers: []
    }
  }
  async componentDidMount(){
    const writers = await (await (fetch("http://localhost:3004/writers"))).json();
    
    this.setState({writers})
  }
  render(){
    const {writers} = this.state;
   return (
     <Router>
      <React.Fragment>
        <ul>
          <li><Link to = "/"> Home </Link></li>
          <li><Link to = "/writers"> Writers</Link></li>
        </ul>
        
        <hr/>
      <Route exact path = "/" render = {() => <div> Home </div>}/>
      <Route path = "/writers" render = { 
        props => <Writers {...props} writers ={writers} /> 
      }/>

      </React.Fragment>
      </Router>
    );
  }
}

export default App;
