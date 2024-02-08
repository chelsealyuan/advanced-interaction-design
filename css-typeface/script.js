
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

  letter.addEventListener("mouseenter", () => {
    letter.style.overflow = "visible";
    letter.style.transform = "scale(2)";

    letter.querySelectorAll(".circle").forEach((circle) => {
      circle.style.transform = "scale(0.5)";
    });

    setTimeout(function () {
      clearInterval(circleMovementInterval); 

      moveCircles(letter);

      circleMovementInterval = setInterval(() => {
        moveCircles(letter); 
      }, 300); 
    }, 200);
  });

  letter.addEventListener("mouseleave", () => {
    console.log("mouse left: " + letter)

    clearInterval(circleMovementInterval);

    letter.style.transform = "scale(1)";

    letter.querySelectorAll(".circle").forEach((circle) => {
      circle.style.transform = "translate(0, 0)";
    });

    setTimeout(function () {
      letter.style.overflow = "hidden";
    }, 100);
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
      Math.min(maxX, ((Math.random() - 0.5)*2) * (2 * maxX) - maxX)
    );
    const randomY = Math.max(
      0,
      Math.min(maxY, ((Math.random() - 0.5)*2) * (2 * maxY) - maxY)
    );

    circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}

