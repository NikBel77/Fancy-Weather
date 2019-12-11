import Component from "./component";

export default class Place extends Component {

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'place';
        this.wrapper = this.createWrapper(this.targetClass);

        this.placeElements = {

            cityInfo: { tag: 'h3', class: 'place__city', link: null },
            timeInfo: { tag: 'p', class: 'place__time', link: null }

        }
        this.appendElementsToFragment(this.placeElements, this.wrapper);

    }

}