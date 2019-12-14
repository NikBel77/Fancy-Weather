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

        this.currentLang = 'en'
        this.currentUnits = 'metric'
        this.weatherDesc = ''

    }

    init() {

        this.view.renderData(this.langs[this.currentLang]);

        navigator.geolocation.getCurrentPosition((pos) => {

            this.renderDataByPos(pos.coords.latitude, pos.coords.longitude);

        }, () => {

            this.renderByIp();

        });

        this.setEvents();

    }

    async renderDataByPos(lat, lon) {

        const geoData = await this.geoApi.getInfoByCoords(lat, lon, this.currentLang);
        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon, this.currentLang, this.currentUnits);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon, this.currentLang, this.currentUnits);
        this.weatherDesc = weatherData.weather[0].main;

        await this.setBackgroundPhoto();

        this.mapApi.getMap(lat, lon);

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs[this.currentLang + 'Days']);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

        return new Promise((resolve, reject) => {

            resolve(console.log(geoData, forecastData, weatherData))

        })
    }

    async renderDataByCity(query) {

        const geoData = await this.geoApi.getInfoBySity(query, this.currentLang);
        const [lat, lon] = [geoData.results[0].geometry.lat, geoData.results[0].geometry.lng];

        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon, this.currentLang, this.currentUnits);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon, this.currentLang, this.currentUnits);
        this.weatherDesc = weatherData.weather[0].main;

        await this.setBackgroundPhoto();
        
        this.mapApi.flyTo(lat, lon)

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs[this.currentLang + 'Days']);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

        return new Promise((resolve, reject) => {

            resolve(console.log(geoData, forecastData, weatherData))

        })
    }

    async renderByIp() {

        const ipData = await this.ipApi.getPlaceByIp();
        const coords = ipData.loc.split(',');
        this.renderDataByPos(...coords);

    }

    async setBackgroundPhoto() {

        const query = this.weatherDesc;
        let imageUrl;

        try {

            imageUrl = await this.photoApi.getPhotoUrl(query);

        } catch(error) {

            console.log(error);

        }

        const app = document.querySelector(`.${this.view.appClassName}`);
        app.style.background = `url(${imageUrl}) no-repeat center`;
        app.style.backgroundSize = `cover`;

    }

    setEvents() {

        this.view.controls.searchElements.searchBtn.link.addEventListener('click', () => {

            let query = this.view.controls.searchElements.searchInput.link.value;
            this.renderDataByCity(query);

        });

        this.view.controls.panelElements.buttonImg.link.addEventListener('click', () => {

            this.setBackgroundPhoto();

        });

        this.view.controls.panelElements.langSwitcher.link.addEventListener('mouseenter', () => {

            this.view.controls.langElements.langsList.link.style.display = 'block';

        });

        this.view.controls.panelElements.langSwitcher.link.addEventListener('mouseleave', () => {

            this.view.controls.langElements.langsList.link.style.display = 'none';

        })

    }

}