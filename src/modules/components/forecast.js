import Component from "./component"

export default class Forecast extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'forecast';
        this.wrapper = this.createWrapper(this.targetClass);

        this.forecastElements = {

            secondDay: { tag: 'div', class: 'forecast__day', link: null },
            thirdDay: { tag: 'div', class: 'forecast__day', link: null },
            fourthDay: { tag: 'div', class: 'forecast__day', link: null },
            fifthDay: { tag: 'div', class: 'forecast__day', link: null }

        }
        this.appendElementsToFragment(this.forecastElements, this.wrapper);

        this.forecastDays = [];

        for (let day in this.forecastElements) {

            let template = {

                day: { tag: 'p', class: 'forecast_date', link: null },
                temp: { tag: 'span', class: 'forecast__temp', link: null },
                icon: { tag: 'i', class: 'owf', link: null },
                desc: { tag: 'p', class: 'forecast__desc', link: null }

            }
            this.appendElementsToFragment(template, this.forecastElements[day].link);
            this.forecastDays.push(template);

        }
        
    }

    renderForecast(forecastData) {

        for (let i = 0; i < forecastData.length; i += 1) {
            for (let key in forecastData[i]) {

                if (key === 'icon') {

                    this.forecastDays[i][key].link.classList.add('owf-' + forecastData[i][key]);

                } else {

                    this.forecastDays[i][key].link.innerText = forecastData[i][key];

                }
            }
        }
    }
}