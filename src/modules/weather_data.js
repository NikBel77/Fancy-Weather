export default class WeatherData {

    constructor(weather, forecast) {

        if (!(typeof weather === 'object') || !(typeof forecast === 'object')) {
            throw new Error('weather and forecast must be objects')
        }

        // let date = new Date((Date.now() - new Date().getTimezoneOffset() * 60000) + (weather.timezone * 10000));
        // console.log(new Date().getTimezoneOffset())


        this.data = {

            weather: {
                weahterElements: {
                    degree: weather.main.temp
                }
            },
            auxiliary: {
                feelsInfo: {
                    val: weather.main.feels_like
                },
                windInfo: {
                    val: weather.wind.speed + ' m/s'
                },
                humInfo: {
                    val: weather.main.humidity
                },
                pressureInfo: {
                    val: weather.main.pressure
                }
            },
            geo: {
                latitudeInfo: {
                    val: weather.coord.lat
                },
                longitudeInfo: {
                    val: weather.coord.lon
                }
            }

        }

    }

}