const { test, expect } = require('@playwright/test');
test('commentaries', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
  
    await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('list').getByText('IRV : Indian Revised Version').click();
    await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: '5', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
    //await page.getByLabel('Choose a Bible book and').click();
  //  await page.getByRole('button', { name: 'यूहन्ना', exact: true }).click();
   // await page.getByRole('button', { name: 'jhn'}).click();
   //await page.getByLabel( '5').click();
   // await page.getByText('//*[@id="customized-menu"]/div[3]/ul/nav/div[43]').click();
   
    // await page.locator('//*[@id="customized-menu"]/div[3]/ul/nav/div[44]/div[5]').click();
  
   // await page.getByLabel('Click here to read the Bible').click();
   await page.getByText('comment', { exact: true }).click();
   // await page.getByText('comment').click();
    // await page.getByText('Introduction to यूहन्ना').click();
})