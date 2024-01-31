const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        grid.appendChild(box);
    }

    container.appendChild(grid);
}
