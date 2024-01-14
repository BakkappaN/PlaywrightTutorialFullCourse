### Playwright Tutorial Full Course - https://bit.ly/playwright-tutorial-automation-testing
### Playwright API Testing Tutorial - https://bit.ly/playwright-api-testing-tutorial
### Playwright with Dynamics 365 CRM - https://youtu.be/WwovRRp0f4o?si=oqPE2ux7UcDeJMm6

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
There are 2 options, option1 is using yaml file & option2 is without using yaml file. let's see one by one

1. Option1 - Using YAML File
   - Step1: Create a new project in ADO then Click on Project
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0ec3b6b7-748f-4d0a-80bf-762e24728afb)

   - Step2: Click on Repos & Let's create new repository, Click on New reposiotry
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/fe0485c8-2708-456b-9030-a046b1170c70)

   - Step3: Enter Repository name & Click on Create
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/ea15010a-4308-41c2-883e-f0ddee48908f)
    ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/0ee53f40-2d9e-4dbb-8301-5cc2c615d647)

   - Step4: Click on Clone button and get the URL. Go to your system then clone repository.
   - Step5: Add all the playwright framework folders inside cloned repository
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/b8039254-cba5-46ff-9696-0aad20dd9876)

   - Step6: Push all the folders into Azure devops
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/add3e34a-5ba8-4792-9d2c-dbae06bc6a64)

   - Step7: Repository is ready now, let's create pipeline. Click on Pipelines->Create Pipeline
   - ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/7bb2f8dc-8253-46ab-879a-743446211bdf)

   - Step8: Click on Azure Repos Git
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/885628e1-8e4c-43fc-ba6a-6125ec34e6fb)

   - Step9: Select previously created repository
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/09b1489d-f699-4885-84a4-c06554adc3e6)

   - Step10: Select Starter Pipeline
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/3db45ed6-c0c9-4033-b786-b8ca7e263ce4)

   - Step11: Copy below yaml content and paste it inside azure-pipelines.yml file. 
```
trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18'
  displayName: 'Install Node.js'
- script: npm ci
  displayName: 'npm ci'
- script: npx playwright install --with-deps
  displayName: 'Install Playwright browsers'
- script: npx playwright test
  displayName: 'Run Playwright tests'
  env:
    CI: 'true'
```
If you are running in self hosted agent replace pool commands
```
pool:
   name: AgentPoolName
   demands:
   - agent.name -equals AgentName
```
   - Step12: Click on Save and run
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/208f9b43-735a-45e1-b5c3-699df9e6d8f2)
    ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/41262f5d-6e80-4274-a4fc-75d0536e73a7)

   - Step13: You will see job queued like this.
   - ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/1fff0860-2ac5-45b0-aa45-757afb76777e)

   - Step14: Click on Job & Verify build status.
     ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/66326c8f-d789-4856-b90c-8909bef95930)

   - Step15: Now let's Upload playwright-report folder with Azure Pipelines & Report generation
     Firstly update azure-pipelines.yml file
```
trigger:
- main

pool:
  vmImage: ubuntu-latest

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '18'
  displayName: 'Install Node.js'
- script: npm ci
  displayName: 'npm ci'
- script: npx playwright install --with-deps
  displayName: 'Install Playwright browsers'
- script: npx playwright test
  displayName: 'Run Playwright tests'
  env:
    CI: 'true'

- task: PublishTestResults@2
  displayName: 'Publish test results'
  inputs:
    searchFolder: 'test-results'
    testResultsFormat: 'JUnit'
    testResultsFiles: 'e2e-junit-results.xml'
    mergeTestResults: true
    failTaskOnFailedTests: true
    testRunTitle: 'My End-To-End Tests'
  condition: succeededOrFailed()
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: playwright-report
    artifact: playwright-report
    publishLocation: 'pipeline'
  condition: succeededOrFailed()
```
     
   - Step16: Verify playwright-report folder attachment & report
    ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/54aaf4b4-7715-435d-b96a-7a19c23fa384)

    ![image](https://github.com/BakkappaN/PlaywrightTutorialFullCourse/assets/22426896/6d14e28e-ef0d-40f8-a135-fb6fe66e9ff7)

    From job we can navigate into artifacts folder. Download playwright report and verify results.

   
2. Option2 - Without using YAML File




  
  
