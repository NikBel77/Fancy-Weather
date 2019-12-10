import Component from "./component";

export default class Weather extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'weather';
        this.wrapper = this.createWrapper(this.targetClass);

        this.elements = {

            placeInfo: { tag: 'div', class: 'weather__place-info', link: null },
            weahterInfo: { tag: 'div', class: 'weather__info', link: null },

        }
        this.createElements(this.elements, this.wrapper);

        this.placeElements = {

            cityInfo: { tag: 'h3', class: 'weather__city', link: null },
            timeInfo: { tag: 'p', class: 'weater__time', link: null }

        }
        this.createElements(this.placeElements, this.elements.placeInfo.link);

        this.weahterElements = {

            degree: { tag: 'span', class: 'weather__degree', link: null },
            auxiliaryInfo: { tag: 'div', class: 'weater__auxiliary', link: null }

        }
        this.createElements(this.weahterElements, this.elements.weahterInfo.link);

        this.auxiliaryElements = {

            iconImg: { tag: 'img', class: 'weather__icon', link: null },
            feelsLike: { tag: 'p', class: 'weather__feels', link: null },
            wind: { tag: 'p', class: 'weather__wind', link: null }

        }
        this.createElements(this.auxiliaryElements, this.weahterElements.auxiliaryInfo.link);

    }
}