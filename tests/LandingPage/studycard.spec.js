const { test, expect } = require('@playwright/test');
 
test('studycard', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Romans' }).click();
  await page.getByRole('button', { name: '12' }).click();
  await page.getByRole('link', { name: 'Read, annotate and search' }).click();
  await page.getByRole('link', { name: 'iconlogo' }).click();
})