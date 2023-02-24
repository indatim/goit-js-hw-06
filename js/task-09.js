
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  background: document.querySelector('body'),
  colorValue: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

const changeColor = (event) => {
  let color = getRandomHexColor(event);
  refs.background.style.backgroundColor = color;
  refs.colorValue.textContent = color;
}

refs.button.addEventListener('click', changeColor);