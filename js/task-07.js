const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onFontSizeControlChange = event => {
  const currentValue = event.currentTarget.value;

  textRef.style.fontSize = `${currentValue}px`
}

fontSizeControlRef.addEventListener('input', onFontSizeControlChange)