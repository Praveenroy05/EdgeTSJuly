import { expect } from "playwright/test"
export class DashboardPage{
   
    private page
    private products
    homePageIdentifier
    addToCartSuccessMsg
    private searchTextBox
    private viewProductName
    private viewProductPrice
    productPrice



    constructor(page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")
        this.searchTextBox = this.page.getByPlaceholder("search")
        this.viewProductName = this.page.locator("div.rtl-text h2")
        this.viewProductPrice = this.page.locator("div.rtl-text h3")
        //this.productPrice = ""
    }


    async searchAndAddProductToCart(productName){
        await this.products.last().waitFor()
        const countOfProduct = await this.products.count()
        
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()
            if(productText === productName){
                await this.products.nth(i).locator("button").last().click()
                break
            }
        }
    }
    async searchAndValidateProductDetails(productName){
        await this.products.last().waitFor()
        const countOfProduct = await this.products.count()
        for(let i=0; i<countOfProduct; i++){
            const productText = await this.products.nth(i).locator("h5").textContent()
            if(productText === productName){
                this.productPrice = await this.products.nth(i).locator("div.text-muted").innerText()
                console.log("Product Price is", this.productPrice);
                await this.products.nth(i).locator("button").first().click()
                break
            }
        }
    }
}