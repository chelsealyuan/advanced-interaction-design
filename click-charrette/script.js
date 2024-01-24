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

  let isExtended = false;

  function onClick(value) {
    //console.log(`Clicked on Div ${value}`);

    //Div 0
    if (value === 0) {
      const div0 = document.querySelector("#div-0");
      const gridContainer = document.querySelector(".grid-container");
      if (toggle0) {
        div0.style.backgroundColor = "#000000";
        gridContainer.style.backgroundColor = "#ffffff";

        div0.children[1].classList.add("hidden");
        div0.children[0].classList.remove("hidden");
      } else {
        div0.style.backgroundColor = "#ffffff";
        gridContainer.style.backgroundColor = "#000000";
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
      fillWithRandomCircle(document.querySelector("#div-4"), event);
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

    //Div 22
    if (value === 22) {
      document.body.classList.toggle("enlarge-text");
    }

    //Div 23
    if (value === 23) {
      const div23 = document.getElementById("div-23");
      div23.classList.add("bounce");

      // Remove the 'shake' class after the animation ends
      setTimeout(() => {
        div23.classList.remove("bounce");
      }, 2000);
    }

    //Div 24
    if (value === 24) {
      adjustCircleSize(0);
    }

    //Div 25
    if (value === 25) {
      adjustCircleSize(1);
    }

    //Div 26
    if (value === 26) {
      adjustCircleSize(2);
    }

    //Div 27
    if (value === 27) {
      adjustCircleSize(3);
    }

    //Div 28

    //Div 29
    if (value === 29) {
      toggleScreen("div-30", "slide-right");
      toggleScreen("div-33", "slide-left");
    }

    //Div 30
    if (value === 30) {
      toggleScreen("div-29", "slide-up");
      toggleScreen("div-34", "slide-down");
    }

    //Div 31
    if (value === 31) {
      highlightPrimes();
    }

    //Div 32
    if (value === 32) {
      swapDivs("div-35", "div-32");
    }

    //Div 33
    if (value === 33) {
      toggleScreen("div-30", "slide-right");
      toggleScreen("div-29", "slide-up");
      toggleScreen("div-34", "slide-down");
    }

    //Div 34
    if (value === 34) {
      toggleScreen("div-29", "slide-up");
      toggleScreen("div-30", "slide-right");
    }

    //Div 35
    if (value === 35) {
      swapDivs("div-32", "div-35");
    }

    //Div 36
    if (value === 36) {
      const div36 = document.getElementById("div-36");
    }

    //Div 38

    if (value === 38) {
      document.getElementById("div-38").classList.toggle("clicked");
    }

    //Div 39
    if (value === 39) {
      increaseDivisions();
    }

    //Div 40
    if (value === 40) {
      extendDivsSequentially();
    }

    //Div 41
    if (value === 41) {
      if (event.target.id === "div-41") {
        sendMessage(event);
      }
    }

    //Div 42
    if (value === 42) {
      var container = document.querySelector(".grid-container");
      container.classList.toggle("no-gap");
    }

    //Div 43

    //Div 44
    if (value === 44) {
      const extendDivs = document.querySelectorAll(".extend");

      if (isExtended) {
        // If currently extended, retract
        extendDivs.forEach((extendDiv) => {
          extendDiv.style.width = "25%";
        });
      } else {
        // If currently retracted, extend
        extendDivs.forEach((extendDiv) => {
          extendDiv.style.width = "100%";
        });
      }

      // Toggle the state
      isExtended = !isExtended;
    }

    //Div 45
    if (value === 45) {
      const gridItems = document.querySelectorAll(".grid-item");

      gridItems.forEach((item) => {
        item.classList.toggle("sheared");
      });
    }

    var div47 = document.getElementById("div-47");
    if (div47) {
      div47.classList.add("fade-out");
      setTimeout(function () {
        div47.remove();
      }, 2000); // Wait for the transition to complete before removing the element
    }

    //Div 47

    //Div 48
    if (value === 48) {
      retractDivsSequentially();
    }

    //Div 49
    if (value === 49) {
      deleteLastMessage();
    }

    //Div 50
    if (value === 50) {
      close();
    }
  }
});

