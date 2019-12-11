import API from "./api";

export default class WeahterAPI extends API {

    constructor() {

        super()

        this.ApiKeys = {

            KEY: '&APPID=012243e39763091bf8494e5b88727bb0',
            URL: 'https://api.openweathermap.org/data/2.5/',
            FORECAST: 'forecast',
            LAT: '?lat=',
            LONG: '&lon=',
            LANG: '&lang=ru',
            UNITS: '&units=metric',
            iconReq: 'http://openweathermap.org/img/wn/10d@2x.png'

        }
        
    }

    async getForecastByCoords(lat, lon) {

        const url = this.ApiKeys.URL + this.ApiKeys.FORECAST
        + this.ApiKeys.LAT + lat + this.ApiKeys.LONG + lon
        + this.ApiKeys.LANG + this.ApiKeys.UNITS  + this.ApiKeys.KEY;

        const forecast = await this.getJsonData(url);
        return forecast

    }
}