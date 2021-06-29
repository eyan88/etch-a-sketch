//container div
const container = document.querySelector('#container');

function createGrid(cellNumber) {
    for(let i = 0; i < cellNumber; i++) {
        for(let j = 0; j < cellNumber; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            container.style.gridTemplateColumns = `repeat(${cellNumber}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${cellNumber}, 1fr)`;
            container.append(cell);

            //adding event listener
            cell.addEventListener('mouseover', function (e) {
                let cellColor = Math.floor(Math.random()*16777215).toString(16);
                cell.style.backgroundColor = '#' + cellColor;
            })
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    })
}

document.getElementById('clear-button').addEventListener('click',changeSize);

function changeSize() {
    let cellNumber = prompt('Enter number of cells: ');

    if(cellNumber !== null) {
        cellNumber = parseInt(cellNumber);
        if(cellNumber < 1 || cellNumber > 100 || Number.isNaN(cellNumber)) {
            alert("Enter a number from 1 to 100!");
            changeSize();
        } 
        else {
            clearGrid();
            createGrid(cellNumber);
        }
    }
}

//create the default grid
createGrid(16);