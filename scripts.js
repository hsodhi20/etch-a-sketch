const outerContainer = document.querySelector('.grid-outer-container'); 
const createGridBtn = document.getElementById('createGridBtn');

createGridBtn.addEventListener('click', createGrid);

function createGrid() {
    const sizeInput = document.getElementById('sizeInput');
    let side = Number(sizeInput.value);
    let valid = validateInput(side);

    if (valid) {
        // Remove existing grids
        outerContainer.textContent = '';

        const squareSize = 400 / side;
        console.log(squareSize);

        for (let i = 0; i < side; i++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');

            for (let j = 0; j < side; j++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.width = squareSize + 'px';
                box.style.height = squareSize + 'px';
                grid.appendChild(box);
            }

            outerContainer.appendChild(grid);
        }

        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.addEventListener('mouseover', event => {
                event.target.style.background = randomColor();
            });
        });
    } else {
        alert("Invalid Input! Please enter a number between 5 and 50.");
    }
}


function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function validateInput(side) {
    return 5 <= side && side <= 50 && Number.isInteger(side);
}
