import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    console.log(data);

    localStorage.setItem("videoplayer-current-time", JSON.stringify(data))
};

const second = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(second.seconds)

player.setCurrentTime(second.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('play', throttle(onPlay, 1000));
