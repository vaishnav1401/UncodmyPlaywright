import{test, expect} from '@playwright/test';

test('Open Account', async({page})=>{  

    console.log('Open Account Test Case Started');
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    expect(page.url()).toContain('parabank');



});