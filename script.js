const container = document.getElementById("grid")

/*
Esta función elimina el grid anteriormente hecho, para evitar problemas de
sobreescritura de un grid sobre otro.
*/
function clearGrid(){
            
    container.replaceChildren()

}

function makeGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    for (c = 0; c < (rows * columns); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

makeGrid(5,5)

const value = document.querySelector("#output");
const input = document.querySelector("#input");

value.textContent = input.value;

/*
Cada vez que cambiamos el valor del input, aquí se realiza la acción de refrescar
nuestro grid y actualizarlo.
*/
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    clearGrid()
    makeGrid(input.value, input.value)
});

function draw(){
    this.style.backgroundcolor = "black";
}

function draw() {
    let squares = document.querySelectorAll(".grid-item");
    for(let i = squares.length - 1; i >= 0; i--) {
        squares[i].addEventListener('mouseenter', () => {
            squares[i].style.backgroundColor = "black";
        });
    }
}

function erase() {
    let squares = document.querySelectorAll(".grid-item");
    for(let i = squares.length - 1; i >= 0; i--) {
        squares[i].addEventListener('mouseenter', () => {
            squares[i].style.backgroundColor = "white";
        });
    }
}



