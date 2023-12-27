// Include playwright module
const {test, expect} = require('@playwright/test');

import fs from 'fs';
import path  from 'path';
import { parse } from 'csv-parse/sync';

const records = parse (
    fs.readFileSync(path.join(__dirname,"../test-data/qa/testdata.csv")),
    {
        columns:true,
        skip_empty_lines:true,
    });


for (const record of records) {
        
    // Write a test
    test(`Data Driven Testing Using CSV file in playwright ${record.TestCaseId}`, async({page}) =>{
        // Go to URL
        await page.goto(process.env.URL);

        // search with keywords
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(record.Skill2);
        await page.locator('#APjFqb').press('Enter');

        await page.waitForTimeout(5000);
    })
}


    