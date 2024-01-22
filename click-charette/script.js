document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("gridContainer");

  // Add event listener to each div
  const gridItems = document.querySelectorAll(".grid-item");

  gridItems.forEach(function (gridItem, index) {
    gridItem.addEventListener("click", function () {
      onClick(index);
    });
  });

  //Div 0
  let toggle0 = false;
  document.querySelector("#div-0").children[1].classList.add("hidden");

  //Div 5
  let isRound = false;

  //Div 6
  let isDoubleHeight = false;

  //Div 8
  let hasNoise = true;

  //Div 12
  let isShrunken = false;

  function onClick(value) {
    console.log(`Clicked on Div ${value}`);

    //Div 0
    if (value === 0) {
      const div0 = document.querySelector("#div-0");
      if (toggle0) {
        div0.style.backgroundColor = "#000000";
        div0.children[1].classList.add("hidden");
        div0.children[0].classList.remove("hidden");
      } else {
        div0.style.backgroundColor = "#ffffff";
        div0.children[0].classList.add("hidden");
        div0.children[1].classList.remove("hidden");
      }
      toggle0 = !toggle0;
    }

    //Div 1
    if (value === 1) {
      var audio = new Audio("assets/bing-chilling.mp3");
      audio.play();
    }

    //Div 2

    //Div 3
    if (value === 3) {
      const circleClone = document.getElementById("circle").cloneNode(true);
      document.getElementById("div-3").appendChild(circleClone);
      document.getElementById("circle").remove();
    }

    //Div 4
    if (value === 4) {
      fillWithRandomCircle(document.querySelector("#div-4"));
    }

    //Div 5
    if (value === 5) {
      const div5 = document.getElementById("div-5");

      if (isRound) {
        div5.style.borderRadius = "0";
      } else {
        const size = Math.min(div5.offsetWidth, div5.offsetHeight);
        div5.style.borderRadius = size / 2 + "px";
      }

      isRound = !isRound; // Toggle the state
    }

    //Div 6
    if (value === 6) {
      const div6 = document.getElementById("div-6");

      if (isDoubleHeight) {
        // If it's already double height, make it normal height
        div6.classList.remove("double-height");
      } else {
        // If it's normal height, make it double height
        div6.classList.add("double-height");
      }

      isDoubleHeight = !isDoubleHeight; // Toggle the state
    }

    //Div 7
    if (value === 7) {
      animUp();
      animDown();
    }

    //Div 8
    if (value === 8) {
      const div8 = document.getElementById("div-8");
      if (hasNoise) {
        div8.querySelector("svg").style.display = "block";
      } else {
        div8.querySelector("svg").style.display = "none";
      }
      hasNoise = !hasNoise;
    }

    //Div 9
    if (value === 9) {
      const div9 = document.getElementById("div-9");
    }

    //Div 10
    if (value === 10) {
      const element = document.getElementById("div-11");
      element.classList.remove("spin-animation");

      // Trigger a reflow before adding the class again
      void element.offsetWidth;

      element.classList.add("spin-animation");
    }

    //Div 11
    if (value === 11) {
      document.getElementById("div-10").style.backgroundColor =
        getRandomColor();
    }

    //Div 12
    if (value === 12) {
      const div12 = document.getElementById("div-12");
      isShrunken = !isShrunken; // Toggle the state on each click

      if (isShrunken) {
        div12.classList.add("shrunken");
      } else {
        div12.classList.remove("shrunken");
      }
    }

    //Div 13
    if (value === 13) {
      movePet("up");
    }

    //Div 14

    //Div 15

    //Div 16
    if (value === 16) {
      movePet("left");
    }

    //Div 17
    if (value === 17) {
      switchPet();
    }

    //Div 18
    if (value === 18) {
      movePet("right");
    }

    //Div 19
    if (value === 19) {
      const div19 = document.getElementById("div-19");
      div19.classList.add("shake");

      // Remove the 'shake' class after the animation ends
      setTimeout(() => {
        div19.classList.remove("shake");
      }, 500);
    }

    //Div 20
    if (value === 20) {
      const div20 = document.getElementById("div-20");
      div20.classList.toggle("paused");
    }

    //Div 21
    if (value === 21) {
      movePet("down");
    }
  }
});

