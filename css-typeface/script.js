//Mouse enter
//Outer div expands
//Circles start moving slightly after
//Circles continuously move to random locations

//Mouse leave
//circles return to original location
//Outer div shrinks

//Bug 1: overflow hidden activating/deactivating not on correct trigger
// transform: translate z-axis
// CSS clip-path with overflow hidden
// border radius clipping bug

//Bug 2: continual movement of circles after mouseleave (inconsistent mouseleave trigger?)
// circle move out of its based on a class
// use mouse movement to add classes

//Bug 3: circles can leave the viewport
//Bug 4: Div expansion moves other obj in the DOM

const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  let circleMovementInterval;
  const circles = letter.querySelectorAll(".circle");

  letter.addEventListener("mouseenter", () => {
    letter.style.overflow = "visible";

    letter.classList.add("scale-up");

    // circles.forEach((circle) => {
    //   circle.style.transform = `translate(0px, 0px) scale(0.5)`;
    // });

    setInterval(() => {
      moveCircles(letter);
    }, 50);

    // setTimeout(function () {
    //   clearInterval(circleMovementInterval);

    //   moveCircles(letter);

    //   circleMovementInterval = setInterval(() => {
    //     moveCircles(letter);
    //   }, 300);
    // }, 100);
  });

  letter.addEventListener("mouseleave", () => {
    clearInterval(circleMovementInterval);

    letter.classList.remove("scale-up");
    letter.style.overflow = "hidden";

    circles.forEach((circle) => {
      circle.style.transform = "translate(0, 0)";
    });
  });
});

// function moveCircles(letter) {
//   const circles = letter.querySelectorAll(".circle");

//   circles.forEach((circle) => {
//     const circleRect = circle.getBoundingClientRect();
//     const circleWidth = circleRect.width;
//     const circleHeight = circleRect.height;

//     const maxX = window.innerWidth - circleWidth;
//     const maxY = window.innerHeight - circleHeight;

//     const randomX = Math.max(
//       0,
//       Math.min(maxX, (Math.random() - 0.5) * 2 * (2 * maxX) - maxX)
//     );
//     const randomY = Math.max(
//       0,
//       Math.min(maxY, (Math.random() - 0.5) * 2 * (2 * maxY) - maxY)
//     );

//     circle.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.5)`;
//   });
// }

function moveCircles(letter) {
  const movementContainer = document.querySelector("body");
  const circles = letter.querySelectorAll(".circle");
  // Get viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  circles.forEach((circle) => {
    // Random horizontal and vertical speed
    let xSpeed = Math.random() * 2 - 1; // Range from -1 to 1
    let ySpeed = Math.random() * 2 - 1; // Range from -1 to 1

    // Update circle position
    let rect = circle.getBoundingClientRect();
    let x = rect.left + xSpeed;
    let y = rect.top + ySpeed;

    // Apply horizontal randomness
    x += Math.random() * 2 - 1; // Range from -1 to 1

    // Ensure circles stay within viewport bounds
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + rect.width > viewportWidth) x = viewportWidth - rect.width;
    if (y + rect.height > viewportHeight) y = viewportHeight - rect.height;

    circle.style.transform = `translate(${x}px, ${y}px) scale(0.5)`;
  });
}
