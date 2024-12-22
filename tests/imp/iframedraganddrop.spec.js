// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Handle iframes in playwright & Drag nd Drop', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/droppable/')

    // iframe
    const iframeElement = page.frameLocator('.demo-frame')

    // src and dest element
    const dragElement = iframeElement.locator("[id='draggable']");
    const dropElement = iframeElement.locator("[id='droppable']");

    // drag and drop element
    await dragElement.dragTo(dropElement);

    await page.waitForTimeout(5000);

})

    