'use strict';

//add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
 for (let i = 0, len = elements.length; i < len; i++) {
  elements[i].addEventListener(eventType, callback)
 }
}

//NAVBAR

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
 navbar.classList.toggle("active");
 overlay.classList.toggle("active");
 document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

//HEADER & BACK TO TOP BTN

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
 const isScrollBottom = lastScrollPos < window.scrollY;

 if (isScrollBottom) {
  header.classList.add("hide");
 } else {
  header.classList.remove("hide");
 }

 lastScrollPos = window.scrollY
}

window.addEventListener("scroll", function () {
 if (this.window.scrollY >= 50) {
  header.classList.add("active");
  backTopBtn.classList.add("active");
  hideHeader();
 } else {
  header.classList.remove("active");
  backTopBtn.classList.remove("active");
 }
});

// PAYMENT CHECKBOX

function checkBox() {

 const tcBtn = document.getElementById("tc");
 const paymentBtn = document.getElementById("customBtn");

 if (tcBtn.checked === true) {
  paymentBtn.style.display = "block";
 } 
 else {
  paymentBtn.style.display = "none";
 }
}