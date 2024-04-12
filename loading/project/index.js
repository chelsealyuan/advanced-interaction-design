const colorThief = new ColorThief();
const img = document.querySelector(".body img");

// Make sure image is finished loading
if (img.complete) {
  console.log(colorThief.getPalette(img));
} else {
  image.addEventListener("load", function () {
    colorThief.getColor(img);
  });
}
