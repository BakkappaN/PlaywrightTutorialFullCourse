# Playwright Tutorial Full Course - https://bit.ly/playwright-tutorial-automation-testing


#### Install Playwright & Select Configurations
- npm init playwright@latest

Playwright will download the browsers needed as well as create the following files.

- node_modules
- playwright.config.js
- package.json
- package-lock.json
- tests/
    example.spec.js
- tests-examples/
    demo-todo-app.spec.js

  
#### dotenv Package Installation Command
- npm install dotenv --save

#### csv-parse Package Installation Command
- npm install csv-parse

#### faker-js plugin for test data generation
- npm install @faker-js/faker --save-dev

#### luxon plugin for custom dates
- npm install --save luxon

## Allure Report with Playwright
- Step1: Install Allure Report command-line tool
  ### npm install --save-dev allure-commandline
  
- Step2: Install the Allure Playwright adapter.
  ### npm install --save-dev allure-playwright

- Step3: Add below config in playwright.config.js file.
  ### reporter:[
  ### ['html'],
  ### ['allure-playwright']
  ### ],

- Step4: Run Playwright tests.
  ### npx playwright test

- Step5: Generate Allure Report
  ### npx allure serve allure-results
![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0dc08076-a4ba-4f9f-9b89-ecd8fc81f5ba)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/5fc751fa-81ca-4dc6-9c49-54834258d0aa)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/36161f37-2cf2-4373-a30d-f888adb405de)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/b7ef2588-adbd-40fc-9801-ed1554fd38ef)






  
  
