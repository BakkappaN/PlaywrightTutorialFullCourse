// Include playwright module
const {test, expect} = require('@playwright/test');

const testParameters = ['playwright by testers talk','cypress by testers talk',
 'javascript by testers talk','api testing by testers talk',
 'postman by testers talk','rest assured by testers talk'];

for (const searchKeyword of testParameters) {
    
    // Write a test
    test(`Youtube Search with ${searchKeyword}`, async({page}) =>{
        // Go to URL
        await page.goto('https://www.youtube.com/');

        // search with keywords
        await page.getByPlaceholder('Search').click();
        await page.getByPlaceholder('Search').fill(searchKeyword);
        await page.getByPlaceholder('Search').press('Enter');
        await page.waitForTimeout(2000);

        await expect(page.getByText(searchKeyword)).toBeEnabled();
        await page.getByText(searchKeyword).click();
        await page.waitForTimeout(6000);
    })
}

for (const searchKeyword of testParameters) {
    
    // Write a test
    test(`Google Search with ${searchKeyword}`, async({page}) =>{
        // Go to URL
        await page.goto('https://www.google.com/');

        // search with keywords
        await page.locator("[aria-label='Search']").first().click();
        await page.locator("[aria-label='Search']").first().fill(searchKeyword);
        await page.locator("[aria-label='Search']").first().press('Enter');
        await page.waitForTimeout(2000);

        await expect(page.getByRole('link',{name:searchKeyword}).first()).toBeEnabled();
        await page.getByRole('link',{name:searchKeyword}).first().click();
        await page.waitForTimeout(6000);
    })
}


    