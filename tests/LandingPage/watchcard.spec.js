const { test, expect } = require('@playwright/test');
 
test('watchcard', async ({ page }) => {
    await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Romans' }).click();
  await page.getByRole('button', { name: '12' }).click();
  await page.getByRole('link', { name: 'See scriptures come alive in' }).click();
  await page.getByRole('button', { name: 'Video Overview: Romans Ch. 1-' }).click();
  await page.frameLocator('iframe').getByLabel('Pause keyboard shortcut k').click();
  await page.getByLabel('You just opened the modal').locator('div').nth(1).click();
  await page.frameLocator('iframe').locator('video').click();
  await page.getByLabel('Close the modal by clicking').click();
  })