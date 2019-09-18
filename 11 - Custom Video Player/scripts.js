// Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelector('[data-skip]');
const ranges = document.querySelector('.player__slider');

console.dir(video)

// Build our functions
function togglePlay() {
  // video.paused ?

  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Hook up Event Listeners