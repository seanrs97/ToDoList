import React from "react";
import CreateLink from "./CreateLink";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";



class GetData extends React.Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount(){
        const data = await (await(fetch("http://localhost:3000/data"))).json();
        this.setState({data});
    }
    render(){
        const codingData = this.state;
        console.log("CODE", codingData)
        return (
            <div>
                <Router>
                    <ul>
                        <li> <Link to = "/"> Home </Link></li>
                        <li> <Link to = "/data"> Code </Link></li>
                    </ul>
                    <Route path = "/data" render = {
                        props => <CreateLink {...props} codingData = {codingData} />
                    }/>
                </Router>
            </div>
        )
    }
}

export default GetData;