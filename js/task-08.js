const refs = {
  input: document.querySelector('#controls [type="number"]'),
  renderBtn: document.querySelector('#controls [data-action="render"]'),
  destroyBtn: document.querySelector('#controls button[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

const createRandomRgbColor = () => {
  const maxRange = 255;
  return `
  rgb(${Math.floor(Math.random() * maxRange)}, ${Math.floor(Math.random() * maxRange)}, ${Math.floor(Math.random() * maxRange)})
  `
}

const createBoxes = amount => {
  /* 
  //Вариант с document.createElement

  const boxes = [];
  
    for (let i = 0; i < amount; i++) {
      const squareSize = 30 + i * 10;
      const div = document.createElement('div');
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
      div.style.backgroundColor = createRandomRgbColor();
  
      boxes.push(div)
    }
  
    refs.boxesContainer.append(...boxes) 
  */

  let boxesMarkup = '';

  for (let i = 0; i < amount; i++) {
    const squareSize = 30 + i * 10;

    boxesMarkup += `
      <div style=" width: ${squareSize}px; height: ${squareSize}px; background-color: ${createRandomRgbColor()};">
      </div>
    `
  }

  refs.boxesContainer.insertAdjacentHTML('beforeend', boxesMarkup)
}

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = ''
}

const onDestroyBtnClick = () => {
  destroyBoxes();
  refs.input.value = ''
};

const onRenderBtnClick = () => {
  destroyBoxes()
  createBoxes(refs.input.value)
};

refs.destroyBtn.addEventListener('click', onDestroyBtnClick)
refs.renderBtn.addEventListener('click', onRenderBtnClick)