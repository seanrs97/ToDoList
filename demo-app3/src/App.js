import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe";
import {v4 as uuidv4} from "uuid";

const App = () => {

  const APP_ID = "1623110d";
  const APP_KEY = "e7bf98a63160dbabf44341b97e216ef7";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    console.log("we are fetching data")
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  }

  return (
    <div className = "App">
      <form onSubmit = {getSearch} className="search-form">
        <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit">  
          Search      
        </button>
      </form>
      <div className = "recipes">
        {recipes.map(recipe => (
          <Recipe 
          key = {uuidv4()}
          title = {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}/>
        ))};
      </div>
    </div>
  )
}
export default App;
