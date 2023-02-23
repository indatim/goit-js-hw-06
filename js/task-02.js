const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('ingredients__item');
  itemEl.textContent = ingredient;
  return itemEl;
});

ingredientsListRef.after(...items);

// ============================ Варіант 2 =================================

// const ingredientsListRef = document.querySelector('#ingredients');

// const makeingredientsListRef = ingredients => {
//   return ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('ingredients__item');
//   itemEl.textContent = ingredient;
  
//   return itemEl;
//     });
// };

// const items = makeingredientsListRef(ingredients);
// ingredientsListRef.after(...items);