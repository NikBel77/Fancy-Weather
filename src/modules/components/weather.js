import Component from "./component"

export default class Weather extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'weather';
        this.wrapper = this.createWrapper(this.targetClass);

        this.weahterElements = {

            degree: { tag: 'span', class: 'weather__degree', link: null },
            sym: { tag: 'span', class: 'weather__sym', link: null },
            icon: { tag: 'i', class: 'owf', link: null }

        }
        this.appendElementsToFragment(this.weahterElements, this.wrapper);

    }
}