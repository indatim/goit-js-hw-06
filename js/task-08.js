const refs = {
    form: document.querySelector('.login-form'),
};

const onSubmitForm = (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') { alert('Заповніть, будь-ласка, всі поля!'); }
    
    const userData = { email: email.value, password: password.value }
    console.log(userData);
    event.currentTarget.reset()
}

refs.form.addEventListener('submit', onSubmitForm);