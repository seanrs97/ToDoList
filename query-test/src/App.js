import React from 'react';
import styled from "styled-components";

import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import Header from "./components/Header";

import Home from "./components/Home";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      coreTopics: [],
      webData: []
    }
  }
  async componentDidMount(){
    const coreTopics = await (await (fetch("http://localhost:3004/core-topics"))).json();
    
    this.setState({coreTopics})
  }
  render(){
   const {coreTopics} = this.state;
   return (
     <Router>
        <Route path = "/core-topics" render = { 
          props => 
            <Header 
              {...props} 
              coreTopics = {coreTopics}
            />
        }/>
      <Container>
        <Route exact path = "/core-topics" component = {Home}/>
      </Container>
      </Router>
    );
  }
}
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background: white;
`
export default App;
