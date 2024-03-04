document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollToPlugin);

  const initialValue = 4.5e9; // 4.5 billion
  const totalHeight = 450000;
  document.querySelector(".container").style.height = totalHeight + "px";

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // Adjust the scrub value for smoother animation
      markers: true,
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


  const path = document.getElementById("path");
  const length = path.getTotalLength();

  // Set the strokeDasharray and strokeDashoffset properties
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  tl.to("path", {
    strokeDashoffset: 0,
  });



  // Calculate the number of circles needed to fill the screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const circleRadius = 3; // Adjust the radius of circles as needed
  const horizontalCircles = Math.ceil(screenWidth / (2 * circleRadius));
  const verticalCircles = Math.ceil(screenHeight / (2 * circleRadius));

  // Create circles dynamically and position them to form a grid
  const svgContainer = document.getElementById('svgContainer');
  for (let i = 0; i < horizontalCircles; i++) {
      for (let j = 0; j < verticalCircles; j++) {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', i * 2 * circleRadius + circleRadius);
          circle.setAttribute('cy', j * 2 * circleRadius + circleRadius);
          circle.setAttribute('r', circleRadius);
          circle.setAttribute('fill', 'blue'); // Adjust the color as needed
          svgContainer.appendChild(circle);
      }
  }
});
