const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOUR = '#000000';

// Create initial 16 x 16 grid
const body = document.querySelector('body');
const grid = document.querySelector('.grid');

const sliderValue = document.querySelector('.sliderValue');
const sliderInput = document.querySelector('.gridsize-slider');
const gridCheckbox = document.querySelector('.checkbox');


let gridSize = DEFAULT_GRID_SIZE;
let colour = DEFAULT_COLOUR;

createGrid (gridSize);
gridVisibilty();

// Create grid w slider
sliderInput.addEventListener("input", (event) => {
    clear();
    gridSize = event.target.value;
    createGrid(gridSize);
    gridVisibilty();
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
});

// Grid ON/OFF
function gridVisibilty() {
    const pixels = document.querySelectorAll('.pixel');
    
    if (gridCheckbox.value == 'on'){
        pixels.forEach((pixel) => {
            pixel.classList.add('border');
        }) 
    } else {
        pixels.forEach((pixel) => {
            pixel.classList.remove('border');
        })         
    }
}

gridCheckbox.addEventListener('click', () => {
    if (gridCheckbox.value == 'on'){
        gridCheckbox.value = 'off';
    } else {
        gridCheckbox.value = 'on';
    }
    gridVisibilty();
})

//eraser
const eraser = document.querySelector('.eraser');

eraser.addEventListener('click', () => {
    colour = 'white';
});