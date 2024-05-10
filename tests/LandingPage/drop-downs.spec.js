import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vachandev.netlify.app/');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByLabel('Select a Bible in your').click();
  await page.getByRole('button', { name: 'English english' }).click();
  await page.getByText('ESV : English Standard Version').click();
  await page.getByLabel('Choose a Bible book and').click();
  await page.getByRole('button', { name: 'Genesis' }).click();
  await page.getByRole('button', { name: '1', exact: true }).click();
  await page.getByLabel('Click here to read the Bible').click();
  await page.getByRole('link', { name: 'iconlogo' }).click();
});