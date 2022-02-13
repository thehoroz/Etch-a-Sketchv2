const gridContainer = document.querySelector('#gridcontainer');
const resetBtn = document.querySelector('#resetButton');
const randomColorBtn = document.querySelector('#randomColorButton');
const greyScaleBtn = document.querySelector('#greyScaleButton');

let gridValue = 0;

resetBtn.addEventListener('click', () => {
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

function resetGrid() {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function gridPrompt() {
    gridValue = prompt("Make a new grid! (max: 64)");
    if (gridValue > 64 || gridValue < 0) {
        alert("You overexceeded the amount!")
        return;
    } 
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
}

function autoGrid(gridValue){
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);

    let cellCount = gridValue * gridValue;

    for (let i = 0; i < cellCount; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('gridStyle');
    gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
    gridContainer.appendChild(gridCell)
}};

function createGrid() {
    gridPrompt(); 
    cellCount = gridValue * gridValue;
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
        gridContainer.appendChild(gridCell)
    }
};


function generateRandomColor() {
    gridPrompt(); 
    cellCount = gridValue * gridValue;
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
    gridPrompt(); 
    cellCount = gridValue * gridValue;
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

autoGrid(16);