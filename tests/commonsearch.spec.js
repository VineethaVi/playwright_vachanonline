
const { test, expect } = require('@playwright/test');
 
test('has title', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
 
  // Expect a title "to contain" a substring.
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByPlaceholder('Enter Bible Reference').fill('Genesis 10');
  await page.getByPlaceholder('Enter Bible Reference').press('Enter');
  await page.getByRole('link', { name: 'iconlogo' }).click();
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByPlaceholder('Enter Bible Reference').fill('Revelation 2:3-10');
  await page.getByPlaceholder('Enter Bible Reference').press('Enter');
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByRole('link', { name: 'iconlogo' }).click();
  await page.getByPlaceholder('Enter Bible Reference').click();
  await page.getByPlaceholder('Enter Bible Reference').fill('Genesis 4:5');
  await page.getByPlaceholder('Enter Bible Reference').press('Enter');
});
 
