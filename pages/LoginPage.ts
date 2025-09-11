// LoginPage - 
// Locators related to Login page
// Methods related to login page - validLogin(), invalidLogin(), 

import { Locator } from "playwright"

export class LoginPage {

    private page
    private username : Locator
    private password 
    private loginBtn
    errorMessage
    homePageIdentifier


    constructor(page) {
        this.page = page
        this.username = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
    }

    async launchURL(url){
       await this.page.goto(url)
    }

   async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
   }

    async invalidLogin(username, incorrectpassword){
        await this.username.fill(username)
        await this.password.fill(incorrectpassword)
        await this.loginBtn.click()
   }

}