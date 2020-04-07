import React from "react";
import axios from "axios";
import Card from "./Card";

import styled from "styled-components";

class Fetch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nameData: [],
            coreData: []
        };
    }   
    componentDidMount(){
        const theProps = this.props.json
        const jsonData = "/data/" + `${theProps}` + ".json";

        axios.get(`${jsonData}`)
        .then(response => {
            console.log(response.data.details.coreDetails)
            this.setState({
                nameData: response.data.details.content,
                coreData: response.data.details.coreDetails
            });

        })
        .catch(function(error){
            console.log(error);
        });
    }
    render(){
        const nameList = this.state.nameData;
        const coreList = this.state.coreData;

        let nameListBlock = "";
        let coreListBlock = "";

        if(nameList.length > 0){
            nameListBlock = nameList.map(obj => {   
                return (
                    <Card 
                        name = {obj.name}
                        image = {obj.image}
                        difficulty = {obj.difficulty}
                        popularity = {obj.popularity}
                        experience = {obj.experience}
                    /> 
                    
                )
            })
        }
        if(coreList.length > 0){
            coreListBlock = coreList.map(obj => {
                return (
                    <H1 background = {obj.headerColour}> {obj.headerName}</H1>
                )
            })
        }
        return(
            <div className = "container">
                {coreListBlock}
                {nameListBlock}
            </div>
        )
    }

}
const H1 = styled.h1`
    text-align: center;
    color: black;
    font-size: 4em;
    padding: 12px;
    background: ${props => props.background};
    color: white;
`
export default Fetch;