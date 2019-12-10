import API from "./api";

export default class WeahterAPI extends API {

    constructor() {

        super()

        this.ApiKeys = {

            KEY: '&APPID=012243e39763091bf8494e5b88727bb0',
            URL: 'https://api.openweathermap.org/data/2.5/',
            FORECAST: 'forecast',
            LAT: '?lat=55.962009599999995',
            LONG: '&lon=37.6938496',
            LANG: '&lang=ru',
            UNITS: '&units=metric',
            iconReq: 'http://openweathermap.org/img/wn/10d@2x.png'

        }
        
    }

    getForecastByCoords() {

        const uri = this.ApiKeys.URL + this.ApiKeys.FORECAST + this.ApiKeys.LAT + this.ApiKeys.LONG
        + this.ApiKeys.LANG + this.ApiKeys.UNITS  + this.ApiKeys.KEY;

        this.getJsonData(uri).then(res => console.log(res));

    }
}