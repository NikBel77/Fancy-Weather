import Component from "./component";

export default class Geo extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'geo';
        this.wrapper = this.createWrapper(this.targetClass);

        this.elements = {

            map: { tag: 'div', class: 'geo__map', link: null },
            latitude: { tag: 'p', class: 'geo__lat', link: null },
            longitude: { tag: 'p', class: 'geo__lon', link: null }

        }
        this.createElements(this.elements, this.wrapper);

        this.elements.map.link.id = 'map'
    }
}