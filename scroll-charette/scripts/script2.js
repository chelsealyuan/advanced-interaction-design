document.addEventListener("DOMContentLoaded", () => {
    // Define the base color (e.g., blue)
    const baseColor = "rgb(0, 0, 255)";
    // Define the initial lightness
    let lightness = 50;
  
    // Loop through each block with class "block"
    gsap.utils.toArray(".block").forEach((block, index) => {
      // Adjust the lightness based on the block index
      lightness -= 5; // Adjust the decrement value as needed
    
      // Ensure lightness remains within the valid range (0-100)
      lightness = Math.max(0, Math.min(100, lightness));
    
      // Construct the color with adjusted lightness
      const color = `hsl(240, 100%, ${lightness}%)`;
    
      // Apply the color to the block
      block.style.backgroundColor = color;
  
      // Create a GSAP timeline for each block
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
      });
  
      // Add animations to the timeline for each block
      timeline.to(block, {
        width: "100%",
      });
    });
  });
  
