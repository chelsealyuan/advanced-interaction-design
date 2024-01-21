document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("gridContainer");

  // Add event listener to each div
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach(function (gridItem, index) {
    gridItem.addEventListener("click", function () {
      onClick(index);
    });
  });

  //Div 0
  let toggle0 = false;
  document.querySelector("#div-0").children[1].classList.add("hidden");

  //Div 5
  let isRound = false;

  //Div 6
  let isDoubleHeight = false;

  //Div 8
  let hasNoise = false;

  function onClick(value) {
    console.log(`Clicked on Div ${value}`);

    //Div 0
    if (value === 0) {
      const div0 = document.querySelector("#div-0");
      if (toggle0) {
        div0.style.backgroundColor = "#000000";
        div0.children[1].classList.add("hidden");
        div0.children[0].classList.remove("hidden");
      } else {
        div0.style.backgroundColor = "#ffffff";
        div0.children[0].classList.add("hidden");
        div0.children[1].classList.remove("hidden");
      }
      toggle0 = !toggle0;
    }

    //Div 1
    if (value === 1) {
      var audio = new Audio("assets/bing-chilling.mp3");
      audio.play();
    }

    //Div 2

    //Div 3
    if (value === 3) {
      moveCircle("div-3", "div-7");
    }

    //Div 4
    if (value === 4) {
      fillWithRandomCircle(document.querySelector("#div-4"));
    }

    //Div 5
    if (value === 5) {
      const div5 = document.getElementById("div-5");

      if (isRound) {
        div5.style.borderRadius = "0";
      } else {
        const size = Math.min(div5.offsetWidth, div5.offsetHeight);
        div5.style.borderRadius = size / 2 + "px";
      }

      isRound = !isRound; // Toggle the state
    }

    //Div 6
    if (value === 6) {
      const div6 = document.getElementById("div-6");

      if (isDoubleHeight) {
        // If it's already double height, make it normal height
        div6.classList.remove("double-height");
      } else {
        // If it's normal height, make it double height
        div6.classList.add("double-height");
      }

      isDoubleHeight = !isDoubleHeight; // Toggle the state
    }

    //Div 7
    if (value === 7) {
      moveCircle("div-7", "div-3");
    }

    //Div 8
    if (value === 8) {
      const div8 = document.getElementById("div-8");
      if (hasNoise) {
        div8.querySelector("svg").style.display = "block";
      } else {
        div8.querySelector("svg").style.display = "none";
      }
      hasNoise = !hasNoise;
    }
  }
});

//moveCircle("div-3", "div-3")

function moveCircle(sourceDivId, targetDivId) {
  const sourceDiv = document.getElementById(sourceDivId);
  const circleSVG = sourceDiv.querySelector(".circle-svg");
  const targetDiv = document.getElementById(targetDivId);

  if (circleSVG && targetDiv) {
    // Clone the circle SVG
    const clonedCircle = circleSVG.cloneNode(true);

    // Remove the original circle from the sourceDiv
    circleSVG.remove();

    // Append the cloned circle to the targetDiv
    targetDiv.appendChild(clonedCircle);

    // Calculate the position difference between source and target
    const sourceRect = sourceDiv.getBoundingClientRect();
    const targetRect = targetDiv.getBoundingClientRect();

    // Calculate deltaY to position the circle at the bottom of the targetDiv
    const deltaY = targetRect.top - (3 / 2) * clonedCircle.clientHeight;
    // - sourceRect.bottom - (3/2 * clonedCircle.clientHeight);

    // Apply transform to move the circle
    clonedCircle.style.transform = `translate(0, ${deltaY}px)`;
  }
}

function fillWithRandomCircle(container) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  // Set random position within the container
  circle.style.left = Math.random() * container.offsetWidth + "px";
  circle.style.top = Math.random() * container.offsetHeight + "px";

  // Set random background color
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;

  // Set size as a percentage of the container width
  const circleSizePercentage = 10; // Size as a percentage of container width
  const sizeInPixels = (circleSizePercentage / 100) * container.offsetWidth;
  circle.style.width = sizeInPixels + "px";
  circle.style.height = sizeInPixels + "px";

  container.appendChild(circle);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
