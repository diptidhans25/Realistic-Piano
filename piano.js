const keys = document.querySelectorAll(".key");
note = document.querySelector(".nowplaying");
hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
const regulars = document.querySelectorAll(".key.white");

const sharpKeys = document.querySelectorAll(".key.sharp");
var sharpKeyLength = document.querySelectorAll(".key.sharp").length;
console.log(sharpKeyLength);

const whiteKeys = document.querySelectorAll(".key.white");
var whiteKeyLength = document.querySelectorAll(".key.white").length;

console.log(whiteKeyLength);

const darkButton = document.getElementById("darkButton");

const whiteButton = document.getElementById("whiteButton");

darkButton.addEventListener("click", () => {
  // body.classList.add("darkColor");
  console.log("hellow hii");
  for (var i = 0; i < sharpKeyLength; i++) {
    sharpKeys[i].classList.add("changeSharpColor");
  }
  for (var i = 0; i < whiteKeyLength; i++) {
    whiteKeys[i].classList.add("changeWhiteColor");
  }
});

whiteButton.addEventListener("click", () => {
  for (var i = 0; i < sharpKeyLength; i++) {
    sharpKeys[i].classList.remove("changeSharpColor");
  }
  for (var i = 0; i < whiteKeyLength; i++) {
    whiteKeys[i].classList.remove("changeWhiteColor");
  }
});

whiteButton.addEventListener("click", () => {
  body.classList.remove("darkColor");
});

// for click

var A = document.getElementById("A");

A.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "C";

  A.classList.add("playing");
  var playSound = new Audio("A.wav");
  playSound.play();
});

var AA = document.getElementById("AA");

AA.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "C#";

  AA.classList.add("playing");
  var playSound = new Audio("AA.wav");
  playSound.play();
});

var ab = document.getElementById("ab");

ab.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "D";

  ab.classList.add("playing");
  var playSound = new Audio("ab.wav");
  playSound.play();
});

var BA = document.getElementById("BA");

BA.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "D#";

  BA.classList.add("playing");
  var playSound = new Audio("BA.wav");
  playSound.play();
});

var Ca = document.getElementById("Ca");

Ca.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "E";

  Ca.classList.add("playing");
  var playSound = new Audio("Ca.wav");
  playSound.play();
});

var Cb = document.getElementById("Cb");

Cb.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "F";

  Cb.classList.add("playing");
  var playSound = new Audio("Cb.wav");
  playSound.play();
});

var DB = document.getElementById("DB");

DB.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "F#";

  DB.classList.add("playing");
  var playSound = new Audio("DB.wav");
  playSound.play();
});

var Dd = document.getElementById("Dd");

Dd.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "G";

  Dd.classList.add("playing");
  var playSound = new Audio("Dd.wav");
  playSound.play();
});

var EA = document.getElementById("EA");

EA.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "G#";

  EA.classList.add("playing");
  var playSound = new Audio("EA.wav");
  playSound.play();
});

var Eb = document.getElementById("Eb");

Eb.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "A";

  Eb.classList.add("playing");
  var playSound = new Audio("Eb.wav");
  playSound.play();
});

var FA = document.getElementById("FA");

FA.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "A#";

  FA.classList.add("playing");
  var playSound = new Audio("FA.wav");
  playSound.play();
});

var Fb = document.getElementById("Fb");

Fb.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "B";

  Fb.classList.add("playing");
  var playSound = new Audio("Fb.wav");
  playSound.play();
});

var GA = document.getElementById("GA");

GA.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "C";

  GA.classList.add("playing");
  var playSound = new Audio("GA.wav");
  playSound.play();
});

var Gb = document.getElementById("Gb");

Gb.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "C#";

  Gb.classList.add("playing");
  var playSound = new Audio("Gb.wav");
  playSound.play();
});

var HB = document.getElementById("HB");

HB.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "HB";

  HB.classList.add("playing");
  var playSound = new Audio("HB.wav");
  playSound.play();
});

var Hb = document.getElementById("Hb");

Hb.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "D#";

  Hb.classList.add("playing");
  var playSound = new Audio("Hb.wav");
  playSound.play();
});

var IB = document.getElementById("IB");

IB.addEventListener("click", (e) => {
  // key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyNote = key.getAttribute("data-note");
  note.innerHTML = "E";

  IB.classList.add("playing");
  var playSound = new Audio("IB.wav");
  playSound.play();
});

// let playNoteClick = (key) => {
//   const noteSound = document.getElementById(key.dataset.note);
//   noteSound.currentTime = 0;
//   noteSound.play();
//   console.log("heelo");
//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;

//   setTimeout(function () {
//     key.classList.remove("active");
//   }, 100);

//   // noteSound.addEventListener("ended", () => {
//   //   key.classList.remove("active");
//   // });
// };

// let playNoteClick = (e) => {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//   if (!key) return;

//   const keyNote = key.getAttribute("data-note");

//   key.classList.add("playing");
//   note.innerHTML = keyNote;
//   audio.currentTime = 0;
//   audio.play();
// };

// keys.forEach((key) => {
//   key.addEventListener("click", () => playNoteClick(key));
// });
