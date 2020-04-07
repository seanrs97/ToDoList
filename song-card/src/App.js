import React from 'react';
import './App.css';

import Card from "./components/Card";

import Coding from "./pages/Coding";
import QueryDemo from "./components/QueryDemo";


import axios from "axios"

import {BrowserRouter as Router, Link, Switch, useLocation} from "react-router-dom";
function App(){
  return (
    <div className="App">
      <Router>
        <QueryDemo/>
      </Router>
    </div>
  );
}

export default App;
