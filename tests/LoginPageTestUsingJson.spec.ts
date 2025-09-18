import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import loginData from '../TestData/login.json'
import * as allure from "allure-js-commons";

let loginPage :LoginPage
let dashboardPage :DashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(loginData.url)
})

test("Valid Login Test",{tag: '@smoke'}, async ()=>{
    await loginPage.validLogin(loginData.username, loginData.password)
    await allure.issue("https://github.com/allure-framework/allure-js/issues/331", "ISSUE-331");
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

