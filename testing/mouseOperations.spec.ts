// click - click()
// double click
// Right click
// Mouse Over
// Scroll down/up
// Drag and drop


import {test, expect} from '@playwright/test'

test("double click and right click operations", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // Double Click - dblclick()
    await page.getByText("Double-Click Me To See Alert").dblclick()
    // Right Click - click({button:'right''})
    await page.getByText("right click me").click({button: 'right'})
    await page.getByText("Copy", {exact: true}).click()

})

test("Mouse Over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    //Mouse over on an element - hover()
    await page.getByText("SpiceClub", {exact: true}).first().hover()
    await expect(page.getByTestId("test-id-Earn Points")).toBeVisible()
    await expect(page.getByTestId("test-id-Earn Points")).toHaveText("Earn Points")
})

test("Scroll down on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.getByText("Download Files").first().click()
    await page.getByText("Download Files").first().scrollIntoViewIfNeeded()
    await page.getByText("Download Files").first().click()
    await expect(page.url()).toContain("download-files")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/download-files_25.html")
})

test("Drag and drop handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // dragTo(Locator) - Drag the source element to the target element

    await sourceElement.dragTo(targetElement)

    await page.waitForTimeout(3000)

})

test("Drag and drop custom handling", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()
    
    await expect(page.getByText("Dropped!")).toBeVisible()
    await page.waitForTimeout(3000)

})




