// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a testa
test('Take screenshot in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/@testerstalk')

    // element screenshot
    await page.locator('#channel-header-container').screenshot({path:'./screenshots/element.png'})

    // page screenshot
    await page.screenshot({path:'./screenshots/page.png'});

    // full page screenshot
    await page.screenshot({path:'./screenshots/fullpage.png',fullPage : true});

    await page.waitForTimeout(5000);

})

    