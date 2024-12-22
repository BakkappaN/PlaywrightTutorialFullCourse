// Include playwright module
const {test, expect} = require('@playwright/test');

const testParameters = [
    {keyword: 'playwright by testers talk', num: 1},
    {keyword: 'cypress by testers talk', num: 2},
    {keyword: 'javascript by testers talk', num: 3}];

for (const {keyword, num} of testParameters) {
    
    // Write a test
    test(`${num}. Parameterize tests in playwright '${keyword}'`, async({page}) =>{
        // Go to URL
        await page.goto('https://www.youtube.com/')

        // search with keywords
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill(keyword)
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        await page.waitForTimeout(5000);

    })
}


    