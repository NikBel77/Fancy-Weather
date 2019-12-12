import Component from "./component"

export default class Weather extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'weather';
        this.wrapper = this.createWrapper(this.targetClass);

        this.weahterElements = {

            degree: { tag: 'span', class: 'weather__degree', link: null },

        }
        this.appendElementsToFragment(this.weahterElements, this.wrapper);

    }
}