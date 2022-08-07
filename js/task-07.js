const textEl = document.querySelector('#text')
const inputEl = document.querySelector('#font-size-control')

inputEl.addEventListener('input', (evt) => {
    const size = inputEl.value

    textEl.style.fontSize = size + 'px'
});