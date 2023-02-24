const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text'),
};

const onSliderMove = (event) => {
    refs.output.style.fontSize = `${event.currentTarget.value}px`;
}

refs.input.addEventListener('change', onSliderMove);