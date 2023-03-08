
const body = document.querySelector('body');
const grid = document.createElement('div');
body.appendChild(grid);

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