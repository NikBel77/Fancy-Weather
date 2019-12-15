import View from './view'
import WeahterAPI from './api/weather_api'
import IpAPI from './api/ip_api'
import MapAPI from './api/map_api'
import PhotoAPI from './api/photo_api'
import GeoApi from './api/geo_api'
import Langs from './langs'
import WeatherData from './weather_data'

export default class App {
    
    constructor() {

        this.view = new View();
        this.weatherApi = new WeahterAPI();
        this.ipApi = new IpAPI();
        this.mapApi = new MapAPI();
        this.photoApi = new PhotoAPI();
        this.geoApi = new GeoApi();
        this.langs = new Langs();

        this.coords = { lat: '', lon: '' };
        this.currentLang = 'en';
        this.currentUnits = 'metric';
        this.weatherDesc = '';
        this.clock;
        this.date;

    }

    init() {

        this.view.renderData(this.langs[this.currentLang]);
        this.view.controls.panelElements.buttonCel.link.classList.add('active')

        navigator.geolocation.getCurrentPosition((pos) => {

            this.renderDataByPos(pos.coords.latitude, pos.coords.longitude)
            .then(() => {
                this.setClock();
            });

        }, () => {

            this.renderByIp()
            .then(() => {
                this.setClock();
            });

        });

        this.setEvents();

    }

    setClock() {

        this.clock = setInterval(() => {

            this.date.setSeconds(this.date.getSeconds() + 1);
            this.view.place.placeElements.clock.link.innerText = this.date.toLocaleTimeString();

        }, 1000);

    }

    async renderDataByPos(lat, lon) {
        
        const geoData = await this.geoApi.getInfoByCoords(lat, lon, this.currentLang);
        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon, this.currentLang, this.currentUnits);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon, this.currentLang, this.currentUnits);

        [this.coords.lat, this.coords.lon] = [lat, lon];
        this.weatherDesc = weatherData.weather[0].main;

        await this.setBackgroundPhoto();

        this.mapApi.getMap(lat, lon);

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs[this.currentLang + 'Days']);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);
        this.date = data.date;

    }

    async renderDataByCity(query) {

        const geoData = await this.geoApi.getInfoBySity(query, this.currentLang);
        const [lat, lon] = [geoData.results[0].geometry.lat, geoData.results[0].geometry.lng];

        const forecastData = await this.weatherApi.getForecastByCoords(lat, lon, this.currentLang, this.currentUnits);
        const weatherData = await this.weatherApi.getCurrentWeatherByCoords(lat, lon, this.currentLang, this.currentUnits);

        [this.coords.lat, this.coords.lon] = [lat, lon];
        this.weatherDesc = weatherData.weather[0].main;

        await this.setBackgroundPhoto();
        
        this.mapApi.flyTo(lat, lon)

        const data = new WeatherData(weatherData, forecastData, geoData, this.langs[this.currentLang + 'Days']);
        this.view.renderData(data.data);
        this.view.forecast.renderForecast(data.forecastData);
        this.date = data.date;

    }

    async renderByIp() {

        const ipData = await this.ipApi.getPlaceByIp();
        const coords = ipData.loc.split(',');
        this.renderDataByPos(...coords);

    }

    async setBackgroundPhoto() {

        const query = this.weatherDesc;
        let imageUrl;

        try {

            imageUrl = await this.photoApi.getPhotoUrl(query);

        } catch(error) {

            return

        }

        const app = document.querySelector(`.${this.view.appClassName}`);
        app.style.background = `url(${imageUrl}) no-repeat center`;
        app.style.backgroundSize = `cover`;

    }

    setEvents() {

        document.body.addEventListener('keypress', (e) => {

            if(e.keyCode !== 13) return
            let query = this.view.controls.searchElements.searchInput.link.value;
            this.view.controls.searchElements.searchInput.link.value = '';
            if(!query) return
            this.renderDataByCity(query)
            .then(() => console.log('resolved'))
            .catch(() => console.log('catch'));

        });
        this.view.controls.searchElements.searchBtn.link.addEventListener('click', () => {

            let query = this.view.controls.searchElements.searchInput.link.value;
            if(!query) return
            this.view.controls.searchElements.searchInput.link.value = '';
            this.renderDataByCity(query)
            .then(() => console.log('resolved'))
            .catch(() => console.log('catch'));

        });
        this.view.controls.panelElements.buttonImg.link.addEventListener('click', () => {

            this.setBackgroundPhoto();

        });
        this.view.controls.panelElements.langSwitcher.link.addEventListener('mouseenter', () => {

            this.view.controls.langElements.langsList.link.classList.remove('no-visible');

        });
        this.view.controls.panelElements.langSwitcher.link.addEventListener('mouseleave', () => {

            this.view.controls.langElements.langsList.link.classList.add('no-visible');

        });
        this.view.controls.listOflangs.ru.link.addEventListener('click', () => {

            if (this.currentLang === 'ru') return
            else {

                this.currentLang = 'ru';
                this.view.renderData(this.langs[this.currentLang]);
                this.renderDataByPos(this.coords.lat, this.coords.lon);
                this.view.controls.langElements.langsList.link.classList.add('no-visible');

            }

        });
        this.view.controls.listOflangs.eng.link.addEventListener('click', () => {

            if (this.currentLang === 'en') return
            else {

                this.currentLang = 'en';
                this.view.renderData(this.langs[this.currentLang]);
                this.renderDataByPos(this.coords.lat, this.coords.lon);
                this.view.controls.langElements.langsList.link.classList.add('no-visible');

            }

        });
        this.view.controls.panelElements.buttonCel.link.addEventListener('click', () => {

            if (this.currentUnits === 'metric') return
            else {

                this.view.controls.panelElements.buttonCel.link.classList.toggle('active');
                this.view.controls.panelElements.buttonFar.link.classList.toggle('active');
                this.currentUnits = 'metric';
                this.renderDataByPos(this.coords.lat, this.coords.lon);

            }

        });
        this.view.controls.panelElements.buttonFar.link.addEventListener('click', () => {

            if (this.currentUnits === 'imperial') return
            else {

                this.view.controls.panelElements.buttonFar.link.classList.toggle('active');
                this.view.controls.panelElements.buttonCel.link.classList.toggle('active');
                this.currentUnits = 'imperial';
                this.renderDataByPos(this.coords.lat, this.coords.lon);

            }

        });

    }

}