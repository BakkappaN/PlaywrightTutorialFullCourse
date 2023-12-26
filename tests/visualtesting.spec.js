// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Visual comparison testing in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://github.com/login')

    // before actions 2 images comparison
    await expect(page).toHaveScreenshot('githubpage.png');

    await page.locator('#login_field').click();
    await page.locator('#login_field').fill('testers talk')

    // after actions 2 images comparisons
    await expect(page).toHaveScreenshot('githubpage.png');

    await page.waitForTimeout(3000);

})


// Write a test
test('Element Comparison in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://github.com/login')

    const element = page.locator('#login_field');
    await expect(element).toHaveScreenshot('element.png');

    await page.waitForTimeout(3000);

})

    