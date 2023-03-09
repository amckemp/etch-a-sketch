const DEFAULT_GRID_SIZE = 16;

// Create initial 16 x 16 grid
const body = document.querySelector('body');
const grid = document.querySelector('.grid');

const sliderValue = document.querySelector('.sliderValue');
const sliderInput = document.querySelector('.slider');
let gridSize = DEFAULT_GRID_SIZE;

createGrid (16);
console.log('initial grid created');

// Create grid w slider
sliderInput.addEventListener("input", (event) => {
    clear();
    createGrid(event.target.value);
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
        }
    }
};

// Add colour to pixel of grid when user hovers over
const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('colour');
    });
});


// Clear grid (clear all pixels)
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

function clear () {
        pixels.forEach((pixel) => {
            pixel.classList.remove('colour');
        });
}