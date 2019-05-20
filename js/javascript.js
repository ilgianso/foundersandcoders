// var slideIndex = 1;
// const slides = document.getElementsByClassName("mySlides");
// showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;


  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }

  slides[slideIndex-1].style.display = "block"; 
}

// Arrow

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
    plusSlides(1)
  }

  if (event.code == 'ArrowRight') {
    plusSlides(-1)
  }
});


// Automatic slideShow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}



// Arrow Button to the Top

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scrollToTopButton").style.display = "block";
  } else {
    document.querySelector(".scrollToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// text animation banner

let words = 'Studing to enter in Founders and Coders'
let n = 0;
let isForward = true;
setInterval(() => {
    
    document.querySelector("#banner-write").innerHTML = words.substr(0,n) + '|';
    if(n == words.length + 5) {
        isForward = false;
    } else if (n == -5) {
        isForward = true;
    }

    if(isForward) {
        n++;
    } else {
        n--;
    }
} , 80);

document.querySelector(".banner").style.backgroundImage ='url("./imgages/newsite.jpg")';

