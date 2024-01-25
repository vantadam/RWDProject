var slideIndex = 0;
var slideTimeout;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].classList.add("show");
  slideTimeout = setTimeout(showSlides, 5000);
}

function prevSlide() {
  clearTimeout(slideTimeout); 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slideIndex--;
  if (slideIndex < 1) {slideIndex = slides.length}    
  slides[slideIndex-1].classList.add("show");
  slideTimeout = setTimeout(showSlides, 5000); 
}

showSlides();

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("myNavbar");
var secondimage = document.getElementById("carimage2"); 
var sticky = navbar.offsetTop + (window.innerHeight * 0.2);
var backToTop = document.getElementById("backToTop");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    setTimeout(function() {
      navbar.classList.add("animate");
    }, 50); 
    
    backToTop.style.display = "block"; 
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("animate");
   
    backToTop.style.display = "none"; 
  }
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

var hamburger = document.getElementById("hamburger");
var linksdiv = document.getElementsByClassName("linksdiv")[0];

hamburger.addEventListener("click", function() {
    if (linksdiv.style.display === "none") {
        linksdiv.style.display = "block";
        navbar.classList.add("open");
    } else {
        linksdiv.style.display = "none";
        navbar.classList.remove("open");
    }
});