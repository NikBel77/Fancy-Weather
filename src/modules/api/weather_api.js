import API from './api';

export default class WeahterAPI extends API {
    constructor() {
        super();

        this.apiKeys = {

            KEY: '&APPID=012243e39763091bf8494e5b88727bb0',
            URL: 'https://api.openweathermap.org/data/2.5/',
            FORECAST: 'forecast?',
            WEATHER: 'weather?',
            LAT: 'lat=',
            LONG: '&lon=',
            LANG: '&lang=',
            UNITS: '&units=',

        };
    }

    getForecastByCoords(lat, lon, lang, units) {
        const url = this.apiKeys.URL + this.apiKeys.FORECAST
        + this.apiKeys.LAT + lat + this.apiKeys.LONG + lon
        + this.apiKeys.LANG + lang + this.apiKeys.UNITS + units + this.apiKeys.KEY;

        return this.getJsonData(url);
    }

    getCurrentWeatherByCoords(lat, lon, lang, units) {
        const url = this.apiKeys.URL + this.apiKeys.WEATHER
        + this.apiKeys.LAT + lat + this.apiKeys.LONG + lon
        + this.apiKeys.LANG + lang + this.apiKeys.UNITS + units + this.apiKeys.KEY;

        return this.getJsonData(url);
    }

    getCurrentWeatherByCity(city) {
        const url = `${this.apiKeys.URL + this.apiKeys.WEATHER
        }q=${city
        }${this.apiKeys.LANG}${this.apiKeys.UNITS}${this.apiKeys.KEY}`;

        return this.getJsonData(url);
    }

    getForecastByCity(city) {
        const url = `${this.apiKeys.URL + this.apiKeys.FORECAST
        }q=${city
        }${this.apiKeys.LANG}${this.apiKeys.UNITS}${this.apiKeys.KEY}`;

        return this.getJsonData(url);
    }
}
