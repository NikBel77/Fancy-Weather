import Component from "./component";

export default class Geo extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'geo';
        this.wrapper = this.createWrapper(this.targetClass);

        this.elements = {

            map: { tag: 'img', class: 'map' },
            latitude: { tag: 'p', class: 'lat' },
            longitude: { tag: 'p', class: 'long' }

        }
        this.createElements(this.elements, this.wrapper);

    }
}