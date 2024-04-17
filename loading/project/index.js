const timeInterval = 100;
const path_prefix = "imgs/";

const data = [
  {
    id: 1,
    name: "Lots, Lots of Kaikai and Kiki",
    date: [2009],
    artist: "Takashi Murakami",
    path: "kaikai_kiki.jpg",
    color: [198, 186, 186],
    palette: [
      [167, 43, 50],
      [211, 200, 204],
      [68, 87, 114],
      [184, 132, 62],
      [170, 107, 133],
      [178, 161, 119],
      [181, 146, 159],
      [188, 177, 155],
      [130, 154, 170],
      [162, 179, 193],
    ],
  },
  {
    id: 2,
    name: "april, dragon dance, look, there are mysterious clouds",
    date: [2021],
    artist: "Aya Takano",
    path: "april_clouds.jpg",
    color: [26, 128, 172],
    palette: [
      [206, 192, 188],
      [21, 123, 170],
      [140, 168, 182],
      [41, 162, 200],
      [32, 58, 83],
      [74, 139, 65],
      [208, 77, 88],
      [44, 103, 116],
      [92, 188, 222],
      [228, 108, 100],
    ],
  },
  {
    id: 3,
    name: "Midnight Truth",
    date: [2017],
    artist: "Aya Takano",
    path: "midnight_truth.jpg",
    color: [224, 212, 190],
    palette: [
      [224, 212, 190],
      [175, 105, 88],
      [65, 42, 32],
      [212, 183, 138],
      [136, 77, 55],
      [151, 104, 62],
      [149, 100, 102],
      [180, 164, 156],
      [164, 156, 124],
      [92, 80, 76],
    ],
  },
  {
    id: 4,
    name: "Roses",
    date: [1890],
    artist: "Vincent Van Gogh",
    path: "roses.jpg",
    color: [133, 150, 120],
    palette: [
      [131, 152, 115],
      [44, 88, 72],
      [167, 167, 156],
      [204, 203, 190],
      [71, 79, 67],
      [81, 115, 97],
      [199, 191, 167],
      [81, 98, 62],
      [110, 112, 97],
      [174, 210, 164],
    ],
  },
  {
    id: 5,
    name: "Ophelia",
    date: [1851],
    artist: "John Everett Millais",
    path: "ophelia.jpeg",
    color: [60, 63, 33],
    palette: [
      [46, 47, 28],
      [187, 169, 128],
      [130, 116, 69],
      [92, 117, 40],
      [92, 80, 42],
      [144, 152, 152],
      [64, 89, 35],
      [144, 162, 92],
      [100, 92, 88],
      [168, 152, 36],
    ],
  },
  {
    id: 6,
    name: "A painted picture of the Universe",
    date: [1920, 1934],
    artist: "Roy de Maistre",
    path: "a_painted_picture_of_the_universe.jpg",
    palette: [
      [219, 203, 185],
      [141, 159, 182],
      [150, 137, 117],
      [191, 204, 212],
      [94, 130, 166],
      [125, 122, 144],
      [186, 182, 172],
      [134, 143, 139],
      [175, 192, 213],
      [204, 134, 114],
    ],
    color: [148, 161, 176],
  },
  {
    id: 7,
    name: "Red Cannas",
    date: [1927],
    artist: "Georgia O'Keeffe",
    path: "red_cannas.jpg",
    palette: [
      [187, 40, 34],
      [223, 191, 195],
      [203, 107, 106],
      [201, 72, 65],
      [141, 19, 27],
      [216, 140, 135],
      [202, 92, 82],
      [221, 76, 64],
      [214, 140, 148],
      [180, 59, 68],
    ],
    color: [187, 45, 39],
  },
  {
    id: 8,
    name: "Self-portrait with Monkey",
    date: [1945],
    artist: "Frida Kahlo",
    path: "self-portrait_with_monkey.jpg",
    palette: [
      [89, 45, 21],
      [215, 141, 82],
      [48, 29, 19],
      [108, 69, 34],
      [239, 184, 133],
      [143, 92, 47],
      [223, 178, 102],
      [195, 113, 16],
      [193, 86, 42],
      [66, 60, 36],
    ],
    color: [199, 130, 70],
  },
  {
    id: 9,
    name: "Cymon and Iphigenia",
    date: [1884],
    artist: "Frederic Leighton",
    path: "cymon_and_iphigenia.jpg",
    palette: [
      [71, 36, 27],
      [209, 123, 65],
      [137, 53, 29],
      [42, 26, 20],
      [105, 41, 26],
      [109, 82, 73],
      [152, 112, 80],
      [179, 77, 27],
      [174, 68, 22],
      [94, 76, 60],
    ],
    color: [73, 36, 26],
  },
  {
    id: 10,
    name: "Sewing the Sail",
    date: [1896, 1896],
    artist: "Joaquín Sorolla",
    path: "sewing_the_sail.jpg",
    palette: [
      [179, 158, 102],
      [62, 61, 26],
      [227, 207, 166],
      [107, 69, 24],
      [128, 108, 25],
      [226, 201, 128],
      [112, 106, 67],
      [211, 197, 119],
      [141, 103, 57],
      [84, 116, 68],
    ],
    color: [163, 143, 82],
  },
  {
    id: 11,
    name: "The plain of Gennevilliers, yellow fields",
    date: [1884],
    artist: "Gustave Caillebotte",
    path: "the_plain_of_gennevilliers.jpg",
    palette: [
      [173, 171, 109],
      [176, 187, 194],
      [77, 114, 106],
      [120, 141, 116],
      [182, 171, 59],
      [219, 207, 116],
      [214, 190, 107],
      [166, 171, 155],
      [112, 112, 84],
      [161, 172, 184],
    ],
    color: [178, 180, 147],
  },
  {
    id: 12,
    name: "Shakuntala & the Deer",
    date: [1960],
    artist: "Angela Trindade",
    path: "the_deer.jpg",
    palette: [
      [225, 185, 109],
      [116, 84, 64],
      [54, 69, 57],
      [221, 109, 62],
      [193, 64, 57],
      [166, 146, 96],
      [169, 152, 127],
      [110, 30, 30],
      [4, 140, 156],
      [238, 172, 44],
    ],
    color: [143, 90, 68],
  },
  {
    id: 13,
    name: "Work",
    date: [1968],
    artist: "Yoo Youngkuk",
    path: "work.jpg",
    palette: [
      [189, 42, 49],
      [244, 129, 53],
      [94, 29, 38],
      [214, 66, 59],
      [209, 85, 55],
      [228, 87, 58],
      [136, 25, 43],
      [204, 108, 100],
      [161, 32, 42],
      [196, 68, 76],
    ],
    color: [190, 44, 50],
  },
  {
    id: 14,
    name: "Sunrise over the Eastern Sea",
    date: [1932],
    artist: "Fujishima Takeji",
    path: "sunrise_over_the_eastern_sea.jpg",
    palette: [
      [208, 122, 59],
      [86, 92, 65],
      [120, 128, 84],
      [128, 156, 112],
      [170, 59, 28],
      [209, 158, 87],
      [185, 79, 42],
      [196, 143, 87],
      [160, 86, 45],
      [98, 149, 101],
    ],
    color: [201, 118, 61],
  },
  {
    id: 15,
    name: "Summer evening on Skagen Sønderstrand",
    date: [1893],
    artist: "Peder Severin Krøyer",
    path: "summer_evening.jpg",
    palette: [
      [190, 192, 194],
      [99, 125, 159],
      [123, 143, 171],
      [69, 80, 80],
      [87, 98, 113],
      [172, 169, 160],
      [239, 230, 209],
      [185, 172, 140],
      [152, 140, 124],
      [220, 228, 220],
    ],
    color: [191, 192, 193],
  },
  {
    id: 16,
    name: "Musical Angel",
    date: [1522],
    artist: "Rosso Fiorentino",
    path: "musical_angel.jpg",
    palette: [
      [217, 161, 51],
      [135, 66, 30],
      [27, 16, 12],
      [231, 206, 159],
      [184, 51, 19],
      [83, 37, 18],
      [161, 134, 97],
      [100, 76, 64],
      [156, 124, 116],
      [81, 57, 60],
    ],
    color: [217, 163, 66],
  },
  {
    id: 17,
    name: "Still Life with Flowers and Fruit",
    date: [1522],
    artist: "Jan van Huysum",
    path: "still_life.jpg",
    palette: [
      [38, 29, 30],
      [174, 170, 144],
      [127, 142, 114],
      [113, 95, 71],
      [79, 94, 77],
      [75, 57, 45],
      [158, 68, 38],
      [166, 117, 40],
      [56, 69, 79],
      [128, 124, 128],
    ],
    color: [46, 37, 35],
  },
  {
    id: 18,
    name: "Cotopaxi",
    date: [1862],
    artist: "Frederic Edwin Church",
    path: "cotopaxi.jpg",
    palette: [
      [60, 27, 14],
      [169, 100, 72],
      [211, 196, 184],
      [113, 66, 39],
      [102, 41, 21],
      [228, 136, 98],
      [187, 160, 150],
      [194, 148, 126],
      [144, 73, 26],
      [236, 180, 100],
    ],
    color: [165, 100, 71],
  },
  {
    id: 19,
    name: "Three girls watching TV",
    date: [2001],
    artist: "Liu Xiaodongh",
    path: "three_girls.jpg",
    palette: [
      [185, 153, 68],
      [60, 56, 43],
      [144, 66, 33],
      [217, 199, 106],
      [169, 96, 38],
      [118, 101, 60],
      [186, 170, 121],
      [198, 138, 26],
      [220, 171, 65],
      [92, 140, 116],
    ],
    color: [179, 142, 62],
  },
  {
    id: 20,
    name: "Incensing the Veil",
    date: [1880],
    artist: "John Singer Sargent",
    path: "incensing_the_veil.jpg",
    palette: [
      [199, 187, 168],
      [66, 65, 54],
      [125, 94, 62],
      [154, 118, 75],
      [129, 125, 109],
      [156, 135, 105],
      [173, 153, 111],
      [185, 168, 135],
      [159, 154, 138],
      [175, 156, 129],
    ],
    color: [195, 182, 161],
  },
  {
    id: 21,
    name: "Doorway in Tangier",
    date: [1912],
    artist: "Henry Ossawa Tanner",
    path: "doorway_in_tangier.jpg",
    palette: [
      [160, 176, 160],
      [45, 96, 74],
      [96, 138, 114],
      [85, 109, 79],
      [209, 212, 200],
      [127, 142, 110],
      [92, 97, 100],
      [196, 210, 206],
      [193, 212, 195],
      [132, 132, 124],
    ],
    color: [163, 178, 162],
  },
  {
    id: 22,
    name: "Buying Snacks",
    date: [1950],
    artist: "Hendra Gunawan",
    path: "buying_snacks.jpg",
    palette: [
      [186, 148, 93],
      [66, 77, 54],
      [131, 111, 68],
      [122, 160, 119],
      [16, 36, 34],
      [89, 120, 87],
      [31, 32, 25],
      [64, 126, 124],
      [26, 92, 100],
      [156, 60, 52],
    ],
    color: [60, 73, 52],
  },
  {
    id: 23,
    name: "Witches' Sabbath",
    date: [1819, 1823],
    artist: "Franciso Goya",
    path: "witches_sabbath.jpg",
    palette: [
      [163, 129, 89],
      [20, 10, 10],
      [97, 66, 46],
      [66, 42, 30],
      [47, 30, 22],
      [124, 76, 44],
      [75, 60, 45],
      [116, 100, 76],
      [108, 92, 76],
      [50, 36, 36],
    ],
    color: [32, 19, 16],
  },
  {
    id: 24,
    name: "Waves Breaking",
    date: [1881],
    artist: "Claude Monet",
    path: "waves_breaking.jpg",
    palette: [
      [141, 157, 190],
      [199, 202, 207],
      [54, 75, 113],
      [115, 115, 99],
      [118, 125, 132],
      [92, 117, 175],
      [85, 82, 95],
      [146, 168, 228],
      [110, 114, 157],
      [180, 204, 208],
    ],
    color: [136, 152, 185],
  },
  {
    id: 25,
    name: "Lady Holding a Fan",
    date: [1961],
    artist: "Lin Fengmian",
    path: "lady_holding_a_fan.jpg",
    palette: [
      [89, 97, 142],
      [205, 199, 219],
      [153, 150, 181],
      [41, 49, 69],
      [166, 182, 218],
      [183, 156, 153],
      [131, 140, 183],
      [58, 60, 92],
      [72, 140, 204],
      [41, 65, 100],
    ],
    color: [89, 98, 143],
  },
];

