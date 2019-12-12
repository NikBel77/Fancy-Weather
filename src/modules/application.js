import View from './view'
import WeahterAPI from './api/weather_api'
import IpAPI from './api/ip_api'
import MapAPI from './api/map_api'
import PhotoAPI from './api/photo_api'
import Langs from './langs'

export default class App {
    
    constructor() {

        this.view = new View();
        this.weatherApi = new WeahterAPI();
        this.ipApi = new IpAPI();
        this.mapApi = new MapAPI();
        this.photoApi = new PhotoAPI();
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

        navigator.geolocation.getCurrentPosition(this.renderWeatherByPos,(error) => console.log(error));

    }

    async renderWeatherByPos(pos) {

        this.coordinates.lat = pos.coords.latitude;
        this.coordinates.lon = pos.coords.longitude;

        // const forcast = await this.weatherApi.getForecastByCoords(this.coordinates.lat, this.coordinates.lon);
        // const currentWeather = await this.weatherApi.getCurrentWeatherByCoords(this.coordinates.lat, this.coordinates.lon);

    }

}