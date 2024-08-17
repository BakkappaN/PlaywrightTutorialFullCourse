// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a testa
test('Take screenshot in playwright', async ({ page }) => {

    await test.step('Go to URL', async () => {
        await page.goto('https://www.youtube.com/@testerstalk')
    });

    await test.step('Take a element screenshot', async () => {
        await page.locator('#page-header-banner').screenshot({ path: './screenshots/element.png' })
    });

    await test.step('Capture a page screenshot', async () => {
        await page.screenshot({ path: './screenshots/page.png' });
    });

    await test.step('Take a full page screenshot', async () => {
        await page.screenshot({ path: './screenshots/fullpage.png', fullPage: true });
        await page.waitForTimeout(5000);
    });
})