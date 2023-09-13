/* etch-a-sketch code */

/* create a grid of 16 x 16 using only DOM */

document.addEventListener("DOMContentLoaded", function(){
})

function createGrid(size){
    let gridContainer = document.querySelector(".gridContainer")

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        const div = document.createElement("div");
        div.style.backgroundColor = "pink";
        gridContainer.insertAdjacentElement("beforeend", div);
    }
}

createGrid(16);