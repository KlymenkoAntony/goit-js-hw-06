const inputEl = document.querySelector('#name-input');
console.log(inputEl); 
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

inputEl.addEventListener('input', onInputChange);
function onInputChange(event){
    console.log(event.currentTarget.value);
    if (inputEl.value === '') {
        return outputEl.textContent = 'Anonymous';
    } else outputEl.textContent = event.currentTarget.value;
}