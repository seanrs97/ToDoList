import React from "react";
import Fetch from "../components/Fetch";
import styled from "styled-components";

const H1 = styled.div`
text-align: center;
color: white;
font-size: 4em;
background: darkgrey;
width: 80%;
margin: 0 auto;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
padding: 20px 0;
text-transform: uppercase;
`
const Animation = props => {
return (
    <div>
        <H1> 2D Design </H1>
        <Fetch json = "design2d"/>
    </div>
)
}

export default Animation;