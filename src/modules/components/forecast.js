import Component from "./component"

export default class Forecast extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'forecast';
        this.wrapper = this.createWrapper(this.targetClass);

        this.forecastElements = {

            firstDay: { tag: 'div', class: 'forecast__day', link: null },
            secondDay: { tag: 'div', class: 'forecast__day', link: null },
            thirdDay: { tag: 'div', class: 'forecast__day', link: null },
            fourthDay: { tag: 'div', class: 'forecast__day', link: null },
            fifthDay: { tag: 'div', class: 'forecast__day', link: null }

        }
        this.appendElementsToFragment(this.forecastElements, this.wrapper);

        this.forecastDays = [];

        for (let day in this.forecastElements) {

            let template = {

                day: { tag: 'p', link: null },
                desc: { tag: 'p', link: null },
                temp: { tag: 'p', link: null },
                icon: { tag: 'img', link: null }

            }
            this.appendElementsToFragment(template, this.forecastElements[day].link);
            this.forecastDays.push(template);

        }
        
    }

    renderForecast(forecastData) {

        for (let i = 0; i < forecastData.length; i += 1) {
            for (let key in forecastData[i]) {

                this.forecastDays[i][key].link.innerText = forecastData[i][key];

            }
        }

    }
}