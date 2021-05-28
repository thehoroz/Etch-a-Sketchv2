const gridContainer = document.querySelector('#gridcontainer');
const button = document.querySelector('#resetButton');
const randomColorBtn = document.querySelector('#randomColorButton');
const greyScaleBtn = document.querySelector('#greyScaleButton');

let gridValue = 16;
let cellCount = gridValue * gridValue;

button.addEventListener('click', () => {
    resetGrid();
    createGrid();
});

randomColorBtn.addEventListener('click', () => {
    resetGrid();
    generateRandomColor()
});

greyScaleBtn.addEventListener('click', () => {
    resetGrid();
    generateGreyColor();
});

function autoGrid(cellCount){
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
        gridContainer.appendChild(gridCell)
}};

function createGrid() {
    let gridValue = prompt("Make a new grid! (max: 64)");
    if (gridValue > 64 || gridValue < 0) {
        alert("You overexceeded the amount!")
        return;
    } 
    cellCount = gridValue * gridValue;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
        gridContainer.appendChild(gridCell)
}
};

function resetGrid() {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function generateRandomColor() {
    let gridValue = prompt("Make a new grid! (max: 64)");
    if (gridValue > 64 || gridValue < 0) {
        alert("You overexceeded the amount!")
        return;
    } 
    let cellCount = gridValue * gridValue;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        let value1 = Math.floor(Math.random() * 256);
        let value2 = Math.floor(Math.random() * 256);
        let value3 = Math.floor(Math.random() * 256);
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => e.target.setAttribute('style', 
        `background: rgb(${value1}, ${value2}, ${value3});`));
        gridContainer.appendChild(gridCell)
    };    
}

function generateGreyColor() {
    let gridValue = prompt("Make a new grid! (max: 64)");
    if (gridValue > 64 || gridValue < 0) {
        alert("You overexceeded the amount!")
        return;
    }; 
    let cellCount = gridValue * gridValue;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        let rgb = [255, 255, 255];
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => {
            rgb[0] *= 0.9;
            rgb[1] *= 0.9;
            rgb[2] *= 0.9;
            e.target.setAttribute('style', 
        `background: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]});`)}
        );
        gridContainer.appendChild(gridCell)
    };
};

autoGrid(cellCount);