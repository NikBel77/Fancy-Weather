import Controls from './components/controls'
import Weather from './components/weather'
import Geo from './components/geo'
import Forecast from './components/forecast'

export default class View {

    constructor() {

        this.appClassName = 'app';
        this.innerClassName = 'app__inner';
        this.createAppWrapper();

        this.controls = new Controls(this.innerClassName);
        this.weather = new Weather(this.innerClassName);
        this.geo = new Geo(this.innerClassName);
        this.forecast = new Forecast(this.innerClassName);

    }

    createAppWrapper() {

        const appWrapper = document.createElement('div');
        const appInner = document.createElement('div');
        appWrapper.classList.add(this.appClassName);
        appInner.classList.add(this.innerClassName);
        document.body.appendChild(appWrapper);
        appWrapper.appendChild(appInner);

    }
}