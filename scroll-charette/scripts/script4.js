gsap.registerPlugin(ScrollTrigger);

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
  x: '100%',
});