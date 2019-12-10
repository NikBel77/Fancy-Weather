import Component from "./component";

export default class Weather extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'weather';
        this.wrapper = this.createWrapper(this.targetClass);

        this.elements = {

            placeInfo: { tag: 'div', class: 'weather__place-info' },
            weahterInfo: { tag: 'div', class: 'weather__info' },

        }
        this.createElements(this.elements, this.wrapper);

        this.placeElements = {

            cityInfo: { tag: 'h3', class: 'weather__city' },
            timeInfo: { tag: 'p', class: 'weater__time' }

        }
        this.createElements(this.placeElements, this.elements.placeInfo.link);

        this.weahterElements = {

            degree: { tag: 'span', class: 'weather__degree' },
            auxiliaryInfo: { tag: 'div', class: 'weater__auxiliary' }

        }
        this.createElements(this.weahterElements, this.elements.weahterInfo.link);

        this.auxiliaryElements = {

            iconImg: { tag: 'img', class: 'weather__icon' },
            feelsLike: { tag: 'p', class: 'weather__feels' },
            wind: { tag: 'p', class: 'weather__wind' }

        }
        this.createElements(this.auxiliaryElements, this.weahterElements.auxiliaryInfo.link);

    }
}