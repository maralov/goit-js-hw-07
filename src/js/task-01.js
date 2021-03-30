const listEl = document.querySelector('#categories')
const listItemsEl = listEl.querySelectorAll(`.item`);
const listItemsLength = listItemsEl.length;

console.log(`В списке ${listItemsLength} категории:`);

listItemsEl.forEach(listItem => {
  const listItemHeadingText = listItem.querySelector('h2').textContent
  const listItemElementsLength = listItem.querySelectorAll('li').length

  console.group(listItemHeadingText)
  console.log(`Количество элементов: ${listItemElementsLength}`);
  console.groupEnd()
});