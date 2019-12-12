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

    }
}