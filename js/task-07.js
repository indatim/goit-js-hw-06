const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text'),
};

refs.output.style.fontSize = `${refs.input.value}px`;

const onSliderMove = (event) => {
    refs.output.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener('input', onSliderMove);