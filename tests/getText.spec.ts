// 
import {test, expect} from '@playwright/test'


test("Get the text value of an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() - Get the text value of an element
    const textValue = await page.locator("#header-inner h1.title").textContent()
    console.log("Text Value: ", textValue)
//     await expect(textValue).toBe("
// Automation Testing Practice")
    await expect(textValue).toContain("Automation Testing Practice")

    // await expect(page.locator("#header-inner h1.title")).toHaveText("Automation Testing Practice")

   
    
})