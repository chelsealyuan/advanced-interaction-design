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
const image10 = document.querySelector("#content-10 img");
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
      console.log("opacity");
    }
  };

  requestAnimationFrame(updateCounter);
}

/**********************
 * Load 11
 **********************/
function load11(button, image, i) {
  console.log("picture 11");
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);

let second = document.getElementById("second");

function prevImg() {
  second.style.msTransform = "rotateY(0deg)";
  second.style.webkitTransform = "rotateY(0deg)";
  second.style.transform = "rotateY(0deg)";
}
function nextImg() {
  second.style.msTransform = "rotateY(-180deg)";
  second.style.webkitTransform = "rotateY(-180deg)";
  second.style.transform = "rotateY(-180deg)";
}

/**********************
 * Load 12
 **********************/
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
