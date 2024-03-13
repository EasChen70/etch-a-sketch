const slider = document.querySelector(".slider");
const clearButton = document.querySelector(".clear");
const grid = document.getElementById("grid");

function createGrid(gridSize){
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(i = 0; i < gridSize ** 2; i++){
        const griditem = document.createElement("div");
        griditem.classList.add('grid-item');
        griditem.addEventListener('mouseenter', changeColor);
        griditem.addEventListener('mousedown', changeColor);
        grid.appendChild(griditem);
    }
}

createGrid(slider.value);

slider.addEventListener('input', function() {
    createGrid(slider.value);
})

clearButton.addEventListener('click', function() {
    createGrid(slider.value);
});



let mouseDown = false;


function changeColor(event){
    if(mouseDown){
        event.target.style.backgroundColor = '#000000';
    }
}

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




