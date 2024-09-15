// Include playwright module
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { TIMEOUT } = require('dns');

/**
 * Bakkappa N
 */
test('Handling multiple browser tabs in Playwright', async ({ browser }) => {

    // Create a new browser context
    const context = await browser.newContext();

    // Open new first tab and enter URL
    const tab1 = await context.newPage();
    await tab1.goto('https://www.youtube.com/results?search_query=playwright+by+testers+talk')

    // Open new second tab and enter URL
    const tab2 = await context.newPage();
    await tab2.goto('https://www.youtube.com/results?search_query=api+testing+by+testers+talk')

    // Perform actions in the first tab
    await tab1.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    // Perform actions in the second tab
    await tab2.getByRole('link', { name: 'API Testing by Testers Talk' }).first().click();

    // Validate first tab title
    expect(tab1).toHaveTitle('Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial - YouTube', { timeout: 60000 });

    // Validate second tab title
    expect(tab2).toHaveTitle('API Testing Postman Tutorial Full Course 2023 - YouTube', { timeout: 60000 });

    // Close the browser
    await context.close();

    // Also you can create multiple sessions & multiple tabs
})

