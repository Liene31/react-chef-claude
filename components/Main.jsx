import React from "react";

export function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  ///////////////////////////

  return (
    <main>
      <form action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsList}</ul>
    </main>
  );
}
