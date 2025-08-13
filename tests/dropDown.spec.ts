// Drop down

// 2 Types of DD

// 1. Static drop down - The value will never get changes - gender selection 
     // a. Single select drop down
     // b. Multi select drop down
// 2. Dynamic drop down - The value of the DD can be changing
     // a. Single select drop down
     // b. Multi select drop down



// Development of a drop down
// 1. <select> tag
// 2. non <select> tag - div, li, ul, options, span ,.....



// 1. DD developed using <select> tag
// Step by stpe procedure to select the value(s) from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the dropdown by using  - selectOption("value" or {label or value or index})
// Example: page.locator("#DD").selectOption("AS" {index: 12} {label : 'valuel'})
// 4. If the drop down is multi select  - selectOption(["As", "BS","CS"])
// selectOption(["As", {label:"BS"},{index: 13}])

//***************************************************************** */

// 2. DD developed using non <select> tag
// Step by step procedure to select the value(s) from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element
// 4. Identify and click on the element that you are trying to select from the drop


import {test, expect} from '@playwright/test'

test("Drop down developed using select tag handling", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.locator("#country").selectOption("AM")
    await page.locator("#country").selectOption({value:"BA"})
    await expect(page.locator("#country")).toHaveValue('BA')
    await page.locator("#country").selectOption({label:"Dominica"})
    await expect(page.locator("#country")).toHaveValue('DM')
    await page.locator("#country").selectOption({index:24})
    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(["volvo", "opel"])
    await expect(page.locator("#cars")).toHaveValues(["volvo", "opel"])
    await page.locator("#cars").selectOption([{value:'saab'}, {label:'Audi'}, {index: 0}])
     await expect(page.locator("#cars")).toHaveValues(["volvo","saab", "audi"])

})

test("Drop down developed using non select tag handling", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator(".css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-2").click()
   //await page.getByText('A root option', { exact: true }).click()
    await page.waitForTimeout(2000)

    await page.locator(".css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-0").click()
    await page.getByText("Black", {exact: true}).last().click()
    await page.waitForTimeout(2000)
    
})

