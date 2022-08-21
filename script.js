//Set Container Background Colour
const container = document.getElementById("container");
const backgroundColour = document.getElementById("backgroundColour");
container.style.backgroundColor = "white";
backgroundColour.addEventListener("input", (e)=> {
    return container.style.backgroundColor = e.target.value;
})

//Dynamically Create Sketch Pad
 const gridSize = document.getElementById("gridSize");
gridSize.addEventListener("input", (e)=> {
    if(e.target.value >= 101) {
        alert("too many cells, choose between 2-100 please")
    } else {
        return makeGrid(e.target.value);
    }
}); 

function makeGrid(value) {
    container.textContent = "";
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;   

    for(let i=0; i < value * value; i++) {
    const cells = document.createElement("div");    
    cells.classList.add("cells");
    cells.addEventListener("mousedown", colourChange);
    cells.addEventListener("mouseover", colourChange);
    container.appendChild(cells);
    }   
} 

//Draw & Change Colour
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function colourChange(e) {
    const colourPicker = document.getElementById("color");
    if (e.type === "mouseover" && mouseDown) {
        return e.target.style.backgroundColor = colourPicker.value;
    }
}

//Reset Button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", ()=> {
    container.innerText = "";
    container.style.backgroundColor = "white";
    alert("Input New Size to Draw Again")
})