//Mouse enter
//Outer div expands
//Circles start moving slightly after
//Circles continuously move to random locations

//Mouse leave
//circles return to original location
//Outer div shrinks

//Bug 3: circles can leave the viewport

//Circle loses blend mode once exiting

// window.onload = function () {
//   const letters = document.querySelectorAll(".letter");
//   letters.forEach((letter) => {
//     letter.classList.add("clipped");
//   });
// };

const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  let circleMovementInterval;
  const circles = letter.querySelectorAll(".circle");

  letter.addEventListener(
    "mouseenter",
    (event) => {
      setTimeout(() => {
        letter.classList.remove("clipped");
      });

      circleMovementInterval = setInterval(() => {
        moveCircles(letter);
      }, 100);
      event.stopPropagation();
    },
    false
  );

  letter.addEventListener(
    "mouseleave",
    (event) => {
      clearInterval(circleMovementInterval);

      circles.forEach((circle) => {
        circle.style.transform = "translate(0, 0)";
      });
      
      event.stopPropagation();
    },
    false
  );
});

function moveCircles(letter) {
  const circles = letter.querySelectorAll(".circle");

  circles.forEach((circle) => {
    let rect = circle.getBoundingClientRect();
    let originalX = rect.left;
    let originalY = rect.top;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    // Store the previous position of the circle
    let lastX = parseFloat(circle.dataset.lastX || 0);
    let lastY = parseFloat(circle.dataset.lastY || 0);

    // Calculate the minimum and maximum values for x and y
    let minX = Math.max(lastX - 50, -originalX);
    let maxX = Math.min(lastX + 50, viewportWidth - originalX - rect.width);
    let minY = Math.max(lastY - 50, -originalY);
    let maxY = Math.min(lastY + 50, viewportHeight - originalY - rect.height);

    // Calculate random x and y within the restricted bounds
    let x = Math.random() * (maxX - minX) + minX;
    let y = Math.random() * (maxY - minY) + minY;

    // Update circle position and store the last position
    circle.style.transform = `translate(${x}px, ${y}px)`;
    circle.dataset.lastX = x;
    circle.dataset.lastY = y;
  });
}
