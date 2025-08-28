// Click Enter button
// Typing inside textbox
// Copy paste action
// Arrow Keys - left, right, up and down
// backspace
// page up/down
// Shift keyword
// TAB
// Escape



import {test, expect} from '@playwright/test'

test("Keyboard Operations", async ({page})=>{
    await page.goto("https://demoqa.com/text-box")
    await page.getByPlaceholder("Full Name").fill("Test Usr")
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.type('e')
    await page.keyboard.press('ArrowRight')
    await page.keyboard.type('s')
    await expect(page.getByPlaceholder("Full Name")).toHaveValue("Test Users")
    await page.keyboard.press('Tab')
    await page.keyboard.type("test@example.con")
    await page.keyboard.press('Backspace')
    await page.keyboard.type('m')
    await page.keyboard.press('Tab')
    await page.keyboard.type("Some address")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press("Control+V")
    await expect(page.locator("#permanentAddress")).toHaveValue("Some address")
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await expect(page.locator("#name")).toBeVisible()
})

test("Shift keyword", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.keyboard.press('PageDown')
    // await page.waitForTimeout(2000)
    // await page.keyboard.press('PageUp')
    // await page.waitForTimeout(2000)

    await page.locator("#username").click()
    await page.keyboard.down("Shift");
    await page.keyboard.press("KeyT");
    await page.keyboard.up("Shift");
})


