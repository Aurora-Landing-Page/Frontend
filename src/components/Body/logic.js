var background = document.querySelector(".background");
var party_image = document.querySelector(".party_image");
var text = document.querySelector(".text");
var auroratext = document.querySelector(".Aurora23_text");
var after_text = document.querySelector(".After_text");
var introhead = document.querySelector(".intro_head");
var discription = document.querySelector(".discription");
var video = document.querySelector(".Video");
var video_player = document.querySelector(".video_player");
var play_counter = 1;
var reg = {
  value: 0,
};
var counter = document.querySelector(".counter");
var wheel1 = document.querySelector(".wheel1");
var wheel2 = document.querySelector(".wheel2");
var img_grid = document.querySelector(".img_grid");
var image = document.querySelector(".image");
video_player.pause();

var alpha = 1;
img_grid.style.filter = `opacity(${alpha})`;
image.style.filter = `opacity(${alpha})`;

window.addEventListener("scroll", () => {
  document.querySelector(".intro").style.position = "fixed";
  document.querySelector(".intro").style.top = "200px";
  const scrollPosition = window.scrollY;
  alpha = 1 - Math.min(1, (scrollPosition - 156) / 156);
  img_grid.style.filter = `opacity(${alpha})`;
  image.style.filter = `opacity(${alpha})`;
  img_grid.style.filter = `opacity(${alpha})`;
  image.style.filter = `opacity(${alpha})`;

  if (scrollPosition < 1000) {
    background.style.position = "sticky";
    background.style.top = "0px";
    background.style.backgroundSize = `${100 + scrollPosition / 120}% ${
      100 + scrollPosition / 120
    }%`;
    text.style.backdropFilter = `brightness(${
      100 + (70 * (scrollPosition - 333)) / 667
    }%)`;

    auroratext.style.cssText = `top:${
      35 - (10 * scrollPosition) / 667
    }%;transform:scale(${
      1 - (0.2 * scrollPosition) / 667
    });color:rgba(255,2555,255,${1 - (2 * scrollPosition) / 667})`;
    after_text.style.cssText = `top:${Math.max(
      35,
      51 - (16 * (scrollPosition - 333)) / 334
    )}%;transform:scale(${
      1 - (0.2 * scrollPosition) / 667
    });color:rgba(255,2555,255,${(2 * (scrollPosition - 333)) / 667})`;
  } else if (scrollPosition > 1000 && scrollPosition < 1831) {
    background.style.position = "relative";
    background.style.top = "900px";
  } else if (scrollPosition > 1831 && scrollPosition < 2100) {
    console.log("hey");
    introhead.style.color = `rgba(255,255,255,${Math.min(
      1,
      (scrollPosition - 1831) / 200
    )})`;
    introhead.style.fontSize = `${Math.min(
      5.8,
      (5.02 * scrollPosition) / 1831
    )}rem`;
  } else if (scrollPosition > 2100 && scrollPosition < 2400) {
    console.log("moving we are back");
    introhead.style.marginTop = `${Math.max(
      -18,
      (-18 * (scrollPosition - 2100)) / 300
    )}vh`;
    introhead.style.fontSize = `${Math.min(
      5.8,
      5.8 * (1 - (scrollPosition - 2100) / 3000)
    )}rem`;
  } else if (scrollPosition > 2400 && scrollPosition < 2750) {
    console.log("discription comes in");
    discription.style.color = `rgba(255,255,255,${
      (scrollPosition - 2400) / 750
    })`;
    document.querySelector(".intro").style.position = "fixed";
    document.querySelector(".intro").style.top = "200px";
    video_player.setAttribute("controls", false);
    video_player.pause();
  } else if (scrollPosition > 2750) {
    document.querySelector(".intro").style.position = "relative";
    document.querySelector(".intro").style.top = "1900px";
    video_player.setAttribute("controls", true);
    video_player.play();
    video.style.filter = `opacity(${Math.min(
      1,
      (scrollPosition - 2750) / 400
    )})`;
  }

  if (scrollPosition > 3400) {
    video_player.pause();
    video.style.filter = `opacity(${Math.max(
      0,
      (3700 - scrollPosition) / 300
    )})`;
  }
  if (scrollPosition > 3700) {
    counter.style.cssText = ` background: -webkit-linear-gradient(180deg,rgba(255,0,0,${
      (scrollPosition - 3700) / 300
    }), rgb(255,155,0,${(scrollPosition - 3700) / 500}));
        -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;`;
  }
  if (scrollPosition > 3750) {
    function incrementor(cls, start, end, duration) {
      let obj = document.querySelector(`.${cls}`),
        current = start,
        range = end - start,
        increment = end > start ? 25 : -25,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current + "+";
          if (current == end) {
            clearInterval(timer);
            reg.value = 1;
          }
        }, step);
    }
    if (reg.value == 0) {
      incrementor("reg_counter", 0, 4000, 1);
    }
  }
});

function move(event) {
  let rect = text.getBoundingClientRect();
  let centerX = rect.width / 2 - rect.left;
  let centerY = rect.height / 2 - rect.top;
  let x = event.clientX - centerX;
  let y = event.clientY - centerY;
  let type1 = document.querySelectorAll(".t1");
  let type2 = document.querySelectorAll(".t2");
  let type3 = document.querySelectorAll(".t3");
  let type4 = document.querySelectorAll(".t4");
  type1.forEach((div) => {
    div.style.transform = `translate(${x / 50}px,${y / 50}px) `;
  });
  type2.forEach((div) => {
    div.style.transform = `translate(${x / 50}px,${y / 15}px) `;
  });
  type3.forEach((div) => {
    div.style.transform = `translate(${x / 30}px,${y / 30}px) `;
  });
  type4.forEach((div) => {
    div.style.transform = `translate(${x / 15}px,${y / 50}px) `;
  });
}
window.addEventListener("mousemove", move);
