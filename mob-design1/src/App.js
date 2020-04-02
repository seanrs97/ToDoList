import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Animation from "./Animation";
import Design2D from "./Design2D";
import Coding from "./Coding";
import Design3D from "./Design3D";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route  path = "/home" exact component = {Home}/>
          <Route  path = "/animation" component = {Animation}/>
          <Route  path = "/design2d" component = {Design2D}/>
          <Route  path = "/coding" component = {Coding}/>
          <Route  path = "/design3d" component = {Design3D}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
