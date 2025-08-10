import { useState } from "react";


const ingredients = ["chicken", "avacadoes", "bread"];

export default function FormComponent() {
    let [ingredientsItemList, setIngredientsItemList] = useState(getIngredientsList(ingredients));
    
    function formSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");

        document.getElementById("input-text").value = "";

        ingredients.push(newIngredient);

        setIngredientsItemList(getIngredientsList(ingredients));
    }

    return (
        <>
            <form onSubmit={formSubmit} className="ingredient-form">
                <input 
                name="ingredient" 
                id="input-text" 
                className="input-text" 
                placeholder="e.g. oregano" 
                type="text" />

                <button className="input-submit" type="submit">+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientsItemList}
            </ul>
        </>
    )
}

function getIngredientsList(ingredients){
    return ingredients.map((e) => (
        <li key={e}>{e}</li>
    ));
}