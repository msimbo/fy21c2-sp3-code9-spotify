const emilyButton = document.getElementById('emily');
const dropDown = document.getElementById('dropdown');

const heartDiv = document.getElementById('heart-box');
const heart = document.getElementById('heart');
let liked = false;

const playButton = document.getElementById('play-pause');
const ppIcon = document.getElementById('pp-icon');
let playing = false;

/* Show/Hide dropdown menu */
emilyButton.addEventListener('click', () => {
    dropDown.classList.toggle('hidden')
});

heartDiv.addEventListener( 'click', () => {
    if(!liked) {
        heart.innerText = "favorite";
        liked = true;
    }
    else {
        heart.innerText = "favorite_border";
        liked = false;
    }
});

/* Toggle PLAY/PAUSE button icon */
playButton.addEventListener('click', () => {
    if(!playing) {
        // begin playing song
        // start updating times and visual continuously
        ppIcon.innerText = "pause_circle_filled";
        playing = true;
    }
    else {
        // stop playing song
        // stop updating time and the play progress bar
        ppIcon.innerText = "play_circle_filled";
        playing = false;
    }
});