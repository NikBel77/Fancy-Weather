import Controls from './components/controls';
import Weather from './components/weather';
import Geo from './components/geo';
import Forecast from './components/forecast';
import Auxiliary from './components/auxiliary';
import Place from './components/place';
import Modal from './components/modal';

export default class View {
    constructor() {
        this.appClassName = 'app';
        this.innerClassName = 'app__inner';
        this.appFragment = document.createDocumentFragment();

        this.controls = new Controls(this.appFragment);
        this.weather = new Weather(this.appFragment);
        this.geo = new Geo(this.appFragment);
        this.forecast = new Forecast(this.appFragment);
        this.auxiliary = new Auxiliary(this.appFragment);
        this.place = new Place(this.appFragment);
        this.modal = new Modal();

        this.createAppWrapper();
    }

    createAppWrapper() {
        const appWrapper = document.createElement('div');
        const appInner = document.createElement('div');

        appWrapper.classList.add(this.appClassName);
        appInner.classList.add(this.innerClassName);
        document.body.appendChild(appWrapper);
        appWrapper.appendChild(appInner);
        appInner.appendChild(this.appFragment);
    }

    renderData(data) {
        for (const key in data) {
            this[key].addTextToElements(data[key]);
        }
    }
}
