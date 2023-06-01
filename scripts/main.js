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
setInterval(animateSlide, 6000);