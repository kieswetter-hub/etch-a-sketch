/* etch-a-sketch code */

/* create a grid of 16 x 16 using only DOM */
function createGrid() {
    const slider = document.getElementById("mySize");
    const output = document.getElementById("displaySize");
    output.innerHTML = `${slider.value} x ${slider.value}`; 
        
    let gridContainer = document.querySelector(".gridContainer")

    gridContainer.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    let numDivs = slider.value * slider.value;

    for(let i = 0; i < numDivs; i++){
        const div = document.createElement("div");
        div.style.backgroundColor = "pink";
        gridContainer.insertAdjacentElement("beforeend", div);
    }
}

createGrid()

oninput = function () {
   createGrid()
}
