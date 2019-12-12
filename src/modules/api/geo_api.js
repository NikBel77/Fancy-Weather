import API from "./api";

export default class GeoApi extends API {

    constructor() {

        super();

        this.apiKeys = {

            KEY: '&key=a902e6d2256e426585d4d9aee1b4c049',
            URL: 'https://api.opencagedata.com/geocode/v1/json?q='

        }

    }

    getInfoByCoords(lat, lon) {

        const url = this.apiKeys.URL + lat + '+' + lon + this.apiKeys.KEY + '&pretty=1' + '&language=en';
        return this.getJsonData(url)

    }

}