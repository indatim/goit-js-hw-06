let counterValue = 0;
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};

const value = document.querySelector('#value');
const onDecrementBtn = (event) => {value.textContent = counterValue -=1};
const onIncrementBtn = (event) => {value.textContent = counterValue +=1};

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);

// function onDecrementBtn() {
//     valueElement.textContent = counterValue -=1;
// };

// function onIncrementBtn() {
//     valueElement.textContent = counterValue +=1;
// };
