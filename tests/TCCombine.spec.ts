
import { POManager } from "../PageObject/POManager";
import { customtest as test, expect } from "../fixture/testfixture";

test.describe.parallel('Registration and Login Test', () => {             
///describe.serial : to run the test cases in serial manner we have to use describe.serial  while using this if the TC fail the next TC will not run 
//describe.parallel : to run the test cases in parallel manner we have to use describe.parallel  while using this if the TC fail the next TC will run
test('@sanity registration data', async ({ page, testdataforregistration }) => {

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




// import { POManager } from "../PageObject/POManager";
// import { customtest as test, expect } from "../fixture/testfixture";

test('@sanity@regression login with fixture data', async ({ page, testdataforregistration }) => {

    const pomanager = new POManager(page);

    const homepage = pomanager.getHomePage();
    await homepage.goto();
    
    const loginpage= pomanager.getloginPage()
    await loginpage.loginToApplication(
    testdataforregistration.username,
    testdataforregistration.password)
    
});
});

// --grep @sanity 

/*
npx playwright test TCCombine.spec.ts --project=chromium --headed --grep "@sanity"
npx playwright test TCCombine.spec.ts --project=chromium --headed --grep "@sanity|@regression" 
*/