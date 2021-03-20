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
        },

        checkWeatherAndOutput: async function(whichDay) {
            const day1 = await $(this.element[whichDay].locator)
            await day1.click()
            const day = await $(this.element[whichDay].day);
            const date = await $(this.element[whichDay].date);
            const highTemp = await $(this.element[whichDay].highTemp);
            const lowTemp = await $(this.element[whichDay].lowTemp);
            const description = await $(this.element[whichDay].description);
            await console.log(`The weather for ${await day.getText()} ${await date.getText()} is a high of ${await highTemp.getText()}c and a low of ${await lowTemp.getText()}c. It will be ${await description.getText()}`);
    
            const nextday = await $(this.element[whichDay].locator);
            await nextday.click();
            const dayOne = await $(this.element[whichDay].day);
            const dateOne = await $(this.element[whichDay].date);
            const highTempOne = await $(this.element[whichDay].highTemp);
            const lowTempOne = await $(this.element[whichDay].lowTemp);
            const descriptionOne = await $(this.element[whichDay].description)
            await console.log(`The weather for ${dayOne.getText()} ${dateOne.getText()} is a high of ${highTempOne.getText()}c and a low of ${lowTempOne.getText()}c. It will be ${descriptionOne.getText()}`);
    
    
            const dayAfter = await $(this.element[whichDay].locator);
            await dayAfter.click()
            const dayTwo = await $(this.element[whichDay].day);
            const dateTwo = await $(this.element[whichDay].date);
            const highTempTwo = await $(this.element[whichDay].highTemp);
            const lowTempTwo = await $(this.element[whichDay].lowTemp);
            const descriptionTwo = await $(this.element[whichDay].description)
            await console.log(`The weather for ${dayTwo.getText()} ${dateTwo.getText()} is a high of ${highTempTwo.getText()}c and a low of ${lowTempTwo.getText()}c. It will be ${descriptionTwo.getText()}`);
        }

}
