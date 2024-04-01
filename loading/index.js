/**********************
 * Setup
 **********************/
const active = [];
// Loop through 20 divs
for (let i = 1; i <= 20; i++) {
  active[i] = false;
  // Create a button
  const button = document.createElement("button");
  button.textContent = `Show`;

  // Create a div for the image (assuming each image has a unique ID)
  const imageDiv = document.getElementById("content-" + i);

  // Get image in each div
  const image = imageDiv.querySelector("img");

  //image.style.opacity = 0;

  // Append the button to the corresponding content div
  const contentDiv = document.getElementById(`content-${i}`);
  contentDiv.appendChild(button);

  // Add event listener to the button
  button.addEventListener("click", function () {
    switch (i) {
      case 1:
        load1(button, image, i);
        break;
      case 2:
        load2(button, image, i);
        break;
      case 3:
        load3(button, image, i);
        break;
      case 4:
        load4(button, image, i);
        break;
      case 5:
        load5(button, image, i);
        break;
      case 6:
        load6(button, image, i);
        break;
      case 7:
        load7(button, image, i);
        break;
      case 8:
        load8(button, image, i);
        break;
      case 9:
        load9(button, image, i);
        break;
      case 10:
        load10();
        break;
      case 11:
        load11();
        break;
      case 12:
        load12();
        break;
      case 13:
        load13();
        break;
      case 14:
        load14();
        break;
      case 15:
        load15();
        break;
      case 16:
        load16();
        break;
      case 17:
        load17();
        break;
      case 18:
        load18();
        break;
      case 19:
        load19();
        break;
      case 20:
        load20();
        break;
      default:
        break;
    }
  });
}

const image1 = document.querySelector("#content-1 img");
image1.style.opacity = 0;
// Load function for index 1
function load1(button, image, i) {
  if (active[i] == false) {
    image.style.opacity = 1;
    button.textContent = "Hide";
  } else {
    image.style.opacity = 0;
    button.textContent = "Show";
  }

  active[i] = !active[i];
}

// Load function for index 2
function load2(button, image, i) {
  const screen = document.querySelector("#content-2 .screen");
  if (active[i] == false) {
    screen.classList.toggle("moved");
    button.textContent = "Hide";
  } else {
    screen.classList.toggle("moved");
    button.textContent = "Show";
  }

  active[i] = !active[i];
}

// Load function for index 3
function load3(button, image, i) {
  const screen = document.querySelector("#content-3 .screen");
  if (active[i] == false) {
     // Define the number of chunks and the total animation duration
     const numberOfChunks = 5;
     const totalDuration = 1000; // in milliseconds (1 second)
     
     // Calculate the duration of each chunk
     const chunkDuration = totalDuration / numberOfChunks;
     
     // Calculate the height decrement for each chunk
     const heightDecrement = 100 / numberOfChunks;
     
     // Decrease the height of the screen in multiple chunks
     let currentHeight = 100;
     for (let i = 0; i < numberOfChunks; i++) {
         setTimeout(() => {
             currentHeight -= heightDecrement;
             screen.style.height = `${currentHeight}%`;
         }, i * chunkDuration);
     }

    button.textContent = "Hide";
  } else {
    screen.style.height = "100%";
    button.textContent = "Show";
  }

  active[i] = !active[i];
}

// Load function for index 4
function load4(button, image, i) {
  console.log("picture 4");
}

// Load function for index 5
function load5(button, image, i) {
  console.log("picture 5");
}

// Load function for index 6
function load6(button, image, i) {
  console.log("picture 6");
}

// Load function for index 7
function load7() {
  console.log("picture 7");
}

// Load function for index 8
function load8() {
  console.log("picture 8");
}

// Load function for index 9
function load9() {
  console.log("picture 9");
}

// Load function for index 10
function load10() {
  console.log("picture 10");
}

// Load function for index 11
function load11() {
  console.log("picture 11");
}

// Load function for index 12
function load12() {
  console.log("picture 12");
}

// Load function for index 13
function load13() {
  console.log("picture 13");
}

// Load function for index 14
function load14() {
  console.log("picture 14");
}

// Load function for index 15
function load15() {
  console.log("picture 15");
}

// Load function for index 16
function load16() {
  console.log("picture 16");
}

// Load function for index 17
function load17() {
  console.log("picture 17");
}

// Load function for index 18
function load18() {
  console.log("picture 18");
}

// Load function for index 19
function load19() {
  console.log("picture 19");
}

// Load function for index 20
function load20() {
  console.log("picture 20");
}
