const { test, expect } = require('@playwright/test');
 
test('readbible', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
})

test('parallelbible', async ({page})=>{
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Read, annotate and search Bibles and study material').click();
    // await page.getByLabel('annotate and search Bibles and study material').click();
    await page.getByTitle('Parallel Bible').click();
    await page.getByLabel('Select a Bible in your ').nth(1).click();
   // await page.getByRole('button',{ name: 'Hindi' }).click();
   //await page.getByRole('button', { name: 'हिंदी hindi' }).click();
   await page.getByRole('button', { name: ' डोगरी' }).click();
  
   //await page.locator('//*[@id="simple-menu"]/div[3]/ul/div[9]/div[2]/div/div/div/div/ul/li[1]').click();
   //await page.getById().click();
   await page.getByRole('list').getByText('DSV : Dogri Standard Version').click();
   await page.getByTestId('ImportExportIcon').click();
   await page.getByTestId('ArrowForwardIosIcon').nth(1).click();
   //await page.getByLabel('यूहन्ना 2').click();
   // await page.getByTitle('IRV : Indian Revised Version').click();
    //await page.getByTestId('261').click();
})
test('parallelbibles', async ({page})=>{
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Read, annotate and search Bibles and study material').click();
  await page.getByTitle('Parallel Bible').click();
  await page.getByLabel('Select a Bible in your ').nth(1).click();
  await page.getByRole('button', { name: 'English' }).click();
  await page.getByRole('list').getByText('ESV : English Standard Version').click();
})