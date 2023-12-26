// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test.only('Assertions in playwright1', async({page}) =>{

    console.log('Assertions in playwright test is running...!')

    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert url
    await expect(page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert title
    await expect(page).toHaveTitle('playwright by testers talk - Google Search')

    // assert text
    await expect(page.locator("[aria-label='Search']").first()).toHaveText('playwright by testers talk')

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

// Write a test
test.skip('Assertions in playwright2', async({page}) =>{

    console.log('Assertions in playwright test is running...!')

    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert url
    await expect(page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert title
    await expect(page).toHaveTitle('playwright by testers talk - Google Search')

    // assert text
    await expect(page.locator("[aria-label='Search']").first()).toHaveText('playwright by testers talk')

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

// Write a test
test('Assertions in playwright3', async({page}) =>{

    console.log('Assertions in playwright test is running...!')

    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert url
    await expect(page).toHaveURL('https://www.google.com/search?q=playwright+by+testers+talk')

    // assert title
    await expect(page).toHaveTitle('playwright by testers talk - Google Search')

    // assert text
    await expect(page.locator("[aria-label='Search']").first()).toHaveText('playwright by testers talk')

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

    