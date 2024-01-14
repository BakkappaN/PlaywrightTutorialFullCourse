- ### Playwright Tutorial Full Course - https://bit.ly/playwright-tutorial-automation-testing
- ### Playwright API Testing Tutorial - https://bit.ly/playwright-api-testing-tutorial
- ### Playwright with Dynamics 365 CRM - https://youtu.be/WwovRRp0f4o?si=oqPE2ux7UcDeJMm6

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

## Playwright Important Commands

  npx playwright install
   - Install Browsers manually.
    
  npx playwright test
   - Runs the end-to-end tests.

  npx playwright test --ui
   - Starts the interactive UI mode.

  npx playwright test --project=chromium
   - Runs the tests only on Desktop Chrome.

  npx playwright test example
  -  Runs the tests in a specific file.

  npx playwright test --debug
  - Runs the tests in debug mode.

  npx playwright codegen
- Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

### And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

## Allure Report with Playwright [Screenshots, Videos & Traces]
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



## Playwright Test Report
![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/dd9e360b-bd9e-425a-9191-848a13791d29)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/9ea0128b-5906-476f-9fc7-615b240d7623)

![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/379bb630-b84d-4a47-a70e-8afca0d33240)


## Integrate Playwright with Azure Devops Pipeline
1. Option1 - Using YAML File
   - Step1: Create a new project in ADO then Click on Project
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0ec3b6b7-748f-4d0a-80bf-762e24728afb)

   - Step2: Click on Repos & Let's create new repository, Click on New reposiotry
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/fe0485c8-2708-456b-9030-a046b1170c70)

   - Step3: Enter Repository name & Click on Create
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/ea15010a-4308-41c2-883e-f0ddee48908f)
    ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0ee53f40-2d9e-4dbb-8301-5cc2c615d647)

   - Step4:
     
   - Step5: 
   
2. Option2 - Without sing YAML File




  
  
