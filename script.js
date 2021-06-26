//container div
const container = document.querySelector('#container');

function createGrid(cellNumber) {
    for(let i = 0; i < cellNumber; i++) {
        for(let j = 0; j < cellNumber; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            container.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
            container.insertAdjacentElement('beforeend',cell);
            cell.addEventListener('mouseover', function (e) {
                cell.style.backgroundColor = 'black';
            });
        }
    }
}


createGrid(16);