// Include playwright module
const { test, expect } = require('@playwright/test');

// Write a testa
test('Handle dropdown list in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com/')
    await page.getByText('Create new account').click();

    // Identify select tag
    const monthdropDownList = page.locator('#month');

    // Validating default selected value
    await expect(monthdropDownList).toHaveValue('12');

    // Drop down list all the options
    const monthsdropDownListOptions = page.locator('#month > option');
    await expect(monthsdropDownListOptions).toHaveText(['Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ])

    // Select by value
    monthdropDownList.selectOption('5');
    await page.waitForTimeout(2222);
    monthdropDownList.selectOption('6');
    await page.waitForTimeout(2222);

    // Select by visible text
    monthdropDownList.selectOption('Aug');
    await page.waitForTimeout(5000);
})

