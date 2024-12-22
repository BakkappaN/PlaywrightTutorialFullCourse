// Include playwright module
const { test, expect } = require('@playwright/test');

/**
 * Bakkappa N
 */
test("API Requests Mocking Using Playwright", async ({ page }) => {

    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'playwright by testers talk', id: 21 },
            { name: 'cypress by testers talk', id: 71 },
            { name: 'api testing by testers talk', id: 72 },
            { name: 'postman by testers talk', id: 73 },
            { name: 'rest assured by testers talk', id: 74 },
        ];
        await route.fulfill({ json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the mocked values
    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
    await expect(page.getByText('postman by testers talk')).toBeVisible();
    await expect(page.getByText('rest assured by testers talk')).toBeVisible();
});

/**
 * Bakkappa N
 */
test('Gets the json from api and adds a new string value', async ({ page }) => {

    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'playwright by testers talk', id: 100 });
        json.push({ name: 'cypress by testers talk', id: 101 });
        json.push({ name: 'api testing by testers talk', id: 102 });
        json.push({ name: 'postman by testers talk', id: 103 });
        json.push({ name: 'rest assured by testers talk', id: 104 });

        // Fulfill using the original response, while patching the response body
        // with the given JSON object.
        await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the new fruit is visible
    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
    await expect(page.getByText('postman by testers talk')).toBeVisible();
    await expect(page.getByText('rest assured by testers talk')).toBeVisible();
});

/**
 * Bakkappa N
 */
test('Record or Modify the HAR file', async ({ page }) => {

    // Get the response from the HAR file
    await page.routeFromHAR('./hars/fruit.har', {
        url: '*/**/api/v1/fruits',
        update: false,
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the fruit is visible
    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
    await expect(page.getByText('postman by testers talk')).toBeVisible();
    await expect(page.getByText('rest assured by testers talk')).toBeVisible();
});