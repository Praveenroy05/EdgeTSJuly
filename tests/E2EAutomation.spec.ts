// Login into application
// Search for a product and add to the cart
// Proceed to the Checkout
// Fill all the mandatory elements on the Payment page
// Select the country for the order on the Payment page
// Capture the orderID that it generates after placing the order
// Validate if the orderID is available in the Order History Table


let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "IPHONE 13 PRO"
let countryName = "Singapore"

import {test, expect} from '@playwright/test'

test("E2E automation testing", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill(username)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name: 'Login'}).click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    
    // get the count of total number of products
    const products = page.locator("div.card-body")

    // count() - Return us the total number of element matching with the locator

    const countOfProduct = await products.count() // 3 // [0,1,2]

    // await products.filter({hasText:`${productName}`})
    for(let i=0; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("h5").textContent() // div.card-body h5
        if(productText === productName){
            await products.nth(i).locator("button").last().click()
            break
        }

    }

    await page.waitForTimeout(3000)

})