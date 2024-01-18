document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("gridContainer");

  // Create 50 divs dynamically with unique styles
  for (let i = 0; i < 50; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add(
      "grid-item", "div-" + i
    );
    gridItem.textContent = `Div ${i}`;
    gridContainer.appendChild(gridItem);
  }
});
