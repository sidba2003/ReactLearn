export default function FormComponent() {
    return (
        <form className="ingredient-form">
            <input className="input-text" placeholder="e.g. oregano" type="text" />
            <button className="input-submit" type="submit">+ Add Ingredient</button>
        </form>
    )
}