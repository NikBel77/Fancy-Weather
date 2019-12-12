import API from "./api"

export default class IpAPI extends API {

    constructor() {

        super();

        this.ApiKeys = {

            TOKEN: '?token=67c7ff516d3936',
            URL: 'https://ipinfo.io/json'

        }

    }

    getPlaceByIp() {

        const url = this.ApiKeys.URL + this.ApiKeys.TOKEN;
        return this.getJsonData(url)

    }
}