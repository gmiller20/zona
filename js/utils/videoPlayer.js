export class VideoPlayer {
    constructor() {
        this.video = null;
        this.overlay = null;
        this.videoButton = null;
        this.btnIcon = null;
        this.videoContainer = null;

        this._vcEnter = null;
        this._vcLeave = null;
    }

    init() {
        this.video = document.querySelector('.video');
        this.overlay = document.querySelector('.overlay');
        this.videoButton = document.querySelector('.video-button');
        this.btnIcon = document.querySelector('.btn-icon');
        this.videoContainer = document.querySelector('.video-container');

        if (this.overlay) {
            this.overlay.classList.remove('hidden');
        }

        this.disableHoverWhilePlaying();
        this.attachVideoEvents();
    }

    attachVideoEvents() {
        if (this.videoButton && this.video) {
            this.videoButton.addEventListener('click', () => this.togglePlay());
        }

        if (!this.video) return;

        this.video.addEventListener('play', () => this.enableHoverWhilePlaying());
        this.video.addEventListener('pause', () => this.disableHoverWhilePlaying());
        this.video.addEventListener('ended', () => this.disableHoverWhilePlaying());
    }

    togglePlay() {
        if (!this.video) return;

        if (this.video.paused) {
            this.video.play();
            this.setButtonIcon(this.btnIcon?.dataset.pauseSrc, './img/pause-white.png');
            this.enableHoverWhilePlaying();
        } else {
            this.video.pause();
            this.setButtonIcon(this.btnIcon?.dataset.playSrc, './img/play-white.svg');
            this.disableHoverWhilePlaying();
        }
    }

    setButtonIcon(src, fallback) {
        if (!this.btnIcon) return;
        this.btnIcon.src = src || fallback;
    }

    enableHoverWhilePlaying() {
        if (!this.videoContainer || !this.overlay) return;

        this.disableHoverWhilePlaying();

        this._vcEnter = () => this.overlay.classList.remove('hidden');
        this._vcLeave = () => this.overlay.classList.add('hidden');

        this.videoContainer.addEventListener('mouseenter', this._vcEnter);
        this.videoContainer.addEventListener('mouseleave', this._vcLeave);

        this.overlay.classList.add('hidden');
    }

    disableHoverWhilePlaying() {
        if (!this.videoContainer || !this.overlay) return;

        if (this._vcEnter) {
            this.videoContainer.removeEventListener('mouseenter', this._vcEnter);
        }

        if (this._vcLeave) {
            this.videoContainer.removeEventListener('mouseleave', this._vcLeave);
        }

        this._vcEnter = null;
        this._vcLeave = null;

        this.overlay.classList.remove('hidden');
    }
}