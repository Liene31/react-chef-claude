import React from "react";
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai.js";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  async function getRecipe() {
    try {
      const suggestedRecipe = await getRecipeFromChefClaude(ingredients);
      setRecipe(() => {
        return suggestedRecipe;
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
