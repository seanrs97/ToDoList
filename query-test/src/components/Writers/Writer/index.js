import React from "react";

export default ({match, born, deceased, name, description, image}) =>
console.log(match) ||
    <React.Fragment>
        <div>
            <img src = {image} alt = {name} style = {{width: "400px", height: "400px"}}/>
            <h1>{name}</h1>
            {born} &mdash; {deceased}
            <p>{description}</p>
        </div>
    </React.Fragment>