export default class Langs {

    constructor() {

        this.enDays = {

            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            months: ['January','February','March','April','May','June','July','August','September','October','November','December']

        }
        this.en = {

            controls: {
                langElements: {
                    currentLang: 'En',
                },
                panelElements: {
                    buttonCel: 'C',
                    buttonFar: 'F'
                },
                searchElements: {
                    searchBtn: 'Search'
                }
            },
            auxiliary: {
                feelsInfo: {
                    text: 'Feels like: '
                },
                windInfo: {
                    text: 'Wind: ',
                    metric: 'm/s'
                },
                humInfo: {
                    text: 'Humidity: '
                },
                pressureInfo: {
                    text: 'Pressure: '
                }
            },
            geo: {
                latitudeInfo: {
                    text: 'Latitude: '
                },
                longitudeInfo: {
                    text: 'Longitude: '
                }
            },
        }
    }
}