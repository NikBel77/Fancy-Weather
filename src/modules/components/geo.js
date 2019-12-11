import Component from "./component";

export default class Geo extends Component{

    constructor(fragment) {

        super(fragment);

        this.targetClass = 'geo';
        this.wrapper = this.createWrapper(this.targetClass);

        this.geoElements = {

            map: { tag: 'div', class: 'geo__map', link: null },
            latitude: { tag: 'p', class: 'geo__lat', link: null },
            longitude: { tag: 'p', class: 'geo__lon', link: null }

        }
        this.createElements(this.geoElements, this.wrapper);

        this.geoElements.map.link.id = 'map';
        
    }
}