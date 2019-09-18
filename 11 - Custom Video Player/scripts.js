// Get our elements
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelector('.player__slider');



// Build our functions
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset);
  video.currentTime += Number(this.dataset.skip);
}

function handleRangeUpdate() {

}

// Hook up Event Listeners

player.addEventListener("click", togglePlay);

toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach(button => {
  button.addEventListener("click", skip);
})
ranges.forEach(range => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
})