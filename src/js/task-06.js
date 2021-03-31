const validationInputRef = document.querySelector('#validation-input');

const onValidationInputBlur = (event) => {
  const thisEl = event.currentTarget;
  const thisValueLength = thisEl.value.length;
  const validLength = thisEl.dataset.length;

  thisEl.classList.add(thisValueLength <= validLength ? 'valid' : 'invalid');

}

validationInputRef.addEventListener('blur', onValidationInputBlur);