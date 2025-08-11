import { useState } from "react";

export default function FormComponent() {
    let [ingredients, setIngredients] = useState([]);

    const ingredientsItemList = ingredients.map((e) => <li key={e}>{e}</li>);

    function formSubmit(formData){
        const newIngredient = formData.get("ingredient");

        if (newIngredient === "") return;

        setIngredients(prev => [...prev, newIngredient]);
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
            <ul>
                {ingredientsItemList}
            </ul>
        </>
    );
}