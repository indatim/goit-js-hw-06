const input = document.querySelector('#validation-input');

const onInputSymbolCheck = (event) => {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');  
    }
}

input.addEventListener('input', onInputSymbolCheck);