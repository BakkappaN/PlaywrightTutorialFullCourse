// Include playwright module
const {test, expect} = require('@playwright/test');
const { HomePage } = require('../pages/homepage');
const { ResultPage } = require('../pages/resultpage');
const { PlaylistPage } = require('../pages/playlistpage');

// Write a test
test('Page Object Model in playwright', async({page}) =>{
    // Go to URL
    const homepage = new HomePage(page);
    await homepage.goto();
   
    // Search with keywords
    homepage.searchKeywords('playwright by testers talk');

    // Click on playlist
    const resultpage = new ResultPage(page);
    resultpage.clickOnPlaylist();

    await page.waitForTimeout(4000)

    // Click on video
    const playlistpage = new PlaylistPage(page);
    playlistpage.clickOnVideo();

    await page.waitForTimeout(8000)

})

    