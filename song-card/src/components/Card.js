import React from "react";
import styled from "styled-components";

class Card extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <CardContainer>
                    <img alt = "what is dis" src = {this.props.image} />
                    <H1> {this.props.name} </H1>
                    <Levels> <span className = "span-1">Difficulty:</span> <span className = "span-2">{this.props.difficulty}</span> </Levels>
                    <Levels> <span className = "span-1">Popularity:</span> <span className = "span-2">{this.props.popularity}</span> </Levels>
                    <Levels> <span className = "span-1">Experience Required:</span> <span className = "span-2">{this.props.experience}</span> </Levels>
                </CardContainer>
            </div>
        );
    }
}
const CardContainer = styled.div`
    color: white;
    font-weight: 800;
    letter-spacing: 0.05em;
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding: 20px 0;
    img{
        width: 100%;
        height: 350px;
        opacity: 0.5;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`
const H1 = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 5px 5px 5px black;
    font-size: 3em;
    width: 100%;
    text-align: center;
`
const Levels = styled.div`
    font-size: 1.2em;
    background: #ffa6a6;
    padding: 10px 0;
    border-bottom: 2px solid white;
    position: relative;
    border-radius: 6px;
    margin: 6px 0;
    .span-1{
        font-size: 1.5em;
        padding-left: 20px;
    }
    .span-2{
        position: absolute;
        right: 20px;
        top: 16px;
        font-weight: 400;
    }
`



export default Card;