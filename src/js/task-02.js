/* 
Напиши скрипт, который для каждого элемента массива `ingredients` создаст
отдельный `li`, после чего вставит все `li` за одну операцию в список
`ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.
*/

const ingredientsEl = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientElements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient
  return liEl
});

ingredientsEl.append(...ingredientElements)
