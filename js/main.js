const api_key = '18b550d49ce741aa37722f6f0b88e308';
// const form = document.querySelector('#form');
// const input = document.querySelector('.form__input')
const body = document.querySelector('body');
const weatherSection = document.querySelector('.weather');

if (weatherSection) {
    body.onload = submitHandler;
}

async function submitHandler(e) {
    const weatherInfo = await getWeather(57.155, 65.459);
    console.log(weatherInfo);
    const weatherData = {
        temp: weatherInfo.main.temp,
        humidity: weatherInfo.main.humidity,
        speed: weatherInfo.wind.speed,
        main: weatherInfo.weather[0]['main']
    };

    renderWeatherData(weatherData);

    const weatherMessage = document.querySelector('.weather-message-text');
    const weatherMessageImg = document.querySelector('.koj');

    if (weatherData.temp >= 20 && weatherMessage && weatherMessageImg) {
        weatherMessage.innerText = 'На улице тепло. Но кожанку все равно наденьте!';
        weatherMessageImg.src = './img/weather/koj-warm.png';
    }
}

// async function getGeo (name) {
//     const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${api_key}`;
//     const response = await fetch(geoUrl);
//     const data = await response.json(); 
//     return(data);
// }

async function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${api_key}`;
    const response = await fetch(weatherUrl);
    const data = await response.json();
    return (data);
}

function renderWeatherData(data) {
    const temp = document.querySelector('.weather__temp');
    const humidity = document.querySelector('#humidity');
    const speed = document.querySelector('#speed');
    const img = document.querySelector('.weather__img');

    if (temp) temp.innerText = Math.round(data.temp) + '°c';
    if (humidity) humidity.innerText = data.humidity + '%';
    if (speed) speed.innerText = data.speed + ' km/h';

    const fileNames = {
        'Clouds': 'clouds',
        'Clear': 'clear',
        'Rain': 'rain'
    };

    if (img) img.src = `./img/weather/${fileNames[data.main]}.png`;
}

/* VIDEO */

const video = document.querySelector('.video');
const overlay = document.querySelector('.overlay');
const videoButton = document.querySelector('.video-button');
const btnIcon = document.querySelector('.btn-icon');

const videoContainer = document.querySelector('.video-container');

// ensure overlay is visible by default on page load
if (overlay) overlay.classList.remove('hidden');

function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
        overlay.classList.add('hidden');

    } else {
        overlay.classList.remove('hidden');
    }
}

// overlay should be visible by default and stay until playback starts.
// When video is playing, enable hover behaviour (show on enter, hide on leave).
let _vcEnter = null;
let _vcLeave = null;

function enableHoverWhilePlaying() {
    if (!videoContainer) return;
    // remove previous handlers if any
    disableHoverWhilePlaying();
    _vcEnter = () => overlay.classList.remove('hidden');
    _vcLeave = () => overlay.classList.add('hidden');
    videoContainer.addEventListener('mouseenter', _vcEnter);
    videoContainer.addEventListener('mouseleave', _vcLeave);
    // hide overlay immediately when playback starts
    if (overlay) overlay.classList.add('hidden');
}

function disableHoverWhilePlaying() {
    if (!videoContainer) return;
    if (_vcEnter) videoContainer.removeEventListener('mouseenter', _vcEnter);
    if (_vcLeave) videoContainer.removeEventListener('mouseleave', _vcLeave);
    _vcEnter = null; _vcLeave = null;
    // ensure overlay is visible when not playing
    if (overlay) overlay.classList.remove('hidden');
}

// Initialize: overlay visible by default (handled earlier). Ensure hover handlers are off.
disableHoverWhilePlaying();

if (videoButton && video) {
    videoButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            if (btnIcon) {
                btnIcon.src = btnIcon.dataset.pauseSrc || "./img/pause-white.png";
            }
            enableHoverWhilePlaying();
        } else {
            video.pause();
            if (btnIcon) {
                btnIcon.src = btnIcon.dataset.playSrc || "./img/play-white.svg";
            }
            disableHoverWhilePlaying();
        }
    });
}

// Also respond to native play/pause events (in case playback is controlled elsewhere)
if (video) {
    video.addEventListener('play', enableHoverWhilePlaying);
    video.addEventListener('pause', disableHoverWhilePlaying);
    video.addEventListener('ended', disableHoverWhilePlaying);
}

/* FORM */

// Обработка отправки формы с AJAX (без перезагрузки страницы)
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const messageDiv = document.getElementById('message');
        if (!messageDiv) return;
        messageDiv.className = 'message';

        const formData = new FormData(this);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                messageDiv.className = 'message success';
                messageDiv.textContent = '✅ Данные успешно отправлены! Ожидайте этапа.';
                form.reset();
            } else {
                throw new Error('Ошибка отправки');
            }
        } catch (error) {
            messageDiv.className = 'message error';
            messageDiv.textContent = '❌ Ошибка при отправке. Попробуйте снова.';
        }

        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            messageDiv.className = 'message';
        }, 5000);
    });
}