let selectedPaintings = [];
const fullContainer = document.querySelector(".full-container");
const imageContainer = document.querySelector(".painting-container");
const thumbnails = document.querySelectorAll(".thumbnail");
const cardElement = document.querySelector(".info-overlay");
let colorDivs = document.querySelectorAll(".color");

document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page is the painting display page
  if (document.body.classList.contains("home")) {
    getPainting(selectRandomPainting());
  }
  // Check if the current page is the image gallery page
  else if (document.body.classList.contains("gallery")) {
    function renderImages(data) {
      const container = document.querySelector(".image-gallery"); // Assuming there's a container in your HTML with class "image-gallery"

      data.forEach((image) => {
        // Create a div element for the image container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        // Create an img element for the image
        const imgElement = document.createElement("img");
        imgElement.src = `imgs/${image.path}`; // Assuming all images are in the "imgs" folder
        imgElement.alt = image.name;
        imgElement.title = `${image.name} by ${image.artist}`;

        // Create a div element for the color overlay
        const colorOverlay = document.createElement("div");
        colorOverlay.classList.add("color-overlay");
        colorOverlay.style.backgroundColor = `rgb(${image.color.join(", ")})`; // Set background color based on the "color" field

        // Append the img and color overlay to the image container
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(colorOverlay);

        // Append the image container to the gallery container
        container.appendChild(imageContainer);
      });
    }

    // Call the function to render images
    renderImages(data);
  }
});

