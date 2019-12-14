import API from "./api";

export default class GeoApi extends API {

    constructor() {

        super();

        this.apiKeys = {

            KEY: '&key=a902e6d2256e426585d4d9aee1b4c049',
            URL: 'https://api.opencagedata.com/geocode/v1/json?q='

        }

    }

    getInfoByCoords(lat, lon, lang) {

        const url = this.apiKeys.URL + lat + '+' + lon + this.apiKeys.KEY + '&pretty=1' + `&language=${lang}`;
        return this.getJsonData(url)

    }

    getInfoBySity(query, lang) {

        const url = this.apiKeys.URL + query + this.apiKeys.KEY + '&pretty=1' + `&language=${lang}`;
        return this.getJsonData(url)

    }

}