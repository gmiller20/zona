export class WeatherWidget {
    constructor() {
        this.container = document.getElementById('weather-widget');
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="container">
                <div class="weather">
                    <h1 class="app-title">Погода на зоне</h1>

                    <div class="weather-content">
                        <div class="weather__info">
                            <img src="./img/weather/drizzle.png" alt="Weather" class="weather__img">
                            <div class="weather__temp">22°c</div>
                        </div>

                        <div class="weather-details-container">
                            <div class="weather__details">
                                <img src="./img/weather/vlaj.svg" alt="" class="details__img">
                                <div class="weather__info-container">
                                    <div class="details__value" id="humidity">50%</div>
                                    <div class="details__title">Влажность</div>
                                </div>
                            </div>

                            <div class="weather__details">
                                <img src="./img/weather/wind.svg" alt="" class="details__img">
                                <div class="weather__info-container">
                                    <div class="details__value" id="speed">10 km/h</div>
                                    <div class="details__title">Скорость ветра</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="weather-content-bottom">
                        <img src="./img/weather/koj-cold.png" alt="koj" class="koj">
                        <div class="weather-message">
                            <div class="weather-message-hello">Товарищи чекисты!</div>
                            <div class="weather-message-text">На улице холодно. Не забудьте надеть кожанку!</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    update(data) {
        if (!this.container) return;

        this.updateTemperature(data.temp);
        this.updateHumidity(data.humidity);
        this.updateSpeed(data.speed);
        this.updateMainInfo(data);
    }

    updateTemperature(temp) {
        const tempElement = this.container.querySelector('.weather__temp');
        if (tempElement) {
            tempElement.textContent = `${Math.round(temp)}°c`;
        }
    }

    updateHumidity(humidity) {
        const humidityElement = this.container.querySelector('#humidity');
        if (humidityElement) {
            humidityElement.textContent = `${humidity}%`;
        }
    }

    updateSpeed(speed) {
        const speedElement = this.container.querySelector('#speed');
        if (speedElement) {
            speedElement.textContent = `${speed} km/h`;
        }
    }

    updateMainInfo(data) {
        const img = this.container.querySelector('.weather__img');
        const weatherMessage = this.container.querySelector('.weather-message-text');
        const weatherMessageImg = this.container.querySelector('.koj');

        if (img) {
            const fileNames = {
                Clouds: 'clouds',
                Clear: 'clear',
                Rain: 'rain'
            };
            const iconName = fileNames[data.main] || 'drizzle';
            img.src = `./img/weather/${iconName}.png`;
        }

        if (weatherMessage && weatherMessageImg) {
            if (data.temp >= 20) {
                weatherMessage.textContent = 'На улице тепло. Но кожанку все равно наденьте!';
                weatherMessageImg.src = './img/weather/koj-warm.png';
            } else {
                weatherMessage.textContent = 'На улице холодно. Не забудьте надеть кожанку!';
                weatherMessageImg.src = './img/weather/koj-cold.png';
            }
        }
    }
}