
// for mobile list
const verticalNavbar = document.querySelector(".navbar-vertical");
const menu = document.querySelector(".menu");

document.querySelector(".menu").addEventListener("click", () => {
  verticalNavbar.classList.toggle("active");
});

// for animation SVG length
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

// for animation fade out
const lastWord = document.querySelector("#fourteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 1s ease; opacity: 0; pointer-events: none;";
})