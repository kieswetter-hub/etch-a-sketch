/* etch-a-sketch code */

/* global variables */
let color = "black";

/* create dynamic grid using DOM */
createGrid()

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
        div.classList.add("gridDiv");
        div.addEventListener("mouseover", colorDiv);
        gridContainer.insertAdjacentElement("beforeend", div);
    }
} 

/* functions for changing color */

function setColor(colorChoice) {
    color = colorChoice;
}

function colorDiv() {
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        console.log('rando works');
    } 
    else {
        this.style.backgroundColor = "black";
        console.log('black works');
    }
}

function eraseGrid() {
    location.reload()
}