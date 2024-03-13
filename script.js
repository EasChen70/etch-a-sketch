const slider = document.querySelector(".slider");
const clearButton = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const grid = document.getElementById("grid");
const colorbutton = document.querySelector(".color");
const colorpicker = document.getElementById("colorPicker");
let eraserMode = false;
let colorMode = true;

function createGrid(gridSize){
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    let label = document.querySelector(".label");
    label.innerHTML = `${gridSize} x ${gridSize}`
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
});

clearButton.addEventListener('click', function() {
    createGrid(slider.value);
});

colorbutton.addEventListener('click', function(){
    eraserMode = false;
    colorMode = true;
})

eraser.addEventListener('click', function(){
    eraserMode = true;
    colorMode = false;
});

colorpicker.addEventListener('input', function() {
    eraserMode = false;
    colorMode = true;
});
let mouseDown = false;

function changeColor(event){
    if(mouseDown){
        if(eraserMode){
            event.target.style.backgroundColor = '#fffefe';
        }else if(colorMode){
            event.target.style.backgroundColor = colorpicker.value;
        }
    }
}

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);




