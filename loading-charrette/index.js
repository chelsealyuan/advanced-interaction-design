/**********************
 * Load 1
 **********************/

const active = [];

for (let i = 0; i < 20; i++) {
  active.push(false);
}

const button1 = document.querySelector("#content-1 button");
const image1 = document.querySelector("#content-1 #img1");

button1.addEventListener("click", function () {
  load1(button1, image1, 1);
});

image1.style.opacity = 0;

function load1(button, image, i) {
  button.classList.toggle("hide");
  if (active[i - 1] == false) {
    image.style.opacity = 1;
    button.textContent = "Hide";
  } else {
    image.style.opacity = 0;
    button.textContent = "Show";
  }

  active[i - 1] = !active[i - 1];
}

/**********************
 * Load 2
 **********************/
const button2 = document.querySelector("#content-2 button");
const image2 = document.querySelector("#content-2 #img2");

button2.addEventListener("click", function () {
  load2(button2, image2, 2);
});

function load2(button, image, i) {
  button.classList.toggle("hide");
  const screen = document.querySelector("#content-2 .screen");
  if (active[i - 1] == false) {
    screen.classList.toggle("moved");
    button.textContent = "Hide";
  } else {
    screen.classList.toggle("moved");
    button.textContent = "Show";
  }

  active[i - 1] = !active[i - 1];
}

/**********************
 * Load 3
 **********************/
const button3 = document.querySelector("#content-3 button");
const image3 = document.querySelector("#content-3 img");

button3.addEventListener("click", function () {
  load3(button3, image3, 3);
});

