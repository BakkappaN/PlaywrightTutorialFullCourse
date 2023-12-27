// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Google test using playwright', async({page}) =>{
     // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
    await page.waitForTimeout(2000);

    // Click on playlist
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk' }).first()).toBeEnabled();
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await page.waitForTimeout(8000);
})

    