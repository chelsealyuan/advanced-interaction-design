document.addEventListener("DOMContentLoaded", () => {

// Used https://codepen.io/ryandejaegher/pen/abmqWZy to help
  gsap.registerPlugin(ScrollTrigger);

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
});
