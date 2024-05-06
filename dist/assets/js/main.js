// navbar border bottom on scroll
let navscroll = document.querySelector(".navbar-scroll")

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    navscroll.classList.add("scrolled")
  } else {
    navscroll.classList.remove("scrolled")
  }
}

// animate on scroll
AOS.init();