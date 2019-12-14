export default class WeatherData {

    constructor(weather, forecast, geo, dateNames) {

        let date = new Date();
        date.setMinutes(date.getUTCMinutes() + date.getTimezoneOffset());
        date.setSeconds(date.getSeconds() + weather.timezone);

        let isDay = weather.sys.sunrise < (date.getTime() / 1000) &&
            weather.sys.sunset > (date.getTime() / 1000);

        this.data = {

            weather: {
                weahterElements: {
                    degree: Math.round(weather.main.temp),
                    icon: weather.weather[0].id + (isDay ? '-d' : '-n')
                }
            },
            auxiliary: {
                feelsInfo: {
                    val: Math.round(weather.main.feels_like)
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
                    geoName: geo.results[0].formatted,
                },
                placeElements: {
                    timeInfo: this.getFormatData(date, dateNames),
                    clock: date.toLocaleTimeString()
                }
            }
        }

        this.forecastData = this.getForecastData(forecast, dateNames.days, date);

    }

    getFormatData(currentDate, dateNames) {

        const formatStrDate = dateNames.days[currentDate.getDay()] + ' '
        + dateNames.months[currentDate.getMonth()] + ' '
        + currentDate.getDate();
        return formatStrDate

    }

    getForecastData(forecast, daysName, currentDate) {

        let numberOfDays = forecast.list.length / 8;
        let forecastData = [];

        for (let i = 1; i <= numberOfDays; i += 1) {

            let current = (i * (forecast.list.length / 5)) - 1;

            let dayForecast = {

                temp: Math.round(forecast.list[current].main.temp),
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