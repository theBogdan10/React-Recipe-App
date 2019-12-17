import React from 'react';
import style from './recipe.module.css';

const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Igredients:</h3>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {Math.floor(calories)}</p>
            <img className={style.image} src={image} alt=""></img>
        </div>
    );
}

export default Recipe;
