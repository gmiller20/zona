import { BasePage } from "./BasePage.js";
import { HeaderHome } from "../components/HeaderHome.js";
import { WeatherWidget } from "../components/WeatherWidget.js";
import { Weather } from '../utils/weather.js';

export class HomePage extends BasePage {
    constructor() {
        super();
        this.headerHome = new HeaderHome();
        this.weatherWidget = new WeatherWidget();
        this.weather = new Weather();
    }

    init() {
        super.init();
        this.headerHome.render();

        const initWeather = async () => {
            this.weatherWidget.render();
            const data = await this.weather.loadWeather();
            this.weatherWidget.update(data);
        };

        initWeather();
    }

    afterRender() {
        console.log('✅ Главная страница загружена');
    }
}