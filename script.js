"use strict";

window.onload = function() {
  var hamburger = document.querySelector("div.hamburger-menu > div");

  hamburger.onclick = function(e) {
    if (hamburger.classList.item(0) == null) {
      hamburger.classList.add("close");
    } else {
      hamburger.classList.toggle("close");
      hamburger.classList.toggle("open");
    }
  };
};

document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('show');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
