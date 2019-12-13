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
        
        this.coordinates = {

            lat: null,
            lon: null

        };

        this.view.renderData(this.langs.en);
        this.setEvents();
        this.init();

    }

    init() {

        navigator.geolocation.getCurrentPosition((pos) => {

            this.coordinates.lat = pos.coords.latitude;
            this.coordinates.lon = pos.coords.longitude;
            let { lat, lon } = this.coordinates;
            this.renderDataByPos(lat, lon)

        },(error) => console.log(error));

    }

    async renderDataByPos(lat, lon) {

        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon);
        const geoData = await this.geoApi.getInfoByCoords(lat, lon);

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs.enDays);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

    }

    async renderDataByCity(query) {

        const forecastData = await this.weatherApi.getForecastByCity(query);
        const weatherData = await this.weatherApi.getCurrentWeatherByCity(query);
        const geoData = await this.geoApi.getInfoBySity(query);

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs.enDays);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

    }

    setEvents() {

        this.view.controls.searchElements.searchBtn.link.addEventListener('click', () => {

            let query = this.view.controls.searchElements.searchInput.link.value;
            console.log(query)
            this.renderDataByCity(query);

        })

    }

}