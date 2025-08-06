import {test, expect} from '@playwright/test'
//const {test, expect} = require('@playwright/test') - JS

test("Fill and Validate the textbox", async ({page})=>{
    // Launch the url - goto("url")

    // Goto the url
    // fill the username 
    // fill the password
    // click on login button
    // const context = await browser.newContext()
    // const driver = await context.newPage()

    // 2 Ways in which you can write the locator in Playwright
        // 1. When you are using css selector or xpath we have to write the locator by using page.locator("input#username")
        // 2. By using playwright built in getBy locators - page.label("value of the label")
    // locator() - which help us in identifying the elemnt on the webpage by using selector
    // fill("value") - enter the value inside the textbox

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    // assertion for username field - toHaveValue() - asserting the textbox with some value
    await expect(page.locator("input#username")).toHaveValue("student")
    await page.locator("input#password").fill("Password123")
    await page.getByRole('button', {name: 'Submit'}).click()

})

test("Browser", async ({browser})=>{
     const context = await browser.newContext()
     const page = await context.newPage()
     await page.goto("https://practicetestautomation.com/practice-test-login/")

     const context1 = await browser.newContext()

     const page1 = await context1.newPage()
     await page1.goto("https://google.com")

     const page2 = await context.newPage()
     await page2.goto("https://www.bing.com")
})

test("Handling radio button and checbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // click() - Click on an element
    // check() - check the radio button or checkbox
    const radioButton = page.getByRole('radio', {name:'Female'})
    await radioButton.click()
    // toBeChecked() - Assertion to check whether the radio button or checkbox is checked or not
    await expect(radioButton).toBeChecked()

    await page.getByRole('checkbox', {name:'Thursday'}).check()
    await expect(page.getByRole('checkbox', {name:'Thursday'})).toBeChecked()
    // uncheck() - Uncheck the checkbox
    await page.getByRole('checkbox', {name:'Thursday'}).uncheck()
    await expect(page.getByRole('checkbox', {name:'Thursday'})).not.toBeChecked()
})