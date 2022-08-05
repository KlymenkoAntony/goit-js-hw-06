const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
console.log(listEl)

const itemEl = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '')
console.log(itemEl)

listEl.innerHTML = itemEl