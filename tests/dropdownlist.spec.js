// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a testa
test('Handle dropdown list in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/')
    await page.getByText('Create new account').click();

    // Identify select tag
    const dropDownList = page.locator('#month');

    // Validating default selected value
    await expect(dropDownList).toHaveValue('8');

    // Drop down list all the options
    const dropDownListOptions = page.locator('#month > option');
    await expect(dropDownListOptions).toHaveText(['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])

    // Select by value
    dropDownList.selectOption('5');
    dropDownList.selectOption('6');

    // Select by visible text
    dropDownList.selectOption('Aug');
    await page.waitForTimeout(5000);
})

