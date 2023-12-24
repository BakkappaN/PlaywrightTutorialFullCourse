// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Keyboard actions in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://www.google.com/')

    await page.locator("[aria-label='Search']").first().click()
    await page.locator("[aria-label='Search']").first().fill('playwright by testers talk')
    
    // press enter
    await page.locator("[aria-label='Search']").first().press('Enter')

    // press control+a & delete
    await page.locator("[aria-label='Search']").first().click()
    await page.locator("[aria-label='Search']").first().press('Control+a');
    await page.locator("[aria-label='Search']").first().press('Delete');

    // press tab
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');

    await page.waitForTimeout(8000);
    
})

    