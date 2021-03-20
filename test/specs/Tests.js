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

    it('should be able to search for location and verify 3 day temp', async () => {

        const search = await $(weather.element.weatherSearch);
        await search.setValue('Melbourne');
        await browser.pause(2000)
        const dropdown = await $(weather.element.searchDropDown)
        dropdown.click()

        const searchTitle = await $(weather.element.searchTitle);
        expect(await searchTitle.getText()).toContain("Melbourne")

        weather.checkWeatherAndOutput("day1")
        weather.checkWeatherAndOutput("nextDay")
        weather.checkWeatherAndOutput("dayAfter")
    });
});