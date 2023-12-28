// Inlcude playwright module
const { expect } = require('@playwright/test')

// create class
exports.PlaylistPage = class PlaylistPage {

    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        // Init page object
        this.page = page;

        // Elements
        this.videoLink = page.locator('#container > #thumbnail');
    }

    async clickOnVideo(){
        await expect(this.videoLink.first()).toBeEnabled();
        await this.videoLink.first().click();
    }

}