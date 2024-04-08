/******************************
 * Idea 1
 ******************************/
let body = document.querySelectorAll(".body");

body.forEach((part) => {
  let overlay = part.querySelector(".information-overlay");

  part.addEventListener("mouseenter", function () {
    overlay.style.opacity = 1;
  });

  // Add event listener for mouse leave
  part.addEventListener("mouseleave", function () {
    overlay.style.opacity = 0;
  });
});

let button = document.querySelector(".idea1-container button");

// Add event listener for button click
button.addEventListener("click", function() {
  // Generate random numbers for head and torso
  let randomHead = Math.floor(Math.random() * 2) + 1; // Assuming you have 5 head images
  let randomTorso = Math.floor(Math.random() * 2) + 1; // Assuming you have 5 torso images

  // Update the src attribute of head and torso images
  let headImage = document.querySelector(".idea1-container .head img");
  headImage.src = `idea1/head${randomHead}.jpg`;

  let torsoImage = document.querySelector(".idea1-container .torso img");
  torsoImage.src = `idea1/torso${randomTorso}.jpg`;
});

/******************************
 * Idea 2
 ******************************/

let paintingData = [
  {
    category: "green",
    name: "Dancer in Green",
    artist: "Edgar Degas",
    date: 1883,
    path: "idea2/green1.jpeg",
    colorPalette: [
      "CFDAD8",
      "ACAEA3",
      "A0A79C",
      "C2C4B5",
      "9A8650",
      "B5BEB8",
      "74653D",
    ],
  },
  {
    category: "green",
    name: "The Singer in Green",
    artist: "Edgar Degas",
    date: 1884,
    path: "idea2/green2.jpeg",
    colorPalette: [
      "7A9471",
      "535C51",
      "888D50",
      "616252",
      "91843F",
      "39423F",
      "1E4955",
    ],
  },
  {
    category: "green",
    name: "Roses",
    artist: "Vincent Van Gogh",
    date: 1890,
    path: "idea2/green3.jpeg",
    colorPalette: [
      "77947D",
      "A0AA98",
      "B3AD9C",
      "538560",
      "C1BFB2",
      "91A87E",
      "78956E",
    ],
  },
];

// Generate new painting button
let greenButton = document.querySelector(".get-painting-btn");
greenButton.addEventListener("click", getPainting);

// Function to randomly select an object from the paintingData array and return it
function selectRandomPainting() {
  // Randomly select an index from the paintingData array
  let randomIndex = Math.floor(Math.random() * paintingData.length);

  // Retrieve the selected painting object
  let selectedPainting = paintingData[randomIndex];

  // Return the selected painting object
  return selectedPainting;
}

const paintingImage = document.querySelector(".painting");
const colorOverlay = document.querySelector(".color-overlay");

function getPainting() {
  paintingImage.style.opacity = 0;
  let painting = selectRandomPainting();

  paintingImage.src = painting.path;

  fillColors(painting);
}

function fillColors(painting) {
  let imageWidth = painting.width;

  for (let i = 1; i < 8; i++) {
    setTimeout(function () {
      let colorContainer = document.querySelector(".color" + i);
      colorContainer.style.width = imageWidth + "px";
      colorContainer.style.backgroundColor = "#" + painting.colorPalette[i - 1];
    }, 200 * i);
  }

  // Load the image after colors are displayed
  setTimeout(function () {
    paintingImage.style.opacity = 1;
  }, 200 * 8); // Adjust the delay as needed based on the number of colors displayed

  // Hide the colors after the image is loaded
  for (let i = 1; i < 8; i++) {
    setTimeout(function () {
      let colorContainer = document.querySelector(".color" + i);
      colorContainer.style.backgroundColor = "transparent";
    }, 200 * (8 + i)); // Increment the delay for each color
  }
}
