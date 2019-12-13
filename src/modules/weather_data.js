export default class WeatherData {

    constructor(weather, forecast, geo, dateNames) {

        let date = new Date();
        date.setMinutes(date.getUTCMinutes() + date.getTimezoneOffset());
        date.setSeconds(date.getSeconds() + weather.timezone);

        this.data = {

            weather: {
                weahterElements: {
                    degree: weather.main.temp,
                    icon: weather.weather[0].id
                }
            },
            auxiliary: {
                feelsInfo: {
                    val: weather.main.feels_like
                },
                windInfo: {
                    val: weather.wind.speed
                },
                humInfo: {
                    val: weather.main.humidity
                },
                pressureInfo: {
                    val: weather.main.pressure
                },
                auxElements: {
                    weatherDesc: weather.weather[0].description
                } 
            },
            geo: {
                latitudeInfo: {
                    val: weather.coord.lat
                },
                longitudeInfo: {
                    val: weather.coord.lon
                }
            },
            place: {
                geoInfo: {
                    countryName: geo.results[0].components.country + ', ',
                    cityName: geo.results[0].components.city ? geo.results[0].components.city : geo.results[0].components.state,
                    countyName: geo.results[0].components.county ? ', ' + geo.results[0].components.county : ''
                },
                placeElements: {
                    timeInfo: this.getFormatData(date, dateNames)
                }
            }
        }

        this.forecastData = this.getForecastData(forecast, dateNames.days, date);

    }

    getFormatData(currentDate, dateNames) {

        const formatStrDate = dateNames.days[currentDate.getDay()] + ' '
        + dateNames.months[currentDate.getMonth()] + ' '
        + currentDate.getDate()+ ' ' + currentDate.toLocaleTimeString();
        return formatStrDate

    }

    getForecastData(forecast, daysName, currentDate) {

        let numberOfDays = forecast.list.length / 8;
        let forecastData = [];

        for (let i = 0; i < numberOfDays; i += 1) {

            let current = i * (forecast.list.length / 5)
            let dayForecast = {
            
                temp: forecast.list[current].main.temp,
                icon: forecast.list[current].weather[0].id,
                desc: forecast.list[current].weather[0].description,
                day: this.getForecastDay(daysName, currentDate)

            }
            forecastData.push(dayForecast);

        }
        return forecastData

    }

    getForecastDay(daysName, currentDate) {

        currentDate.setDate(currentDate.getDate() + 1);
        return daysName[currentDate.getDay()] + ' ' + currentDate.getDate();

    }

}