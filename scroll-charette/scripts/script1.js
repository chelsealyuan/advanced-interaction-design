document.addEventListener("DOMContentLoaded", () => {
  // Loop through each block with class "block"
  gsap.utils.toArray(".block").forEach((block, index) => {
    // Create a GSAP timeline for each block
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "top 10%",
        end: "bottom top",
        scrub: true,
      },
    });

    // Add animations to the timeline for each block
    if (index % 2 === 0) {
      // For even-indexed blocks, roll to the right
      timeline.to(block, {
        x: 500,
        rotation: 360,
      });
    } else {
      // For odd-indexed blocks, roll to the left
      timeline.to(block, {
        x: -500,
        rotation: 360,
      });
    }
  });
});
