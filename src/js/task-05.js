let inputEl = document.querySelector('#name-input')
inputEl.addEventListener('input', onInputChange)

let outputEl = document.querySelector('#name-output')

function onInputChange(event) {
  inputEl = event.currentTarget.value

  inputEl !== ' ' ? (outputEl.innerText = inputEl) : 'Anonymous'
};