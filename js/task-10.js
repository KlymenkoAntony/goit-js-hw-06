function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNum = document.querySelector('#controls>input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');


const createBoxes = amount => {
  const elementsToAdd = []
  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    div.style.height = `${ 30 + 10 * i }px` 
    div.style.width = `${ 30 + 10 * i } px`
    div.style.background = getRandomHexColor()
    elementsToAdd.push(div)
  }
  return elementsToAdd;
}

const destroyBoxes = () => {
  boxesEl.innerHTML = ''
}

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNum.value)
  boxesEl.append(...boxesToAdd)
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes.call()
});