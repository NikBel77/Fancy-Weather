import Controls from './components/controls'
import Weather from './components/weather'
import Geo from './components/geo'
import Forecast from './components/forecast'

export default class View {

    constructor() {

        this.appClassName = 'app';
        this.innerClassName = 'app__inner';
        this.appFragment = document.createDocumentFragment();

        this.controls = new Controls(this.appFragment);
        this.weather = new Weather(this.appFragment);
        this.geo = new Geo(this.appFragment);
        this.forecast = new Forecast(this.appFragment);
        
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
}