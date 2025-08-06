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

