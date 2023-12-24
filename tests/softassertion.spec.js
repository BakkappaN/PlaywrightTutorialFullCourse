// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Soft Assertions in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert url
    await expect.soft(page).toHaveURL('https://www.google.com/playwright+by+testers+talk')

    // assert title
    await expect(page).toHaveTitle('playwright by testers talk - Google Search')

    // assert text
    await expect.soft(page.locator("[aria-label='Search']").first()).toHaveText('playwright testers talk')

    //assert editable enabled visible
    await expect(page.locator("[aria-label='Search']").first()).toBeEditable();
    await expect(page.locator("[aria-label='Search']").first()).toBeVisible();
    await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();

    //assert disabled empty count
    //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();

    await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();

    await expect(page.locator("[aria-label='Search']")).toHaveCount(2)

    await page.waitForTimeout(5000);
})

    