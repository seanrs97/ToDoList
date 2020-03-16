import React, {Component } from 'react';
import './App.css';

import Coding from "./mainPages/Coding";
import Animation from "./mainPages/Animation";
import Design2D from "./mainPages/Design2D";
import Design3D from "./mainPages/Design3D";

import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  render(){
    return (
      <Router>
        <div className="App">
            <NavBar/>
            <Switch>
              <Route path = "/" 
              exact component = {Home} />
              <Route path = "/coding" component = {Coding}/>
              <Route path = "/animation" component = {Animation}/>
              <Route path = "/design3d" component = {Design3D}/>
              <Route path = "/design2d" component = {Design2D}/>
            </Switch>
        </div>
      </Router>
    );
  }
}
const Home = () => (
  <div>
    <h1> Welcome to your home page</h1>
  </div>
)

export default App;
