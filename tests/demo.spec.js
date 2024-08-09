// Include playwright module
import { test, chromium } from '@playwright/test';


test('Open multiple browser sessions', async () => {
    const browser = await chromium.launch();
    
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto('https://youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM&si=-US8rBdfw1kxRBnt');
    await page1.locator('#contents > ytd-playlist-video-renderer:nth-child(1)').click()
    await page1.waitForTimeout(5000);

    await page2.goto('https://youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM&si=-US8rBdfw1kxRBnt');

    await browser.close();
});

test('run test in already opened browser', async () => {
    const browser = await chromium.connectOverCDP('http://localhost:9222');
    const defaultContext = browser.contexts()[0];
    const page = defaultContext.pages()[0];

    await page.goto('https://www.google.com/search?q=playwright+by+testers+talk');
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
});

test('Rerun all failed test', async ({ page }) => {
});

test('latest tags', async ({ page }) => {
});

test('popups alerts', async ({ page }) => {
});

test('multiple test reports', async ({ page }) => {
});

test('upload file', async ({ page }) => {
});

test('download file', async ({ page }) => {
});