const homePage = require("../pageobjects/homePage")
const weather = require("../pageobjects/weatherPage")
const expect = require('expect')

describe('BBC Homepage loads', async () => {
    it('should load the BBC Homeoage', async () => {
        await browser.url(homePage.bbcHomepage)
        expect(browser).toHaveTitle(homePage.bbcHomepagePageTitle)
    });
});

describe('Validate Weather', async () => {
    beforeEach(async function () {
        await browser.url(weather.bbcWeather)
      });
    it('should load the BBC Weather page', async () => {
        expect(browser).toHaveTitle(weather.bbcWeatherPageTitle)
    });

    it('should verify placeholder', async () => {
        const search = await $(weather.element.weatherSearch);
        const attr = await search.getAttribute('placeholder');
        expect(attr).toEqual("Enter a town, city or UK postcode")
    })

    it.only('should be able to search for location and verify 3 day temp', async () => {

        const search = await $(weather.element.weatherSearch);
        await search.setValue('Melbourne');
        await browser.pause(2000)
        const dropdown = await $(weather.element.searchDropDown)
        dropdown.click()

        const searchTitle = await $(weather.element.searchTitle);
        expect(await searchTitle.getText()).toContain("Melbourne")

        const day1 = await $(weather.element.day1.locator)
        await day1.click()
        const day = await $(weather.element.day1.day);
        const date = await $(weather.element.day1.date);
        const highTemp = await $(weather.element.day1.highTemp);
        const lowTemp = await $(weather.element.day1.lowTemp);
        const description = await $(weather.element.day1.description);
        await console.log(`The weather for ${await day.getText()} ${await date.getText()} is a high of ${await highTemp.getText()}c and a low of ${await lowTemp.getText()}c. It will be ${await description.getText()}`);

        const nextday = await $(weather.element.nextDay.locator);
        await nextday.click();
        const dayOne = await $(weather.element.nextDay.day);
        const dateOne = await $(weather.element.nextDay.date);
        const highTempOne = await $(weather.element.nextDay.highTemp);
        const lowTempOne = await $(weather.element.nextDay.lowTemp);
        const descriptionOne = await $(weather.element.nextDay.description)
        await console.log(`The weather for ${dayOne.getText()} ${dateOne.getText()} is a high of ${highTempOne.getText()}c and a low of ${lowTempOne.getText()}c. It will be ${descriptionOne.getText()}`);


        const dayAfter = await $(weather.element.dayAfter.locator);
        await dayAfter.click()
        const dayTwo = await $(weather.element.dayAfter.day);
        const dateTwo = await $(weather.element.dayAfter.date);
        const highTempTwo = await $(weather.element.dayAfter.highTemp);
        const lowTempTwo = await $(weather.element.dayAfter.lowTemp);
        const descriptionTwo = await $(weather.element.dayAfter.description)
        await console.log(`The weather for ${dayTwo.getText()} ${dateTwo.getText()} is a high of ${highTempTwo.getText()}c and a low of ${lowTempTwo.getText()}c. It will be ${descriptionTwo.getText()}`);
    });
});