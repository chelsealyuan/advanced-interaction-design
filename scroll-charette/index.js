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

});
