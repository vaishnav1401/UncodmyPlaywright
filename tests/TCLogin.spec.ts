


import { POManager } from "../PageObject/POManager";
import { customtest as test, expect } from "../fixture/testfixture";

test('Login TC', async ({ page, testdataforregistration }) => {

    const pomanager = new POManager(page);

    const homepage = pomanager.getHomePage();
    await homepage.goto();
    
    const loginpage= pomanager.getloginPage()
    await loginpage.loginToApplication(
    testdataforregistration.username,
    testdataforregistration.password)
    
});


