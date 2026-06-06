const api_key = '18b550d49ce741aa37722f6f0b88e308';
// const form = document.querySelector('#form');
// const input = document.querySelector('.form__input')
const body = document.querySelector('body');

body.onload = submitHandler;
async function submitHandler(e) {
    // e.preventDefault();
    // getGeo(input.value.trim());
    // const cityInfo = await getGeo(input.value.trim());
    const weatherInfo = await getWeather(57.155, 65.459);
    console.log(weatherInfo);
    const weatherData = {
        // name: weatherInfo.name,
        temp: weatherInfo.main.temp,
        humidity: weatherInfo.main.humidity,
        speed: weatherInfo.wind.speed,
        main: weatherInfo.weather[0]['main']
    };

    renderWeatherData(weatherData);
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
    // const city = document.querySelector('.weather__city');
    const humidity = document.querySelector('#humidity');
    const speed = document.querySelector('#speed');
    const img = document.querySelector('.weather__img')

    temp.innerText = Math.round(data.temp) + '°c';
    // city.innerText = data.name;
    humidity.innerText = data.humidity + '%';
    speed.innerText = data.speed + ' km/h';

    
    const fileNames = {
        'Clouds': 'clouds',
        'Clear': 'clear',
        'Rain': 'rain'
    }

    img.src = `./img/weather/${fileNames[data.main]}.png`
}