// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Test1 @Tag1', async({page}) =>{  // use tagging in command line to execute tests matching with the tag
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

})


// Write a test
test('Test2 @Tag2', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

})


// Write a test
test('Test3 @Tag1', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
    await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    await page.pause();

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial Full Course | Cypress Automation | Learn Cypress in 5 Hrs - YouTube');

})
    