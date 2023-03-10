const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOUR = '#000000';

// Create initial 16 x 16 grid
const body = document.querySelector('body');
const grid = document.querySelector('.grid');

const sliderValue = document.querySelector('.sliderValue');
const sliderInput = document.querySelector('.slider');

let gridSize = DEFAULT_GRID_SIZE;
let colour = DEFAULT_COLOUR;

createGrid (gridSize);

// Create grid w slider
sliderInput.addEventListener("input", (event) => {
    clear();
    gridSize = event.target.value;
    createGrid(gridSize);
});

// Create grid
function createGrid (gridSize) {
    sliderValue.textContent = `${gridSize} x ${gridSize}`;

    grid.innerHTML = '';

    for (let i = 0; i < gridSize; i++){
        
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        
        for (let j = 0; j < gridSize; j++){

            const div = document.createElement('div');
            div.classList.add('pixel');
            row.appendChild(div);
            div.style.width = `${500/gridSize}px`;
            div.style.height = `${500/gridSize}px`;

            // When the mouse hovers over this div (pixel), change the colour
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = colour;
            });
        }
    }
};

// Clear grid (clear all pixels)
const pixels = document.querySelectorAll('.pixel');
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

function clear () {
    grid.innerHTML = '';
    createGrid(gridSize);
}

// Random color generator

// Inpute from colour picker
const colourPicker = document.querySelector('.colour-picker');

colourPicker.addEventListener("input", (event) => {
    colour = event.target.value;
    console.log(colour);
});