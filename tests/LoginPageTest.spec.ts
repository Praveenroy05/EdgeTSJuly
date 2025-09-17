import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

let url = "https://rahulshettyacademy.com/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "Test"

//test.describe.configure({mode : 'parallel', timeout : 120000, retries : 1})

let loginPage :LoginPage
let dashboardPage :DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})

test.describe("Login Page Test", async ()=>{
    test("Valid Login Test",{tag: ['@smoke', '@regression']}, async ()=>{
        test.step("Login into application", async ()=>{
        await loginPage.validLogin(username, password)
        })
        test.step("Assertion for successful login", async ()=>{
        await expect(dashboardPage.homePageIdentifier).toBeVisible()
        })
    })

    test("Invalid Login Test",{tag: '@regression'}, async ()=>{
     //   test.slow()
        // Failing due to bug JIRA - 123
        await loginPage.invalidLogin(username, incorrectPassword)
        await expect(loginPage.errorMessage).toContainText("Incorrect email or password.", {timeout : 10000})
    })
})
