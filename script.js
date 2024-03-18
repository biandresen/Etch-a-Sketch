//VARIABLE DECLARATION
const divContainer = document.getElementById("container");
const newDrawingBtn = document.getElementById("newDrawing");
const modeNormalBtn = document.getElementById("modeNormal");
const modeColorBtn = document.getElementById("modeColor");
//const modeShadeBtn = document.getElementById("modeShade");
let mode = 0;
let r = 0;
let g = 0;
let b = 0;

//EVENT LISTENERS
newDrawingBtn.addEventListener("click", selectSquares);
modeNormalBtn.addEventListener("click", () => {
  mode = 0;
  selectSquares();
});
modeColorBtn.addEventListener("click", () => {
  mode = 1;
  selectSquares();
});

//FUNCTIONS
function selectSquares() {
  let numOfSquares = parseInt(
    prompt(
      "Type amount of squares per row/column for the new drawing: (Max:100)"
    )
  );
  if (numOfSquares <= 100) addNewDrawing(numOfSquares);
  else {
    alert("Number of squares selected are too high!");
    selectSquares();
  }
}

function addNewDrawing(num) {
  // Remove all children
  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  } //Create squares
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      const div = document.createElement("div");
      div.classList.add("gridCell");
      div.style.width = "calc(100%/" + num + ")";
      div.style.height = "calc(100%/" + num + ")";
      divContainer.appendChild(div);
      //Add new color to div squares
      if (mode === 0) {
        div.addEventListener("mouseenter", () => {
          div.classList.add("colorChanged");
        });
      } else if (mode === 1) {
        div.addEventListener("mouseenter", () => {
          addRandomColor();
          div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        });
      }
    }
  }
}

function addRandomColor() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
}
