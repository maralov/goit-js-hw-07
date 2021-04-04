const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
}

const outputNameStartValue = refs.outputName.textContent;

const onInputNameChange = (event) => {
  const inputValue = event.currentTarget.value;

  refs.outputName.textContent = inputValue.length > 0 ? inputValue : outputNameStartValue

}

refs.inputName.addEventListener('input', onInputNameChange)