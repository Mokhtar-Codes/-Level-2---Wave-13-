const ingredients = [
  { name: "Flour", amount: "2 cups", isOptional: false },
  { name: "Milk", amount: "1 cup", isOptional: false },
  { name: "Eggs", amount: "2", isOptional: false },
  { name: "Vanilla", amount: "1 tsp", isOptional: true },
  { name: "cinnamon", amount: "1/2 tsp", isOptional: true },
];

function createIngredient(ingredient) {
  const recipeListItem = document.createElement("li");

  recipeListItem.textContent = `${ingredient.amount} ${ingredient.name}`;

  if (ingredient.isOptional) {
    recipeListItem.classList.add("optional");
  }

  return recipeListItem;
}

function showIngredients() {
  const ingredientList = document.getElementById("ingredient-list");
  ingredientList.textContent = "";

  ingredients.forEach((ingredient) => {
    // ingredientList.append(createIngredient(ingredient));

    const listItem = createIngredient(ingredient);

    ingredientList.append(listItem);
  });
}
showIngredients();
