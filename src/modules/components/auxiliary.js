import Component from "./component";

export default class Auxiliary extends Component {

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'auxiliary';
        this.wrapper = this.createWrapper(this.targetClass);

        this.auxiliaryElements = {

            iconImg: { tag: 'img', class: 'weather__icon', link: null },
            feelsLike: { tag: 'p', class: 'weather__feels', link: null },
            wind: { tag: 'p', class: 'weather__wind', link: null },
            humidity: { tag: 'p', class: 'weather__hum', link: null }

        }
        this.createElements(this.auxiliaryElements, this.wrapper);

    }

}