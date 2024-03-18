const divContainer = document.getElementById("container");
const newDrawingBtn = document.getElementById("newDrawing");

newDrawingBtn.addEventListener("click", () => {
  let numOfSquares = parseInt(
    prompt("Type amount of squares per row/column for the new drawing: ")
  );
  addNewDrawing(numOfSquares);
});

function addNewDrawing(num) {
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      const div = document.createElement("div");
      div.classList.add("gridCell");
      div.style.width = "calc(100%/" + num + ")";
      div.style.height = "calc(100%/" + num + ")";
      divContainer.appendChild(div);
    }
  }
}
