const {test, expect} = require('@playwright/test'); // to import test & expect from playwright
test("First test", async({browser}) => { 
    //Creating new default cognito instance and page without using global variables from playwright
    const context = await browser.newContext();
    const page = await context.newPage();
//     await page.goto("https://vachanonline.com/");
//   const PageTitle =  console.log (await page.title());
//     await expect(page).toHaveTitle("VachanOnline | The Indian Languages Bible Study Site")
 
});
 
test ("login" , async ({browser,page})=> {
    await page.goto("https://vachanonline.com/");
    await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
    // const email = "seraphin.jes@gmail.com";
    // const password = "8939421519@Jes";
   
  // const email = "vineethavijayan668@gmail.com";
    //const password = "Bible123";
    // await page.goto("https://vachanonline.com/");
    //SignIn
    // await page.locator("//div[@role='combobox']").click();
    // await page.getByText("English").click();
    await page.locator('//span[normalize-space()="Sign in"]').click();
    await page.locator ('//input[@id="email"]').fill(email);
    await page.locator('//input[@id="password"]').fill(password);
    await page.locator('(//span[@class="MuiButton-label"][normalize-space()="Sign in"])[2]').click();
});