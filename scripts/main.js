var togglers = document.getElementsByClassName('togglers');
var bannerEle = document.getElementsByClassName('banners')[0];
var slidePaths = ['../assets/images/slider-1.jpg','./assets/images/slider-2.jpg','./assets/images/slider-3.jpg','./assets/images/slider-4.jpg'];
var currentIndex = 0; // Current index of the slide

function addToggleEvent() {
    for(var i = 0; i < togglers.length; i++){
        togglers[i].addEventListener('click', toggleSlide);
    }
}

function toggleSlide() {
    for (var i = 0; i < togglers.length; i++) {
        togglers[i].style.backgroundColor = '#632c66';
    }
    this.style.backgroundColor = 'white';
  
    var index = Array.prototype.indexOf.call(togglers, this); // Get the index of the clicked togglers element
    bannerEle.style.backgroundImage = 'url(' + slidePaths[index] + ')';
    currentIndex = index; // Update the current index
}

function animateSlide() {
    currentIndex = (currentIndex + 1) % slidePaths.length; // Increment the current index and wrap around if necessary
    bannerEle.style.backgroundImage = 'url(' + slidePaths[currentIndex] + ')';

    // Update the active toggler
    for (var i = 0; i < togglers.length; i++) {
        togglers[i].style.backgroundColor = '#632c66';
    }
    togglers[currentIndex].style.backgroundColor = 'white';
}

addToggleEvent();

// Automatically animate the slide every 0.5 seconds
setInterval(animateSlide, 4000);

// code for review-carousel starts here

// var reviewSlider = document.getElementsByClassName('reviews-slider-container')[0];
// var reviewSliderChildCount = reviewSlider.childElementCount;
// reviewSlider.style.width = (reviewSliderChildCount * 100) + '%';

// var slider_btns = document.getElementsByClassName('slider-btn');

// var currentSlide = 0;

// for (var i = 0; i < slider_btns.length; i++) {
//   slider_btns[i].addEventListener('click', changeSlide);
// }

// function changeSlide() {
//   if (this.childNodes[0].classList.contains('fa-chevron-right')) {
//     currentSlide++;
//     if (currentSlide >= reviewSliderChildCount) {
//       currentSlide = reviewSliderChildCount - 1;
//     }
//   } else {
//     currentSlide--;
//     if (currentSlide < 0) {
//       currentSlide = 0;
//     }
//   }

//   var translatePercentage = currentSlide * -20;
//   reviewSlider.style.transform = "translateX(" + translatePercentage + "%)";
// }

var reviewSlider = document.getElementsByClassName('reviews-slider-container')[0];
var reviewSliderChildCount = reviewSlider.childElementCount;
var visibleSlides = 4; // Number of visible slides
var slideWidth = 100 / visibleSlides; // Width of each slide

reviewSlider.style.width = (reviewSliderChildCount * slideWidth) + '%';

var slider_btns = document.getElementsByClassName('slider-btn');

var currentSlide = 0;
var slideIncrement = slideWidth; // Slide increment in percentage
var isTransitioning = false;

for (var i = 0; i < slider_btns.length; i++) {
  slider_btns[i].addEventListener('click', changeSlide);
}

reviewSlider.addEventListener('transitionend', handleTransitionEnd);

function changeSlide() {
  if (isTransitioning) {
    return;
  }

  if (this.childNodes[0].classList.contains('fa-chevron-right')) {
    currentSlide += slideIncrement;
    if (currentSlide > (reviewSliderChildCount - visibleSlides) * slideWidth) {
      currentSlide = 0;
    }
  } else {
    currentSlide -= slideIncrement;
    if (currentSlide < 0) {
      currentSlide = (reviewSliderChildCount - visibleSlides) * slideWidth;
    }
  }

  var translatePercentage = -currentSlide;
  reviewSlider.style.transform = "translateX(" + translatePercentage + "%)";
  isTransitioning = true;
}

function handleTransitionEnd() {
  isTransitioning = false;
}
