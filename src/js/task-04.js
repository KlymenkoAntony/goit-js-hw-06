let valEl = Number(document.querySelector('#value').textContent);

let countValue = document.querySelector('#value');

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  valEl += 1;
  countValue.innerText = valEl;
});

dekrBtn.addEventListener('click', event => {
  valEl -= 1;
  countValue.innerText = valEl;
});