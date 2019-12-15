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

        this.date = date;
        this.forecastData = this.getForecastData(forecast.list, dateNames.days, date);
        
    }

    getFormatData(currentDate, dateNames) {

        const formatStrDate = dateNames.days[currentDate.getDay()] + ' '
        + dateNames.months[currentDate.getMonth()] + ' '
        + currentDate.getDate();
        return formatStrDate

    }

    getForecastData(list, daysName, currentDate) {

        let days = this.filterForecast(list, currentDate);
        let forecastData = [];

        for (let i = 0; i < days.length; i += 1) {

            let dayForecast = {

                temp: Math.round(days[i].main.temp),
                icon: days[i].weather[0].id,
                desc: days[i].weather[0].description,
                day: this.getForecastDay(daysName, currentDate)

            }
            forecastData.push(dayForecast);

        }
        return forecastData

    }

    filterForecast(list, currentDate) {

        return list.filter((el) => {

            if(new Date(el.dt_txt).getDate() === currentDate.getDate()) return false
            if(el.dt_txt.includes('12:00:00')) return true

        });
    
    }

    getForecastDay(daysName, currentDate) {

        currentDate.setDate(currentDate.getDate() + 1);
        return daysName[currentDate.getDay()] + ' ' + currentDate.getDate();

    }

}