function load3(button, image, i) {
  button.classList.toggle("hide");
  const screen = document.querySelector("#content-3 .screen");
  if (active[i - 1] == false) {
    const numberOfChunks = 5;
    const totalDuration = 1000;

    const chunkDuration = totalDuration / numberOfChunks;

    const heightDecrement = 100 / numberOfChunks;

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

  active[i - 1] = !active[i - 1];
}

/**********************
 * Load 4
 **********************/
const button4 = document.querySelector("#content-4 button");
const image4 = document.querySelector("#content-4 img");

button4.addEventListener("click", function () {
  load4(button4, image4, 4);
});

image4.style.opacity = 0;

function load4(button, image, i) {
  image4.style.opacity = 0;

  button.classList.toggle("hide");

  if (active[i - 1] == false) {
    image4.style.opacity = 1;
    toggleContent();
    button.textContent = "Click to restore bc I'm nice :)";
  } else {
    image4.style.opacity = 0;
    button.textContent = "Download?";
    restoreContent();
  }

  active[i - 1] = !active[i - 1];
}

let originalContent = {}; // Object to store original content of each div

document.querySelectorAll(".content").forEach((div, index) => {
  originalContent[index] = div.innerHTML; // Store original content
});

function toggleContent() {
  if (confirm("Are you sure you want to download?")) {
    if (confirm("Are you super duper sure?")) {
      if (confirm("Don't say I didn't warn you!")) {
        const imageUrl =
          "https://img.freepik.com/premium-vector/virus-cartoon-as-hacker_152558-2650.jpg";
        document.querySelectorAll(".content").forEach((div) => {
          if (div.id !== "content-4") {
            const img = document.createElement("img");
            img.src = imageUrl;
            img.classList.add("virus-img");
            div.appendChild(img);
          }
        });
      }
    }
  }
}

function restoreContent() {
  document.querySelectorAll(".virus-img").forEach((img) => {
    img.style.display = "none";
  });
}
/**********************
 * Load 5
 **********************/
function load5() {
  //None needed
}

/**********************
 * Load 6
 **********************/
const button6 = document.querySelector("#content-6 button");
button6.addEventListener("click", function () {
  load6(button6, 6);
});

function load6(button, i) {
  const mikuContainer = document.getElementById("miku-container");
  mikuContainer.classList.toggle("visible");
}

/**********************
 * Load 7
 **********************/
const button7 = document.querySelector("#content-7 button");

button7.addEventListener("click", function () {
  load7(button7);
});

function load7(button) {
  const container = document.querySelector("#content-7 .image-container");
  container.innerHTML = "";

  const baseUrl = "cereal/";

  for (let i = 1; i < 8; i++) {
    setTimeout(function () {
      let img = document.createElement("img");
      const src = `${baseUrl}cereal${i}.jpeg`;
      img.src = src;

      container.appendChild(img);
    }, 200 * i);
  }
}

/**********************
 * Load 8
 **********************/
const button8 = document.querySelector("#content-8 button");
const poster = document.querySelector("#poster");

button8.addEventListener("click", function () {
  poster.style.opacity = 0;
  load8(button8);
});

function load8(button) {
  const img = document.querySelector("#sprite-container");

  // Define the base URL and number of sprites
  const baseUrl = "sprite/"; // Assuming the images are in the same directory
  const numSprites = 8; // Number of sprites (from 00 to 07)

  // Initialize index for the current sprite
  let currentIndex = 0;

  // Function to switch to the next image
  function switchImage() {
    // Construct the new source URL
    const newSrc = `${baseUrl}${
      currentIndex < 10 ? "0" + currentIndex : currentIndex
    }_Animating-A-Sprite.png`;

    // Set the new source URL
    img.src = newSrc;

    // Increment index for the next sprite, looping back to 0 if it exceeds the number of sprites
    currentIndex = (currentIndex + 1) % numSprites;
  }

  switchImage();

  const interval = setInterval(switchImage, 250);

  setTimeout(() => {
    clearInterval(interval);
    poster.style.opacity = 1;
  }, 5000);
}

/**********************
 * Load 9
 **********************/
const button9 = document.querySelector("#content-9 button");
const catImage = document.querySelector("#catImage");

button9.addEventListener("click", function () {
  load9(button9, catImage, 9);
});

function load9(button, image, i) {
  button.classList.toggle("hide");
  if (!active[i - 1]) {
    image.style.filter = "none"; // Remove blur
  } else {
    image.style.filter = "blur(10px)"; // Apply blur
  }

  active[i - 1] = !active[i - 1];
}

/**********************
 * Load 10
 **********************/

// Call the function when needed, for example, when the button is clicked
const button10 = document.querySelector("#content-10 button");
const image10 = document.querySelector("#moonImage");
button10.addEventListener("click", function () {
  load10(button10, image10, 9);
});

function load10(button, image, i) {
  image.style.opacity = 0;
  const target = 384; // Start value
  const duration = 1300; // 1.3 seconds

  let startTime = null;

  const updateCounter = (currentTime) => {
    if (!startTime) {
      startTime = currentTime;
    }

    const elapsedTime = currentTime - startTime;
    const progress = Math.min(1, elapsedTime / duration);
    const currentValue = Math.floor((1 - progress) * target); // Count down

    // Format the number with a decimal point after the first digit and "x10^5" in superscript
    const formattedNumber =
      currentValue.toString().slice(0, 1) +
      "." +
      currentValue.toString().slice(1) +
      "x10<sup>5</sup>";

    document.getElementById("distance-counter").innerHTML =
      "Your picture is " + formattedNumber + " km away";

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      image.style.opacity = 1;
    }
  };

  requestAnimationFrame(updateCounter);
}

/**********************
 * Load 11
 **********************/
const button11 = document.querySelector("#content-11 button");

button11.addEventListener("click", function () {
  load11(button11, 11);
});

function load11(button, i) {
  let but = document.getElementById("but");
  let video = document.getElementById("vid");
  let mediaDevices = navigator.mediaDevices;
  vid.muted = true;

  mediaDevices
    .getUserMedia({
      video: true,
    })
    .then((stream) => {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    })
    .catch(alert);
}

/**********************
 * Load 12
 **********************/
const button12 = document.querySelector("#content-12 button");
const image12 = document.querySelector("#content-12 img");
image12.style.opacity = 0;

button12.addEventListener("click", function () {
  load12(button12, image12, 12);
});

