const url = require("../pageobjects/test")

describe('visit page', () => {
    it('should open website', async () => {
        await browser.url(url.url)
    });
});