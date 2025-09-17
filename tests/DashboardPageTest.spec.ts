import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "iphone 13 pro"
let cartSuccessMsg = "Product Added To Cart"


let loginPage 
let dashboardPage :DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible() 
})

test("@smoke @regression Add the product to the cart", async ()=>{
    await dashboardPage.searchAndAddProductToCart(productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(cartSuccessMsg)
})

test("@smoke Validate the product details", async ()=>{
    await dashboardPage.searchAndValidateProductDetails(productName)
    await expect(dashboardPage.viewProductName).toHaveText(productName)
    await expect(dashboardPage.viewProductPrice).toHaveText(dashboardPage.productPrice)
})