function getPainting(paintingData) {
  // colorDivs.forEach((colorDiv) => {
  //   colorDiv.classList.remove("revealed");
  // });

  const paintingImage = document.querySelector(".painting");
  const colorOverlay = document.querySelector(".color-overlay");

  paintingImage.id = paintingData.id;

  paintingImage.src = path_prefix + paintingData.path;

  if (paintingImage.complete) {
    createColorDivs(paintingImage, colorOverlay, paintingData.palette);
    //fillColors(paintingData.palette, colorOverlay, paintingImage);
  } else {
    paintingImage.addEventListener("load", function () {
      createColorDivs(paintingImage, colorOverlay, paintingData.palette);
      //fillColors(paintingData.palette, colorOverlay, paintingImage);
    });
  }

  const nextClosestPaintings = getNextClosestPaintings(
    paintingData,
    data,
    selectedPaintings
  );
  console.log(nextClosestPaintings);
  renderClosestPaintings(nextClosestPaintings, fullContainer);

  setTimeout(() => {
    displayPaintingInfo(paintingData);
  }, timeInterval + timeInterval * 20);
}

function createColorDivs(paintingImage, colorOverlay, palette) {
  paintingImage.style.opacity = 0;

  colorOverlay.innerHTML = "";
  // Get the height of the painting image
  const paintingHeight = paintingImage.clientHeight;

  // Determine the size of each color div (you can adjust this as needed)
  const colorDivHeight = 50; // Example height for each color div

  // Calculate the number of color divs based on the height of the painting
  const numColorDivs =
    Math.floor(paintingHeight / colorDivHeight) > 10
      ? 10
      : Math.floor(paintingHeight / colorDivHeight);

  // Generate the color divs dynamically
  for (let i = 0; i < numColorDivs; i++) {
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorOverlay.appendChild(colorDiv);

    setTimeout(() => {
      colorDiv.style.backgroundColor = `rgb(${palette[i].join(", ")})`;
    }, timeInterval * i);

    setTimeout(() => {
      colorDiv.addEventListener("mouseenter", function () {
        colorDiv.classList.add("revealed");
      });
    }, timeInterval * palette.length * 1.2);
  }

  setTimeout(() => {
    paintingImage.style.opacity = 1;
  }, timeInterval * palette.length + timeInterval);
}

