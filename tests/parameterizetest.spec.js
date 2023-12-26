// Include playwright module
const {test, expect} = require('@playwright/test');

const testParameters = ['playwright by testers talk','cypress by testers talk','javascript by testers talk'];

for (const searchKeyword of testParameters) {
    
    // Write a test
    test(`Parameterize tests in playwright ${searchKeyword}`, async({page}) =>{
        // Go to URL
        await page.goto('https://www.youtube.com/')

        // search with keywords
        await page.getByPlaceholder('Search').click();
        await page.getByPlaceholder('Search').fill(searchKeyword)
        await page.getByPlaceholder('Search').press('Enter');

        await page.waitForTimeout(5000);

    })
}


    