document.addEventListener("DOMContentLoaded", () => {
  /****************************************************
   * Global
   ***************************************************/
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin);

  const colors = ["#9FBDBF", "#B1C0A3", "#466B73"];

  // Get the viewport dimensions
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const margin = screenWidth * 0.2;

  const leftXMargin = margin;

  const rightXMargin = screenWidth - margin;

  /****************************************************
   * Proportion height of sections
   ***************************************************/
  const initialValue = 4.5e9; // 4.5 billion
  const totalHeight = 75000;
  document.querySelector(".container").style.height = totalHeight + "px";

  const heights = {
    hadean: 11,
    archean: 37,
    eukaryote: 18,
    multicell: 22,
    phanerozoic: 12,
  };

  document.querySelector(".hadean").style.height =
    (heights.hadean / 100) * totalHeight + "px";

  document.querySelector(".archean").style.height =
    (heights.archean / 100) * totalHeight + "px";

  document.querySelector("#eukaryote").style.height =
    (heights.eukaryote / 100) * totalHeight + "px";

  document.querySelector("#multi-cell").style.height =
    (heights.multicell / 100) * totalHeight + "px";

  document.querySelector(".phanerozoic").style.height =
    (heights.phanerozoic / 100) * totalHeight + "px";

  /****************************************************
   * Control the time counter in reference to the scroll
   ***************************************************/
  function setNumberColor(container) {
    var element = document.getElementById("number");
    var backgroundColor = window.getComputedStyle(container).backgroundColor;

    var rgb = backgroundColor.match(/\d+/g);
    if (rgb) {
      var brightness =
        (parseInt(rgb[0]) * 299 +
          parseInt(rgb[1]) * 587 +
          parseInt(rgb[2]) * 114) /
        1000;
      var textColor = brightness > 125 ? "black" : "white";
      element.style.color = textColor;
    }
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",

      onUpdate: (self) => {
        const roundedProgress = self.progress.toFixed(6);
        const newValue = initialValue - roundedProgress * initialValue;
        document.getElementById("number").textContent = Math.round(newValue);
      },
    },
  });

  //Set all intial sections to 0
  gsap.set("section:not(#formation)", { autoAlpha: 0 });

  //Set ScrollTrigger between sections: https://gsap.com/community/forums/topic/30744-how-use-scrolltrigger-to-move-between-sections/
  document.querySelectorAll("section").forEach((section, index, sections) => {
    if (index > 0) {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          toggleActions: "play play play reverse",
          markers: true,
          onEnter: () => {
            setNumberColor(section);
          },
          onEnterBack: () => {
            setNumberColor(section);
          },
        },
        duration: 0.001,
        autoAlpha: 1,
      });
    }
  });

  /****************************************************
   * Section 1: Primordial soup
   * Randomly moving atoms
   ***************************************************/

  // Function to create a random number within the range of the screen
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

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

  const atoms = gsap.utils.toArray("#formation-container circle");

  gsap.timeline({
    scrollTrigger: {
      trigger: "#formation",
      start: "top 10",
      end: "bottom top",
      pin: true,
      pinSpacing: false,

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
  const cells = document.querySelectorAll(".archean .cell");
  cells.forEach((cell, index) => {
    gsap.set(
      cell,
      {
        x: screenWidth / 2,
        y: screenHeight / 2,
      },
      0
    );
  });

  const cellTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".archean",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
      overwrite: "auto",
    },
  });

  cells.forEach((cell, index) => {
    cellTl.to(
      cell,
      {
        duration: 1,
        width: "2em",
        aspectRatio: "1/1",
        //backgroundColor: color,
        onComplete: () => {
          gsap.to(
            cell,
            {
              delay: randomInRange(0, 1),
              duration: randomInRange(1, 2),
              rotation: randomInRange(-45, 45),
              borderRadius: "45%",
              ease: "power1.inOut",
              scaleY: 2,
              yoyo: true,
              repeat: -1,
            },
            0
          );
        },
      },
      0
    );

    cellTl.to(
      cell,
      {
        motionPath: {
          path: generatePath(cell.classList),
          align: "center",
          autoRotate: true,
        },
        ease: "power1.inOut",
        duration: 6,
      },
      0
    );
  });

  function generatePath(cellClass) {
    const numPoints = Math.floor(Math.random() * 5) + 2; // At least 2 points for a path

    // Generate random points within the screen boundaries
    const path = [];
    for (let i = 0; i < numPoints - 1; i++) {
      const randomX = randomInRange(leftXMargin, rightXMargin);
      const randomY = randomInRange(0, screenHeight);
      path.push({ x: randomX, y: randomY });
    }

    // Set the last X coordinate based on the presence of specific classes
    let randomXLast;
    if (cellClass.contains("eukaryote")) {
      randomXLast = leftXMargin;
    } else if (cellClass.contains("cell1")) {
      randomXLast = screenWidth / 2;
    } else if (cellClass.contains("cell2")) {
      randomXLast = rightXMargin;
    } else {
      randomXLast = randomInRange(
        0 + screenWidth * 0.1,
        screenWidth - screenWidth * 0.1
      );
    }

    // Generate the last point with Y coordinate in the bottom half of the screen
    const randomYLast = randomInRange(screenHeight / 2, screenHeight);
    path.push({ x: randomXLast, y: randomYLast });

    return path;
  }

  /****************************************************
   * Section 3: Photosynthesis
   * Prokaryotes grow in opacity as sun rotates
   ***************************************************/
  const sun = document.querySelector("#sun");

  // Define the initial position of the sun above the screen
  gsap.set(sun, { y: -sun.offsetHeight / 2, opacity: 0 });

  gsap.to(sun, {
    scale: 0.9,
    yoyo: true,
    repeat: -1,
    duration: 1,
  });

  // Add movement animation for the sun into the cellTl timeline
  cellTl
    .to(sun, { duration: 0, opacity: 1 })
    .to(sun, {
      duration: 0.5,
      y: -(sun.offsetHeight / 4),
    })
    .to(cells, {
      opacity: 0.9,
      duration: 1,
    })
    .to(sun, {
      duration: 0.5,
      y: -sun.offsetHeight / 2,
      opacity: 0,
    });

  // Iterate over each cell and add animations
  cells.forEach((cell, index) => {
    // Animation for moving the cell up
    cellTl.to(
      cell,
      {
        duration: 0.2,
        y: screenHeight / 2,
        scaleY: 1,
        ease: "power2.out",
        onComplete: () => {
          if (cell.classList.contains("explode")) {
            explodeCircle(cell);
            cell.style.opacity = 0;
          } else {
            gsap.to(
              cell,
              {
                borderRadius: "50%",
                ease: "power1.inOut",
                scaleY: 1,
                yoyo: true,
                repeat: -1,
              },
              0
            );
          }
        },
      },
      "-=0.1"
    );
  });

  function explodeCircle(cell) {
    const numParticles = 15;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("circle");
      particle.classList.add("particle");

      // Get cell position relative to the viewport
      const cellRect = cell.getBoundingClientRect();
      const cellTop = cellRect.top;
      const cellLeft = cellRect.left;

      // Set particle position relative to the viewport
      particle.style.position = "absolute";
      particle.style.top = cellTop + "px";
      particle.style.left = cellLeft + "px";
      document.getElementById("single-cell").appendChild(particle);

      // Calculate the coordinates ensuring they are outside the viewport
      const buffer = 100;
      const x = randomInRange(-screenWidth - buffer, 2 * screenWidth + buffer);
      const y = randomInRange(
        -screenHeight - buffer,
        2 * screenHeight + buffer
      );

      // Then, animate the elements to these coordinates using GSAP
      gsap.to(particle, {
        x: x,
        y: y,
        onComplete: () => {
          particle.remove();
        },
      });
    }
  }

  /****************************************************
   * Section 4: Eukaryotes
   * Multiplication of atoms
   ***************************************************/

  const eukaryoteTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#eukaryote",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      pinSpacing: false,
      anticipatePin: false,
      //markers: true,
    },
  });

  const cell1Path = document.querySelector("#cell1");
  const cell2Path = document.querySelector("#cell2");

  const cell1Length = cell1Path.getTotalLength();
  const cell2Length = cell2Path.getTotalLength();

  gsap.set("#mainCell", {
    cx: leftXMargin,
    cy: screenHeight / 2,
  });

  gsap.set("#cell1", { cx: screenWidth / 2, cy: screenHeight / 2 });

  gsap.set("#cell2", {
    cx: rightXMargin,
    cy: screenHeight / 2,
  });

  //Animate stroke for chloroplast and
  // Set the strokeDasharray and strokeDashoffset properties
  cell1Path.style.strokeDasharray = cell1Length;
  cell1Path.style.strokeDashoffset = cell1Length;

  cell2Path.style.strokeDasharray = cell2Length;
  cell2Path.style.strokeDashoffset = cell2Length;

  eukaryoteTl
    .to("#cell1", {
      duration: 1,
      fill: "#466B73",
      scaleY: 1.5,
      strokeDashoffset: 0,
    })
    .to("#cell2", {
      duration: 1,
      fill: "#466B73",
      scaleX: 1.5,
      strokeDashoffset: 0,
    });

  eukaryoteTl.to("#mainCell", {
    duration: 3,
    cx: rightXMargin,
  });

  eukaryoteTl
    .to(
      "#cell1",
      {
        duration: 0.1,
        opacity: 0,
      },
      "-=2.3"
    )
    .to(
      "#mainCell",
      {
        duration: 0.1,
        r: "2em",
      },
      "-=2.3"
    );

  eukaryoteTl
    .to(
      "#cell2",
      {
        duration: 0.1,
        opacity: 0,
      },
      "-=1.3"
    )
    .to(
      "#mainCell",
      {
        duration: "4em",
        r: 2,
      },
      "-=1.3"
    );

  eukaryoteTl.to("#mainCell", {
    duration: 2,
    cx: screenWidth / 2,
    r: "0.2em",
    fill: "#9fbdbf",
  });

  /****************************************************
   * Section 5: Multi-Cellular Life
   * Expansion of cell into fungi
   ***************************************************/

  const multiCell = gsap.timeline({
    scrollTrigger: {
      trigger: "#multi-cell",
      start: "top top",
      end: "bottom top",
      //scrub: true,
      //pin: true,
      //markers: true,
      //anticipatePin: false
    },
  });
  
  const fungiSvg = document.querySelector("#fungi");
  const translationY = screenHeight / 2;
  fungiSvg.style.transform =
    "translateY("  + translationY + "px)";

  const masks = document.querySelectorAll("mask");

  masks.forEach((mask) => {
    const maskLine = mask.querySelector("line");
    let maskLineLength = maskLine.getTotalLength();
    maskLine.style.strokeDasharray = maskLineLength;
    maskLine.style.strokeDashoffset = maskLineLength;

    gsap.to(maskLine, {
      scrollTrigger: {
        trigger: maskLine,
        start: "top 50%",
        toggleActions: "play none none reverse",
        ease: "power1.out",
      },
      strokeDashoffset: 0, // Animate stroke-dashoffset to 0, revealing the entire line
      duration: 0.5, // Duration of the animation
    });
  });

  /****************************************************
   * Section 6: Plants
   * Multiplication of atoms
   ***************************************************/

  /****************************************************
   * Section 7: Cambrian Explosion
   * Multiplication of atoms
   ***************************************************/
});

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
