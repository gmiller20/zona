import { weatherConsts } from "../data/constants.js";

export class Weather {
    constructor() {
        this.apiKey = weatherConsts.apiKey;
        this.coordinates = weatherConsts.coordinates;
    }

    async loadWeather() {
        const weatherInfo = await this.getWeather(this.coordinates.lat, this.coordinates.lon);
        return this.mapWeatherData(weatherInfo);
    }

    mapWeatherData(weatherInfo) {
        return {
            temp: weatherInfo.main?.temp,
            humidity: weatherInfo.main?.humidity,
            speed: weatherInfo.wind?.speed,
            main: weatherInfo.weather?.[0]?.main || 'Clear'
        };
    }

    async getWeather(lat, lon) {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
        const response = await fetch(weatherUrl);
        return response.json();
    }
}