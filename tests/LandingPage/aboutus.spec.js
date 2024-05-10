const { test, expect } = require('@playwright/test');
test('aboutus', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByText('About Us').click();
   // await page.getByText('Features available on Vachan Online').click();
  //  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByText('Close').click();
})

