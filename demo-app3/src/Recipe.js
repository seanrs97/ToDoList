import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className = {style.recipe}>
            <h1> {title} </h1>
            <p> {Math.floor(calories)} Calories </p>
            <img className = {style.image} src = {image} alt = {title}/>
            <ol>
                {ingredients.map(ingredient => (
                    <li> {ingredient.text} </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;