function fillWithRandomCircle(container, event) {
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

function adjustCircleSize(index) {
  var circles = document.querySelectorAll(".circle-change");

  circles.forEach(function (circle) {
    var sizes = [0.25, 0.5, 0.75, 1.0];
    circle.style.width = sizes[index] * 100 + "%";
    circle.style.height = sizes[index] * 100 + "%";
  });
}

$(function () {
  $("#div-28").draggable({ revert: true });
});

function toggleScreen(divId, direction) {
  var $div = $("#" + divId);
  var $screen = $div.find(".screen");

  // Toggle between showing and hiding the screen
  if ($screen.hasClass(direction)) {
    // Move the screen back
    $screen.removeClass(direction).css("transform", "");
  } else {
    // Move the screen in the specified direction
    $screen.addClass(direction);
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function highlightPrimes() {
  // Loop through all grid items
  $(".grid-item").each(function () {
    // Extract the number from the content of the span
    var number = parseInt($(this).find(".content").text());

    // Check if the number is prime
    if (isPrime(number)) {
      // Toggle the highlight class on the span
      $(this).find(".content").toggleClass("highlight");
    }
  });
}

var isSwapped = false;

function swapDivs(divId1, divId2) {
  var div1 = document.getElementById(divId1);
  var div2 = document.getElementById(divId2);

  if (!isSwapped) {
    // Get the positions of the divs
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();

    // Swap the positions by changing the transform property
    div1.style.transform = `translate(${rect2.left - rect1.left}px, ${
      rect2.top - rect1.top
    }px)`;
    div2.style.transform = `translate(${rect1.left - rect2.left}px, ${
      rect1.top - rect2.top
    }px)`;
  } else {
    // Revert to the original positions
    div1.style.transform = "none";
    div2.style.transform = "none";
  }

  // Toggle the state
  isSwapped = !isSwapped;
}

function moveCircle(event) {
  var div37 = document.querySelector("#div-37");

  // Get the mouse position
  var mouseX = event.clientX - div37.getBoundingClientRect().left;
  var mouseY = event.clientY - div37.getBoundingClientRect().top;

  // Calculate the allowed positions within the parent divs
  var squareLeft = Math.min(Math.max(mouseX, 0), div37.clientWidth);
  var squareTop = Math.min(Math.max(mouseY, 0), div37.clientHeight);

  // Move the square in div-36 based on mouse position in div-37
  var square = document.querySelector("#div-36 .square");
  square.style.left = squareLeft + "px";
  square.style.top = squareTop + "px";
}

function moveSquare(event) {
  var div36 = document.querySelector("#div-36");

  // Get the mouse position
  var mouseX = event.clientX - div36.getBoundingClientRect().left;
  var mouseY = event.clientY - div36.getBoundingClientRect().top;

  // Calculate the allowed positions within the parent divs
  var squareLeft = Math.min(Math.max(mouseX, 0), div36.clientWidth);
  var squareTop = Math.min(Math.max(mouseY, 0), div36.clientHeight);

  // Move the square in div-36 based on mouse position in div-37
  var square = document.querySelector("#div-37 .circle-37");
  square.style.left = squareLeft + "px";
  square.style.top = squareTop + "px";
}

let divisions = 0;

function increaseDivisions() {
  if (divisions < 24) {
    divisions += 2;
    divideSquare("div-39", divisions);
  } else {
    divisions = 0;
    divideSquare("div-39", divisions);
  }
}

function divideSquare(divId, divisions) {
  const container = document.getElementById(divId);

  // Ensure the container is a square
  const size = Math.min(container.clientWidth, container.clientHeight);
  container.style.width = size + "px";
  container.style.height = size + "px";

  // Remove previous divisions
  const wrapper = container.querySelector(".squares-wrapper");
  if (wrapper) {
    container.removeChild(wrapper);
  }

  // Create a wrapper for the squares
  const newWrapper = document.createElement("div");
  newWrapper.className = "squares-wrapper";
  container.appendChild(newWrapper);

  // Calculate the size of each division
  const divisionSize = size / divisions;

  for (let i = 0; i < divisions; i++) {
    for (let j = 0; j < divisions; j++) {
      const square = document.createElement("div");
      square.className = "sub-square";
      square.style.width = divisionSize + "px";
      square.style.height = divisionSize + "px";
      square.style.position = "absolute";
      square.style.top = i * divisionSize + "px";
      square.style.left = j * divisionSize + "px";
      newWrapper.appendChild(square);

      // Apply transition to the new sub-square
      square.style.transition = "opacity 1s ease-out";
      square.style.opacity = 0; // Initially set opacity to 0
      setTimeout(() => {
        square.style.opacity = 1; // Set opacity to 1 after a delay
      }, 0);
    }
  }
}

function extendDivsSequentially() {
  const extendDivs = document.querySelectorAll(".extend");

  extendDivs.forEach((extendDiv, index) => {
    setTimeout(() => {
      extendDiv.style.height = "100%"; // Extend the div vertically
    }, index * 500); // Adjust the delay between each div extension (here, 1000ms or 1 second)
  });
}

function retractDivsSequentially() {
  const extendDivs = document.querySelectorAll(".extend");

  const totalDivs = extendDivs.length;

  extendDivs.forEach((extendDiv, index) => {
    const delay = (totalDivs - index - 1) * 500; // Reverse the order and adjust the delay
    setTimeout(() => {
      extendDiv.style.height = "0"; // Retract the div vertically
    }, delay);
  });
}

function sendMessage(event) {
  event.preventDefault();

  const messageInput = document.getElementById("message");
  const message = messageInput.value;

  const messages = document.getElementById("messages");
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messages.appendChild(messageElement);

  messageInput.value = "";
}

function deleteLastMessage() {
  console.log("hi");
  const messagesDiv = document.getElementById("messages");
  const lastMessage = messagesDiv.lastElementChild;

  if (lastMessage) {
    messagesDiv.removeChild(lastMessage);
  }
}

var div = document.getElementById("div-38");
var circle = document.querySelector("#div-38 circle");

div.addEventListener("mousedown", startDash);

function startDash() {
  div.classList.add("clicked");
}

function stopDash() {
  div.classList.remove("clicked");
  circle.style.animation = "dash-reverse 2s linear forwards";
}

var incrementInterval;
var counterValue = 0;

var div43 = document.getElementById("div-43");

div43.addEventListener("mousedown", startIncrement);
div43.addEventListener("mouseup", stopIncrement);
div43.addEventListener("click", resetCounter);

function startIncrement() {
  // Start incrementing when mouse is held down
  incrementInterval = setInterval(increment, 100); // Adjust the interval as needed
}

function stopIncrement() {
  // Stop incrementing when mouse is released
  clearInterval(incrementInterval);
}

function resetCounter() {
  if (counterValue === 255) {
    counterValue = 0;
    div43.style.backgroundColor = "rgb(0, 255, 0)";
    div43.style.color = "black";
    document.getElementById("counter").innerText = counterValue;
  }
}

function increment() {
  // Increment the counter value
  counterValue = Math.min(counterValue + 1, 255);

  // Change the background color and text color based on the counter value
  var red = counterValue;
  var green = counterValue;
  var blue = counterValue;

  div43.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Change text color to black when halfway
  if (counterValue >= 128) {
    div43.style.color = "black";
  }

  // Update the counter value display
  document.getElementById("counter").innerText = counterValue;
}
