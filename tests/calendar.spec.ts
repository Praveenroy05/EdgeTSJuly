// Calendar  Selection

import {test, expect} from '@playwright/test'

test("Calendar handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const day = "2"
    const month = "May"
    const year = "2027"

    
})