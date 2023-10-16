const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 1, roundness: 3 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
    combination = combinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}, 2000);

// title
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
const h1Element = document.querySelector("h1");

function startTextAnimation() {
  let iteration = 0;

  const interval = setInterval(() => {
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1Element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1Element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 70);
}

// Run the animation immediately on page load

let index = 0,
  intervall = 1000;

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${random(-10, 100)}%`);
  star.style.setProperty("--star-top", `${random(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);

    setInterval(() => animate(star), 1000);
  }, index++ * (intervall / 3));
}

const loader = document.querySelector("#loader");
let load = 0;
setInterval(function () {
  loader.textContent = `${load} %`;
  if (load < 100) {
    load++;
  } else {
    // just to make it repeat i used this
    setTimeout(function () {
      load = 0;
    }, 2000);
    //  window.location.href = "google.com";
  }
}, 50);
