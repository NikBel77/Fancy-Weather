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

        this.renderWeatherByPos = this.renderWeatherByPos.bind(this);
        this.view.renderData(this.langs.en);
        this.init();

    }

    init() {

        navigator.geolocation.getCurrentPosition((pos) => {

            this.renderWeatherByPos(pos)

        },(error) => console.log(error));

    }

    async renderWeatherByPos(pos) {

        this.coordinates.lat = pos.coords.latitude;
        this.coordinates.lon = pos.coords.longitude;
        let { lat, lon } = this.coordinates;

        const forecast = await this.weatherApi.getForecastByCoords(lat, lon);
        const currentWeather = await this.weatherApi.getCurrentWeatherByCoords(lat, lon);
        const geodata = await this.geoApi.getInfoByCoords(lat, lon);

        const data = new WeatherData(currentWeather, forecast, geodata, this.langs.enDays);

        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);

        console.log(currentWeather, forecast, geodata, this.langs.enDays)
    }

}