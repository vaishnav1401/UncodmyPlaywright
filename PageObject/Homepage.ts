import{Page, Locator}from '@playwright/test'
export class HomePage
{
    private page:Page
    private registerlink:Locator
    constructor(page:Page)
    {
        this.page= page
        this.registerlink=page.locator("//a[normalize-space()='Register']")
    }
    async goto()
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }
    async clickOnRegisterLink()
    {
        await this.registerlink.click()
    }
}