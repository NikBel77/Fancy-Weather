export default class Langs {

    constructor() {

        this.enDays = {

            days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            months: ['January','February','March','April','May','June','July','August','September','October','November','December']

        }
        this.en = {

            controls: {
                langElements: {
                    currentLang: 'Eng',
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

        this.ruDays = {

            days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
            months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

        }
        this.ru = {

            controls: {
                langElements: {
                    currentLang: 'Рус',
                },
                searchElements: {
                    searchBtn: 'Поиск'
                }
            },
            auxiliary: {
                feelsInfo: {
                    text: 'По ощущениям: '
                },
                windInfo: {
                    text: 'Скорость ветра: ',
                    metric: 'м/с'
                },
                humInfo: {
                    text: 'Влажность: '
                },
                pressureInfo: {
                    text: 'Давление: '
                }
            },
            geo: {
                latitudeInfo: {
                    text: 'Широта: '
                },
                longitudeInfo: {
                    text: 'Долгота: '
                }
            },
        }

    }
}