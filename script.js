//VARIABLE DECLARATION
const divContainer = document.getElementById("container");
const newDrawingBtn = document.getElementById("newDrawing");
const modeNormalBtn = document.getElementById("modeNormal");
const modeColorBtn = document.getElementById("modeColor");
const modeShadeBtn = document.getElementById("modeShade");
let shades = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
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
modeShadeBtn.addEventListener("click", () => {
  mode = 2;
  shade = 0;
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
      //Add black color to div squares
      if (mode === 0) {
        div.addEventListener("mouseenter", () => {
          div.classList.add("colorChanged");
        });
        //Add random color to div squares
      } else if (mode === 1) {
        div.addEventListener("mouseenter", () => {
          addRandomColor();
          div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        });
        //Add shading to div squares
      } else if (mode === 2) {
        div.addEventListener("mouseenter", () => {
          if (div.style.backgroundColor === "") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[0] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.1)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[1] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.2)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[2] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.3)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[3] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.4)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[4] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.5)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[5] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.6)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[6] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.7)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[7] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.8)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[8] + ")";
          } else if (div.style.backgroundColor === "rgba(0, 0, 0, 0.9)") {
            div.style.backgroundColor = "rgba(0, 0, 0," + shades[9] + ")";
          }
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
