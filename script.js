const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

function makeRows(rows, cols) {
  container.innerHTML = "";
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let index = 0; index < rows * cols; index++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = "black";
    });
    container.appendChild(cell);
  }
}

resetButton.addEventListener("click", () => {
  const gridNumber = parseInt(prompt("What grid you want?"));
  if (!isNaN(gridNumber)) {
    makeRows(gridNumber, gridNumber);
  } else {
    alert("You didn't add number");
  }
});

makeRows(16, 16);
