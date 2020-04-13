import React from "react";

const Card = (match, id, image, name, description) => {
    return (
        <div>
            <img src = {image} alt = {name} />
            <h1> {name} </h1>
            <p> {description} </p>
        </div>
    )
}

export default Card;