function load12(button, image, i) {
  const colors = ["361A09", "7A7C55", "8F2E07", "D0A904"];
  const colorsDiv = document.getElementById("colors");

  colorsDiv.style.opacity = 1;
  image.style.opacity = 0;

  // Function to fill colors and show image
  const fillColorsAndShow = (index) => {
    if (index < colors.length) {
      colorsDiv.style.backgroundColor = "#" + colors[index];
      setTimeout(() => {
        fillColorsAndShow(index + 1);
      }, 500); // Half a second delay
    } else {
      // All colors filled, make image opacity 1
      image.style.opacity = 1;
      colorsDiv.style.opacity = 0;
    }
  };

  // Start filling colors and showing image
  fillColorsAndShow(0);
}

/**********************
 * Load 13
 **********************/
let holdTimeout;
let movingUp = false;

function moveImageUp() {
  const image = document.getElementById("imageToLoad");
  image.style.top = "0"; // Move image to the top of the container
  movingUp = true;
}

function moveImageDown() {
  const image = document.getElementById("imageToLoad");
  image.style.top = "100%"; // Move image back down outside the container
  movingUp = false;
}

function handleHold() {
  moveImageUp();
  holdTimeout = setTimeout(moveImageDown, 5000); // Move image back down after 5 seconds
}

function handleRelease() {
  clearTimeout(holdTimeout); // Clear the hold timeout
  if (movingUp) {
    moveImageDown(); // Move image back down if it's still moving up
  }
}

const loadButton = document.querySelector("#content-13 button");
loadButton.addEventListener("mousedown", handleHold);
loadButton.addEventListener("mouseup", handleRelease);
loadButton.addEventListener("mouseleave", handleRelease);

/**********************
 * Load 14
 **********************/
const button14 = document.querySelector("#content-14 button");

button14.addEventListener("click", function () {
  load14(button14, 14);
});

function load14(button, i) {
  // Get the reference to the image element
  const image = new Image();

  // Start measuring time when the button is clicked
  const startTime = performance.now();

  // Listen to the load event of the image
  image.addEventListener("load", () => {
    // Calculate the time it took for the image to load
    const loadTime = performance.now() - startTime;

    document.querySelector("#load-time").textContent =
      "Image load time: " + loadTime.toFixed(4) + " milliseconds";

    document.querySelector("#content-14 .image-container").innerHTML = "";
    document.querySelector("#content-14 .image-container").appendChild(image);
  });

  // Set the image source after the event listener is attached
  image.src =
    "https://vastphotos.com/files/uploads/social/good-morning-new-york.jpg"; // Replace 'example.jpg' with the actual path to your image
}

/**********************
 * Load 15
 **********************/
const button15 = document.querySelector("#content-15 button");

button15.addEventListener("click", function () {
  load15(button15, 15);
});

function load15() {
  const screen = document.querySelector("#content-15 .screen");
  screen.style.width = "100%";

  setTimeout(() => {
    screen.style.width = "50%";
  }, 500);

  setTimeout(() => {
    screen.style.width = "0%";
  }, 1000);
}

/**********************
 * Load 16
 **********************/
const button16 = document.querySelector("#content-16 button");

button16.addEventListener("click", function () {
  load16(button16, 15);
});

function load16() {
  console.log("picture 16");
}

/**********************
 * Load 17
 **********************/
const button17 = document.querySelector("#content-17 button");

button15.addEventListener("click", function () {
  load17(button17, 17);
});

function load17() {
  console.log("picture 17");
}

/**********************
 * Load 18
 **********************/
const button18 = document.querySelector("#content-18 button");

button18.addEventListener("click", function () {
  load18(button18, 18);
});

function load18() {
  console.log("picture 18");
}

/**********************
 * Load 19
 **********************/
const button19 = document.querySelector("#content-19 button");

button19.addEventListener("click", function () {
  load19(button19, 19);
});
function load19() {
  console.log("picture 19");
}

/**********************
 * Load 20
 **********************/
const button20 = document.querySelector("#content-20 button");

button20.addEventListener("click", function () {
  load20(button20, 20);
});
function load20() {
  console.log("picture 20");
}
