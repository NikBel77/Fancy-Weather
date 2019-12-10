export default class API {

    constructor() {

    }

    async getJsonData(url) {

        return await fetch(url).then(response => response.json());

    }
}