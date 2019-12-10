import View from './view'

export default class App {
    
    constructor() {

        this.view = new View;
        this.coordinates = {};
        navigator.geolocation.getCurrentPosition((pos) => {console.log(pos)}, (err) => {console.log(err)});

    }
}