
//Mouse enter
//Outer div expands
//Circles start moving slightly after
//Circles continuously move to random locations

//Mouse leave
//circles return to original location
//Outer div shrinks



const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  let circleMovementInterval;

  letter.addEventListener("mouseenter", () => {
    letter.style.overflow = "visible";
    setTimeout(function () {
      clearInterval(circleMovementInterval); // Clear previous interval if exists
      moveCircles(letter); // Start moving circles immediately
      circleMovementInterval = setInterval(() => {
        moveCircles(letter); // Move circles periodically
      }, 500); // Adjust interval duration as needed
    }, 200);
  });

  letter.addEventListener("mouseleave", () => {
    clearInterval(circleMovementInterval);
    letter.querySelectorAll(".circle").forEach((circle) => {
      circle.style.transform = "translate(0, 0)";
    });

    setTimeout(function () {
      letter.style.overflow = "hidden";
    }, 1000);
  });
});

function moveCircles(letter) {
  letter.querySelectorAll(".circle").forEach((circle) => {
    const circleRect = circle.getBoundingClientRect();
    const circleWidth = circleRect.width;
    const circleHeight = circleRect.height;

    // Adjust max values to prevent circles from moving off the screen
    const maxX = window.innerWidth - circleWidth;
    const maxY = window.innerHeight - circleHeight;

    // Calculate random positions within the screen bounds
    const randomX = Math.max(
      0,
      Math.min(maxX, Math.random() * (2 * maxX) - maxX)
    );
    const randomY = Math.max(
      0,
      Math.min(maxY, Math.random() * (2 * maxY) - maxY)
    );

    circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}
