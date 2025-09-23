// Steps to work with excel file
// 1. We have to install 'xlsx' package - npm install xlsx
// 2. Create and store the excel file in the TestData directory
// 3. import 'xlsx' package in the file where you want to read/write the data - utils - ExcelUtils.ts
// 4. Create a reusable function to read the excel file using xlsx package
// 5. Read the file data and convert it to a JSON format
// 6. Retrun the json data from the function
// 7. Call or import the function in the test file and store  the data in a variable


// Steps to work with different env files

// We will be creating env specific files - data.env.qa, data.env.stg, data.env.prod
// 1. We have to install dotenv library - npm install --save-dev dotenv
// dotenv library is used to load envirnoment variables from a .env file into  process.env(Global object in node js)
// 2. Create .env files are store it inside the TestData folder (data.env.qa)
// 3. Inside the playwright.config.ts, we have a method inside dotenv.config({path : ".env file path"})
// 4. 


// CICD - 