import React from 'react';
import './App.css';
import { Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import NextPage from "./NextPage";
import OtherPage from "./OtherPage";

function App() {
  return (
    <div>
      <h1> First page </h1>
      <OtherPage/>
      <NextPage/>
      <Switch>
          <Route exact path = "/otherPage" component = {NextPage}/>
          <Route exact path = "/nextPage" component = {OtherPage}/>
      </Switch>
    </div>
  )
}

export default App;
