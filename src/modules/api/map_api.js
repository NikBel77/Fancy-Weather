import API from "./api";

export default class MapAPI extends API {

    constructor() {

        super()

        this.ApiKeys = {

            TOKEN: 'pk.eyJ1IjoibmlrYmVsNzciLCJhIjoiY2szaW11bjdkMDk4aTNscWo2aWpza2l6bCJ9.Dl4UkQcw5vsk5krKbIZ2KQ',
            URL: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/0,0,2/600x600?access_token=',
            SCRIPT_SRC: 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.js',
            LINK_HREF: 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.6.0/mapbox-gl.css'

        }

        this.getMap();

    }

    getMap() {

        const script = document.createElement('script');
        const link = document.createElement('link');

        script.src = this.ApiKeys.SCRIPT_SRC;
        link.href = this.ApiKeys.LINK_HREF;
        link.rel = 'stylesheet';

        script.onload = () => {

            mapboxgl.accessToken = this.ApiKeys.TOKEN;

            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/dark-v10'
            });

        }

        document.head.appendChild(script);
        document.head.appendChild(link);

    }
}