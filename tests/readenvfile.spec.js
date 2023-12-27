// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Read Env File in playwright', async({page}) =>{
    // Go to URL
    await page.goto(process.env.URL);

    // search with keywords
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill('playwright by testers talk');
    await page.locator('#APjFqb').press('Enter');

    console.log("Username is : "+process.env.USER_NAME);
    console.log("Password is : "+process.env.PASSWORD);

    await page.waitForTimeout(5000);

})

    