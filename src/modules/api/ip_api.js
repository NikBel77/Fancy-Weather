import API from "./api";

export default class IpAPI extends API {

    constructor() {

        super();

        this.ApiKeys = {

            TOKEN: '?token=67c7ff516d3936',
            URL: 'https://ipinfo.io/json'

        }

    }

    async getPlaceByIp() {

        const url = this.ApiKeys.URL + this.ApiKeys.TOKEN;
        const ipInfo = await this.getJsonData(url);
        return ipInfo

    }
}