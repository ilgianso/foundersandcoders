
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

// slide show
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

// Arrow

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft') {
        previousSlide();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
        nextSlide();
    }
  });

// show slide
function show() {
  var x = document.getElementById("image-slider");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}