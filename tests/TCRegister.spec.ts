/*
import{test,expect}from '@playwright/test'

import { HomePage } from '../PageObject/Homepage'
import {RegistrationPage} from '../PageObject/RegistrationPage'

test('registration',async({page})=>
{
    const homepage = new HomePage(page)
    await homepage.goto()
    await homepage.clickOnRegisterLink()

    const registerpage=new RegistrationPage(page)
    await registerpage.registerUser('vaishnavr','raju',
        'delhi','11111','222222','3333','javanew','asdf','qwer', 'Vanita@1401')

    await registerpage.clickonRegisterButton()

    //npx playwright test TCRegister.spec.ts --project=chromium --headed

})  */


//---------------data driven TC

/*
    import {test}from '@playwright/test'
    import { POManager } from '../PageObject/POManager'
    import testdata from  '../Utils/bank.json'

testdata.forEach((data) => {

  test(`registration data driven ${data.username}`, async ({ page }) => {

    const pomanager = new POManager(page);

    const homepage = pomanager.getHomePage();
    await homepage.goto();
    await homepage.clickOnRegisterLink();

    const registerpage = pomanager.getRrgistretionPage();

    await registerpage.registerUser(
      data.firstname,
      data.lastname,
      data.address,
      data.city,
      data.zipcode,
      data.phonenumber,
      data.ssn,
      data.username,
      data.password,
      data.confirmpassword
    );

    await registerpage.clickonRegisterButton();

    // await expect(page.getByText('Your account was created successfully. You are now logged in.', { exact: true }))
    //   .toHaveText('Your account was created successfully. You are now logged in.');

    await page.waitForTimeout(2000);
  });

});
*/


import { POManager } from "../PageObject/POManager";
import { customtest as test, expect } from "../fixture/testfixture";

test('registration fixture data', async ({ page, testdataforregistration }) => {

    const pomanager = new POManager(page);

    const homepage = pomanager.getHomePage();
    await homepage.goto();
    await homepage.clickOnRegisterLink();

    const registerpage = pomanager.getRrgistretionPage();

    await registerpage.registerUser(
        testdataforregistration.firstname,
    testdataforregistration.lastname,
    testdataforregistration.address,
    testdataforregistration.city,
    
    testdataforregistration.zipcode,
    testdataforregistration.phonenumber,
    testdataforregistration.ssn,
    testdataforregistration.username,
    testdataforregistration.password,
    testdataforregistration.confirmpassword
    );

    await registerpage.clickonRegisterButton()

});
