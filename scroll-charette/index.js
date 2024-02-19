/**
 *
 * Here is our JavaScript file!
 * In here, we can set up a number of interactions that respond to
 * triggers, modifying our HTML.
 *
 */

// First, we listen for an event triggered when the document loads all HTML
// This is a common practice to prevent errors from modifying HTML that is not loaded yet
document.addEventListener("DOMContentLoaded", () => {
  /**
   *
   * In this project, we are going to use the GSAP animation library to code animations.
   * We first load GSAP and a plugin in the HTML file.
   *
   * In this script, we tell GSAP library to use the ScrollTrigger plugin.
   *
   * GSAP Documentation: https://gsap.com/docs/v3/
   * GSAP Plugin: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
   *
   */
  gsap.registerPlugin(ScrollTrigger);

  /**
   *
   * Next we are going to create what GSAP calls a "timeline" to control our animations.
   * This timeline has specific documentation.
   * GSAP Timeline Documentation: (https://gsap.com/docs/v3/GSAP/Timeline/)
   *
   * We can create our timeline with a set of options.
   * In this case these options relate to the scroll trigger plugin we are using.
   * GSAP Plugin Documentation: (https://gsap.com/docs/v3/Plugins/ScrollTrigger/#advanced-example)
   *
   */
  var timeline_options = {
    scrollTrigger: {
      trigger: ".container",
      // pin: true, // uncomment this value to pin the "container" in the same spot while animating
      start: "top top", // this controls starting the animation when the top of container is at the top of the screen
      end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
      scrub: 0, // this controls animation timing relative to scroll
      // scrub: 1 // uncomment this value to delay animations
    },
  };
  var timeline = gsap.timeline(timeline_options);

  /**
   * Now we have a timeline that controls animations. The timeline duration is equal to the height
   * of our .container based on the ScrollTrigger options we set.
   *
   * Next we can add animations to the timeline. By default, each animation we add to the timeline
   * will split up the duration of the timeline evenly. So if we start with 1 animation, it will
   * animate the entire length of our scroll.
   *
   * If we want to time things differently, GSAP gives some options:
   * (https://gsap.com/docs/v3/GSAP/Timeline/#positioning-animations-in-a-timeline)
   *
   * Here I've added an animation to scale and rotate "#block-1"
   *
   */

  /**
   *  Uncomment sections below to add other animations
   *  You will start to notice durations and timing are important.
   *  Here is some docuentation for how duration works with ScrollTrigger
   * https://gsap.com/docs/v3/Plugins/ScrollTrigger/#how-does-duration-work-with-scrub-true
   */

  gsap.registerPlugin(ScrollTrigger);

  var currentUrl = window.location.href;

  if (currentUrl.includes("page1.html")) {
    gsap.utils.toArray(".block").forEach((block, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 10%",
          end: "bottom top",
          scrub: true,
        },
      });

      if (index % 2 === 0) {
        timeline.to(block, {
          x: 500,
          rotation: 360,
        });
      } else {
        timeline.to(block, {
          x: -500,
          rotation: 360,
        });
      }
    });
  }

  if (currentUrl.includes("page2.html")) {
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
  }

  if (currentUrl.includes("page3.html")) {
    // Used https://codepen.io/ryandejaegher/pen/abmqWZy to help

    gsap.from(".block", {
      scrollTrigger: {
        trigger: ".flex",
        pin: true,
        markers: true,
        scrub: 2,
        start: "bottom center",
        end: "+=1000 center",
      },
      opacity: 0,
      y: -100,
      ease: "back.out(4)",
      stagger: {
        amount: 3,
      },
    });
  }

  if (currentUrl.includes("page4.html")) {
    gsap.to(".horizontal-scroll", {
      scrollTrigger: {
        trigger: ".container4",
        markers: true,
        start: "top top",
        end: "bottom top",
        pin: ".container4",
        scrub: 2,
      },
      opacity: 1,
      x: "100%",
    });
  }
  if (currentUrl.includes("page5.html")) {
    gsap.to(".spinner", {
      scrollTrigger: {
        trigger: ".container5",
        start: "top top", // Adjust this value as needed
        end: "bottom top",
        scrub: true,
        markers: true,
        pin: ".spinner"
      },
      rotationY: 360, // Rotate 360 degrees on the Y-axis
      ease: "none",
    });
  }

  if (currentUrl.includes("page6.html")) {
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        scrub: true,
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none",
    });
  }

  if (currentUrl.includes("page7.html")) {
    
  }

  if (currentUrl.includes("page8.html")) {
    
  }

  if (currentUrl.includes("page9.html")) {
    
  }

  if (currentUrl.includes("page10.html")) {
    
  }
});
