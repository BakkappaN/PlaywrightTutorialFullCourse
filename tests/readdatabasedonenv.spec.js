// Include playwright module
const {test, expect} = require('@playwright/test');
import { qaTestData } from '../test-data/qa/google.json';
import { stageTestData } from '../test-data/stage/google.json';


test.describe('Module1 Test', () => {

let testData = null;

    test.beforeAll('Running before all tests', ()=>{
        if(process.env.ENV == 'qa'){
            testData = qaTestData;
        }else{
            testData = stageTestData;
        }
    })

    // Write a test
    test('Read Test data based on different env in playwright ', async({page}) =>{
        // Go to URL
        await page.goto(process.env.URL);

        // search with keywords
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(testData.skill1);
        await page.locator('#APjFqb').press('Enter');

        await page.waitForTimeout(5000);
    })

})







    