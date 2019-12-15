export default class API {
    getJsonData(url) {
        return fetch(url).then((res) => res.json());
    }
}
