'use strict';

const navToggle = document.getElementsByClassName("nav-toggle")[0];
const nav = document.getElementsByClassName("nav")[0];

console.log(navToggle);
console.log(nav);

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
})