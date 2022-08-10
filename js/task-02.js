const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul');
console.log(ingredientsList); 

const makeIngredientEl = ingredient => {
  const addIngredientItem = document.createElement('li');
  addIngredientItem.classList.add('item');
  addIngredientItem.textContent = ingredient;

  return addIngredientItem;
}

const elements = ingredients.map(makeIngredientEl);
console.log(elements); 

ingredientsList.append(...elements);