// alert or popup - dialog event
// Multiple tabs/windows - popup event
// File download - download event


// Different types of alerts are available:
// 1. alert - Will have a single button
// 2. Confirm alert - Will have 2 buttons -Ok, cancel
// 3. Prompt alert - Will also have a textbox to enter something.


// Step by step process:
// 1. Launch the url
// 2. We have to wait for "dialog" event to appear on the page and write the logic to handle the scenarios.
// 3. Identify and click on the element/button which is responsible for generation of "dialog" event

import {test, expect} from '@playwright/test'

    

test("Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // page.on(event, eventHandler - callBack Function)
    // page.waitForEvent(event, eventHandler?)

    // Dialog - class inside playwright
    // accept(text?) - Ok
    // dismiss() - Cancel
    // message() - Get the text value that it displayed on the alert
    // type() - Check the type of the alert
    // defaultValue() - It will work only for prompt alert to get the default value if it has inside the textbox

    page.on('dialog', (dialog)=>{
        console.log(dialog.message())
        dialog.accept()
    })

    await page.locator("#alertBtn").click()
})

test("Confirm Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', (dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message())
        console.log(dialog.defaultValue());
        dialog.dismiss()
    })

    await page.locator("#confirmBtn").click({timeout: 60000})
    await expect(page.locator("#demo")).toHaveText("You pressed Cancel!")

})

test("Prompt Alert Handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const text = "Testing"

    page.on('dialog', (dialog)=>{
        console.log(dialog.type());
        console.log(dialog.message())
        console.log(dialog.defaultValue());
        dialog.accept(text)
    })

    await page.locator("#promptBtn").click()
    await expect(page.locator("#demo")).toContainText(`Hello ${text}!` )

})



