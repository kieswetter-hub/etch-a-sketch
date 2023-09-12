/* etch-a-sketch code */

/* create a grid of 16 x 16 using only DOM */

function generateGrid (numberOfItems) {
    let htmlToAdd = "";

    for (let i = 0; i < numberOfItems; i++) {
        htmlToAdd += `<div class="gridDiv"></div>`;
    }
    container.innerHTML = htmlToAdd;
}

generateGrid(256)