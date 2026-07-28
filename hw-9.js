const hideViewBtn = document.querySelector('#hide-view');
const title = document.querySelector('.title');

hideViewBtn.addEventListener('click', () => {
  title.classList.toggle('hide-block');
});

const changeColorBtn = document.querySelector('#change-color');
const text = document.querySelector('.text');

changeColorBtn.addEventListener('click', () => {
  text.style.color = 'blue';
});

const changeTextBtn = document.querySelector('#change-text');
changeTextBtn.addEventListener('click', () => {
  title.textContent = 'Привет, мир!';
});

const allDescription = document.querySelectorAll('.description');

allDescription.forEach((item) => {
  item.textContent = 'Измененный текст';
});

const allPDescription = document.querySelectorAll('p.description');
console.log(allPDescription);
allPDescription.forEach((item) => {
  item.textContent = 'Новый текст';
});

const createElementBtn = document.querySelector('#create-element');
createElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'Новый абзац';
  document.body.appendChild(newElement);
});

const removeBtn = document.querySelector('#remove');
removeBtn.addEventListener('click', () => {
  const element = document.querySelector('p.description');
  element.remove();
});
