import View from './view'
import WeahterAPI from './api/weather_api';
import IpAPI from './api/ip_api';
import MapAPI from './api/map_api';

export default class App {
    
    constructor() {

        this.view = new View();
        this.weatherApi = new WeahterAPI();
        this.ipApi = new IpAPI();
        this.mapApi = new MapAPI();
        
        this.coordinates = {};
        navigator.geolocation.getCurrentPosition((pos) => {console.log(pos)}, (err) => {console.log(err)});

    }
}