function selectRandomPainting() {
  // Select a random painting from the available paintings
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomPainting = data[randomIndex];

  return randomPainting;
}

function calculateColorDistance(color1, color2) {
  // Extract individual RGB components
  const r1 = color1[0];
  const g1 = color1[1];
  const b1 = color1[2];

  const r2 = color2[0];
  const g2 = color2[1];
  const b2 = color2[2];

  // Calculate the Euclidean distance between the two colors
  const distance = Math.sqrt(
    Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2)
  );

  return distance;
}

let visited = [];
function getNextClosestPaintings(currentPainting, data, visited) {
  // Get the color of the current painting
  const currentColor = currentPainting.color;

  // Calculate the distance between the current painting's color and all other paintings' colors
  const distances = data
    .filter(
      (painting) =>
        !visited.includes(painting.id) && painting.id !== currentPainting.id
    ) // Filter out visited and current painting
    .map((painting) => ({
      painting,
      distance: calculateColorDistance(currentColor, painting.color),
    }));

  // Sort the paintings based on their color distances in ascending order
  distances.sort((a, b) => a.distance - b.distance);

  // Get the next two closest paintings that haven't been visited yet
  const nextClosestPaintings = [];
  for (const { painting } of distances) {
    if (nextClosestPaintings.length >= 2) {
      break; // Stop when we have found the next two closest paintings
    }
    if (!visited.includes(painting.id)) {
      nextClosestPaintings.push(painting);
    }
  }

  // Mark the next closest paintings as visited
  nextClosestPaintings.forEach((painting) => visited.push(painting.id));

  // Clear the visited array if all paintings are visited
  if (visited.length === data.length) {
    visited.length = 0;
  }

  return nextClosestPaintings;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    let id = thumbnail.id;
    const paintingData = data.find((painting) => painting.id === parseInt(id));
    getPainting(paintingData);
  });
});

