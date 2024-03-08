document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin);

  /****************************************************
   * Control the time counter in reference to the scroll
   ***************************************************/
  const initialValue = 4.5e9; // 4.5 billion
  const totalHeight = 50000;
  document.querySelector(".container").style.height = totalHeight + "px";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Adjust the scrub value for smoother animation
      //markers: true,
      onUpdate: (self) => {
        const newValue = initialValue - self.progress * initialValue;
        document.getElementById("number").textContent = Math.round(newValue);
        //console.log(self.progress);
      },
    },
  });

  document.querySelectorAll("section").forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top", // Start pinning when top of section hits top of viewport
        end: "bottom bottom", // Stop pinning when bottom of section hits bottom of viewport
        pin: true, // Pin the section
        pinSpacing: false, // Do not reserve the pinned space
      },
    });
  });

  /****************************************************
   * Section 1: Primordial soup
   * Randomly moving circles
   ***************************************************/

  // Function to create a random number within the range of the screen
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Get the viewport dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Number of circles to create
  const numCircles = 30;

  // Create circles dynamically and animate them
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    const initialX = randomInRange(0, screenWidth);
    const initialY = randomInRange(0, screenHeight);

    circle.setAttribute("cx", initialX);
    circle.setAttribute("cy", initialY);
    circle.setAttribute("r", 5); // Radius of the circle
    document.getElementById("formation-container").appendChild(circle);

    // Animate the SVG element using GSAP
    // gsap.to(circle, {
    //   duration: randomInRange(0.1, 1),
    //   x: () => randomInRange(-screenWidth * 0.5, screenWidth * 0.5),
    //   y: () => randomInRange(-screenHeight * 0.5, screenHeight * 0.5),
    //   ease: "power1.inOut",
    //   yoyo: true,
    //   repeat: -1,
    // });

    // Create a timeline for the circle animation
  }

  const circles = gsap.utils.toArray("circle");

  const circleTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#formation",
      start: "top 10", // Adjust start position as needed
      end: "bottom bottom", // Adjust end position as needed
      markers: true,
      scrub: true,

      onEnter: (self) => {
        animateCircles(self);
      },

      onUpdate: (self) => {
        animateCircles(self);
      },
    },
  });

  function animateCircles(self) {
    const progress = self.progress;

    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    circles.forEach((circle) => {
      gsap.to(circle, {
        duration: randomInRange(0.1, 0.5),
        cx: randomInRange(
          centerX - (1 - progress) * 0.5 * screenWidth,
          centerX + (1 - progress) * 0.5 * screenWidth
        ),
        cy: randomInRange(
          centerY - (1 - progress) * 0.5 * screenHeight,
          centerY + (1 - progress) * 0.5 * screenHeight
        ),
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    });
  }

  //animateCircles();

  /****************************************************
   * Section 2: Formation of Single-Cellular Organisms
   * Randomly moving circles
   ***************************************************/

  const path = document.getElementById("path");
  const length = path.getTotalLength();

  // Set the strokeDasharray and strokeDashoffset properties
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#single-cell",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .to("path", {
      strokeDashoffset: 0,
    });

  /****************************************************
   * Section ?: Formation of Multi-Cellular Organisms
   * Multiplication of circles
   ***************************************************/
  // Calculate the number of circles needed to fill the screen
  const circleRadius = 3; // Adjust the radius of circles as needed
  const horizontalCircles = Math.ceil(screenWidth / (2 * circleRadius));
  const verticalCircles = Math.ceil(screenHeight / (2 * circleRadius));

  // Create circles dynamically and position them to form a grid
  const svgContainer = document.getElementById("multicell-container");
  for (let i = 0; i < horizontalCircles; i++) {
    for (let j = 0; j < verticalCircles; j++) {
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", i * 2 * circleRadius + circleRadius);
      circle.setAttribute("cy", j * 2 * circleRadius + circleRadius);
      circle.setAttribute("r", circleRadius);
      circle.setAttribute("fill", "blue"); // Adjust the color as needed
      svgContainer.appendChild(circle);
    }
  }
});
