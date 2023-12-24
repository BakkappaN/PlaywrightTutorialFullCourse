// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Date Picker in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/datepicker/')

    const frameElement = page.frameLocator('.demo-frame');

    //frameElement.locator('.hasDatepicker').fill('12/20/2023');

    frameElement.locator('.hasDatepicker').click();

    // today's date
    //await frameElement.locator('.ui-datepicker-today').click();

    // custom date value
    const defaultDate = frameElement.locator('.ui-datepicker-today > a')
    const currentDateValue = await defaultDate.getAttribute('data-date'); // 22 as a value

    let customDate = (parseInt(currentDateValue)+3); // 19 as value

    const element = "[data-date="+"'"+customDate.toString()+"'"+"]";
    
    await frameElement.locator(element).click();
    
    await page.waitForTimeout(5000);

})

    