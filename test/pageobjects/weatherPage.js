module.exports = {
    bbcWeather: "https://www.bbc.com/weather",
    bbcWeatherPageTitle: "BBC Weather",
    element: {
        weatherSearch: "#ls-c-search__input-label",
        searchDropDown: "#location-list > li:nth-child(1) > a",
        searchTitle: "#wr-location-name-id",
        day1: {
            locator: "#daylink-1",
            day: "#daylink-1 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish",
            date: "#daylink-1 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish > span > span",
            highTemp: "#daylink-1 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__high > span.wr-day-temperature__high-value > span > span.wr-value--temperature--c",
            lowTemp:  "#daylink-1 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__low > span.wr-day-temperature__low-value > span > span.wr-value--temperature--c",
            description: "#daylink-1 > div.wr-day__body > div.wr-day__weather-type-description-container > div",
            },
        
        nextDay: {
            locator: "#daylink-2",
            day: "#daylink-2 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish",
            date: "#daylink-2 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish > span > span",
            highTemp: "#daylink-2 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__high > span.wr-day-temperature__high-value > span > span.wr-value--temperature--c",
            lowTemp:  "#daylink-2 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__low > span.wr-day-temperature__low-value > span > span.wr-value--temperature--c",
            description: "#daylink-2 > div.wr-day__body > div.wr-day__weather-type-description-container > div",
            },
        dayAfter: {
                locator: "#daylink-3",
                day: "#daylink-3 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish",
                date: "#daylink-3 > div.wr-day__title.wr-js-day-content-title > div > span.wr-date__longish > span > span",
                highTemp: "#daylink-3 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__high > span.wr-day-temperature__high-value > span > span.wr-value--temperature--c",
                lowTemp: "#daylink-3 > div.wr-day__body > div.wr-day__details-container > div > div.wr-day__temperature > div > div.wr-day-temperature__low > span.wr-day-temperature__low-value > span > span.wr-value--temperature--c",
                description: "#daylink-3 > div.wr-day__body > div.wr-day__weather-type-description-container > div",
            },
        }

}
