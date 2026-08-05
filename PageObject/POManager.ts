import{Page}from '@playwright/test'

import { HomePage } from './Homepage'

import{ RegistrationPage } from './RegistrationPage'
import { LoginPage } from './LoginPage'

export class POManager
{
    private page:Page
    private homepage:HomePage
    private registerpage: RegistrationPage

    private Loginpage:LoginPage

    constructor(page:Page)
    {
        this.page=page
        this.homepage=new HomePage(this.page)
        this.registerpage=new RegistrationPage(this.page)

        this.Loginpage= new LoginPage(this.page)

    }
    getHomePage():HomePage{
        return this.homepage
    }

    getRrgistretionPage():RegistrationPage{
        return this.registerpage
    }

    getloginPage():LoginPage
    {
        return this.Loginpage
    }

}