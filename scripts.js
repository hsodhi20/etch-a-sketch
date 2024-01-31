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

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseover', event => {
        event.target.style.background = randomColor();
    });
});
