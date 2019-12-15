export default class API {
    constructor() {

    }

    getJsonData(url) {
        return fetch(url).then((res) => res.json());
    }
}
