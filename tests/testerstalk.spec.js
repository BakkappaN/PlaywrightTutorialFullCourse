// Include playwright module
import fs from 'fs';
import path from "path";
const {test, expect} = require('@playwright/test');
import { parse } from "csv-parse/sync";

import { qaTestData } from '../test-data/qa/google.json'
import { stageTestData } from '../test-data/stage/google.json'

 const testParameters = ['playwright by testers talk','cypress by testers talk',
'javascript by testers talk','api testing by testers talk',
'postman by testers talk','rest assured by testers talk'];

test.describe('Module1 Tests', () => {
    
let testData = null;

    test.beforeAll('Running before All tests...!!',()=>{
        if(process.env.ENV == 'qa'){
            testData = qaTestData;
        }else{
            testData = stageTestData;
        }
    })

    // Write a test
    test('Env Test', async({page}) =>{
        // Go to URL
        await page.goto(process.env.URL);

        // search with keywords
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(testData.skill1);
        await page.locator('#APjFqb').press('Enter')
        await page.waitForTimeout(6000);
    })
})

const records = parse (
    fs.readFileSync(path.join(__dirname,"../test-data/qa/testdata.csv")),
    {
        columns: true,
        skip_empty_lines:true,
    }); 

for (const record of records) {

    test(`data driven testing csv test: ${record.TestCaseId}`, async({ page }) =>{
                // Go to URL
        await page.goto(process.env.URL);
            
                // search with keywords
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(record.Skill1);
        await page.locator('#APjFqb').press('Enter')
        await page.waitForTimeout(6000);
    });
}



for (const searchKeyword of testParameters) {
    
    // Write a test
    test(`Parameterization Test ${searchKeyword}`, async({page}) =>{
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

