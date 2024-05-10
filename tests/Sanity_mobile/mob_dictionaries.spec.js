const { test, expect } = require('@playwright/test');
test('dictionaries', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
    await page.getByRole('combobox').click();
    await page.getByRole('option', { name: 'English' }).click();
    await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();

    await page.getByLabel('Click here to read the Bible').click();
   // await page.getByTestId('MenuIcon').click();
  // await page.getByTestId('MenuIcon').locator('path').click();
   // await page.getByRole('presentation', { name: 'Dictionaries' }).click();
  //  await page.locator('//*[@id="root"]/header/div/span[5]/div/svg').click();
  await page.getByText('Menu').click();
   await page.getByTitle('Dictionaries').click();
    await page.getByRole('button', { name: 'a bow keyboard_arrow_downn' }).click();
  await page.getByText('Abel', { exact: true }).click();
})