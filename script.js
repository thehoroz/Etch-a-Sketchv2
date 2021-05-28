const gridContainer = document.querySelector('#gridcontainer');
const button = document.querySelector('#resetButton');
let gridValue = 16;
let cellCount = gridValue * gridValue;

button.addEventListener('click', () => {
    resetGrid();
    createGrid();
});

gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
grid-template-rows: repeat(${gridValue}, 1fr);`);

//the loop creates divs inside the container
//the divs gain an extra style which makes the color change possible
for (let i = 0; i < cellCount; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('gridStyle');
    gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
    gridContainer.appendChild(gridCell)
};

function resetGrid() {
    while(gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function createGrid() {
    let gridValue = prompt("Make a new grid! (max: 64)");
    if (gridValue > 64) {
        alert("You overexceeded the amount!")
        return;
    } 
    let cellCount = gridValue * gridValue;
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${gridValue}, 1fr); 
    grid-template-rows: repeat(${gridValue}, 1fr);`);
    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('gridStyle');
        gridCell.addEventListener('mouseenter', e => e.target.classList.add('colorChange'));
        gridContainer.appendChild(gridCell)
    };

}
