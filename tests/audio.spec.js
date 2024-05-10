const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
test("Sample test", async({browser}) => { 
    //Creating new default cognito instance and page without using global variables from playwright
    const context = await browser.newContext();
    const page = await context.newPage();
//     await page.goto("https://vachanonline.com/");
//   const PageTitle =  console.log (await page.title());
//     await expect(page).toHaveTitle("VachanOnline | The Indian Languages Bible Study Site")
 
});
 
test ("audio" , async ({browser,page})=> {
   
    await page.goto("https://vachanonline.com/");
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('audio bible').click();
   // await page.locator('//span[@class="material-icons css-1i2m8am"]="headphones"').click();
    // await page.locator('//span[normalize-space()="Sign in"]').click();
    // await page.locator ('//input[@id="email"]').fill(email);
    // await page.locator('//input[@id="password"]').fill(password);
    // await page.locator('(//span[@class="MuiButton-label"][normalize-space()="Sign in"])[2]').click();
});