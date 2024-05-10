const { test, expect } = require('@playwright/test');
 
test('readbible', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
})

test('read', async ({page})=>{
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
     await page.getByText('Read and share the Bible in your heart language').click();
     await page.getByLabel('Select a Bible in your language and version').click();
    // await page.getByRole('button','English-ESV').click();
    await page.getByRole('button',{ name: 'English' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Choose a Bible book and chapter to read').click();
    await page.getByRole('button', { name: '1 Timothy' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByLabel('1 Timothy 2').click();
  await page.getByLabel('1 Timothy 1').click();
  //await page.getByTestId('ArrowForwardIosIcon').click();
  //await page.getByTestId('ArrowBackIosIcon').click();
  //  await page.getByRole('button',{ data-bookcode:'1ti' data-chapter:"2"}).click();
    //await page.getByRole('button',{ name:'1ti'}).click();
   // 'option', { name: 'English' }
     })
