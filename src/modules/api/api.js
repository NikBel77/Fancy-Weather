export default class API {

    constructor() {

    }

    async getJsonData(url) {

        const response = await fetch(url);
        return await response.json();

    }
}