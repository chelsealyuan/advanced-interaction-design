// const colorThief = new ColorThief();
// const img = document.querySelector(".body img");

// // Make sure image is finished loading
// if (img.complete) {
//   console.log(colorThief.getPalette(img));
// } else {
//   image.addEventListener("load", function () {
//     colorThief.getColor(img);
//   });
// }

const path_prefix = "/imgs/";

const data = [
  {
    id: 1,
    name: "Lots, Lots of Kaikai and Kiki",
    date: [2009],
    artist: "Takashi Murakami",
    path: "kaikai_kiki.jpg",
    palette: [],
  },
  {
    id: 2,
    name: "april, dragon dance, look, there are mysterious clouds",
    date: [2021],
    artist: "Aya Takano",
    path: "april_clouds.jpg",
    palette: [],
  },
  {
    id: 3,
    name: "Midnight Truth",
    date: [2017],
    artist: "Aya Takano",
    path: "midnight_truth.jpg",
    palette: [],
  },
  {
    id: 4,
    name: "Roses",
    date: [1890],
    artist: "Vincent Van Gogh",
    path: "roses.jpg",
    palette: [],
  },
  {
    id: 5,
    name: "Ophelia",
    date: [1851],
    artist: "John Everett Millais",
    path: "ophelia.jpg",
    palette: [],
  },
  {
    id: 6,
    name: "A painted picture of the Universe",
    date: [1920, 1934],
    artist: "Roy de Maistre",
    path: "",
    palette: [],
  },
  {
    id: 7,
    name: "Red Cannas",
    date: [1927],
    artist: "Georgia O'Keeffe",
    path: "red_cannas.jpg",
    palette: [],
  },
  {
    id: 8,
    name: "Self-portrait with Monkey",
    date: [1945],
    artist: "Frida Kahlo",
    path: "self-portrait_with_monkey.jpg",
    palette: [],
  },
  {
    id: 9,
    name: "Cymon and Iphigenia",
    date: [1884],
    artist: "Frederic Leighton",
    path: "cymon_and_iphigenia.jpg",
    palette: [],
  },
  {
    id: 10,
    name: "Sewing the Sail",
    date: [1896, 1896],
    artist: "Joaquín Sorolla",
    path: "sewing_the_sail.jpg",
    palette: [],
  },
  {
    id: 11,
    name: "The plain of Gennevilliers, yellow fields",
    date: [1884],
    artist: "Gustave Caillebotte",
    path: "the_plain_of_gennevilliers.jpg",
    palette: [],
  },
  {
    id: 12,
    name: "Shakuntala & the Deer",
    date: [1960],
    artist: "Angela Trindade",
    path: "the_deer.jpg",
    palette: [],
  },
  {
    id: 13,
    name: "Work",
    date: [1968],
    artist: "Yoo Youngkuk",
    path: "work.jpg",
    palette: [],
  },
  {
    id: 14,
    name: "Sunrise over the Eastern Sea",
    date: [1932],
    artist: "Fujishima Takeji",
    path: "sunrise_over_the_eastern_sea.jpg",
    palette: [],
  },
  {
    id: 15,
    name: "Summer evening on Skagen Sønderstrand",
    date: [1893],
    artist: "Peder Severin Krøyer",
    path: "summer_evening.jpg",
    palette: [],
  },
  {
    id: 16,
    name: "Musical Angel",
    date: [1522],
    artist: "Rosso Fiorentino",
    path: "musical_angel.jpg",
    palette: [],
  },
  {
    id: 17,
    name: "Still Life with Flowers and Fruit",
    date: [1522],
    artist: "Jan van Huysum",
    path: "still_life.jpg",
    palette: [],
  },
  {
    id: 18,
    name: "Cotopaxi",
    date: [1862],
    artist: "Frederic Edwin Church",
    path: "cotopaxi.jpg",
    palette: [],
  },
  {
    id: 19,
    name: "Three girls watching TV",
    date: [2001],
    artist: "Liu Xiaodongh",
    path: "three_girls.jpg",
    palette: [],
  },
  {
    id: 20,
    name: "Three girls watching TV",
    date: [2001],
    artist: "Liu Xiaodong",
    path: "three_girls.jpg",
    palette: [],
  },
  {
    id: 21,
    name: "Doorway in Tangier",
    date: [1912],
    artist: "Henry Ossawa Tanner",
    path: "doorway_in_tangier.jpg",
    palette: [],
  },
  {
    id: 22,
    name: "Buying Snacks",
    date: [1950],
    artist: "Hendra Gunawan",
    path: "three_girls.jpg",
    palette: [],
  },
  {
    id: 23,
    name: "Prelude to Water Melody Series",
    date: [1998],
    artist: "Zhang Xiaoming, Jiao Xiaojian, Cai Feng",
    path: "three_girls.jpg",
    palette: [],
  },
  {
    id: 24,
    name: "Three girls watching TV",
    date: [2001],
    artist: "Liu Xiaodongh",
    path: "three_girls.jpg",
    palette: [],
  },
  {
    id: 25,
    name: "Three girls watching TV",
    date: [2001],
    artist: "Liu Xiaodongh",
    path: "three_girls.jpg",
    palette: [],
  },
];

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener("wheel", transformScroll);
