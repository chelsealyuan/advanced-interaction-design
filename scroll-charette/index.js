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

  // var timeline_options = {
  //   scrollTrigger: {
  //     trigger: ".container",
  //     // pin: true, // uncomment this value to pin the "container" in the same spot while animating
  //     start: "top top", // this controls starting the animation when the top of container is at the top of the screen
  //     end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
  //     scrub: 0, // this controls animation timing relative to scroll
  //     // scrub: 1 // uncomment this value to delay animations
  //   },
  // };
  // var timeline = gsap.timeline(timeline_options);

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

    gsap.utils.toArray(".block").forEach((block, index) => {
      lightness -= 5;
      lightness = Math.max(0, Math.min(100, lightness));

      const color = `hsl(240, 100%, ${lightness}%)`;

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
        pin: ".spinner",
      },
      rotationY: 360, // Rotate 360 degrees on the Y-axis
      ease: "none",
    });
  }

  //https://www.youtube.com/watch?v=QEn6t1Dln_M
  if (currentUrl.includes("page6.html")) {
    gsap.utils.toArray("span").forEach((span, i) => {
      ScrollTrigger.create({
        trigger: span,
        start: () => {
          return i == 0 ? "top 10%" : "top 40%";
        },
        toggleClass: "active",
      });
    });
  }

  if (currentUrl.includes("page7.html")) {
    var timeline_options = {
      scrollTrigger: {
        trigger: ".container7",
        pin: true, // uncomment this value to pin the "container" in the same spot while animating
        start: "top top", // this controls starting the animation when the top of container is at the top of the screen
        end: "bottom bottom", // this controls ending the animation when the bottom of container is at the bottom of the screen
        scrub: 1, // this controls animation timing relative to scroll
        ease: "power1.inOut",
      },
    };

    var timeline = gsap.timeline(timeline_options);

    timeline.to(".section1", {
      left: "-50%",
    });

    timeline.to(
      ".section2",
      {
        left: "50%",
      },
      0
    );

    timeline.to(
      ".section1",
      {
        left: "-100%",
      },
      1
    );

    timeline.to(
      ".section2",
      {
        left: "100%",
      },
      1
    );
  }

  if (currentUrl.includes("page8.html")) {
    gsap.registerPlugin(ScrollToPlugin);

    let navs = gsap.utils.toArray(".container8 nav a");

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      let trigger = ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });

      let nav = navs[i];

      nav.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: trigger.start,
        });
      });
    });
  }

  if (currentUrl.includes("page9.html")) {
    gsap.from(".block", {
      rotate: 360,
      duration: 2,
      repeat: -1,
      scrollTrigger: {
        trigger: ".block",
        toggleActions: "play pause reverse pause",
        markers: true,
        start: "top center",
        end: "bottom 60%",
        trigger: ".block",
        // Repeat forever
      },
    });
  }

  if (currentUrl.includes("page10.html")) {
    let sections = document.querySelectorAll(".section");
    let scrollContainer = document.querySelector(".scrollContainer");
    let clamp, dragRatio;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
    });

    let horizontalScroll = ScrollTrigger.create({
      animation: scrollTween,
      trigger: scrollContainer,
      pin: true,
      scrub: 1,
      end: () => "+=" + scrollContainer.offsetWidth,
    });

    var drag = Draggable.create(".proxy", {
      trigger: scrollContainer,
      type: "x",
      onPress() {
        clamp || ScrollTrigger.refresh();
        this.startScroll = horizontalScroll.scroll();
      },
      onDrag() {
        horizontalScroll.scroll(
          clamp(this.startScroll - (this.x - this.startX) * dragRatio)
        );
        // if you don't want it to lag at all while dragging (due to the 1-second scrub), uncomment the next line:
        //horizontalScroll.getTween().progress(1);
      },
    })[0];

    ScrollTrigger.addEventListener("refresh", () => {
      clamp = gsap.utils.clamp(
        horizontalScroll.start + 1,
        horizontalScroll.end - 1
      ); // don't let the drag-scroll hit the very start or end so that it doesn't unpin
      // total scroll amount divided by the total distance that the sections move gives us the ratio we can apply to the pointer movement so that it fits.
      dragRatio =
        scrollContainer.offsetWidth /
        (window.innerWidth * (sections.length - 1));
    });
  }

  if (currentUrl.includes("page11.html")) {
    gsap.set(".dot", {
      xPercent: -50,
      yPercent: -50,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container11",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".dot", {
      clipPath: "circle(100% at 50% 50%)",
    });
  }

  if (currentUrl.includes("page12.html")) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container12",
          pin: true,
          start: "top top",
          end: "+=300%",
          scrub: 1,
        },
        defaults: {
          ease: "none",
        },
      })
      .to(
        ".container12",
        {
          delay: 0.3,
          backgroundColor: "rgb(16, 117, 147)",
        },
        "start"
      )
      .to(
        ".upper-container h1",
        {
          scale: 8,
          opacity: 0,
        },
        "start"
      )
      .to(
        ".content2",
        {
          scale: 1,
          opacity: 1,
        },
        0.05
      );
  }

  if (currentUrl.includes("page13.html")) {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onLeave: (self) => {
        self.scroll(1);
        ScrollTrigger.update();
      },
      onLeaveBack: (self) => {
        self.scroll(ScrollTrigger.maxScroll(window) - 1);
        ScrollTrigger.update();
      },
    });

    // Change opacity of link on scroll

    select = (e) => document.querySelector(e);
    selectAll = (e) => document.querySelectorAll(e);

    const recipe = selectAll(".link");

    recipe.forEach((recipe, i) => {
      gsap.to(recipe, {
        opacity: 1,
        repeat: 1,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          trigger: recipe,
          start: "center bottom",
          end: "center top",
          markers: true,
          scrub: true,
        },
      });
    });
  }

  if (currentUrl.includes("page14.html")) {
    const path = document.getElementById("path");
    const length = path.getTotalLength();

    // Set the strokeDasharray and strokeDashoffset properties
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container14",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      })
      .to("path", {
        strokeDashoffset: 0,
      });

    let backToTop = document.querySelector(".back-to-top");
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: 0,
      });
    });
  }

  if (currentUrl.includes("page15.html")) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".container15",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          duration: 3,
        },
      })
      .to(".panel", {
        rotateX: 0,
      });
  }

  if (currentUrl.includes("page16.html")) {
    gsap.utils.toArray(".panel").forEach((panel, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 80%", // Adjust the start position as needed
            end: "top 50%", // Adjust the end position as needed
            markers: true, // For debugging
            scrub: true,
          },
        })
        .to(panel, {
          rotateX: 0, // Flip the panels to their normal state
          duration: 0.5,
          ease: "power1.in", // Optional easing
        });
    });
  }

  if (currentUrl.includes("page17.html")) {
    gsap.registerPlugin(MotionPathPlugin);
    const main = gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#motionSVG",
          scrub: true,
          start: "top 1%",
          end: "bottom center",
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .to(
        ".ball01",
        {
          motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );
  }

  if (currentUrl.includes("page18.html")) {
    const container = document.querySelector(".container18");

    gsap.to(container, {
      backgroundColor: "rgb(0, 0, 0)",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const red = Math.round(self.progress * 255);
          const green = Math.round(self.progress * 255);
          const blue = Math.round(self.progress * 255);
          container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        },
      },
    });
  }

  if (currentUrl.includes("page19.html")) {
    // rotate while scroll to middle
    gsap.to(".cube", {
      "--rotateX": "360deg",
      "--rotateY": "360deg",
      scrollTrigger: {
        trigger: ".container19",
        start: "top top",
        end: "bottom top",
        scrub: 0.2,
      },
    });

    // Pin the .visual element
    gsap.to(".visual", {
      scrollTrigger: {
        trigger: ".container19",
        start: "top center",
        end: "bottom top",
        scrub: 0.2,
        pin: true,
        markers: true,
      },
    });
  }

  if (currentUrl.includes("page20.html")) {
    const navDivs = document.querySelectorAll("nav div");

    // Function to add highlight class to the corresponding nav div
    function highlightNavDiv(id) {
      navDivs.forEach((div) => {
        div.classList.remove("highlight");
        if (div.querySelector("a").getAttribute("href") === `#${id}`) {
          div.classList.add("highlight");
        }
      });
    }

    // Listen for scroll events and highlight the corresponding nav div
    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top center",
        end: "bottom center",
        onEnter: () => highlightNavDiv(panel.id),
        onEnterBack: () => highlightNavDiv(panel.id),
      });
    });
  }

  if (currentUrl.includes("page21.html")) {
    const panel = document.querySelector(".panel");

    gsap.to(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top center",
        end: "center center",
        markers: true,
        onEnter: () => {
          gsap.to(panel, {
            rotationX: 10,
            duration: 1,
            ease: "power2.inOut",
            repeat: 3,
            yoyo: true,
            onRepeat: () => {
              gsap.set(panel, {
                rotationX: -10,
              });
            },
          });
        },
      },
    });
  }

  if (currentUrl.includes("page22.html")) {
    const container = document.getElementById("container");

    gsap.utils.toArray(".text").forEach((text, index) => {
      gsap.to(text, {
        rotation: 360,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }

  if (currentUrl.includes("page23.html")) {
  }

  if (currentUrl.includes("page24.html")) {
  }

  if (currentUrl.includes("page25.html")) {
  }
});
