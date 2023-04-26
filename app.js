let button = document.getElementById("read");
let notifi = document.querySelectorAll(".single");
let red = document.querySelectorAll(".dot");
let num = document.getElementById("number");

button.addEventListener("click", () => {
  notifi.forEach((e) => {
    e.classList.remove("hidden");
  });

  red.forEach((e) => {
    e.classList.remove("dot");
  });

  num.innerHTML = "0";
});

// button.addEventListener("click", () => {
//   document.querySelectorAll(".single").forEach((e) => {
//     e.classList.remove("hidden");
//   });
//   document.querySelectorAll(".dot").forEach((e) => {
//     e.classList.remove("dot");
//   });
//   document.getElementById("number").inner = "0";
// });
