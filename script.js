const body = document.querySelector('body');
const grid = document.createElement('div');
grid.classList.add('grid');
body.appendChild(grid);

// Create grid
for (let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for (let j = 0; j < 16; j++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        row.appendChild(div);
    }
}


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