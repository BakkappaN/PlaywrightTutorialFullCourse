const { test, expect, chromium } = require('@playwright/test');

test('Google test using playwright', async () => {
    test.setTimeout(20 * 60 * 60 * 1000);
    for (let index = 0; index < 3; index++) {
        const browser = await chromium.connectOverCDP('http://localhost:9222/')
        const context = browser.contexts()[0];
        const page = context.pages()[0];
        const keywords = ['Postman', 'Playwright', 'Cypress', 'Rest Assured', 'Specflow'];
        for (const keyword of keywords) {
            let lowercasedWord = keyword.charAt(0).toLowerCase() + keyword.slice(1);
            await page.goto('https://www.google.com/search?q='+lowercasedWord+'+by+testers+talk');
            await page.waitForTimeout(2000);
            await expect(page.getByRole('link', { name: keyword+' by Testers Talk' }).first()).toBeEnabled();
            await page.getByRole('link', { name: keyword+' by Testers Talk' }).first().click();
            await expect(page.locator('#container > #thumbnail').first()).toBeVisible();
            await page.locator('#container > #thumbnail').first().click();
            await page.waitForTimeout(20000);
        }
        console.log(`Number of times test executed : ${index}`);
    }
})

test.skip('Google test for playwright', async () => {
    const browser = await chromium.connectOverCDP('http://localhost:9222/')
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    await page.goto('https://www.google.com/search?q=playwright+tutorial');
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'View all' }).click();
    await page.getByRole('link', { name: 'Playwright Tutorial Full Course 2024' }).click();
    await page.waitForTimeout(20000);
})
