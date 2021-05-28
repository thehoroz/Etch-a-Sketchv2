const gridContainer = document.querySelector('#gridcontainer');

//this value will be a form of input by the user to define the amount of cells
let gridValue = 21;

//the cellCount will be used by the loop to generate cells inside of the grid
let cellCount = gridValue * gridValue;

//the gridContainer obtains the required grid template style through the number of gridValue 
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

