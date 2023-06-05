var togglers = document.getElementsByClassName('togglers');
var bannerEle = document.getElementsByClassName('banners')[0];
var slidePaths = ['../assets/images/slider-1.jpg', './assets/images/slider-2.jpg', './assets/images/slider-3.jpg', './assets/images/slider-4.jpg'];
var currentIndex = 0; // Current index of the slide

var touchstartX = 0;
var touchendX = 0;

function addToggleEvent() {
  for (var i = 0; i < togglers.length; i++) {
    togglers[i].addEventListener('click', toggleSlide);
  }
}

addToggleEvent(); // calling of addToggleEvent

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

function handleSwipe() {
  bannerEle.addEventListener('touchstart', touchStart, false);
  bannerEle.addEventListener('touchend', touchEnd, false);

  function touchStart(event) {
    touchstartX = event.touches[0].clientX;
  }

  function touchEnd(event) {
    touchendX = event.changedTouches[0].clientX;
    handleGesture();
  }

  function handleGesture() {
    if (touchendX < touchstartX) {
      // Swiped left, move to the next slide
      currentIndex = (currentIndex + 1) % slidePaths.length;
      bannerEle.style.backgroundImage = 'url(' + slidePaths[currentIndex] + ')';
      updateActiveToggler();
    } else if (touchendX > touchstartX) {
      // Swiped right, move to the previous slide
      currentIndex = (currentIndex - 1 + slidePaths.length) % slidePaths.length;
      bannerEle.style.backgroundImage = 'url(' + slidePaths[currentIndex] + ')';
      updateActiveToggler();
    }
  }
}

function updateActiveToggler() {
  for (var i = 0; i < togglers.length; i++) {
    togglers[i].style.backgroundColor = '#632c66';
  }
  togglers[currentIndex].style.backgroundColor = 'white';
}

setInterval(animateSlide, 5000); // Automatically animate the slide every 5 seconds

handleSwipe(); // Enable touch swipe functionality


// script for OWL carousel starts here
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      items: 4, // Number of cards to be visible at a time
      loop: true, // Enable loop
      margin: 10, // Margin between cards
      nav: false, // Disable default navigation buttons
      responsive: {
        0: {
          items: 1 // Number of cards to be visible on small screens (optional)
        },
        576: {
          items: 2 // Number of cards to be visible on medium screens (optional)
        },
        992: {
          items: 4 // Number of cards to be visible on large screens (optional)
        }
      }
    });

    // Custom navigation buttons
    $('.custom-next').click(function () {
      $('.owl-carousel').trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function () {
      $('.owl-carousel').trigger('prev.owl.carousel');
    });
  });

// script for OWL carousel ends here