function fillWithRandomCircle(container) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  // Set position based on mouse coordinates
  circle.style.left =
    event.clientX - container.getBoundingClientRect().left + "px";
  circle.style.top =
    event.clientY - container.getBoundingClientRect().top + "px";

  // Set random background color
  const randomColor = getRandomColor();
  circle.style.backgroundColor = randomColor;

  // Set size as a percentage of the container width
  const circleSizePercentage = 10; // Size as a percentage of container width
  const sizeInPixels = (circleSizePercentage / 100) * container.offsetWidth;
  circle.style.width = sizeInPixels + "px";
  circle.style.height = sizeInPixels + "px";

  container.appendChild(circle);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function animUp() {
  $("#ball").animate({ top: "1px" }, "slow", "swing");
}
function animDown() {
  var $el = $("#div-7");
  var bottom = $el.offset().top;
  $("#ball").animate({ top: bottom }, "slow", "swing");
}

function movePet(direction) {
  const petImg = document.getElementById("pet");
  const div17 = document.getElementById("div-17");
  const step = 20; // Adjust the step size as needed

  let newLeft = parseInt(
    window.getComputedStyle(petImg).getPropertyValue("left")
  );
  let newTop = parseInt(
    window.getComputedStyle(petImg).getPropertyValue("top")
  );

  switch (direction) {
    case "left":
      newLeft = Math.max(0, newLeft - step); // Ensure it doesn't go beyond the left edge
      break;
    case "up":
      newTop = Math.max(0, newTop - step); // Ensure it doesn't go beyond the top edge
      break;
    case "right":
      newLeft = Math.min(div17.offsetWidth - petImg.width, newLeft + step); // Ensure it doesn't go beyond the right edge
      break;
    case "down":
      newTop = Math.min(div17.offsetHeight - petImg.height, newTop + step); // Ensure it doesn't go beyond the bottom edge
      break;
  }

  petImg.style.left = `${newLeft}px`;
  petImg.style.top = `${newTop}px`;
}

function switchPet() {
  const petImg = document.getElementById("pet");

  // Check the current src attribute
  const currentSrc = petImg.src;

  // Switch the image source based on the current source
  if (currentSrc.includes("pet.png")) {
    // Replace 'pet.png' with the new image source
    petImg.src = "assets/pet2.png";
  } else {
    // If it's already switched, switch it back to 'pet.png'
    petImg.src = "assets/pet.png";
  }
}

//Div 14
const div14 = document.getElementById("div-14");
div14.addEventListener("mousemove", followSquare);

function followSquare(event) {
  const avoidSquare = document.getElementById("follow-square");
  const div14 = document.getElementById("div-14");

  // Get the position of the mouse relative to the div-14
  const mouseX = event.clientX - div14.getBoundingClientRect().left;
  const mouseY = event.clientY - div14.getBoundingClientRect().top;

  // Calculate the position of the square to avoid the mouse
  const newLeft = Math.min(
    Math.max(mouseX - avoidSquare.offsetWidth / 2, 0),
    div14.offsetWidth - avoidSquare.offsetWidth
  );
  const newTop = Math.min(
    Math.max(mouseY - avoidSquare.offsetHeight / 2, 0),
    div14.offsetHeight - avoidSquare.offsetHeight
  );

  avoidSquare.style.left = `${newLeft}px`;
  avoidSquare.style.top = `${newTop}px`;
}

//Div 15
const div15 = document.getElementById("div-15");
const avoidSquare = document.getElementById("avoid-square");

div15.addEventListener("mousemove", detectAndMove);

function detectAndMove(event) {
  const mouseX = event.clientX - div15.getBoundingClientRect().left;
  const mouseY = event.clientY - div15.getBoundingClientRect().top;

  const centerX = avoidSquare.offsetLeft + avoidSquare.offsetWidth / 2;
  const centerY = avoidSquare.offsetTop + avoidSquare.offsetHeight / 2;

  const distance = Math.sqrt(
    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
  );

  if (distance < 50) {
    // Calculate the direction vector
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Calculate the new position
    const newLeft = avoidSquare.offsetLeft - deltaX;
    const newTop = avoidSquare.offsetTop - deltaY;

    // Restrict movement within the boundaries
    const maxX = div15.offsetWidth - avoidSquare.offsetWidth;
    const maxY = div15.offsetHeight - avoidSquare.offsetHeight;

    avoidSquare.style.left = `${Math.max(0, Math.min(newLeft, maxX))}px`;
    avoidSquare.style.top = `${Math.max(0, Math.min(newTop, maxY))}px`;
  }
}
