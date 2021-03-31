const refs = {
  decrementBtn: document.querySelector('#counter [data-action="decrement"]'),
  incrementBtn: document.querySelector('#counter [data-action="increment"]'),
  outputValue: document.querySelector('#value'),
};

let counterValue = 0;

const updateOutputValue = () => {
  refs.outputValue.textContent = counterValue;
}

const onDecrementBtnClick = () => {
  counterValue -= 1;
  updateOutputValue();
}

const onIncrementBtnClick = () => {
  counterValue += 1;
  updateOutputValue();
}

refs.decrementBtn.addEventListener('click', onDecrementBtnClick)
refs.incrementBtn.addEventListener('click', onIncrementBtnClick)