function renderClosestPaintings(paintings, container) {
  paintings.forEach((painting, index) => {
    const divElement = container.querySelector(`.option${index + 1}`);
    divElement.style.backgroundColor = `rgb(${painting.color.join(", ")})`;
    divElement.id = painting.id;
  });
}

function displayPaintingInfo(paintingData) {
  const titleElement = document.querySelector(".painting-title");
  const artistElement = document.querySelector(".painting-artist");
  const dateElement = document.querySelector(".painting-date");
  titleElement.textContent = paintingData.name;
  artistElement.textContent = paintingData.artist;
  dateElement.textContent = paintingData.date.join(" - ");
}

// const colorThief = new ColorThief();
// const images = document.querySelectorAll(".image-gallery img");

// setTimeout(() => {
//   images.forEach((img, index) => {
//     let color = [];
//     let palette = [];
//     if (img.complete) {
//       color = colorThief.getColor(img);
//       palette = colorThief.getPalette(img);
//       data[index].color = color;
//       data[index].palette = palette;
//     } else {
//       img.addEventListener("load", function () {
//         color = colorThief.getColor(img);
//         palette = colorThief.getPalette(img);
//         data[index].color = color;
//         data[index].palette = palette;
//       });
//     }
//   });
// }, 1000);

// console.log(data);
