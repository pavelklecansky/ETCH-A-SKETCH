const container = document.querySelector("#container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let index = 0; index < rows * cols; index++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.innerText = index + 1;
    container.appendChild(cell);
  }
}
makeRows(16,16);
