// Multiple tabs/windows - popup event

// Step by step process:
// 1. Launch the url
// 2. Will wait for "popup" event to appear on the page - page.waitForEvent('popup')
// 3. Identify and click on the element which is responsible for generation of popup event.
// 4. Will wait for the final result to get from the line #2 by using await condition
// 5. Handle any kind of scenarios on the newly created page by using newPage variable/fixture.
// 6. When we have to come back to the original page 



import {test, expect} from '@playwright/test'


test("Child window handlings", async ({page})=>{
   await page.goto("https://demo.automationtesting.in/Windows.html") // original page
   
   const page1 = page.waitForEvent('popup') // pending, rejected, successful
   await page.getByText('click', {exact: true}).first().click()

   const newPage = await page1
   await newPage.getByText("Downloads").click()
   await expect(newPage.locator("#bindings")).toContainText("WebDriver Language")

   // When you have to comeback and perform some action on the original page

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})

test("Child window handling", async ({page})=>{
   await page.goto("https://demo.automationtesting.in/Windows.html") // original page
   
   await page.getByText('click', {exact: true}).first().click()

   const newPage = await page.waitForEvent('popup')
   await newPage.getByText("Downloads").click()
   await expect(newPage.locator("#bindings")).toContainText("WebDriver Language")

   await page.getByText("Home").click()
   await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})



