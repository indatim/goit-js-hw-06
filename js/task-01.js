const ulRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulRef.length}`);

ulRef.forEach(function (ulRef) {
    console.log(`Category: ${ulRef.firstElementChild.textContent}`),
    console.log(`Elements: ${ulRef.lastElementChild.children.length}`)});