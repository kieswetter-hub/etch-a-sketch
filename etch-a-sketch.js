/* etch-a-sketch code */

/* create a grid of 16 x 16 using only DOM */

const container = document.getElementById('container');
const div = document.createElement('div');
div.classList.add('gridDiv');
container.appendChild(div);