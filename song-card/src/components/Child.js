import React from "react";
import Card from "./Card";

const Child = ({name, image, difficulty, popularity, experience}) => {
    return (
      <div style = {{color: "black"}}>
          <Card 
              name = {name}
              image = {image}
              difficulty = {difficulty}
              popularity = {popularity}
              experience = {experience}
          /> 
      </div>
    )
  }

  export default Child;