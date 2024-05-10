const { test, expect } = require('@playwright/test');
 
test('readingplans', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
   // await page.getByLabel('Select a Bible in your').click();
    await page.getByRole('button', { name: 'English english' }).click();
    await page.getByText('ESV : English Standard Version').click();
    await page.getByLabel('Click here to read the Bible').click();
    await page.getByTitle('Reading Plans').click();
    await page.getByText('Numbers 2').click();
})