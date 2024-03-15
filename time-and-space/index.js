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
      scrub: 1,
      onUpdate: (self) => {
        const newValue = initialValue - self.progress * initialValue;
        document.getElementById("number").textContent = Math.round(newValue);
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
   * Randomly moving atoms
   ***************************************************/

  // Function to create a random number within the range of the screen
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Get the viewport dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Number of atoms to create
  const numAtoms = 30;

  // Create atoms dynamically and animate them
  for (let i = 0; i < numAtoms; i++) {
    const atom = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    const initialX = randomInRange(0, screenWidth);
    const initialY = randomInRange(0, screenHeight);

    atom.setAttribute("cx", initialX);
    atom.setAttribute("cy", initialY);
    atom.setAttribute("r", 5); // Radius of the circle
    document.getElementById("formation-container").appendChild(atom);
  }

  const atoms = gsap.utils.toArray("circle");

  gsap.timeline({
    scrollTrigger: {
      trigger: "#formation",
      start: "top 10", // Adjust start position as needed
      end: "bottom bottom", // Adjust end position as needed
      scrub: true,

      onEnter: (self) => {
        animateAtoms(self);
      },

      onUpdate: (self) => {
        animateAtoms(self);
      },
    },
  });

  function animateAtoms(self) {
    const progress = self.progress;

    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    atoms.forEach((atom) => {
      gsap.to(atom, {
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

  /****************************************************
   * Section 2: Formation of Single-Cellular Organisms
   * Circle - Square
   ***************************************************/

  const cellTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#single-cell",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });

  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    gsap.to(cell, {
      duration: randomInRange(0.5, 1),
      borderRadius: 20,
      rotation: randomInRange(-180, 180), // Rotate by 360 degrees
      ease: "power1.inOut", // Use ease for smooth rotation
      scale: 0.8,
      yoyo: true,
      repeat: -1,
    });


    const numPoints = Math.floor(Math.random() * 5) + 2; // At least 2 points for a path

    // Generate random points within the screen boundaries
    const path = [];
    for (let i = 0; i < numPoints; i++) {
      const randomX = randomInRange(-screenWidth/2, screenWidth/2);
      const randomY = randomInRange(-screenHeight/2, screenHeight/2);
      path.push({ x: randomX, y: randomY });
    }

    cellTl.to(cell, {
      motionPath: {
        path: path,
        align: "center",
        autoRotate: true,
      },
      ease: "power1.inOut",
    }, 0);
  });

  // const path = document.getElementById("path");
  // const length = path.getTotalLength();

  // // Set the strokeDasharray and strokeDashoffset properties
  // path.style.strokeDasharray = length;
  // path.style.strokeDashoffset = length;

  // gsap
  //   .timeline({
  //     scrollTrigger: {
  //       trigger: "#single-cell",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: 1,
  //     },
  //   })
  //   .to("path", {
  //     strokeDashoffset: 0,
  //   });

  /****************************************************
   * Section ?: Formation of Multi-Cellular Organisms
   * Multiplication of atoms
   ***************************************************/
  // Calculate the number of atoms needed to fill the screen
  const circleRadius = 3; // Adjust the radius of atoms as needed
  const horizontalAtoms = Math.ceil(screenWidth / (2 * circleRadius));
  const verticalAtoms = Math.ceil(screenHeight / (2 * circleRadius));

  // Create atoms dynamically and position them to form a grid
  const svgContainer = document.getElementById("multicell-container");
  for (let i = 0; i < horizontalAtoms; i++) {
    for (let j = 0; j < verticalAtoms; j++) {
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
