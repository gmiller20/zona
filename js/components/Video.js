import { VideoPlayer } from '../utils/videoPlayer.js';

export class Video {
    constructor() {
        this.videoPlayer = new VideoPlayer();
    }

    render() {
        const videoContainer = document.getElementById('video-container');
        if (!videoContainer) return;

        videoContainer.innerHTML = `
            <video src="./video/video.mp4" class="video"></video>
            <div class="overlay">
                <button class="video-button">
                    <img src="./img/play-white.svg" alt="Play" class="btn-icon"
                    data-play-src="./img/play-white.svg" data-pause-src="./img/pause-white.png">
                </button>
            </div>
        `;

        this.videoPlayer.init();
    }
}