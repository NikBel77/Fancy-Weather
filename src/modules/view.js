import Controls from './components/controls'
import Weather from './components/weather'
import Geo from './components/geo'
import Forecast from './components/forecast'

export default class View {

    constructor() {

        this.createAppWrapper();
        this.controls = new Controls();
        this.weather = new Weather();
        this.geo = new Geo();
        this.forecast = new Forecast();

    }

    createAppWrapper() {

        const appWrapper = document.createElement('div');
        const appInner = document.createElement('div');
        appWrapper.classList.add('app');
        appInner.classList.add('app__inner');
        document.body.appendChild(appWrapper);
        appWrapper.appendChild(appInner);

    }
}