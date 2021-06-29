let playButton = document.getElementById('play-pause');
let ppIcon = document.getElementById('pp-icon');
let playing = false;

playButton.addEventListener('click', () => {
    if(!playing) {
        // begin playing song
        // start timer
        // update elapsed time continuously
        ppIcon.innerText = "pause_circle_filled";
        playing = true;
    }
    else {
        // stop playing song
        // stop timer
        ppIcon.innerText = "play_circle_filled";
        playing = false;
    }
});