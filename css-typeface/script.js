const letters = document.querySelectorAll(".letter");

letters.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    letter.style.overflow = "visible";
    letter.querySelectorAll(".circle").forEach((circle) => {
      const circleRect = circle.getBoundingClientRect();
      const maxX = window.innerWidth - circleRect.width;
      const maxY = window.innerHeight - circleRect.height;

      const randomX = Math.random() * (2 * maxX) - maxX; // Allow for negative values
      const randomY = Math.random() * (2 * maxY) - maxY; // Allow for negative values

      circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  });

  letter.addEventListener("mouseleave", () => {
    setTimeout(function () {
      letter.style.overflow = "hidden";
    }, 1000);

    letter.querySelectorAll(".circle").forEach((circle) => {
      circle.style.transform = "translate(0, 0)";
    });
  });
});
