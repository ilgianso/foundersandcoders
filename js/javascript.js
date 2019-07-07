//slider


// var right = 0;
// var maxMargin;
// var jumpMargin = 150;

// function setWidth(){
//   var boxwidth = document.querySelector(".container").offsetWidth;
//   var displaywidth = document.querySelector(".row").offsetWidth;
//   var displayheight = document.querySelector(".row").offsetHeight;
//   var children = document.querySelectorAll(".row-container > .container").length;
//   var outerboxwidth = children * boxwidth + (children*10);
//   document.querySelector(".row-container").style.width = outerboxwidth+"px";
//   document.querySelectorAll("button")[0].style.height = displayheight+"px";
//   document.querySelectorAll("button")[1].style.height = displayheight+"px";
//   maxMargin = outerboxwidth - displaywidth;
// }

// (function(){
  
//     var listEl = document.querySelector('.home-grid.products-grid.products-grid--max-4');
//   var btnLeftEl = document.querySelector('#left-btn');
//   var btnRightEl = document.querySelector('#right-btn');
//   var count = 0;

//   function slideImages(dir){
//     var totalChildren = listEl.querySelectorAll(".item").length;
//     dir === "left" ? ++count : --count;
//     listEl.style.left = count * 286 + 'px';
//     btnLeftEl.style.display = count < 0 ? "block" : "none";
//     // Here, 4 is the number displayed at any given time
//     btnRightEl.style.display = count > 4-totalChildren ? "block" : "none";
//   }

//   btnLeftEl.addEventListener("click", function(e) {
//       slideImages("left");
//   });
//   btnRightEl.addEventListener("click", function(e) {
//       slideImages("right");
//   });

  
// })();







// Arrow

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
    plusSlides(1)
  }

  if (event.code == 'ArrowRight') {
    plusSlides(-1)
  }
});







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

