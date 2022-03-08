var source = "./mp3/mp3.mp3";
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load();
audio.addEventListener(
  "load",
  function () {
    audio.play();
  },
  true
);
audio.src = source;

var bth = document.querySelector("#main");
bth.addEventListener(
  "click",
  function () {
    audio.play();
  },
  true
);
