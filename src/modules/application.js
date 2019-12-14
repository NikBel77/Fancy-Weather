import View from './view'
import WeahterAPI from './api/weather_api'
import IpAPI from './api/ip_api'
import MapAPI from './api/map_api'
import PhotoAPI from './api/photo_api'
import GeoApi from './api/geo_api'
import Langs from './langs'
import WeatherData from './weather_data'

export default class App {
    
    constructor() {

        this.view = new View();
        this.weatherApi = new WeahterAPI();
        this.ipApi = new IpAPI();
        this.mapApi = new MapAPI();
        this.photoApi = new PhotoAPI();
        this.geoApi = new GeoApi();
        this.langs = new Langs();

    }

    init() {

        this.view.renderData(this.langs.en);

        navigator.geolocation.getCurrentPosition((pos) => {

            this.renderDataByPos(pos.coords.latitude, pos.coords.longitude);

        }, () => {

            this.renderByIp();

        });

        this.setEvents();

    }

    async renderDataByPos(lat, lon) {

        const geoData = await this.geoApi.getInfoByCoords(lat, lon);
        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon);

        await this.setBackgroundPhoto(weatherData.weather[0].description);

        this.mapApi.getMap(lat, lon);

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs.enDays);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

        return new Promise((resolve, reject) => {

            resolve(console.log('resolved'))

        })
    }

    async renderDataByCity(query) {

        const geoData = await this.geoApi.getInfoBySity(query);
        const [lat, lon] = [geoData.results[0].geometry.lat, geoData.results[0].geometry.lng];

        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon);

        await this.setBackgroundPhoto(weatherData.weather[0].description);

        this.mapApi.flyTo(lat, lon)

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs.enDays);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

        return new Promise((resolve, reject) => {

            resolve(console.log('resolved'))

        })
    }

    async renderByIp() {

        const ipData = await this.ipApi.getPlaceByIp();
        const coords = ipData.loc.split(',');
        this.renderDataByPos(...coords);

    }

    setEvents() {

        this.view.controls.searchElements.searchBtn.link.addEventListener('click', () => {

            let query = this.view.controls.searchElements.searchInput.link.value;
            this.renderDataByCity(query);

        });

        this.view.controls.panelElements.buttonImg.link.addEventListener('click', () => {

            this.setBackgroundPhoto();

        });

    }

    async setBackgroundPhoto(query) {

        if (!query) {
            query = this.view.auxiliary.auxElements.weatherDesc.link.innerText;
        }

        const imageUrl = await this.photoApi.getPhotoUrl(query);

        const app = document.querySelector(`.${this.view.appClassName}`);
        app.style.background = `url(${imageUrl}) no-repeat center`;
        app.style.backgroundSize = `cover`;

    }

}