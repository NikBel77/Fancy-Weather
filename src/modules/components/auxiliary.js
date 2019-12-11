import Component from "./component";

export default class Auxiliary extends Component {

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'auxiliary';
        this.wrapper = this.createWrapper(this.targetClass);

        this.auxElements = {

            feelsLike: { tag: 'p', class: 'auxiliary__feels', link: null },
            wind: { tag: 'p', class: 'auxiliary__wind', link: null },
            humidity: { tag: 'p', class: 'auxiliary__hum', link: null }

        }
        this.appendElementsToFragment(this.auxElements, this.wrapper);

        this.feelsInfo = {

            text: { tag: 'span', link: null },
            feelsVal: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.feelsInfo, this.auxElements.feelsLike.link);

        this.windInfo = {

            text: { tag: 'span', link: null },
            windVal: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.windInfo, this.auxElements.wind.link);

        this.humInfo = {

            text: { tag: 'span', link: null },
            humVal: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.humInfo, this.auxElements.humidity.link);

    }

}