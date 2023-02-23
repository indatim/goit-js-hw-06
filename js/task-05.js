const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

const onInputChange = (event) => { refs.nameOutput.textContent = event.currentTarget.value; }

refs.input.addEventListener('input', onInputChange);


// #name-input
// #name-output

