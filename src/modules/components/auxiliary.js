import Component from "./component"

export default class Auxiliary extends Component {

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'auxiliary';
        this.wrapper = this.createWrapper(this.targetClass);

        this.auxElements = {

            feelsLike: { tag: 'p', class: 'auxiliary__info', link: null },
            wind: { tag: 'p', class: 'auxiliary__info', link: null },
            humidity: { tag: 'p', class: 'auxiliary__info', link: null },
            pressure: { tag: 'p', class: 'auxiliary__info', link: null}

        }
        this.appendElementsToFragment(this.auxElements, this.wrapper);

        this.pressureInfo = {

            text: { tag: 'span', link: null },
            val: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.pressureInfo, this.auxElements.pressure.link);

        this.feelsInfo = {

            text: { tag: 'span', link: null },
            val: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.feelsInfo, this.auxElements.feelsLike.link);

        this.windInfo = {

            text: { tag: 'span', link: null },
            val: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.windInfo, this.auxElements.wind.link);

        this.humInfo = {

            text: { tag: 'span', link: null },
            val: { tag: 'span', link: null }

        }
        this.appendElementsToFragment(this.humInfo, this.auxElements.humidity.link);

    }

}