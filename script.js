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
            div.value = 0.1;
            // When the mouse hovers over this div (pixel), change the colour
            div.addEventListener('mouseover', () => {
                changeColour(div);
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

// Current colour mode
let currentMode = 'black';

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', (e) => {
    currentMode = 'eraser';
});

const colourPicker = document.querySelector('.colour-picker');
colourPicker.addEventListener("input", () => {
    currentMode = 'colour picker';
});

const greyscale = document.querySelector('.greyscale');
greyscale.addEventListener('click', () => {
    currentMode = 'greyscale';
});

const random = document.querySelector('.random');
random.addEventListener('click', () => {
    currentMode = 'random';
});

// Change colour

function changeColour (e) {
    // eraser
    if (currentMode == 'eraser'){
        e.style.backgroundColor = 'white';
    } else if (currentMode == 'colour picker'){
        e.style.backgroundColor = colourPicker.target.value;
    } else if (currentMode == 'greyscale'){
        e.style.backgroundColor = `rgba(0,0,0,${e.value})`;
        e.value += 0.1;
    } else if (currentMode == 'random'){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    } else if (currentMode == 'rainbow'){

    } else {
        //default
        e.style.backgroundColor = 'black';
    }
    
}