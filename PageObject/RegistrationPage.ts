import{Page, Locator} from '@playwright/test'
export class RegistrationPage
{
    private page:Page
    private firstName:Locator
    private lastname:Locator
    private address:Locator
    private city:Locator
    private state:Locator
    private zip:Locator
    private phonenumeber:Locator
    private ssn:Locator
    private userName:Locator
    private password:Locator
    private confirm:Locator
    private registerbutton:Locator

    constructor(page:Page) {
        this.page= page;
        this.firstName=page.locator("//input[@id='customer.firstName']")
        this.lastname=page.locator("//input[@id='customer.lastName']")
        this.address=page.locator("//input[@id='customer.address.street']")
        this.city=page.locator("//input[@id='customer.address.city']")
        this.state=page.locator("//input[@id='customer.address.state']")
        this.zip=page.locator("//input[@id='customer.address.zipCode']")
        this.phonenumeber=page.locator("//input[@id='customer.phoneNumber']")
        this.ssn=page.locator("//input[@id='customer.ssn']")
        this.userName=page.locator("//input[@id='customer.username']")
        this.password=page.locator("//input[@id='customer.password']")
        this.confirm=page.locator("//input[@id='repeatedPassword']")
        this.registerbutton=page.locator("//input[@value='Register']")
    }

        async registerUser(fname:string, lname:string, address:string, city:string, state:string, zip:string, 
            phoneNumber:string, ssn:string, userName:string, password:string): Promise<void>{
            await this.firstName.fill(fname)
            await this.lastname.fill(lname)
            await this.address.fill(address)
            await this.city.fill(city)
            await this.state.fill(state)
            await this.zip.fill(zip)
            await this.phonenumeber.fill(phoneNumber)
            await this.ssn.fill(ssn)
            await this.userName.fill(userName)
            await this.password.fill(password)
            await this.confirm.fill(password)
        }

            async clickonRegisterButton():Promise<void>
            {
                await this.registerbutton.click()
            }
       
}