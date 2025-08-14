import { useState } from "react";
import DisplayedRecipe from './DisplayedRecipe.jsx';
import getRecipeFromMistral from '../ai.js';
import ReactMarkdown from 'react-markdown';

export default function FormComponent() {
    let [ingredients, setIngredients] = useState([]);
    let [recipeShown, setRecipeShown] = useState(false);
    let [recipeObtained, setRecipeObtained] = useState(null);

    const requiredItemsMet = ingredients.length >= 4;


    const RecipeSendComponent = () => (
        <div className="recipe-send-box">
            <div className="recipe-send-text">
                <span className="recipe-send-text-header">Ready for a recipe?</span>
                <span className="recipe-send-text-content">Generate a recipe from your list of ingredients.</span>
            </div>

            <button onClick={changeRecipeShown} type="button" className="submit-ingredients">
                { !recipeShown ? "Get a recipe" : "New Recipe" }
            </button>
        </div>
    );


    const ingredientsItemList = ingredients.map(
        (e) => (
            <li className="ingredient-item" key={e}>{e}</li>
        )
    );


    function formSubmit(formData){
        const newIngredient = formData.get("ingredient");

        if (newIngredient === "") return;

        setIngredients(prev => [...prev, newIngredient]);
    }


    async function changeRecipeShown(){
        const recipe = await getRecipeFromMistral(ingredients);

        if (recipe) 
        {
            setRecipeObtained(<ReactMarkdown>{recipe}</ReactMarkdown>);
            setRecipeShown(true);
        }
    }


    return (
        <>
            <form action={formSubmit} className="ingredient-form">
                <input 
                name="ingredient" 
                id="input-text" 
                className="input-text" 
                placeholder="e.g. oregano" 
                type="text" />

                <button className="input-submit">+ Add Ingredient</button>
            </form>

            { requiredItemsMet && <span className="ingredients-head">Ingredients on hand:</span> }

            <ul>
                {ingredientsItemList}
            </ul>

            { requiredItemsMet  && <RecipeSendComponent /> }

            { recipeShown && <DisplayedRecipe recipe={recipeObtained} /> }
        </>
    );
}