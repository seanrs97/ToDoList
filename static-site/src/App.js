import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Coding from "./pages/Coding";

const App = () => {
    return (
      <div>
        <Router>
          <Login/>
          <Switch>
            <Route exact path = "/home" component = {Home}/>
            <Route exact path = "/topic" component = {Topic}/>
            <Route exact path = "/coding" component = {Coding}/>
          </Switch>
        </Router>
      
      </div>
    )
}
export default App;
